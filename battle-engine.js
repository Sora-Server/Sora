/**
 * Simulator process
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * This file is where the battle simulation itself happens.
 *
 * The most important part of the simulation happens in runEvent -
 * see that function's definition for details.
 *
 * @license MIT license
 */

//require('sugar');
//if (!''.includes) require('es6-shim');

//global.Config = require('./config/config.js');

// graceful crash - allow current battles to finish before restarting
/*process.on('uncaughtException', function (err) {
	require('./crashlogger.js')(err, 'A simulator process');
});*/

/**
 * Converts anything to an ID. An ID must have only lowercase alphanumeric
 * characters.
 * If a string is passed, it will be converted to lowercase and
 * non-alphanumeric characters will be stripped.
 * If an object with an ID is passed, its ID will be returned.
 * Otherwise, an empty string will be returned.
 */
/*global.toId = function (text) {
	if (text && text.id) {
		text = text.id;
	} else if (text && text.userid) {
		text = text.userid;
	}

	return string(text).toLowerCase().replace(/[^a-z0-9]+/g, '');
};*/

/**
 * Validates a username or Pokemon nickname
 */
/*global.toName = function (name) {
	name = string(name);
	name = name.replace(/[\|\s\[\]\,]+/g, ' ').trim();
	if (name.length > 18) name = name.substr(0, 18).trim();
	return name;
};*/

/**
 * Safely ensures the passed variable is a string
 * Simply doing '' + str can crash if str.toString crashes or isn't a function
 * If we're expecting a string and being given anything that isn't a string
 * or a number, it's safe to assume it's an error, and return ''
 */
/*global.string = function (str) {
	if (typeof str === 'string' || typeof str === 'number') return '' + str;
	return '';
};*/

//global.Tools = require('./tools.js');

var Battle, BattleSide, BattlePokemon;

var Battles = Object.create(null);

require('./repl.js').start('battle-engine-', process.pid, function (cmd) { return eval(cmd); });

// Receive and process a message sent using Simulator.prototype.send in
// another process.
battleEngineFakeProcess.client.on('message', function (message) {
	//console.log('CHILD MESSAGE RECV: "' + message + '"');
	var nlIndex = message.indexOf("\n");
	var more = '';
	if (nlIndex > 0) {
		more = message.substr(nlIndex + 1);
		message = message.substr(0, nlIndex);
	}
	var data = message.split('|');
	if (data[1] === 'init') {
		if (!Battles[data[0]]) {
			try {
				Battles[data[0]] = Battle.construct(data[0], data[2], data[3]);
			} catch (err) {
				var stack = err.stack + '\n\n' +
						'Additional information:\n' +
						'message = ' + message;
				var fakeErr = {stack: stack};

				if (!require('./crashlogger.js')(fakeErr, 'A battle')) {
					var ministack = ("" + err.stack).escapeHTML().split("\n").slice(0, 2).join("<br />");
					battleEngineFakeProcess.client.send(data[0] + '\nupdate\n|html|<div class="broadcast-red"><b>A BATTLE PROCESS HAS CRASHED:</b> ' + ministack + '</div>');
				} else {
					battleEngineFakeProcess.client.send(data[0] + '\nupdate\n|html|<div class="broadcast-red"><b>The battle crashed!</b><br />Don\'t worry, we\'re working on fixing it.</div>');
				}
			}
		}
	} else if (data[1] === 'dealloc') {
		if (Battles[data[0]] && Battles[data[0]].destroy) {
			Battles[data[0]].destroy();
		} else {
			var stack = '\n\n' +
					'Additional information:\n' +
					'message = ' + message;
			var fakeErr = {stack: stack};

			require('./crashlogger.js')(fakeErr, 'A battle');
		}
		delete Battles[data[0]];
	} else {
		var battle = Battles[data[0]];
		if (battle) {
			var prevRequest = battle.currentRequest;
			var prevRequestDetails = battle.currentRequestDetails || '';
			try {
				battle.receive(data, more);
			} catch (err) {
				var stack = err.stack + '\n\n' +
						'Additional information:\n' +
						'message = ' + message + '\n' +
						'currentRequest = ' + prevRequest + '\n\n' +
						'Log:\n' + battle.log.join('\n').replace(/\n\|split\n[^\n]*\n[^\n]*\n[^\n]*\n/g, '\n');
				var fakeErr = {stack: stack};
				require('./crashlogger.js')(fakeErr, 'A battle');

				var logPos = battle.log.length;
				battle.add('html', '<div class="broadcast-red"><b>The battle crashed</b><br />You can keep playing but it might crash again.</div>');
				var nestedError;
				try {
					battle.makeRequest(prevRequest, prevRequestDetails);
				} catch (e) {
					nestedError = e;
				}
				battle.sendUpdates(logPos);
				if (nestedError) {
					throw nestedError;
				}
			}
		} else if (data[1] === 'eval') {
			try {
				eval(data[2]);
			} catch (e) {}
		}
	}
});

process.on('disconnect', function () {
	process.exit();
});

BattlePokemon = (function () {
	function BattlePokemon(set, side) {
		this.side = side;
		this.battle = side.battle;

		var pokemonScripts = this.battle.data.Scripts.pokemon;
		if (pokemonScripts) Object.merge(this, pokemonScripts);

		if (typeof set === 'string') set = {name: set};

		// "pre-bound" functions for nicer syntax (avoids repeated use of `bind`)
		this.getHealth = (this.getHealth || BattlePokemon.getHealth).bind(this);
		this.getDetails = (this.getDetails || BattlePokemon.getDetails).bind(this);

		this.set = set;

		this.baseTemplate = this.battle.getTemplate(set.species || set.name);
		if (!this.baseTemplate.exists) {
			this.battle.debug('Unidentified species: ' + this.species);
			this.baseTemplate = this.battle.getTemplate('Unown');
		}
		this.species = this.baseTemplate.species;
		if (set.name === set.species || !set.name || !set.species) {
			set.name = this.species;
		}
		this.name = (set.name || set.species || 'Bulbasaur').substr(0, 20);
		this.speciesid = toId(this.species);
		this.template = this.baseTemplate;
		this.moves = [];
		this.baseMoves = this.moves;
		this.movepp = {};
		this.moveset = [];
		this.baseMoveset = [];

		this.level = this.battle.clampIntRange(set.forcedLevel || set.level || 100, 1, 9999);

		var genders = {M:'M', F:'F'};
		this.gender = this.template.gender || genders[set.gender] || (Math.random() * 2 < 1 ? 'M' : 'F');
		if (this.gender === 'N') this.gender = '';
		this.happiness = typeof set.happiness === 'number' ? this.battle.clampIntRange(set.happiness, 0, 255) : 255;
		this.pokeball = this.set.pokeball || 'pokeball';

		this.fullname = this.side.id + ': ' + this.name;
		this.details = this.species + (this.level === 100 ? '' : ', L' + this.level) + (this.gender === '' ? '' : ', ' + this.gender) + (this.set.shiny ? ', shiny' : '');

		this.id = this.fullname; // shouldn't really be used anywhere

		this.statusData = {};
		this.volatiles = {};

		this.height = this.template.height;
		this.heightm = this.template.heightm;
		this.weight = this.template.weight;
		this.weightkg = this.template.weightkg;

		this.baseAbility = toId(set.ability);
		this.ability = this.baseAbility;
		this.item = toId(set.item);
		this.abilityData = {id: this.ability};
		this.itemData = {id: this.item};
		this.speciesData = {id: this.speciesid};

		this.types = this.baseTemplate.types;
		this.typesData = [];

		for (var i = 0, l = this.types.length; i < l; i++) {
			this.typesData.push({
				type: this.types[i],
				suppressed: false,
				isAdded: false
			});
		}

		if (this.set.moves) {
			for (var i = 0; i < this.set.moves.length; i++) {
				var move = this.battle.getMove(this.set.moves[i]);
				if (!move.id) continue;
				if (move.id === 'hiddenpower') {
					if (!this.set.ivs || Object.values(this.set.ivs).every(31)) {
						this.set.ivs = this.battle.getType(move.type).HPivs;
					}
					move = this.battle.getMove('hiddenpower');
				}
				this.baseMoveset.push({
					move: move.name,
					id: move.id,
					pp: (move.noPPBoosts ? move.pp : move.pp * 8 / 5),
					maxpp: (move.noPPBoosts ? move.pp : move.pp * 8 / 5),
					target: (move.nonGhostTarget && !this.hasType('Ghost') ? move.nonGhostTarget : move.target),
					disabled: false,
					used: false
				});
				this.moves.push(move.id);
			}
		}
		this.disabledMoves = {};

		this.canMegaEvo = this.battle.canMegaEvo(this);

		if (!this.set.evs) {
			this.set.evs = {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0};
		}
		if (!this.set.ivs) {
			this.set.ivs = {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31};
		}
		var stats = {hp: 31, atk: 31, def: 31, spe: 31, spa: 31, spd: 31};
		for (var i in stats) {
			if (!this.set.evs[i]) this.set.evs[i] = 0;
			if (!this.set.ivs[i] && this.set.ivs[i] !== 0) this.set.ivs[i] = 31;
		}
		for (var i in this.set.evs) {
			this.set.evs[i] = this.battle.clampIntRange(this.set.evs[i], 0, 255);
		}
		for (var i in this.set.ivs) {
			this.set.ivs[i] = this.battle.clampIntRange(this.set.ivs[i], 0, 31);
		}

		var hpTypes = ['Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark'];
		if (this.battle.gen && this.battle.gen === 2) {
			// Gen 2 specific Hidden Power check. IVs are still treated 0-31 so we get them 0-15
			var atkDV = Math.floor(this.set.ivs.atk / 2);
			var defDV = Math.floor(this.set.ivs.def / 2);
			var speDV = Math.floor(this.set.ivs.spe / 2);
			var spcDV = Math.floor(this.set.ivs.spa / 2);
			this.hpType = hpTypes[4 * (atkDV % 4) + (defDV % 4)];
			this.hpPower = Math.floor((5 * ((spcDV >> 3) + (2 * (speDV >> 3)) + (4 * (defDV >> 3)) + (8 * (atkDV >> 3))) + (spcDV > 2 ? 3 : spcDV)) / 2 + 31);
		} else {
			// Hidden Power check for gen 3 onwards
			var hpTypeX = 0, hpPowerX = 0;
			var i = 1;
			for (var s in stats) {
				hpTypeX += i * (this.set.ivs[s] % 2);
				hpPowerX += i * (Math.floor(this.set.ivs[s] / 2) % 2);
				i *= 2;
			}
			this.hpType = hpTypes[Math.floor(hpTypeX * 15 / 63)];
			// In Gen 6, Hidden Power is always 60 base power
			this.hpPower = (this.battle.gen && this.battle.gen < 6) ? Math.floor(hpPowerX * 40 / 63) + 30 : 60;
		}

		this.boosts = {atk: 0, def: 0, spa: 0, spd: 0, spe: 0, accuracy: 0, evasion: 0};
		this.stats = {atk:0, def:0, spa:0, spd:0, spe:0};
		this.baseStats = {atk:10, def:10, spa:10, spd:10, spe:10};
		// This is used in gen 1 only, here to avoid code repetition.
		// Only declared if gen 1 to avoid declaring an object we aren't going to need.
		if (this.battle.gen === 1) this.modifiedStats = {atk:0, def:0, spa:0, spd:0, spe:0};
		for (var statName in this.baseStats) {
			var stat = this.template.baseStats[statName];
			stat = Math.floor(Math.floor(2 * stat + this.set.ivs[statName] + Math.floor(this.set.evs[statName] / 4)) * this.level / 100 + 5);
			var nature = this.battle.getNature(this.set.nature);
			if (statName === nature.plus) stat *= 1.1;
			if (statName === nature.minus) stat *= 0.9;
			this.baseStats[statName] = Math.floor(stat);
		}

		this.maxhp = Math.floor(Math.floor(2 * this.template.baseStats['hp'] + this.set.ivs['hp'] + Math.floor(this.set.evs['hp'] / 4) + 100) * this.level / 100 + 10);
		if (this.template.baseStats['hp'] === 1) this.maxhp = 1; // shedinja
		this.hp = this.hp || this.maxhp;

		this.baseIvs = this.set.ivs;
		this.baseHpType = this.hpType;
		this.baseHpPower = this.hpPower;

		this.clearVolatile(true);
	}

	BattlePokemon.prototype.trapped = false;
	BattlePokemon.prototype.maybeTrapped = false;
	BattlePokemon.prototype.maybeDisabled = false;
	BattlePokemon.prototype.hp = 0;
	BattlePokemon.prototype.maxhp = 100;
	BattlePokemon.prototype.illusion = null;
	BattlePokemon.prototype.fainted = false;
	BattlePokemon.prototype.faintQueued = false;
	BattlePokemon.prototype.lastItem = '';
	BattlePokemon.prototype.ateBerry = false;
	BattlePokemon.prototype.status = '';
	BattlePokemon.prototype.position = 0;

	BattlePokemon.prototype.lastMove = '';
	BattlePokemon.prototype.moveThisTurn = '';

	BattlePokemon.prototype.lastDamage = 0;
	BattlePokemon.prototype.lastAttackedBy = null;
	BattlePokemon.prototype.usedItemThisTurn = false;
	BattlePokemon.prototype.newlySwitched = false;
	BattlePokemon.prototype.beingCalledBack = false;
	BattlePokemon.prototype.isActive = false;
	BattlePokemon.prototype.isStarted = false; // has this pokemon's Start events run yet?
	BattlePokemon.prototype.transformed = false;
	BattlePokemon.prototype.duringMove = false;
	BattlePokemon.prototype.hpType = 'Dark';
	BattlePokemon.prototype.hpPower = 60;
	BattlePokemon.prototype.speed = 0;

	BattlePokemon.prototype.toString = function () {
		var fullname = this.fullname;
		if (this.illusion) fullname = this.illusion.fullname;

		var positionList = 'abcdef';
		if (this.isActive) return fullname.substr(0, 2) + positionList[this.position] + fullname.substr(2);
		return fullname;
	};
	// "static" function
	BattlePokemon.getDetails = function (side) {
		if (this.illusion) return this.illusion.details + '|' + this.getHealth(side);
		return this.details + '|' + this.getHealth(side);
	};
	BattlePokemon.prototype.update = function (init) {
		this.trapped = this.maybeTrapped = false;
		this.maybeDisabled = false;
		for (var i in this.moveset) {
			if (this.moveset[i]) this.moveset[i].disabled = false;
		}
		if (init) return;

		// Change formes based on held items (for Transform)
		// Only ever relevant in Generation 4 since Generation 3 didn't have item-based forme changes
		if (this.battle.gen === 4) {
			if (this.template.num === 487) {
				// Giratina formes
				if (this.template.species === 'Giratina' && this.item === 'griseousorb') {
					this.formeChange('Giratina-Origin');
					this.battle.add('-formechange', this, 'Giratina-Origin');
				} else if (this.template.species === 'Giratina-Origin' && this.item !== 'griseousorb') {
					this.formeChange('Giratina');
					this.battle.add('-formechange', this, 'Giratina');
				}
			}
			if (this.template.num === 493) {
				// Arceus formes
				var item = Tools.getItem(this.item);
				var targetForme = (item && item.onPlate ? 'Arceus-' + item.onPlate : 'Arceus');
				if (this.template.species !== targetForme) {
					this.formeChange(targetForme);
					this.battle.add('-formechange', this, targetForme);
				}
			}
		}

		if (this.runImmunity('trapped')) this.battle.runEvent('MaybeTrapPokemon', this);
		// Disable the faculty to cancel switches if a foe may have a trapping ability
		for (var i = 0; i < this.battle.sides.length; ++i) {
			var side = this.battle.sides[i];
			if (side === this.side) continue;
			for (var j = 0; j < side.active.length; ++j) {
				var pokemon = side.active[j];
				if (!pokemon || pokemon.fainted) continue;
				var template = (pokemon.illusion || pokemon).template;
				if (!template.abilities) continue;
				for (var k in template.abilities) {
					var ability = template.abilities[k];
					if (ability === pokemon.ability) {
						// This event was already run above so we don't need
						// to run it again.
						continue;
					}
					if ((k === 'H') && template.unreleasedHidden) {
						// unreleased hidden ability
						continue;
					}
					if (this.runImmunity('trapped')) {
						this.battle.singleEvent('FoeMaybeTrapPokemon',
							this.battle.getAbility(ability), {}, this, pokemon);
					}
				}
			}
		}
		this.battle.runEvent('ModifyPokemon', this);

		this.speed = this.getStat('spe');
	};
	BattlePokemon.prototype.calculateStat = function (statName, boost, modifier) {
		statName = toId(statName);

		if (statName === 'hp') return this.maxhp; // please just read .maxhp directly

		// base stat
		var stat = this.stats[statName];

		// stat boosts
		// boost = this.boosts[statName];
		var boosts = {};
		boosts[statName] = boost;
		boosts = this.battle.runEvent('ModifyBoost', this, null, null, boosts);
		boost = boosts[statName];
		var boostTable = [1, 1.5, 2, 2.5, 3, 3.5, 4];
		if (boost > 6) boost = 6;
		if (boost < -6) boost = -6;
		if (boost >= 0) {
			stat = Math.floor(stat * boostTable[boost]);
		} else {
			stat = Math.floor(stat / boostTable[-boost]);
		}

		// stat modifier
		stat = this.battle.modify(stat, (modifier || 1));

		if (this.battle.getStatCallback) {
			stat = this.battle.getStatCallback(stat, statName, this);
		}

		return stat;
	};
	BattlePokemon.prototype.getStat = function (statName, unboosted, unmodified) {
		statName = toId(statName);

		if (statName === 'hp') return this.maxhp; // please just read .maxhp directly

		// base stat
		var stat = this.stats[statName];

		// stat boosts
		if (!unboosted) {
			var boosts = this.battle.runEvent('ModifyBoost', this, null, null, Object.clone(this.boosts));
			var boost = boosts[statName];
			var boostTable = [1, 1.5, 2, 2.5, 3, 3.5, 4];
			if (boost > 6) boost = 6;
			if (boost < -6) boost = -6;
			if (boost >= 0) {
				stat = Math.floor(stat * boostTable[boost]);
			} else {
				stat = Math.floor(stat / boostTable[-boost]);
			}
		}

		// stat modifier effects
		if (!unmodified) {
			var statTable = {atk:'Atk', def:'Def', spa:'SpA', spd:'SpD', spe:'Spe'};
			var statMod = 1;
			statMod = this.battle.runEvent('Modify' + statTable[statName], this, null, null, statMod);
			stat = this.battle.modify(stat, statMod);
		}
		if (this.battle.getStatCallback) {
			stat = this.battle.getStatCallback(stat, statName, this, unboosted);
		}
		return stat;
	};
	BattlePokemon.prototype.getWeight = function () {
		var weight = this.template.weightkg;
		weight = this.battle.runEvent('ModifyWeight', this, null, null, weight);
		if (weight < 0.1) weight = 0.1;
		return weight;
	};
	BattlePokemon.prototype.getMoveData = function (move) {
		move = this.battle.getMove(move);
		for (var i = 0; i < this.moveset.length; i++) {
			var moveData = this.moveset[i];
			if (moveData.id === move.id) {
				return moveData;
			}
		}
		return null;
	};
	BattlePokemon.prototype.ignoringAbility = function () {
		return !!this.volatiles['gastroacid'];
	};
	BattlePokemon.prototype.ignoringItem = function () {
		return !!(this.hasAbility('klutz') || this.volatiles['embargo'] || this.battle.pseudoWeather['magicroom']);
	};
	BattlePokemon.prototype.deductPP = function (move, amount, source) {
		move = this.battle.getMove(move);
		var ppData = this.getMoveData(move);
		var success = false;
		if (ppData) {
			ppData.used = true;
		}
		if (ppData && ppData.pp) {
			ppData.pp -= this.battle.runEvent('DeductPP', this, source || this, move, amount || 1);
			if (ppData.pp <= 0) {
				ppData.pp = 0;
			}
			success = true;
		}
		return success;
	};
	BattlePokemon.prototype.moveUsed = function (move) {
		this.lastMove = this.battle.getMove(move).id;
		this.moveThisTurn = this.lastMove;
	};
	BattlePokemon.prototype.gotAttacked = function (move, damage, source) {
		if (!damage) damage = 0;
		move = this.battle.getMove(move);
		this.lastAttackedBy = {
			pokemon: source,
			damage: damage,
			move: move.id,
			thisTurn: true
		};
	};
	BattlePokemon.prototype.getLockedMove = function () {
		var lockedMove = this.battle.runEvent('LockMove', this);
		if (lockedMove === true) lockedMove = false;
		return lockedMove;
	};
	BattlePokemon.prototype.getMoves = function (lockedMove, restrictData) {
		if (lockedMove) {
			lockedMove = toId(lockedMove);
			this.trapped = true;
		}
		if (lockedMove === 'recharge') {
			return [{
				move: 'Recharge',
				id: 'recharge'
			}];
		}
		var moves = [];
		var hasValidMove = false;
		for (var i = 0; i < this.moveset.length; i++) {
			var move = this.moveset[i];
			if (lockedMove) {
				if (lockedMove === move.id) {
					return [{
						move: move.move,
						id: move.id
					}];
				}
				continue;
			}
			if (this.disabledMoves[move.id] && (!restrictData || !this.disabledMoves[move.id].isHidden) || !move.pp && (this.battle.gen !== 1 || !this.volatiles['partialtrappinglock'])) {
				move.disabled = !restrictData && this.disabledMoves[move.id] && this.disabledMoves[move.id].isHidden ? 'hidden' : true;
			} else if (!move.disabled || move.disabled === 'hidden' && restrictData) {
				hasValidMove = true;
			}
			var moveName = move.move;
			if (move.id === 'hiddenpower') {
				moveName = 'Hidden Power ' + this.hpType;
				if (this.battle.gen < 6) moveName += ' ' + this.hpPower;
			}
			moves.push({
				move: moveName,
				id: move.id,
				pp: move.pp,
				maxpp: move.maxpp,
				target: move.target,
				disabled: move.disabled
			});
		}
		if (lockedMove) {
			return [{
				move: this.battle.getMove(lockedMove).name,
				id: lockedMove
			}];
		}
		if (hasValidMove) return moves;

		return [];
	};
	BattlePokemon.prototype.getRequestData = function () {
		var lockedMove = this.getLockedMove();

		// Information should be restricted for the last active Pokémon
		var isLastActive = this.isLastActive();
		var moves = this.getMoves(lockedMove, isLastActive);
		var data = {moves: moves.length ? moves : [{move: 'Struggle', id: 'struggle'}]};

		if (isLastActive) {
			if (this.maybeDisabled) {
				data.maybeDisabled = true;
			}
			if (this.trapped === true) {
				data.trapped = true;
			} else if (this.maybeTrapped) {
				data.maybeTrapped = true;
			}
		} else {
			if (this.trapped) data.trapped = true;
		}

		return data;
	};
	BattlePokemon.prototype.isLastActive = function () {
		if (!this.isActive) return false;

		var allyActive = this.side.active;
		for (var i = this.position + 1; i < allyActive.length; i++) {
			if (allyActive[i] && !allyActive.fainted) return false;
		}
		return true;
	};
	BattlePokemon.prototype.positiveBoosts = function () {
		var boosts = 0;
		for (var i in this.boosts) {
			if (this.boosts[i] > 0) boosts += this.boosts[i];
		}
		return boosts;
	};
	BattlePokemon.prototype.boostBy = function (boost) {
		var changed = false;
		for (var i in boost) {
			var delta = boost[i];
			this.boosts[i] += delta;
			if (this.boosts[i] > 6) {
				delta -= this.boosts[i] - 6;
				this.boosts[i] = 6;
			}
			if (this.boosts[i] < -6) {
				delta -= this.boosts[i] - (-6);
				this.boosts[i] = -6;
			}
			if (delta) changed = true;
		}
		this.update();
		return changed;
	};
	BattlePokemon.prototype.clearBoosts = function () {
		for (var i in this.boosts) {
			this.boosts[i] = 0;
		}
		this.update();
	};
	BattlePokemon.prototype.setBoost = function (boost) {
		for (var i in boost) {
			this.boosts[i] = boost[i];
		}
		this.update();
	};
	BattlePokemon.prototype.copyVolatileFrom = function (pokemon) {
		this.clearVolatile();
		this.boosts = pokemon.boosts;
		for (var i in pokemon.volatiles) {
			if (this.battle.getEffect(i).noCopy) continue;
			// shallow clones
			this.volatiles[i] = Object.clone(pokemon.volatiles[i]);
			if (this.volatiles[i].linkedPokemon) {
				delete pokemon.volatiles[i].linkedPokemon;
				delete pokemon.volatiles[i].linkedStatus;
				this.volatiles[i].linkedPokemon.volatiles[this.volatiles[i].linkedStatus].linkedPokemon = this;
			}
		}
		pokemon.clearVolatile();
		this.update();
		for (var i in this.volatiles) {
			this.battle.singleEvent('Copy', this.getVolatile(i), this.volatiles[i], this);
		}
	};
	BattlePokemon.prototype.transformInto = function (pokemon, user) {
		var template = pokemon.template;
		if (pokemon.fainted || pokemon.illusion || (pokemon.volatiles['substitute'] && this.battle.gen >= 5)) {
			return false;
		}
		if (!template.abilities || (pokemon && pokemon.transformed && this.battle.gen >= 2) || (user && user.transformed && this.battle.gen >= 5)) {
			return false;
		}
		if (!this.formeChange(template, true)) {
			return false;
		}
		this.transformed = true;
		this.typesData = [];
		for (var i = 0, l = pokemon.typesData.length; i < l; i++) {
			this.typesData.push({
				type: pokemon.typesData[i].type,
				suppressed: false,
				isAdded: pokemon.typesData[i].isAdded
			});
		}
		for (var statName in this.stats) {
			this.stats[statName] = pokemon.stats[statName];
		}
		this.moveset = [];
		this.moves = [];
		this.set.ivs = (this.battle.gen >= 5 ? this.set.ivs : pokemon.set.ivs);
		this.hpType = (this.battle.gen >= 5 ? this.hpType : pokemon.hpType);
		this.hpPower = (this.battle.gen >= 5 ? this.hpPower : pokemon.hpPower);
		for (var i = 0; i < pokemon.moveset.length; i++) {
			var moveData = pokemon.moveset[i];
			var moveName = moveData.move;
			if (moveData.id === 'hiddenpower') {
				moveName = 'Hidden Power ' + this.hpType;
			}
			this.moveset.push({
				move: moveName,
				id: moveData.id,
				pp: moveData.maxpp === 1 ? 1 : 5,
				maxpp: this.battle.gen >= 5 ? (moveData.maxpp === 1 ? 1 : 5) : moveData.maxpp,
				target: moveData.target,
				disabled: false
			});
			this.moves.push(toId(moveName));
		}
		for (var j in pokemon.boosts) {
			this.boosts[j] = pokemon.boosts[j];
		}
		this.battle.add('-transform', this, pokemon);
		this.setAbility(pokemon.ability);
		this.update();
		return true;
	};
	BattlePokemon.prototype.formeChange = function (template, dontRecalculateStats) {
		template = this.battle.getTemplate(template);

		if (!template.abilities) return false;
		this.illusion = null;
		this.template = template;
		this.types = template.types;
		this.typesData = [];
		this.types = template.types;
		for (var i = 0, l = this.types.length; i < l; i++) {
			this.typesData.push({
				type: this.types[i],
				suppressed: false,
				isAdded: false
			});
		}
		if (!dontRecalculateStats) {
			for (var statName in this.stats) {
				var stat = this.template.baseStats[statName];
				stat = Math.floor(Math.floor(2 * stat + this.set.ivs[statName] + Math.floor(this.set.evs[statName] / 4)) * this.level / 100 + 5);

				// nature
				var nature = this.battle.getNature(this.set.nature);
				if (statName === nature.plus) stat *= 1.1;
				if (statName === nature.minus) stat *= 0.9;
				this.baseStats[statName] = this.stats[statName] = Math.floor(stat);
				// If gen 1, we reset modified stats.
				if (this.battle.gen === 1) {
					this.modifiedStats[statName] = Math.floor(stat);
					// ...and here is where the gen 1 games re-apply burn and para drops.
					if (this.status === 'par') this.modifyStat('spe', 0.25);
					if (this.status === 'brn') this.modifyStat('atk', 0.5);
				}
			}
			this.speed = this.stats.spe;
		}
		return true;
	};
	BattlePokemon.prototype.clearVolatile = function (init) {
		this.boosts = {
			atk: 0,
			def: 0,
			spa: 0,
			spd: 0,
			spe: 0,
			accuracy: 0,
			evasion: 0
		};

		this.moveset = this.baseMoveset.slice();
		this.moves = this.moveset.map(function (move) {
			return toId(move.move);
		});

		this.transformed = false;
		this.ability = this.baseAbility;
		this.set.ivs = this.baseIvs;
		this.hpType = this.baseHpType;
		this.hpPower = this.baseHpPower;
		for (var i in this.volatiles) {
			if (this.volatiles[i].linkedStatus) {
				this.volatiles[i].linkedPokemon.removeVolatile(this.volatiles[i].linkedStatus);
			}
		}
		this.volatiles = {};
		this.switchFlag = false;

		this.lastMove = '';
		this.moveThisTurn = '';

		this.lastDamage = 0;
		this.lastAttackedBy = null;
		this.newlySwitched = true;
		this.beingCalledBack = false;

		this.formeChange(this.baseTemplate);

		this.update(init);
	};
	BattlePokemon.prototype.hasType = function (type) {
		if (!type) return false;
		if (Array.isArray(type)) {
			for (var i = 0; i < type.length; i++) {
				if (this.hasType(type[i])) return true;
			}
		} else {
			if (this.getTypes().indexOf(type) >= 0) return true;
		}
		return false;
	};
	// returns the amount of damage actually dealt
	BattlePokemon.prototype.faint = function (source, effect) {
		// This function only puts the pokemon in the faint queue;
		// actually setting of this.fainted comes later when the
		// faint queue is resolved.
		if (this.fainted || this.faintQueued) return 0;
		var d = this.hp;
		this.hp = 0;
		this.switchFlag = false;
		this.faintQueued = true;
		this.battle.faintQueue.push({
			target: this,
			source: source,
			effect: effect
		});
		return d;
	};
	BattlePokemon.prototype.damage = function (d, source, effect) {
		if (!this.hp) return 0;
		if (d < 1 && d > 0) d = 1;
		d = Math.floor(d);
		if (isNaN(d)) return 0;
		if (d <= 0) return 0;
		this.hp -= d;
		if (this.hp <= 0) {
			d += this.hp;
			this.faint(source, effect);
		}
		return d;
	};
	BattlePokemon.prototype.tryTrap = function (isHidden) {
		if (this.runImmunity('trapped')) {
			if (this.trapped && isHidden) return true;
			this.trapped = isHidden ? 'hidden' : true;
			return true;
		}
		return false;
	};
	BattlePokemon.prototype.hasMove = function (moveid) {
		moveid = toId(moveid);
		if (moveid.substr(0, 11) === 'hiddenpower') moveid = 'hiddenpower';
		for (var i = 0; i < this.moveset.length; i++) {
			if (moveid === this.battle.getMove(this.moveset[i].move).id) {
				return moveid;
			}
		}
		return false;
	};
	BattlePokemon.prototype.disableMove = function (moveid, isHidden, sourceEffect) {
		if (!sourceEffect && this.battle.event) {
			sourceEffect = this.battle.effect;
		}
		moveid = toId(moveid);
		if (moveid.substr(0, 11) === 'hiddenpower') moveid = 'hiddenpower';

		if (this.disabledMoves[moveid] && !this.disabledMoves[moveid].isHidden) return;
		this.disabledMoves[moveid] = {
			isHidden: !!isHidden,
			sourceEffect: sourceEffect
		};
	};
	// returns the amount of damage actually healed
	BattlePokemon.prototype.heal = function (d) {
		if (!this.hp) return false;
		d = Math.floor(d);
		if (isNaN(d)) return false;
		if (d <= 0) return false;
		if (this.hp >= this.maxhp) return false;
		this.hp += d;
		if (this.hp > this.maxhp) {
			d -= this.hp - this.maxhp;
			this.hp = this.maxhp;
		}
		return d;
	};
	// sets HP, returns delta
	BattlePokemon.prototype.sethp = function (d) {
		if (!this.hp) return 0;
		d = Math.floor(d);
		if (isNaN(d)) return;
		if (d < 1) d = 1;
		d = d - this.hp;
		this.hp += d;
		if (this.hp > this.maxhp) {
			d -= this.hp - this.maxhp;
			this.hp = this.maxhp;
		}
		return d;
	};
	BattlePokemon.prototype.trySetStatus = function (status, source, sourceEffect) {
		if (!this.hp) return false;
		if (this.status) return false;
		return this.setStatus(status, source, sourceEffect);
	};
	BattlePokemon.prototype.cureStatus = function () {
		if (!this.hp) return false;
		// unlike clearStatus, gives cure message
		if (this.status) {
			this.battle.add('-curestatus', this, this.status);
			this.setStatus('');
		}
	};
	BattlePokemon.prototype.setStatus = function (status, source, sourceEffect, ignoreImmunities) {
		if (!this.hp) return false;
		status = this.battle.getEffect(status);
		if (this.battle.event) {
			if (!source) source = this.battle.event.source;
			if (!sourceEffect) sourceEffect = this.battle.effect;
		}

		if (!ignoreImmunities && status.id) {
			// the game currently never ignores immunities
			if (!this.runImmunity(status.id === 'tox' ? 'psn' : status.id)) {
				this.battle.debug('immune to status');
				return false;
			}
		}

		if (this.status === status.id) return false;
		var prevStatus = this.status;
		var prevStatusData = this.statusData;
		if (status.id && !this.battle.runEvent('SetStatus', this, source, sourceEffect, status)) {
			this.battle.debug('set status [' + status.id + '] interrupted');
			return false;
		}

		this.status = status.id;
		this.statusData = {id: status.id, target: this};
		if (source) this.statusData.source = source;
		if (status.duration) {
			this.statusData.duration = status.duration;
		}
		if (status.durationCallback) {
			this.statusData.duration = status.durationCallback.call(this.battle, this, source, sourceEffect);
		}

		if (status.id && !this.battle.singleEvent('Start', status, this.statusData, this, source, sourceEffect)) {
			this.battle.debug('status start [' + status.id + '] interrupted');
			// cancel the setstatus
			this.status = prevStatus;
			this.statusData = prevStatusData;
			return false;
		}
		this.update();
		if (status.id && !this.battle.runEvent('AfterSetStatus', this, source, sourceEffect, status)) {
			return false;
		}
		return true;
	};
	BattlePokemon.prototype.clearStatus = function () {
		// unlike cureStatus, does not give cure message
		return this.setStatus('');
	};
	BattlePokemon.prototype.getStatus = function () {
		return this.battle.getEffect(this.status);
	};
	BattlePokemon.prototype.eatItem = function (item, source, sourceEffect) {
		if (!this.hp || !this.isActive) return false;
		if (!this.item) return false;

		var id = toId(item);
		if (id && this.item !== id) return false;

		if (!sourceEffect && this.battle.effect) sourceEffect = this.battle.effect;
		if (!source && this.battle.event && this.battle.event.target) source = this.battle.event.target;
		item = this.getItem();
		if (this.battle.runEvent('UseItem', this, null, null, item) && this.battle.runEvent('EatItem', this, null, null, item)) {
			this.battle.add('-enditem', this, item, '[eat]');

			this.battle.singleEvent('Eat', item, this.itemData, this, source, sourceEffect);

			this.lastItem = this.item;
			this.item = '';
			this.itemData = {id: '', target: this};
			this.usedItemThisTurn = true;
			this.ateBerry = true;
			this.battle.runEvent('AfterUseItem', this, null, null, item);
			return true;
		}
		return false;
	};
	BattlePokemon.prototype.useItem = function (item, source, sourceEffect) {
		if (!this.isActive) return false;
		if (!this.item) return false;

		var id = toId(item);
		if (id && this.item !== id) return false;

		if (!sourceEffect && this.battle.effect) sourceEffect = this.battle.effect;
		if (!source && this.battle.event && this.battle.event.target) source = this.battle.event.target;
		item = this.getItem();
		if (this.battle.runEvent('UseItem', this, null, null, item)) {
			switch (item.id) {
			case 'redcard':
				this.battle.add('-enditem', this, item, '[of] ' + source);
				break;
			default:
				if (!item.isGem) {
					this.battle.add('-enditem', this, item);
				}
				break;
			}

			this.battle.singleEvent('Use', item, this.itemData, this, source, sourceEffect);

			this.lastItem = this.item;
			this.item = '';
			this.itemData = {id: '', target: this};
			this.usedItemThisTurn = true;
			this.battle.runEvent('AfterUseItem', this, null, null, item);
			return true;
		}
		return false;
	};
	BattlePokemon.prototype.takeItem = function (source) {
		if (!this.isActive) return false;
		if (!this.item) return false;
		if (!source) source = this;
		if (this.battle.gen === 4) {
			if (toId(this.ability) === 'multitype') return false;
			if (source && toId(source.ability) === 'multitype') return false;
		}
		var item = this.getItem();
		if (this.battle.runEvent('TakeItem', this, source, null, item)) {
			this.item = '';
			this.itemData = {id: '', target: this};
			return item;
		}
		return false;
	};
	BattlePokemon.prototype.setItem = function (item, source, effect) {
		if (!this.hp || !this.isActive) return false;
		item = this.battle.getItem(item);
		this.lastItem = this.item;
		this.item = item.id;
		this.itemData = {id: item.id, target: this};
		if (item.id) {
			this.battle.singleEvent('Start', item, this.itemData, this, source, effect);
		}
		if (this.lastItem) this.usedItemThisTurn = true;
		return true;
	};
	BattlePokemon.prototype.getItem = function () {
		return this.battle.getItem(this.item);
	};
	BattlePokemon.prototype.hasItem = function (item) {
		if (this.ignoringItem()) return false;
		var ownItem = this.item;
		if (!Array.isArray(item)) {
			return ownItem === toId(item);
		}
		return (item.map(toId).indexOf(ownItem) >= 0);
	};
	BattlePokemon.prototype.clearItem = function () {
		return this.setItem('');
	};
	BattlePokemon.prototype.setAbility = function (ability, source, effect, noForce) {
		if (!this.hp) return false;
		ability = this.battle.getAbility(ability);
		var oldAbility = this.ability;
		if (noForce && oldAbility === ability.id) {
			return false;
		}
		if (ability.id in {illusion:1, multitype:1, stancechange:1}) return false;
		if (oldAbility in {multitype:1, stancechange:1}) return false;
		this.battle.singleEvent('End', this.battle.getAbility(oldAbility), this.abilityData, this, source, effect);
		this.ability = ability.id;
		this.abilityData = {id: ability.id, target: this};
		if (ability.id && this.battle.gen > 3) {
			this.battle.singleEvent('Start', ability, this.abilityData, this, source, effect);
		}
		return oldAbility;
	};
	BattlePokemon.prototype.getAbility = function () {
		return this.battle.getAbility(this.ability);
	};
	BattlePokemon.prototype.hasAbility = function (ability) {
		if (!this.isActive && this.battle.gen >= 5) return false;
		if (this.ignoringAbility()) return false;
		var ownAbility = this.ability;
		if (!Array.isArray(ability)) {
			return ownAbility === toId(ability);
		}
		return (ability.map(toId).indexOf(ownAbility) >= 0);
	};
	BattlePokemon.prototype.clearAbility = function () {
		return this.setAbility('');
	};
	BattlePokemon.prototype.getNature = function () {
		return this.battle.getNature(this.set.nature);
	};
	BattlePokemon.prototype.addVolatile = function (status, source, sourceEffect, linkedStatus) {
		var result;
		status = this.battle.getEffect(status);
		if (!this.hp && !status.affectsFainted) return false;
		if (this.battle.event) {
			if (!source) source = this.battle.event.source;
			if (!sourceEffect) sourceEffect = this.battle.effect;
		}

		if (this.volatiles[status.id]) {
			if (!status.onRestart) return false;
			return this.battle.singleEvent('Restart', status, this.volatiles[status.id], this, source, sourceEffect);
		}
		if (!this.runImmunity(status.id)) return false;
		result = this.battle.runEvent('TryAddVolatile', this, source, sourceEffect, status);
		if (!result) {
			this.battle.debug('add volatile [' + status.id + '] interrupted');
			return result;
		}
		this.volatiles[status.id] = {id: status.id};
		this.volatiles[status.id].target = this;
		if (source) {
			this.volatiles[status.id].source = source;
			this.volatiles[status.id].sourcePosition = source.position;
		}
		if (sourceEffect) {
			this.volatiles[status.id].sourceEffect = sourceEffect;
		}
		if (status.duration) {
			this.volatiles[status.id].duration = status.duration;
		}
		if (status.durationCallback) {
			this.volatiles[status.id].duration = status.durationCallback.call(this.battle, this, source, sourceEffect);
		}
		result = this.battle.singleEvent('Start', status, this.volatiles[status.id], this, source, sourceEffect);
		if (!result) {
			// cancel
			delete this.volatiles[status.id];
			return result;
		}
		if (linkedStatus && source && !source.volatiles[linkedStatus]) {
			source.addVolatile(linkedStatus, this, sourceEffect, status);
			source.volatiles[linkedStatus].linkedPokemon = this;
			source.volatiles[linkedStatus].linkedStatus = status;
			this.volatiles[status].linkedPokemon = source;
			this.volatiles[status].linkedStatus = linkedStatus;
		}
		this.update();
		return true;
	};
	BattlePokemon.prototype.getVolatile = function (status) {
		status = this.battle.getEffect(status);
		if (!this.volatiles[status.id]) return null;
		return status;
	};
	BattlePokemon.prototype.removeVolatile = function (status) {
		if (!this.hp) return false;
		status = this.battle.getEffect(status);
		if (!this.volatiles[status.id]) return false;
		this.battle.singleEvent('End', status, this.volatiles[status.id], this);
		var linkedPokemon = this.volatiles[status.id].linkedPokemon;
		var linkedStatus = this.volatiles[status.id].linkedStatus;
		delete this.volatiles[status.id];
		if (linkedPokemon && linkedPokemon.volatiles[linkedStatus]) {
			linkedPokemon.removeVolatile(linkedStatus);
		}
		this.update();
		return true;
	};
	// "static" function
	BattlePokemon.getHealth = function (side) {
		if (!this.hp) return '0 fnt';
		var hpstring;
		if ((side === true) || (this.side === side) || this.battle.getFormat().debug || this.battle.reportExactHP) {
			hpstring = '' + this.hp + '/' + this.maxhp;
		} else {
			var ratio = this.hp / this.maxhp;
			if (this.battle.reportPercentages) {
				// HP Percentage Mod mechanics
				var percentage = Math.ceil(ratio * 100);
				if ((percentage === 100) && (ratio < 1.0)) {
					percentage = 99;
				}
				hpstring = '' + percentage + '/100';
			} else {
				// In-game accurate pixel health mechanics
				var pixels = Math.floor(ratio * 48) || 1;
				hpstring = '' + pixels + '/48';
				if ((pixels === 9) && (ratio > 0.2)) {
					hpstring += 'y'; // force yellow HP bar
				} else if ((pixels === 24) && (ratio > 0.5)) {
					hpstring += 'g'; // force green HP bar
				}
			}
		}
		if (this.status) hpstring += ' ' + this.status;
		return hpstring;
	};
	BattlePokemon.prototype.setType = function (newType, enforce) {
		// Arceus first type cannot be normally changed
		if (!enforce && this.template.num === 493) return false;

		this.typesData = [{
			type: newType,
			suppressed: false,
			isAdded: false
		}];

		return true;
	};
	BattlePokemon.prototype.addType = function (newType) {
		// removes any types added previously and adds another one

		this.typesData = this.typesData.filter(function (typeData) {
			return !typeData.isAdded;
		}).concat([{
			type: newType,
			suppressed: false,
			isAdded: true
		}]);

		return true;
	};
	BattlePokemon.prototype.getTypes = function (getAll) {
		var types = [];
		for (var i = 0, l = this.typesData.length; i < l; i++) {
			if (getAll || !this.typesData[i].suppressed) {
				types.push(this.typesData[i].type);
			}
		}
		if (types.length) return types;
		if (this.battle.gen >= 5) return ['Normal'];
		return ['???'];
	};
	BattlePokemon.prototype.isGrounded = function () {
		if (!this.hasType('Flying') && this.battle.runEvent('Immunity', this, null, null, 'Ground')) return true;
		return !!(this.hasItem('ironball') || this.volatiles['ingrain'] || this.volatiles['smackdown'] || this.battle.getPseudoWeather('gravity'));
	};
	BattlePokemon.prototype.isSemiInvulnerable = function () {
		if (this.volatiles['fly'] || this.volatiles['bounce'] || this.volatiles['skydrop'] || this.volatiles['dive'] || this.volatiles['dig'] || this.volatiles['phantomforce'] || this.volatiles['shadowforce']) {
			return true;
		}
		for (var i = 0; i < this.side.foe.active.length; i++) {
			if (this.side.foe.active[i].volatiles['skydrop'] && this.side.foe.active[i].volatiles['skydrop'].source === this) {
				return true;
			}
		}
		return false;
	};
	BattlePokemon.prototype.runEffectiveness = function (move) {
		var totalTypeMod = 0;
		var types = this.getTypes();
		for (var i = 0; i < types.length; i++) {
			var typeMod = this.battle.getEffectiveness(move, types[i]);
			typeMod = this.battle.singleEvent('Effectiveness', move, null, types[i], move, null, typeMod);
			totalTypeMod += this.battle.runEvent('Effectiveness', this, types[i], move, typeMod);
		}
		return totalTypeMod;
	};
	BattlePokemon.prototype.runImmunity = function (type, message) {
		if (this.fainted) {
			return false;
		}
		if (!type || type === '???') {
			return true;
		}
		if (!this.battle.runEvent('NegateImmunity', this, type)) return true;
		if (!this.battle.getImmunity(type, this)) {
			this.battle.debug('natural immunity');
			if (message) {
				this.battle.add('-immune', this, '[msg]');
			}
			return false;
		}
		var immunity = this.battle.runEvent('Immunity', this, null, null, type);
		if (!immunity) {
			this.battle.debug('artificial immunity');
			if (message && immunity !== null) {
				this.battle.add('-immune', this, '[msg]');
			}
			return false;
		}
		return true;
	};
	BattlePokemon.prototype.destroy = function () {
		// deallocate ourself
		// get rid of some possibly-circular references
		this.battle = null;
		this.side = null;
	};
	return BattlePokemon;
})();

BattleSide = (function () {
	function BattleSide(name, battle, n, team) {
		var sideScripts = battle.data.Scripts.side;
		if (sideScripts) Object.merge(this, sideScripts);

		this.battle = battle;
		this.n = n;
		this.name = name;
		this.pokemon = [];
		this.active = [null];
		this.sideConditions = {};

		this.id = n ? 'p2' : 'p1';

		switch (this.battle.gameType) {
		case 'doubles':
			this.active = [null, null];
			break;
		case 'triples': case 'rotation':
			this.active = [null, null, null];
			break;
		}

		this.team = this.battle.getTeam(this, team);
		for (var i = 0; i < this.team.length && i < 6; i++) {
			//console.log("NEW POKEMON: " + (this.team[i] ? this.team[i].name : '[unidentified]'));
			this.pokemon.push(new BattlePokemon(this.team[i], this));
		}
		this.pokemonLeft = this.pokemon.length;
		for (var i = 0; i < this.pokemon.length; i++) {
			this.pokemon[i].position = i;
		}
	}

	BattleSide.prototype.isActive = false;
	BattleSide.prototype.pokemonLeft = 0;
	BattleSide.prototype.faintedLastTurn = false;
	BattleSide.prototype.faintedThisTurn = false;
	BattleSide.prototype.decision = null;
	BattleSide.prototype.foe = null;

	BattleSide.prototype.toString = function () {
		return this.id + ': ' + this.name;
	};
	BattleSide.prototype.getData = function () {
		var data = {
			name: this.name,
			id: this.id,
			pokemon: []
		};
		for (var i = 0; i < this.pokemon.length; i++) {
			var pokemon = this.pokemon[i];
			data.pokemon.push({
				ident: pokemon.fullname,
				details: pokemon.details,
				condition: pokemon.getHealth(pokemon.side),
				active: (pokemon.position < pokemon.side.active.length),
				stats: {
					atk: pokemon.baseStats['atk'],
					def: pokemon.baseStats['def'],
					spa: pokemon.baseStats['spa'],
					spd: pokemon.baseStats['spd'],
					spe: pokemon.baseStats['spe']
				},
				moves: pokemon.moves.map(function (move) {
					if (move === 'hiddenpower') {
						return move + toId(pokemon.hpType) + (pokemon.hpPower === 70 ? '' : pokemon.hpPower);
					}
					return move;
				}),
				baseAbility: pokemon.baseAbility,
				item: pokemon.item,
				pokeball: pokemon.pokeball,
				canMegaEvo: !!pokemon.canMegaEvo
			});
		}
		return data;
	};
	BattleSide.prototype.randomActive = function () {
		var actives = this.active.filter(function (active) {
			return active && !active.fainted;
		});
		if (!actives.length) return null;
		var i = Math.floor(Math.random() * actives.length);
		return actives[i];
	};
	BattleSide.prototype.addSideCondition = function (status, source, sourceEffect) {
		status = this.battle.getEffect(status);
		if (this.sideConditions[status.id]) {
			if (!status.onRestart) return false;
			return this.battle.singleEvent('Restart', status, this.sideConditions[status.id], this, source, sourceEffect);
		}
		this.sideConditions[status.id] = {id: status.id};
		this.sideConditions[status.id].target = this;
		if (source) {
			this.sideConditions[status.id].source = source;
			this.sideConditions[status.id].sourcePosition = source.position;
		}
		if (status.duration) {
			this.sideConditions[status.id].duration = status.duration;
		}
		if (status.durationCallback) {
			this.sideConditions[status.id].duration = status.durationCallback.call(this.battle, this, source, sourceEffect);
		}
		if (!this.battle.singleEvent('Start', status, this.sideConditions[status.id], this, source, sourceEffect)) {
			delete this.sideConditions[status.id];
			return false;
		}
		this.battle.update();
		return true;
	};
	BattleSide.prototype.getSideCondition = function (status) {
		status = this.battle.getEffect(status);
		if (!this.sideConditions[status.id]) return null;
		return status;
	};
	BattleSide.prototype.removeSideCondition = function (status) {
		status = this.battle.getEffect(status);
		if (!this.sideConditions[status.id]) return false;
		this.battle.singleEvent('End', status, this.sideConditions[status.id], this);
		delete this.sideConditions[status.id];
		this.battle.update();
		return true;
	};
	BattleSide.prototype.send = function () {
		var parts = Array.prototype.slice.call(arguments);
		var functions = parts.map(function (part) {
			return typeof part === 'function';
		});
		var sideUpdate = [];
		if (functions.indexOf(true) < 0) {
			sideUpdate.push('|' + parts.join('|'));
		} else {
			var line = '';
			for (var j = 0; j < parts.length; ++j) {
				line += '|';
				if (functions[j]) {
					line += parts[j](this);
				} else {
					line += parts[j];
				}
			}
			sideUpdate.push(line);
		}
		this.battle.send('sideupdate', this.id + "\n" + sideUpdate);
	};
	BattleSide.prototype.emitCallback = function () {
		this.battle.send('callback', this.id + "\n" +
			Array.prototype.slice.call(arguments).join('|'));
	};
	BattleSide.prototype.emitRequest = function (update) {
		this.battle.send('request', this.id + "\n" + this.battle.rqid + "\n" + JSON.stringify(update));
	};
	BattleSide.prototype.resolveDecision = function () {
		if (this.decision) return this.decision;
		var decisions = [];

		switch (this.currentRequest) {
		case 'move':
			for (var i = 0; i < this.active.length; i++) {
				var pokemon = this.active[i];
				if (!pokemon || pokemon.fainted) continue;

				var lockedMove = pokemon.getLockedMove();
				if (lockedMove) {
					decisions.push({
						choice: 'move',
						pokemon: pokemon,
						targetLoc: this.battle.runEvent('LockMoveTarget', pokemon) || 0,
						move: lockedMove
					});
					continue;
				}

				var moveid = 'struggle';
				var moves = pokemon.getMoves();
				for (var j = 0; j < moves.length; j++) {
					if (moves[j].disabled) continue;
					moveid = moves[j].id;
					break;
				}
				decisions.push({
					choice: 'move',
					pokemon: pokemon,
					targetLoc: 0,
					move: moveid
				});
			}
			break;

		case 'switch':
			var canSwitchOut = [];
			for (var i = 0; i < this.active.length; i++) {
				if (this.active[i] && this.active[i].switchFlag) canSwitchOut.push(i);
			}

			var canSwitchIn = [];
			for (var i = this.active.length; i < this.pokemon.length; i++) {
				if (this.pokemon[i] && !this.pokemon[i].fainted) canSwitchIn.push(i);
			}

			var willPass = canSwitchOut.splice(Math.min(canSwitchOut.length, canSwitchIn.length));
			for (var i = 0; i < canSwitchOut.length; i++) {
				decisions.push({
					choice: 'switch',
					pokemon: this.active[canSwitchOut[i]],
					target: this.pokemon[canSwitchIn[i]],
					priority: 101
				});
			}
			for (var i = 0; i < willPass.length; i++) {
				decisions.push({
					choice: 'pass',
					pokemon: this.active[willPass[i]],
					priority: 102
				});
			}
			break;

		case 'teampreview':
			decisions.push({
				choice: 'team',
				side: this,
				team: [0, 1, 2, 3, 4, 5].slice(0, this.pokemon.length)
			});
		}

		return decisions;
	};
	BattleSide.prototype.destroy = function () {
		// deallocate ourself

		// deallocate children and get rid of references to them
		for (var i = 0; i < this.pokemon.length; i++) {
			if (this.pokemon[i]) this.pokemon[i].destroy();
			this.pokemon[i] = null;
		}
		this.pokemon = null;
		for (var i = 0; i < this.active.length; i++) {
			this.active[i] = null;
		}
		this.active = null;

		if (this.decision) {
			delete this.decision.side;
			delete this.decision.pokemon;
		}
		this.decision = null;

		// get rid of some possibly-circular references
		this.battle = null;
		this.foe = null;
	};
	return BattleSide;
})();

Battle = (function () {
	var Battle = {};

	Battle.construct = (function () {
		global.battleProtoCache = {};
		return function (roomid, formatarg, rated) {
			var battle = Object.create((function () {
				if (battleProtoCache[formatarg] !== undefined) {
					return battleProtoCache[formatarg];
				}

				// Scripts overrides Battle overrides Scripts overrides Tools
				var tools = Tools.mod(formatarg);
				var proto = Object.create(tools);
				for (var i in Battle.prototype) {
					proto[i] = Battle.prototype[i];
				}
				var battle = Object.create(proto);
				var ret = Object.create(battle);
				tools.install(ret);
				return (battleProtoCache[formatarg] = ret);
			})());
			Battle.prototype.init.call(battle, roomid, formatarg, rated);
			return battle;
		};
	})();

	Battle.prototype = {};

	Battle.prototype.init = function (roomid, formatarg, rated) {
		var format = Tools.getFormat(formatarg);

		this.log = [];
		this.sides = [null, null];
		this.roomid = roomid;
		this.id = roomid;
		this.rated = rated;
		this.weatherData = {id:''};
		this.terrainData = {id:''};
		this.pseudoWeather = {};

		this.format = toId(format);
		this.formatData = {id:this.format};

		this.effect = {id:''};
		this.effectData = {id:''};
		this.event = {id:''};

		this.gameType = (format.gameType || 'singles');

		this.queue = [];
		this.faintQueue = [];
		this.messageLog = [];

		// use a random initial seed (64-bit, [high -> low])
		this.startingSeed = this.seed = [
			Math.floor(Math.random() * 0x10000),
			Math.floor(Math.random() * 0x10000),
			Math.floor(Math.random() * 0x10000),
			Math.floor(Math.random() * 0x10000)
		];
	};

	Battle.prototype.turn = 0;
	Battle.prototype.p1 = null;
	Battle.prototype.p2 = null;
	Battle.prototype.lastUpdate = 0;
	Battle.prototype.weather = '';
	Battle.prototype.terrain = '';
	Battle.prototype.ended = false;
	Battle.prototype.started = false;
	Battle.prototype.active = false;
	Battle.prototype.eventDepth = 0;
	Battle.prototype.lastMove = '';
	Battle.prototype.activeMove = null;
	Battle.prototype.activePokemon = null;
	Battle.prototype.activeTarget = null;
	Battle.prototype.midTurn = false;
	Battle.prototype.currentRequest = '';
	Battle.prototype.currentRequestDetails = '';
	Battle.prototype.rqid = 0;
	Battle.prototype.lastMoveLine = 0;
	Battle.prototype.reportPercentages = false;
	Battle.prototype.supportCancel = false;
	Battle.prototype.events = null;

	Battle.prototype.toString = function () {
		return 'Battle: ' + this.format;
	};

	// This function is designed to emulate the on-cartridge PRNG for Gens 3 and 4, as described in
	// http://www.smogon.com/ingame/rng/pid_iv_creation#pokemon_random_number_generator
	// This RNG uses a 32-bit initial seed

	// This function has three different results, depending on arguments:
	// - random() returns a real number in [0, 1), just like Math.random()
	// - random(n) returns an integer in [0, n)
	// - random(m, n) returns an integer in [m, n)

	// m and n are converted to integers via Math.floor. If the result is NaN, they are ignored.
	/*
	Battle.prototype.random = function (m, n) {
		this.seed = (this.seed * 0x41C64E6D + 0x6073) >>> 0; // truncate the result to the last 32 bits
		var result = this.seed >>> 16; // the first 16 bits of the seed are the random value
		m = Math.floor(m);
		n = Math.floor(n);
		return (m ? (n ? (result % (n - m)) + m : result % m) : result / 0x10000);
	};
	*/

	// This function is designed to emulate the on-cartridge PRNG for Gen 5 and uses a 64-bit initial seed

	// This function has three different results, depending on arguments:
	// - random() returns a real number in [0, 1), just like Math.random()
	// - random(n) returns an integer in [0, n)
	// - random(m, n) returns an integer in [m, n)

	// m and n are converted to integers via Math.floor. If the result is NaN, they are ignored.

	Battle.prototype.random = function (m, n) {
		this.seed = this.nextFrame(); // Advance the RNG
		var result = (this.seed[0] << 16 >>> 0) + this.seed[1]; // Use the upper 32 bits
		m = Math.floor(m);
		n = Math.floor(n);
		result = (m ? (n ? Math.floor(result * (n - m) / 0x100000000) + m : Math.floor(result * m / 0x100000000)) : result / 0x100000000);
		this.debug('randBW(' + (m ? (n ? m + ', ' + n : m) : '') + ') = ' + result);
		return result;
	};

	Battle.prototype.nextFrame = function (n) {
		var seed = this.seed;
		n = n || 1;
		for (var frame = 0; frame < n; ++frame) {
			// The RNG is a Linear Congruential Generator (LCG) in the form: x_{n + 1} = (a x_n + c) % m
			// Where: x_0 is the seed, x_n is the random number after n iterations,
			//     a = 0x5D588B656C078965, c = 0x00269EC3 and m = 2^64
			// Javascript doesnt handle such large numbers properly, so this function does it in 16-bit parts.
			// x_{n + 1} = (x_n * a) + c
			// Let any 64 bit number n = (n[0] << 48) + (n[1] << 32) + (n[2] << 16) + n[3]
			// Then x_{n + 1} =
			//     ((a[3] x_n[0] + a[2] x_n[1] + a[1] x_n[2] + a[0] x_n[3] + c[0]) << 48) +
			//     ((a[3] x_n[1] + a[2] x_n[2] + a[1] x_n[3] + c[1]) << 32) +
			//     ((a[3] x_n[2] + a[2] x_n[3] + c[2]) << 16) +
			//     a[3] x_n[3] + c[3]
			// Which can be generalised where b is the number of 16 bit words in the number:
			//     (Notice how the a[] word starts at b-1, and decrements every time it appears again on the line;
			//         x_n[] starts at b-<line#>-1 and increments to b-1 at the end of the line per line, limiting the length of the line;
			//         c[] is at b-<line#>-1 for each line and the left shift is 16 * <line#>)
			//     ((a[b-1] + x_n[b-1] + c[b-1]) << (16 * 0)) +
			//     ((a[b-1] x_n[b-2] + a[b-2] x_n[b-1] + c[b-2]) << (16 * 1)) +
			//     ((a[b-1] x_n[b-3] + a[b-2] x_n[b-2] + a[b-3] x_n[b-1] + c[b-3]) << (16 * 2)) +
			//     ...
			//     ((a[b-1] x_n[1] + a[b-2] x_n[2] + ... + a[2] x_n[b-2] + a[1] + x_n[b-1] + c[1]) << (16 * (b-2))) +
			//     ((a[b-1] x_n[0] + a[b-2] x_n[1] + ... + a[1] x_n[b-2] + a[0] + x_n[b-1] + c[0]) << (16 * (b-1)))
			// Which produces this equation: \sum_{l=0}^{b-1}\left(\sum_{m=b-l-1}^{b-1}\left\{a[2b-m-l-2] x_n[m]\right\}+c[b-l-1]\ll16l\right)
			// This is all ignoring overflow/carry because that cannot be shown in a pseudo-mathematical equation.
			// The below code implements a optimised version of that equation while also checking for overflow/carry.

			var a = [0x5D58, 0x8B65, 0x6C07, 0x8965];
			var c = [0, 0, 0x26, 0x9EC3];

			var nextSeed = [0, 0, 0, 0];
			var carry = 0;

			for (var cN = seed.length - 1; cN >= 0; --cN) {
				nextSeed[cN] = carry;
				carry = 0;

				var aN = seed.length - 1;
				var seedN = cN;
				for (; seedN < seed.length; --aN, ++seedN) {
					var nextWord = a[aN] * seed[seedN];
					carry += nextWord >>> 16;
					nextSeed[cN] += nextWord & 0xFFFF;
				}
				nextSeed[cN] += c[cN];
				carry += nextSeed[cN] >>> 16;
				nextSeed[cN] &= 0xFFFF;
			}

			seed = nextSeed;
		}
		return seed;
	};

	Battle.prototype.setWeather = function (status, source, sourceEffect) {
		status = this.getEffect(status);
		if (sourceEffect === undefined && this.effect) sourceEffect = this.effect;
		if (source === undefined && this.event && this.event.target) source = this.event.target;

		if (this.weather === status.id && (this.gen > 2 || status.id === 'sandstorm')) {
			return false;
		}
		if (status.id) {
			var result = this.runEvent('SetWeather', source, source, status);
			if (!result) {
				if (result === false) {
					if (sourceEffect && sourceEffect.weather) {
						this.add('-fail', source, sourceEffect, '[from]: ' + this.weather);
					} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
						this.add('-ability', source, sourceEffect, '[from] ' + this.weather, '[fail]');
					}
				}
				return null;
			}
		}
		if (this.weather && !status.id) {
			var oldstatus = this.getWeather();
			this.singleEvent('End', oldstatus, this.weatherData, this);
		}
		var prevWeather = this.weather;
		var prevWeatherData = this.weatherData;
		this.weather = status.id;
		this.weatherData = {id: status.id};
		if (source) {
			this.weatherData.source = source;
			this.weatherData.sourcePosition = source.position;
		}
		if (status.duration) {
			this.weatherData.duration = status.duration;
		}
		if (status.durationCallback) {
			this.weatherData.duration = status.durationCallback.call(this, source, sourceEffect);
		}
		if (!this.singleEvent('Start', status, this.weatherData, this, source, sourceEffect)) {
			this.weather = prevWeather;
			this.weatherData = prevWeatherData;
			return false;
		}
		this.update();
		return true;
	};
	Battle.prototype.clearWeather = function () {
		return this.setWeather('');
	};
	Battle.prototype.effectiveWeather = function (target) {
		if (this.event) {
			if (!target) target = this.event.target;
		}
		if (!this.runEvent('TryWeather', target)) return '';
		return this.weather;
	};
	Battle.prototype.isWeather = function (weather, target) {
		var ourWeather = this.effectiveWeather(target);
		if (!Array.isArray(weather)) {
			return ourWeather === toId(weather);
		}
		return (weather.map(toId).indexOf(ourWeather) >= 0);
	};
	Battle.prototype.getWeather = function () {
		return this.getEffect(this.weather);
	};

	Battle.prototype.setTerrain = function (status, source, sourceEffect) {
		status = this.getEffect(status);
		if (sourceEffect === undefined && this.effect) sourceEffect = this.effect;
		if (source === undefined && this.event && this.event.target) source = this.event.target;

		if (this.terrain === status.id) return false;
		if (this.terrain && !status.id) {
			var oldstatus = this.getTerrain();
			this.singleEvent('End', oldstatus, this.terrainData, this);
		}
		var prevTerrain = this.terrain;
		var prevTerrainData = this.terrainData;
		this.terrain = status.id;
		this.terrainData = {id: status.id};
		if (source) {
			this.terrainData.source = source;
			this.terrainData.sourcePosition = source.position;
		}
		if (status.duration) {
			this.terrainData.duration = status.duration;
		}
		if (status.durationCallback) {
			this.terrainData.duration = status.durationCallback.call(this, source, sourceEffect);
		}
		if (!this.singleEvent('Start', status, this.terrainData, this, source, sourceEffect)) {
			this.terrain = prevTerrain;
			this.terrainData = prevTerrainData;
			return false;
		}
		this.update();
		return true;
	};
	Battle.prototype.clearTerrain = function () {
		return this.setTerrain('');
	};
	Battle.prototype.effectiveTerrain = function (target) {
		if (this.event) {
			if (!target) target = this.event.target;
		}
		if (!this.runEvent('TryTerrain', target)) return '';
		return this.terrain;
	};
	Battle.prototype.isTerrain = function (terrain, target) {
		var ourTerrain = this.effectiveTerrain(target);
		if (!Array.isArray(terrain)) {
			return ourTerrain === toId(terrain);
		}
		return (terrain.map(toId).indexOf(ourTerrain) >= 0);
	};
	Battle.prototype.getTerrain = function () {
		return this.getEffect(this.terrain);
	};

	Battle.prototype.getFormat = function () {
		return this.getEffect(this.format);
	};
	Battle.prototype.addPseudoWeather = function (status, source, sourceEffect) {
		status = this.getEffect(status);
		if (this.pseudoWeather[status.id]) {
			if (!status.onRestart) return false;
			return this.singleEvent('Restart', status, this.pseudoWeather[status.id], this, source, sourceEffect);
		}
		this.pseudoWeather[status.id] = {id: status.id};
		if (source) {
			this.pseudoWeather[status.id].source = source;
			this.pseudoWeather[status.id].sourcePosition = source.position;
		}
		if (status.duration) {
			this.pseudoWeather[status.id].duration = status.duration;
		}
		if (status.durationCallback) {
			this.pseudoWeather[status.id].duration = status.durationCallback.call(this, source, sourceEffect);
		}
		if (!this.singleEvent('Start', status, this.pseudoWeather[status.id], this, source, sourceEffect)) {
			delete this.pseudoWeather[status.id];
			return false;
		}
		this.update();
		return true;
	};
	Battle.prototype.getPseudoWeather = function (status) {
		status = this.getEffect(status);
		if (!this.pseudoWeather[status.id]) return null;
		return status;
	};
	Battle.prototype.removePseudoWeather = function (status) {
		status = this.getEffect(status);
		if (!this.pseudoWeather[status.id]) return false;
		this.singleEvent('End', status, this.pseudoWeather[status.id], this);
		delete this.pseudoWeather[status.id];
		this.update();
		return true;
	};
	Battle.prototype.suppressingAttackEvents = function () {
		return (this.activePokemon && this.activePokemon.isActive && !this.activePokemon.ignoringAbility() && this.activePokemon.getAbility().stopAttackEvents);
	};
	Battle.prototype.setActiveMove = function (move, pokemon, target) {
		if (!move) move = null;
		if (!pokemon) pokemon = null;
		if (!target) target = pokemon;
		this.activeMove = move;
		this.activePokemon = pokemon;
		this.activeTarget = target;

		// Mold Breaker and the like
		this.update();
	};
	Battle.prototype.clearActiveMove = function (failed) {
		if (this.activeMove) {
			if (!failed) {
				this.lastMove = this.activeMove.id;
			}
			this.activeMove = null;
			this.activePokemon = null;
			this.activeTarget = null;

			// Mold Breaker and the like, again
			this.update();
		}
	};

	Battle.prototype.update = function () {
		var actives = this.p1.active;
		for (var i = 0; i < actives.length; i++) {
			if (actives[i]) actives[i].update();
		}
		actives = this.p2.active;
		for (var i = 0; i < actives.length; i++) {
			if (actives[i]) actives[i].update();
		}
	};

	// bubbles up
	Battle.comparePriority = function (a, b) { // intentionally not in Battle.prototype
		a.priority = a.priority || 0;
		a.subPriority = a.subPriority || 0;
		a.speed = a.speed || 0;
		b.priority = b.priority || 0;
		b.subPriority = b.subPriority || 0;
		b.speed = b.speed || 0;
		if ((typeof a.order === 'number' || typeof b.order === 'number') && a.order !== b.order) {
			if (typeof a.order !== 'number') {
				return -1;
			}
			if (typeof b.order !== 'number') {
				return 1;
			}
			if (b.order - a.order) {
				return -(b.order - a.order);
			}
		}
		if (b.priority - a.priority) {
			return b.priority - a.priority;
		}
		if (b.speed - a.speed) {
			return b.speed - a.speed;
		}
		if (b.subOrder - a.subOrder) {
			return -(b.subOrder - a.subOrder);
		}
		return Math.random() - 0.5;
	};
	Battle.prototype.getResidualStatuses = function (thing, callbackType) {
		var statuses = this.getRelevantEffectsInner(thing || this, callbackType || 'residualCallback', null, null, false, true, 'duration');
		statuses.sort(Battle.comparePriority);
		//if (statuses[0]) this.debug('match ' + (callbackType || 'residualCallback') + ': ' + statuses[0].status.id);
		return statuses;
	};
	Battle.prototype.eachEvent = function (eventid, effect, relayVar) {
		var actives = [];
		if (!effect && this.effect) effect = this.effect;
		for (var i = 0; i < this.sides.length; i++) {
			var side = this.sides[i];
			for (var j = 0; j < side.active.length; j++) {
				if (side.active[j]) actives.push(side.active[j]);
			}
		}
		actives.sort(function (a, b) {
			if (b.speed - a.speed) {
				return b.speed - a.speed;
			}
			return Math.random() - 0.5;
		});
		for (var i = 0; i < actives.length; i++) {
			if (actives[i].isStarted) {
				this.runEvent(eventid, actives[i], null, effect, relayVar);
			}
		}
	};
	Battle.prototype.residualEvent = function (eventid, relayVar) {
		var statuses = this.getRelevantEffectsInner(this, 'on' + eventid, null, null, false, true, 'duration');
		statuses.sort(Battle.comparePriority);
		while (statuses.length) {
			var statusObj = statuses.shift();
			var status = status
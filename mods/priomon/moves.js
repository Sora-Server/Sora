exports.BattleMovedex = {
              "flameshot": {
		num: 2000,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Flame Shot",
		isViable: true,
		name: "Flame Shot",
		pp: 30,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Fire"
	      },
	      "sapblast": {
		num: 2001,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Sap Blast",
		isViable: true,
		name: "Sap Blast",
		pp: 32,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Grass"
	      },
	      "kineticforce": {
		num: 2002,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Kinetic Force",
		isViable: true,
		name: "Kinetic Force",
		pp: 32,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Psychic"
	      },
	      "stonespine": {
		num: 2003,
		accuracy: 90,
		basePower: 55,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Stone Spine",
		isViable: true,
		name: "Stone Spine",
		pp: 16,
		priority: 1,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Rock"
	      },
	      "dracocrash": {
		num: 2004,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Draco Crash",
		isViable: true,
		name: "Draco Crash",
		pp: 8,
		priority: 2,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Dragon"
	      },
	      "venomstrike": {
		num: 2005,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to one adjacent target.",
		shortDesc: "Usually goes first, 30% chance to badly poison the target.",
		id: "Venom Strike",
		name: "Venom Strike",
		pp: 16,
		priority: 1,
		isContact: true,
		secondary: {
			chance: 30,
			status: 'tox'
		},
		target: "normal",
		type: "Poison"
	      },
	      "nervepulse": {
		num: 2006,
		accuracy: 90,
		basePower: 40,
		category: "Special",
		desc: "Deals damage to one adjacent target.",
		shortDesc: "Usually goes first. 100% chance to land a critical hit.",
		id: "Nerve Pulse",
		name: "Nerve Pulse",
		pp: 16,
		priority: 1,
		willCrit: true,
		secondary: false,
		target: "normal",
		type: "Electric"
	      },
	      "divingcharge": {
		num: 2007,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1. Deals 25% recoil.",
		shortDesc: "Usually goes first.",
		id: "Diving Charge",
		isViable: true,
		name: "Diving Charge",
		pp: 24,
		priority: 1,
		isContact: true,
		recoil: [25, 100],
		secondary: false,
		target: "normal",
		type: "Flying"
	      },
	      "tremorshock": {
		num: 2008,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first. Reduces Stats to neutral.",
		id: "Tremor Shock",
		isViable: true,
		name: "Tremor Shock",
		pp: 16,
		priority: 1,
		onHit: function (target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		secondary: false,
		target: "normal",
		type: "Ground"
	      },
	      "fairywind": {
		num: 584,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Deals damage to one adjacent target.",
		shortDesc: "Usually goes first.",
		id: "fairywind",
		name: "Fairy Wind",
		pp: 32,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Fairy"
	      },
	      "twineedle": {
		num: 41,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to one adjacent target and hits twice, with each hit having a 20% chance to poison it. If the first hit breaks the target's Substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times. Each hit has 20% chance to poison. Usually goes first.",
		id: "twineedle",
		name: "Twineedle",
		pp: 16,
		priority: 1,
		multihit: [2, 2],
		secondary: {
			chance: 20,
			status: 'psn'
		},
		target: "normal",
		type: "Bug"
	      },
	      "corrosion": {
		num: 2009,
		accuracy: 100,
		basePower: 10,
		category: "Special",
		desc: "Deals damage to one adjacent target.",
		shortDesc: "Usually goes first, 30% chance to badly poison the target.",
		id: "Corrosion",
		name: "Corrosion",
		pp: 16,
		priority: 1,
		volatileStatus: 'partiallytrapped',
		onModifyMove: function (move) {
			if (move.type in {'Poison':1}) {
				move.affectedByImmunities = false;
			}
		},
		secondary: false,
		target: "normal",
		type: "Poison"
	      },
	      "frostbite": {
		num: 2010,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes one adjacent target to fall asleep at the end of the next turn. If the target is still on the field and does not have a major status problem at that time, it freezes, and this effect cannot be prevented by Safeguard or Substitute. Fails if the target cannot freeze or if it already has a major status problem. Pokemon protected by Magic Coat or the Ability Magic Bounce are unaffected and instead use this move themselves.",
		shortDesc: "Freezes the target after 1 turn. Usually goes last.",
		id: "Frost Bite",
		isViable: true,
		name: "Frost Bite",
		pp: 8,
		priority: -5,
		isBounceable: true,
		volatileStatus: 'frostbite',
		onTryHit: function (target) {
			if (target.status || !target.runImmunity('frz')) {
				return false;
			}
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 2,
			onStart: function (target, source) {
				this.add('-start', target, 'move: Frost Bite', '[of] ' + source);
			},
			onEnd: function (target) {
				target.trySetStatus('frz');
			}
		},
		secondary: false,
		target: "normal",
		type: "Ice"
	      }
};	      

/**
 * Custom Commands
 *
 * This is bascially where most of the core custom commands goes.
 * Commands Table of Contents:
 * General, Money, Override, Staff
 */
var fs = require("fs");
    path = require("path"),
    http = require("http"),
    request = require('request');
	
var customCommands = {
	/*********************************************************
	 * General commands
	 *********************************************************/
	
		

    model: 'sprite',
    sprite: function(target, room, user) {
        if (!this.canBroadcast()) return;
        var targets = target.split(',');
        target = targets[0].trim();
        target1 = targets[1];
        if (!toId(target)) return this.sendReply("/sprite [Pokémon], [shiny/back] - Shows the animated model of the specified Pokémon.");
        var clean = target.toLowerCase();
        if (target.toLowerCase().indexOf(' ') !== -1) {
            target = target.toLowerCase().replace(/ /g, '-');
        }
        //this won't interfere with the generation of yanmega's sprite, since it doesn't have any alternate animations.
        //It however DOES somewhat interfere with porygon2. So we're gonna make that one an exception.
        if (target.indexOf('mega') == -1 && toId(target) != 'porygon2') {
            if (target.lastIndexOf('-') > -1) {
                for (var i = 0; i <= target.lastIndexOf('-'); i++) {
                    var a = target.substring(0, target.lastIndexOf('-')).replace(/-/g, ' ');
                    break;
                }
            }
        }

        var correction = a ? Tools.dataSearch(a) : Tools.dataSearch(target);
        if (correction && correction.length) {
            for (var i = 0; i < correction.length; ++i) {
                if (correction[i].id !== target && !i) {
                    target = a ? target.replace(a, correction[0].id) : correction[0].name.toLowerCase();
                }
            }
        } else {
            return this.sendReply((a || clean) + ' is not a valid Pokémon.');
        }

        if (!target1) {
            var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            for (var x = 0; x < numbers.length; x++) {
                if (target.indexOf('-' + numbers[x]) > -1) {
                    return this.sendReply('|html|<img src = "http://www.pkparaiso.com/imagenes/xy/sprites/animados/' + target + '.gif">');
                }
            }
            return this.sendReply('|html|<img src = "http://play.pokemonshowdown.com/sprites/xyani/' + target + '.gif">');
        } else {
            if (toId(target1) === 'back') {
                return this.sendReply('|html|<img src = "http://play.pokemonshowdown.com/sprites/xyani-back/' + target.toLowerCase().trim().replace(/ /g, '-') + '.gif">');
            } else if (toId(target1) === 'shiny') {
                return this.sendReply('|html|<img src = "http://play.pokemonshowdown.com/sprites/xyani-shiny/' + target.toLowerCase().trim().replace(/ /g, '-') + '.gif">');
            } else {
                this.sendReply(target1 + ' is not a valid parameter.');
                var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                for (var x = 0; x < numbers.length; x++) {
                    if (target.indexOf('-' + numbers[x]) > -1) {
                        return this.sendReply('|html|<img src = "http://www.pkparaiso.com/imagenes/xy/sprites/animados/' + target + '.gif">');
                    }
                }
                return this.sendReply('|html|<img src = "http://play.pokemonshowdown.com/sprites/xyani/' + target + '.gif">');
            }
        }
    },
    
    ncalc: 'nuggetcalc',
    nuggetcalc: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('VGC 2015 Damage Calculator (Curtesy of Nugget Bridge) <br />'+
		'-<a href="http://nuggetbridge.com/damagecalc/">VGC \'15 Calculator</a> <br />');
		
    },
    
    scalc: 'sweepercalc',
    sweepercalc: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Competitive team breaking/walling calculator (Curtesy of migetno1 and veeveearnh) <br />'+
		'-<a href="http://sweepercalc.com/rmt/">Sweeper Calculator</a> <br />');
		
    },
    
    
    panagramhelp: 'panagramrules',
    panagramrules: function(target, room, user) {
        if (!this.canBroadcast()) return;
        return this.sendReplyBox('<u><font size = 2><center>Pangram rules and commands</center></font></u><br />' +
            '<b>/panagram</b> - Starts a game of Panagram in the room (Panagrams are just anagrams with Pokemon). Illegal and CAP Pokemon won\'t be selected. Must be ranked + or higher to use.<br />' +
            '<b>/guessp [Pokemon]</b> - Guesses a Pokémon. After guessing incorrectly, you cannot guess again in the same game. There are a total of 3 tries per game. The answer is revealed after all 3 chances are over.<br />' +
            '<b>/panagramend</b> OR <b>/endpanagram</b> OR <b>/endp</b> - Ends the current game of Panagram.');
    },
    //panagram commands.
    panagram: function(target, room, user) {
        if (!this.can('broadcast', null, room)) return false;
        if (room.panagram) return this.sendReply('There is already a game of Panagram going on.');
        var pokedex = [];
        for (var i in Tools.data.Pokedex) {
            if (Tools.data.Pokedex[i].num > 0 && !Tools.data.Pokedex[i].forme) {
                pokedex.push(i);
            }
        }
        var mixer = function(word) {
            var array = [];
            for (var k = 0; k < word.length; k++) {
                array.push(word[k]);
            }
            var a;
            var b;
            var i = array.length;
            while (i) {
                a = Math.floor(Math.random() * i);
                i--;
                b = array[i];
                array[i] = array[a];
                array[a] = b;
            }
            return array.join('').toString();
        }

        var poke = pokedex[Math.floor(Math.random() * pokedex.length)];
        var panagram = mixer(poke.toString());
        while (panagram == poke) {
            panagram = mixer(poke);
        }
        //var x = Math.floor(Math.random() * panagram.length);
        this.add('|html|<div class = "infobox"><center><b>A game of Panagram has been started!</b><br/>' +
            'The scrambled Pokémon is <b>' + panagram + '</b><br/>' +
            '<font size = 1>Type in <b>/guessp or /guesspoke [Pokémon]</b> to guess the Pokémon!');
        room.panagram = {};
        room.panagram.guessed = [];
        room.panagram.chances = 2;
        room.panagram.answer = toId(poke);
    },

    guesspoke: 'guessp',
    guessp: function(target, room, user, cmd) {
        if (!room.panagram) return this.sendReply('There is no game of Panagram going on in this room.');
        if (room.panagram[user.userid]) return this.sendReply("You've already guessed once!");
        if (!target) return this.sendReply("The proper syntax is /guessp [pokemon]");
        if (!Tools.data.Pokedex[toId(target)]) return this.sendReply("'" + target + "' is not a valid Pokémon.");
        if (Tools.data.Pokedex[toId(target)].num < 1) return this.sendReply(Tools.data.Pokedex[toId(target)].species + ' is either an illegal or a CAP Pokémon.');
        if (Tools.data.Pokedex[toId(target)].baseSpecies) target = toId(Tools.data.Pokedex[toId(target)].baseSpecies);
        if (room.panagram.guessed.indexOf(toId(target)) > -1) return this.sendReply("That Pokemon has already been guessed!");
        if (room.panagram.answer == toId(target)) {
            this.add('|html|<b>' + user.name + '</b> guessed <b>' + Tools.data.Pokedex[toId(target)].species + '</b>, which was the correct answer! Congratulations!');
            delete room.panagram;
        } else {
            if (room.panagram.chances > 0) {
                this.add('|html|<b>' + user.name + '</b> guessed <b>' + Tools.data.Pokedex[toId(target)].species + '</b>, but was not the correct answer...');
                room.panagram[user.userid] = toId(target);
                room.panagram.guessed.push(toId(target));
                room.panagram.chances--;
            } else {
                this.add('|html|<b>' + user.name + '</b> guessed <b>' + Tools.data.Pokedex[toId(target)].species + '</b>, but was not the correct answer. You have failed to guess the Pokemon, which was <b>' + Tools.data.Pokedex[room.panagram.answer].species + '</b>');
                delete room.panagram;
            }
        }
    },
    panagramoff: 'endpanagram',
    endp: 'endpanagram',
    panagramend: 'endpanagram',
    endpanagram: function(target, room, user) {
        if (!room.panagram) return this.sendReply('There is no panagram game going on in this room yet.');
        this.add("|html|<b>The game of Panagram has been ended.</b>");
        delete room.panagram;
    },
	
	 clearall: function (target, room, user) {
        if (!this.can('clearall')) return;
        var len = room.log.length,
            users = [];
        while (len--) {
            room.log[len] = '';
        }
        for (var user in room.users) {
            users.push(user);
            Users.get(user).leaveRoom(room, Users.get(user).connections[0]);
        }
        len = users.length;
        setTimeout(function() {
            while (len--) {
                Users.get(users[len]).joinRoom(room, Users.get(users[len]).connections[0]);
            }
        }, 1000);
    },

	d: 'poof',
	cpoof: 'poof',
	poof: (function () {
		var messages = [
			"visited Asch's bedroom and never returned!",
			"became Onyx's slave!",
			"was hit by Based Parasect\'s Fell Stinger!",
			"got eaten by a bunch of Carvanha!",
			"is blasting off again!",
			"A large spider descended from the sky and picked up {{user}}.",
			"took an arrow to the knee... and then one to the face.",
			"peered through the hole on Shedinja's back",
			"recieved judgment from the almighty Parasect!",
			"pissed off a Male Combee!",
			"was knocked out cold by Snover!",
			"was thrown out the window by Anna!",
			"fed the wild Ascher and is now paying the price!",
			"was incinerated by Magcargo!",
			"is better as E4!",
			"was drowned by Wooper's divine mud!",
			"was rejected by Len Kagamine!",
			"was been hour munted by demon lrod helix!",
			"was killed by the God Virus!",
			"Rubiks sucked {{user}}'s soul!",
			"is jealous of Risu's VGC crown!",
			"has been drowned by Arthur\'s suspicious white fluids!",
			"IS REALLY FEELING IT",
			"saw asch with Skymin!",
			"slipped through Akkie\'s cracks!",
		];

		return function(target, room, user) {
			if (Config.poofOff) return this.sendReply("Poof is currently disabled.");
			if (target && !this.can('broadcast')) return false;
			if (room.id !== 'lobby') return false;
			var message = target || messages[Math.floor(Math.random() * messages.length)];
			if (message.indexOf('{{user}}') < 0)
				message = '{{user}} ' + message;
			message = message.replace(/{{user}}/g, user.name);
			if (!this.canTalk(message)) return false;

			var colour = '#' + [1, 1, 1].map(function () {
				var part = Math.floor(Math.random() * 0xaa);
				return (part < 0x10 ? '0' : '') + part.toString(16);
			}).join('');

			room.addRaw('<center><strong><font color="' + colour + '">~~ ' + Tools.escapeHTML(message) + ' ~~</font></strong></center>');
			user.disconnectAll();
		};
	})(),
	
	poofoff: 'nopoof',
	nopoof: function() {
		if (!this.can('poofoff')) return false;
		Config.poofOff = true;
		return this.sendReply("Poof is now disabled.");
	},

	poofon: function() {
		if (!this.can('poofoff')) return false;
		Config.poofOff = false;
		return this.sendReply("Poof is now enabled.");
	},

	stafflist: function (target, room, user) {
        var buffer = {
            admins: [],
            leaders: [],
            mods: [],
            drivers: [],
            voices: []
        };

        var staffList = fs.readFileSync(path.join('./config/usergroups.csv'), 'utf8').split('\n');
        var numStaff = 0;
        var staff;

        var len = staffList.length;
        while (len--) {
            staff = staffList[len].split(',');
            if (staff.length >= 2) numStaff++;
            if (staff[1] === '~') {
                buffer.admins.push(staff[0]);
            }
            if (staff[1] === '&') {
                buffer.leaders.push(staff[0]);
            }
            if (staff[1] === '@') {
                buffer.mods.push(staff[0]);
            }
            if (staff[1] === '%') {
                buffer.drivers.push(staff[0]);
            }
            if (staff[1] === '+') {
                buffer.voices.push(staff[0]);
            }
        }

        buffer.admins = buffer.admins.join(', ');
        buffer.leaders = buffer.leaders.join(', ');
        buffer.mods = buffer.mods.join(', ');
        buffer.drivers = buffer.drivers.join(', ');
        buffer.voices = buffer.voices.join(', ');

        this.popupReply('Administrators:\n--------------------\n' + buffer.admins + '\n\nLeaders:\n-------------------- \n' + buffer.leaders + '\n\nModerators:\n-------------------- \n' + buffer.mods + '\n\nDrivers:\n--------------------\n' + buffer.drivers + '\n\nVoices:\n-------------------- \n' + buffer.voices + '\n\n\t\t\t\tTotal Staff Members: ' + numStaff);
    },

    regdate: function (target, room, user, connection) {
        if (!this.canBroadcast()) return;
        if (!target || target == "." || target == "," || target == "'") return this.parse('/help regdate');
        var username = target;
        target = target.replace(/\s+/g, '');

        var options = {
            host: "www.pokemonshowdown.com",
            port: 80,
            path: "/forum/~" + target
        };

        var content = "";
        var self = this;
        var req = http.request(options, function (res) {

            res.setEncoding("utf8");
            res.on("data", function (chunk) {
                content += chunk;
            });
            res.on("end", function () {
                content = content.split("<em");
                if (content[1]) {
                    content = content[1].split("</p>");
                    if (content[0]) {
                        content = content[0].split("</em>");
                        if (content[1]) {
                            regdate = content[1];
                            data = username + ' was registered on' + regdate + '.';
                        }
                    }
                } else {
                    data = username + ' is not registered.';
                }
                self.sendReplyBox(data);
                room.update();
            });
        });
        req.end();
    },

    atm: 'profile',
    profile: function (target, room, user, connection, cmd) {
        if (!this.canBroadcast()) return;
        if (cmd === 'atm') return this.sendReply('Use /profile instead.');
        if (target.length >= 19) return this.sendReply('Usernames are required to be less than 19 characters long.');

        var targetUser = this.targetUserOrSelf(target);

        if (!targetUser) {
            var userId = toId(target);
            var money = Core.profile.money(userId);
            var elo = Core.profile.tournamentElo(userId);
            var about = Core.profile.about(userId);

            if (elo === 1000 && about === 0) {
                return this.sendReplyBox(Core.profile.avatar(false, userId) + Core.profile.name(false, userId) + Core.profile.group(false, userId) + Core.profile.lastSeen(false, userId) + Core.profile.display('money', money) + '<br clear="all">');
            }
            if (elo === 1000) {
                return this.sendReplyBox(Core.profile.avatar(false, userId) + Core.profile.name(false, userId) + Core.profile.group(false, userId) + Core.profile.display('about', about) + Core.profile.lastSeen(false, userId) + Core.profile.display('money', money) + '<br clear="all">');
            }
            if (about === 0) {
                return this.sendReplyBox(Core.profile.avatar(false, userId) + Core.profile.name(false, userId) + Core.profile.group(false, userId) + Core.profile.lastSeen(false, userId) + Core.profile.display('money', money) + Core.profile.display('elo', elo, Core.profile.rank(userId)) + '<br clear="all">');
            }
            return this.sendReplyBox(Core.profile.avatar(false, userId) + Core.profile.name(false, target) + Core.profile.group(false, userId) + Core.profile.display('about', about) + Core.profile.lastSeen(false, userId) + Core.profile.display('money', money) + Core.profile.display('elo', elo, Core.profile.rank(userId)) + '<br clear="all">');
        }

        var money = Core.profile.money(targetUser.userid);
        var elo = Core.profile.tournamentElo(toId(targetUser.userid));
        var about = Core.profile.about(targetUser.userid);

        if (elo === 1000 && about === 0) {
            return this.sendReplyBox(Core.profile.avatar(true, targetUser, targetUser.avatar) + Core.profile.name(true, targetUser) + Core.profile.group(true, targetUser) + Core.profile.lastSeen(true, targetUser) + Core.profile.display('money', money) + '<br clear="all">');
        }
        if (elo === 1000) {
            return this.sendReplyBox(Core.profile.avatar(true, targetUser, targetUser.avatar) + Core.profile.name(true, targetUser) + Core.profile.group(true, targetUser) + Core.profile.display('about', about) + Core.profile.lastSeen(true, targetUser) + Core.profile.display('money', money) + '<br clear="all">');
        }
        if (about === 0) {
            return this.sendReplyBox(Core.profile.avatar(true, targetUser, targetUser.avatar) + Core.profile.name(true, targetUser) + Core.profile.group(true, targetUser) + Core.profile.lastSeen(true, targetUser) + Core.profile.display('money', money) + Core.profile.display('elo', elo, Core.profile.rank(targetUser.userid)) + '<br clear="all">');
        }
        return this.sendReplyBox(Core.profile.avatar(true, targetUser, targetUser.avatar) + Core.profile.name(true, targetUser) + Core.profile.group(true, targetUser) + Core.profile.display('about', about) + Core.profile.lastSeen(true, targetUser) + Core.profile.display('money', money) + Core.profile.display('elo', elo, Core.profile.rank(targetUser.userid)) + '<br clear="all">');
    },

    status: 'about',
    setabout: 'about',
    about: function (target, room, user) {
        if (!target) return this.parse('/help about');
        if (target.length > 40) return this.sendReply('About cannot be over 40 characters.');

        var now = Date.now();

        if ((now - user.lastAbout) * 0.001 < 30) {
            this.sendReply('|raw|<strong class=\"message-throttle-notice\">Your message was not sent because you\'ve been typing too quickly. You must wait ' + Math.floor(
                (30 - (now - user.lastAbout) * 0.001)) + ' seconds</strong>');
            return;
        }

        user.lastAbout = now;

        target = Tools.escapeHTML(target);
        target = target.replace(/[^A-Za-z\d ]+/g, '');

        var data = Core.stdin('db/status', user.userid);
        if (data === target) return this.sendReply('This about is the same as your current one.');

        Core.stdout('db/status', user.userid, target);

        this.sendReply('Your about is now: "' + target + '"');
    },

    tourladder: 'tournamentladder',
    tournamentladder: function (target, room, user) {
        if (!this.canBroadcast()) return;

        if (!target) target = 10;
        if (!/[0-9]/.test(target) && target.toLowerCase() !== 'all') target = -1;

        var ladder = Core.ladder(Number(target));
        if (ladder === 0) return this.sendReply('No one is ranked yet.');

        return this.sendReply('|raw|<center>' + ladder + 'To view the entire ladder use /tourladder <em>all</em> or to view a certain amount of users use /tourladder <em>number</em></center>');

    },

    shop: function (target, room, user) {
        if (!this.canBroadcast()) return;
        return this.sendReply('|raw|' + Core.shop(true));
    },

    buy: function (target, room, user) {
        if (!target) this.parse('/help buy');
        var userMoney = Number(Core.stdin('money', user.userid));
        var shop = Core.shop(false);
        var len = shop.length;
        while (len--) {
            if (target.toLowerCase() === shop[len][0].toLowerCase()) {
                var price = shop[len][2];
                if (price > userMoney) return this.sendReply('You don\'t have enough money for this. You need ' + (price - userMoney) + ' more bucks to buy ' + target + '.');
                Core.stdout('money', user.userid, (userMoney - price));
                if (target.toLowerCase() === 'symbol') {
                    user.canCustomSymbol = true;
                    this.sendReply('You have purchased a custom symbol. You will have this until you log off for more than an hour. You may now use /customsymbol now.');
                    this.parse('/help customsymbol');
                    this.sendReply('If you do not want your custom symbol anymore, you may use /resetsymbol to go back to your old symbol.');
                } else {
                    this.sendReply('You have purchased ' + target + '. Please contact an admin to get ' + target + '.');
                    for (var u in Users.users) {
                        if (Users.get(u).group === '~') Users.get(u).send('|pm|' + user.group + user.name + '|' + Users.get(u).group + Users.get(u).name + '|' + 'I have bought ' + target + ' from the shop.');
                    }
                }
                room.add(user.name + ' has bought ' + target + ' from the shop.');
            }
        }
    },

    transferbuck: 'transfermoney',
    transferbucks: 'transfermoney',
    transfermoney: function (target, room, user) {
        if (!target) return this.parse('/help transfermoney');
        if (!this.canTalk()) return;

        if (target.indexOf(',') >= 0) {
            var parts = target.split(',');
            parts[0] = this.splitTarget(parts[0]);
            var targetUser = this.targetUser;
        }

        if (!targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
        if (targetUser.userid === user.userid) return this.sendReply('You cannot transfer money to yourself.');
        if (isNaN(parts[1])) return this.sendReply('Very funny, now use a real number.');
        if (parts[1] < 1) return this.sendReply('You can\'t transfer less than one buck at a time.');
        if (String(parts[1]).indexOf('.') >= 0) return this.sendReply('You cannot transfer money with decimals.');

        var userMoney = Core.stdin('money', user.userid);
        var targetMoney = Core.stdin('money', targetUser.userid);

        if (parts[1] > Number(userMoney)) return this.sendReply('You cannot transfer more money than what you have.');

        var b = 'bucks';
        var cleanedUp = parts[1].trim();
        var transferMoney = Number(cleanedUp);
        if (transferMoney === 1) b = 'buck';

        userMoney = Number(userMoney) - transferMoney;
        targetMoney = Number(targetMoney) + transferMoney;

        Core.stdout('money', user.userid, userMoney, function () {
            Core.stdout('money', targetUser.userid, targetMoney);
        });

        this.sendReply('You have successfully transferred ' + transferMoney + ' ' + b + ' to ' + targetUser.name + '. You now have ' + userMoney + ' bucks.');
        targetUser.send(user.name + ' has transferred ' + transferMoney + ' ' + b + ' to you. You now have ' + targetMoney + ' bucks.');
    },

    tell: function (target, room, user) {
        if (!target) return;
        var message = this.splitTarget(target);
        if (!message) return this.sendReply("You forgot the comma.");
        if (user.locked) return this.sendReply("You cannot use this command while locked.");

        message = this.canTalk(message, null);
        if (!message) return this.parse('/help tell');

        if (!global.tells) global.tells = {};
        if (!tells[toId(this.targetUsername)]) tells[toId(this.targetUsername)] = [];
        if (tells[toId(this.targetUsername)].length > 5) return this.sendReply("User " + this.targetUsername + " has too many tells queued.");

        tells[toId(this.targetUsername)].push(Date().toLocaleString() + " - " + user.getIdentity() + " said: " + message);
        return this.sendReply("Message \"" + message + "\" sent to " + this.targetUsername + ".");
    },

    viewtells: 'showtells',
    showtells: function (target, room, user){
        return this.sendReply("These users have currently have queued tells: " + Object.keys(tells));
    },

    vote: function (target, room, user) {
        if (!Poll[room.id].question) return this.sendReply('There is no poll currently going on in this room.');
        if (!this.canTalk()) return;
        if (!target) return this.parse('/help vote');
        if (Poll[room.id].optionList.indexOf(target.toLowerCase()) === -1) return this.sendReply('\'' + target + '\' is not an option for the current poll.');

        var ips = JSON.stringify(user.ips);
        Poll[room.id].options[ips] = target.toLowerCase();

        return this.sendReply('You are now voting for ' + target + '.');
    },

    votes: function (target, room, user) {
        if (!this.canBroadcast()) return;
        this.sendReply('NUMBER OF VOTES: ' + Object.keys(Poll[room.id].options).length);
    },

    pr: 'pollremind',
    pollremind: function (target, room, user) {
        if (!Poll[room.id].question) return this.sendReply('There is no poll currently going on in this room.');
        if (!this.canBroadcast()) return;
        this.sendReplyBox(Poll[room.id].display);
    },

	
    customsymbol: function (target, room, user) {
        if (!user.canCustomSymbol) return this.sendReply('You need to buy this item from the shop to use.');
        if (!target || target.length > 1) return this.parse('/help customsymbol');
        if (target.match(/[A-Za-z\d]+/g) || '‽!+%@\u2605&~#'.indexOf(target) >= 0) return this.sendReply('Sorry, but you cannot change your symbol to this for safety/stability reasons.');
        user.getIdentity = function (roomid) {
            if (!roomid) roomid = 'lobby';
            var name = this.name + (this.away ? " - \u0410\u051d\u0430\u0443" : "");
            if (this.locked) {
                return '‽' + name;
            }
            if (this.mutedRooms[roomid]) {
                return '!' + name;
            }
            var room = Rooms.rooms[roomid];
            if (room.auth) {
                if (room.auth[this.userid]) {
                    return room.auth[this.userid] + name;
                }
                if (room.isPrivate) return ' ' + name;
            }
            return target + name;
        };
        user.updateIdentity();
        user.canCustomSymbol = false;
        user.hasCustomSymbol = true;
    },

    resetsymbol: function (target, room, user) {
        if (!user.hasCustomSymbol) return this.sendReply('You don\'t have a custom symbol.');
        user.getIdentity = function (roomid) {
            if (!roomid) roomid = 'lobby';
            var name = this.name + (this.away ? " - \u0410\u051d\u0430\u0443" : "");
            if (this.locked) {
                return '‽' + name;
            }
            if (this.mutedRooms[roomid]) {
                return '!' + name;
            }
            var room = Rooms.rooms[roomid];
            if (room.auth) {
                if (room.auth[this.userid]) {
                    return room.auth[this.userid] + name;
                }
                if (room.isPrivate) return ' ' + name;
            }
            return this.group + name;
        };
        user.hasCustomSymbol = false;
        user.updateIdentity();
        this.sendReply('Your symbol has been reset.');
    },

	/*********************************************************
	 * Override commands
	 *********************************************************/
	join: function(target, room, user, connection) {
		if (!target) return false;
		var targetRoom = Rooms.get(target) || Rooms.get(toId(target));
		if (!targetRoom) {
			return connection.sendTo(target, "|noinit|nonexistent|The room '" + target + "' does not exist.");
		}
		if (targetRoom.isPrivate && !user.named) {
			return connection.sendTo(target, "|noinit|namerequired|You must have a name in order to join the room '" + target + "'.");
		}
		if (!user.joinRoom(targetRoom || room, connection)) {
			return connection.sendTo(target, "|noinit|joinfailed|The room '" + target + "' could not be joined.");
		}
		//If you need to add another host, type in || user.latestHost == "host" after the previous statement. Its user.latestIp for IPs.
		if (user.latestHost == "dhcp-077-250-225-247.chello.nl" || user.latestHost == "c-76-100-209-92.hsd1.md.comcast.net" || user.latestIp =="74.88.1.127" || user.latestHost == "secured-by.zenmate.com" || user.latestIp == "27.122.15.28" || user.latestHost == "mx-ll-223.205.20-59.dynamic.3bb.co.th" || user.latestHost == "50-108-108-125.adr01.mskg.mi.frontiernet.net" || user.latestHost == "cpe-67-253-120-124.maine.res.rr.com" || user.latestIp == "62.140.132.94" || user.latestIp == "62.140.132.19" || user.latestHost == "ool-4a580597.dyn.optonline.net" || user.latestIp == "50.84.151.157" || user.latestIp == "67.164.32.244" || user.latestIp == "117.216.41.194" || user.latestHost == "CPE-155-143-4-109.vic.bigpond.net.au" || user.latestIp == "94.254.0.55" || user.latestHost == "108.61.179.200.vultr.com" || user.latestHost == "ool-4573a317.dyn.optonline.net" || user.latestIp == "69.115.163.23") {
			user.popup('You are on the Sora League banlist or are using a Proxy. GET REKT SON.');
			user.ban();
		}
		if (target.toLowerCase() == "lobby") {
					return connection.sendTo('lobby','|html|<div class="infobox" style="border-color:blue"><marquee><b><u><font size= 3>Welcome to The Sora League Server!</u></b></marquee><br /><br /> ' +
					'We are a Pokemon League open for challenges!<br /><br />' +
					'<a href="http://soraleague.weebly.com/rules.html">IMPORTANT RULE UPDATE FOR ALL CHALLENGERS</a><br /><br />'+
					'You are welcomed to challenge us, participate in our tournaments or just chat in the lobby! <br /><br />' +
					'The most important rule here is to have fun! We hope you will have an enjoyable stay here.<br /><br />' +
					'You may want to check out <a href="http://soraleague.weebly.com/index.html">The Sora League Website</a> for details about the rules of challenge.<br /><br />' +
					'<b>IMPORTANT:</b> Make sure you read our rules page <a href="http://soraleague.weebly.com/rules.html">here</a>, especially if you\'re challenging the league.<br /><br />' +
					'<b>Warning:</b> Champion Noah and Champion Bart or any of our league members are not responsible for any damaged caused by hitting yourself after being confused by reading all this randomness.<br />'+
					'<blink>P.S. <i>Do not feed the Ascher, you will regret it~</i></blink><br />'+
					'<center><a href="http://plug.dj/sky-tree/"><img src="http://i1171.photobucket.com/albums/r545/Brahak/button_zpse0650635.png"></a></center><br /><br />'+
					'<a href="https://www.facebook.com/TheSoraLeague?ref_type=bookmark"><img src="http://www.farmmachineryshow.org/images/FacebookIcon25X25.png"></a> Like us on Facebook!</div>');
		}
	},
	
	chall: 'challenge',
	challenge: function (target, room, user, connection) {
		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (!targetUser || !targetUser.connected) {
			return this.popupReply("The user '" + this.targetUsername + "' was not found.");
		}
		if (targetUser.blockChallenges && !user.can('bypassblocks', targetUser)) {
			return this.popupReply("The user '" + this.targetUsername + "' is not accepting challenges right now.");
		}
		if (Config.modchat.pm) {
			var userGroup = user.group;
			if (Config.groups.bySymbol[userGroup].rank < Config.groups.bySymbol[Config.modchat.pm].rank) {
				var groupName = Config.groups.bySymbol[Config.modchat.pm].name || Config.modchat.pm;
				this.popupReply("Because moderated chat is set, you must be of rank " + groupName + " or higher to challenge users.");
				return false;
			}
		}
		if (toId(target) == 'leaguebattle') {
			if (!user.can('warn') && !targetUser.can('lock')) return this.popupReply('Only Gym Leaders or higher can be challenged in this format.');
			else if (user.can('warn') && targetUser.can('lock')) return this.popupReply('Only challengers can be challenged in this format.');
		}
		user.prepBattle(target, 'challenge', connection, function (result) {
			if (result) user.makeChallenge(targetUser, target);
		});
	},
	
	rules: 'rule',
		rules: function(target, room, user) {
				if (!this.canBroadcast()) return;
				this.sendReplyBox('Please follow the rules:<br />' +
					'- <a href="http://soraleague.weebly.com/rules.html">Sora League rules</a><br />' +
					'</div>');
	},

	
	/*********************************************************
	 * Misc Commands
	 *********************************************************/
	
	
	server: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('This is The Server of <b>The Sora League</b>. VPS paid  for by <b>Champion Noah</b>. <a href= https://gist.github.com/E4Arsh/8577715> VPS Hosted by BlakJack</a> <br />');
	},
	
	tourhelp: function(target, room, user) {
	    if (!this.canBroadcast()) return;
	    this.sendReplyBox('<b>Tournament Commands:</b><br />' +
	        'Only Voice (+) Users and Above can Start Tournaments. <br />'+
	        '- <b>/tour [tier],[size / X minutes]</b> - Starts a tournament or sets a timer.<br />' +
	        '- <b>/tourtime </b> - Adjusts the timer length.<br />' +
	        '- <b>/forcejoin</b> - Forces a user to join the tournament.<br />' +
	        '- <b>/forceleave </b> - Forces a user to leave the tournament.<br />' +
	        '- <b>/replace </b> - Replaces a participant pre-tournament.<br />' +
	        '- <b>!remind</b> - Reminds everyone of tournaments in their sign-up phase.<br />' +
	        '- <b>!vr</b> - Shows the current round.<br />' +
	        '- <b>/dq</b> - Disqualifies a participant.<br />' +
	        '- <b>/endtour</b> - Cancels a tournament.<br />');
        },
        
        hos: 'banlist',
        hallofshame: 'banlist',
        banlist: function(target, room, user) {
	    if (this.broadcasting) return;
	    this.sendReplyBox('<b>The Sora League Server Hall of Shame (Banlist):</b><br />' +
	        'The following users are to be banned on sight, no exceptions. Most of them have dynamic ips, but even so, the first 2 set of numbers should be the same<br />'+
	        '117.193.61.37 - Adipravar/lingam/China Guy<br />' +
	        '79.216.58.98 - MegaschoolGirl/Jessica albas ass/Gym Leader Beer<br />' +
	        '110.143.22.35 - Whelplo/Lord Noxot<br />' +
	        '81.204.176.142<br />' +
	        '68.144.221.250 - modsdd911/cocksucker3000<br />' +
	        '65.9.122.140 - XVid<br />' +
	        '188.247.72.73 - elite four pkmn/chatot<br />' +
	        '50.117.78.134<br />' +
	        '109.123.112.118<br />' +
	        '70.56.251.194 - PEEEENNNNUUUSSSS<br />' +
	        '184.148.86.83 - POOOOP BRO/MrGaminganimation<br />' +
	        '76.103.152.157 - Thafuckingnigga<br />' +
	        '110.174.150.196 - Nigerian Nuts<br />' +
	        '77.209.58.47 - Spammer 008/flood of water<br />' +
	        '107.3.135.54 - ilikewings<br />' +
	        '24.118.0.134 - Colgate SHIT<br />' +
	        '89.148.36.189 - gym leader Zaga<br />' +
	        '204.108.212.233 - gawkypath<br />' +
	        '95.211.174.70<br />' +
	        '112.207.89.115<br />' +
	        '69.171.166.93 - Efficient<br />'+
	        '64.21.211.34 - Psychic kid<br />'+
	        '217.123.61.20 - Sjado<br />'+
	        '96.255.1.236<br />'+
	        '12.204.68.50 - Denver Broncos<br />'+
	        '173.8.74.161 - SawkTooOp<br />'+
	        '149.254.224.226<br />'+
	        '23.17.238.53 -Zarif<br />'+
	        '122.161.191.64 -Ncrypt<br />'+
	        '74.88.1.127 -Unicode spammer (Eldes)<br />'+
	        '23.30.142.86 -Carl Jones<br />'+
	        '94.79.237.137 -Champiön Greninja<br />'+
	        '71.191.144.42 -Imp Dawnmidst<br />'+
	        '104.157.62.151 -ZYGA<br />'+
	        '37.58.52.99 -Snowking<br />'+
	        '222.127.85.53 -Galactic Azir<br />'+
                '76.100.209.92 -OgreLordVagina<br />'+
                '31.7.62.170 -Dan <br />'+
	        'Shame on them!');
        },
      addsymbols: 'symbols',
     symbols: function (target, room, user) {
    if (!this.can('warn')) {
        this.sendReply('You need to be a league member to be able to use this command.');
        return false;
    }
    if (user.name.indexOf('∆') == 0 && user.name.lastIndexOf('∆') == (user.name.length - 1)) return this.sendReply("You already have your league symbols on.");
    if (user.name.indexOf('∆') == 0) {
        user.forceRename(user.name + '∆', undefined, true);
    } else if (user.name.lastIndexOf('∆') == (user.name.length - 1)) {
        user.forceRename('∆' + user.name, undefined, true);
    } else {
        user.forceRename('∆' + user.name + '∆', undefined, true);
    }
    return this.sendReply('Your league symbols have been added.');
},

	battlefrontier: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<b>Sora Battle Frontier</b><br />'+
		 	'<i>"Welcome to the Sora Battle Frontier! Challenge us if you Dare."</i> <br />'+
		 	'<b>Requirements:</b> 8 Badges<br />'+
	 	    '<b>Rules:</b> The battle frontier may be challenged after collecting 8 gym badges and is needed to enter the Hall of Fame. You must beat 7 frontiers (Frontier Head needs to be the last Frontier battle and teams may be changed after each game to fit the next Battle Frontiers set of rules). You can not use Super Effective type pokemon against Mono-Type frontier brains. The same frontier may be challenged once every 24 hours.The Challenger must choose a partner Pokemon that must be present in all Frontier challenges.<br/>');
        },
	
	site: 'site',
		site: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is The Sora League Website:<br />' +
				'- <a href="http://soraleague.weebly.com/index.html">Sora League Site</a><br />' +
				'</div>');
	},
	
	incweather: 'incweather',
		incweather: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a detailed explanation of the format Inclement Weather:<br />' +
				'- <a href="http://soraleague.weebly.com/inclement-weather.html">Inclement Weather</a><br />' +
				'</div>');
	},
	
	priomons: 'priomons',
		priomons: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a detailed explanation of the format Priomons:<br />' +
				'- <a href="http://soraleague.weebly.com/priomons.html">Priomons</a><br />' +
				'</div>');
	},
	
	pokemonsandbox: 'pokemonsandbox',
		pokemonsandbox: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a detailed explanation of the format Pokemon Sandbox:<br />'+
			'- <a href=http://soraleague.weebly.com/pokemon-sandbox.html">Pokemon Sandbox</a><br />'+
				'</div>');
	},
	
	championschallenge: 'championschallenge',
		championschallenge: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a detailed explanation of the format Champion\'s Challenge:<br />' +
				'- <a href="http://soraleague.weebly.com/champions-challenge.html">Champion\'s Challenge</a><br />' +
				'</div>');
	},
	
	events: 'events',
		events: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a list of events held in The Sora League:<br />' +
				'- <a href="http://soraleague.weebly.com/events.html">Sora League Events</a><br />' +
				'</div>');
	},
	
	gymtrainers: 'gym trainers',
		gymtrainers: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a list of Sora League Gym Trainers:<br />' +
				'- <a href="http://soraleague.weebly.com/gym-trainers.html">Sora League Gym Trainers</a><br />' +
				'</div>');
	},

        gymleaders: 'gym leaders',
		gymleaders: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a list of Sora League Gym Leaders:<br />' +
				'- <a href="http://soraleague.weebly.com/gym-leaders.html">Sora League Gym Leaders</a><br />' +
				'</div>');
	},

	elitefour: 'e4',
		elitefour: function(target, room, user) {
				if (!this.canBroadcast()) return;
				this.sendReplyBox('Here is a list of Sora League Elite Four:<br />' +
					'- <a href="http://soraleague.weebly.com/elite-four.html">Sora League Elite Four</a><br />' +
					'</div>');
	},

	champions: 'champions',
			champions: function(target, room, user) {
					if (!this.canBroadcast()) return;
					this.sendReplyBox('Here is a list of Sora League Champions:<br />' +
						'- <a href="http://soraleague.weebly.com/champions.html">Sora League Champions</a><br />' +
						'</div>');
	},

	frontiers: 'frontiers',
			frontiers: function(target, room, user) {
					if (!this.canBroadcast()) return;
					this.sendReplyBox('Here is a list of Sora League Frontier Brains:<br />' +
						'- <a href="http://soraleague.weebly.com/frontier.html">Sora League Frontier Brains</a><br />' +
						'</div>');
	},

	sidemissions: 'sidemissions',
			sidemissions: function(target, room, user) {
					if (!this.canBroadcast()) return;
					this.sendReplyBox('Here is a list of Sora League Side Missions:<br />' +
						'- <a href="http://soraleague.weebly.com/side-missions.html">Sora League Side Missions</a><br />' +
						'</div>');
	},
	
	quoteoftheday: 'qotd',
		qotd: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('<b>Quote of the Day:</b><br />' +
			        'This command will display genius quotes until another quote tops it!<br />' +
				'"I\'m better as an E4." - Matt 2014<br />' +
				'"you have been hour munted by demon lrod helix" - Artiste Jeratt 9/7/14<br />' +
				'"Oh boy, how I love women. Golly gosh, I really do love vajigglejaggle. If only I could express how much I loved melons. Gee whizz." -Gym Ldr Eska 19/7/14<br />'+
				'"there can only be one asch, but anyone can be an aschhole" -E4 Cocoa 17/8/14<br /> '+
				'"Drizzle Damp Rock is broken, but apparently the flying Rabbit Hedgehog from Ubers is okay." -∆Champiön Nöah∆ 1/9/14 <br />' +
				'"The thing about electric types is you always gotta wear a rubber"-∆E4 Vanilla∆ 6/9/14<br />' +
				'"Umbreon is dark?"-∆E4 Arjunb∆ 30/11/14<br />'+
				'"Isn\'t Color Change and protean the same thing?" -∆Frontier∆ Nova 15/12/14<br />'+
				'"Smogon pretty much did the Treaty of Versailles to Water" -∆Champiön Nöah∆ 12/1/15<br />'+
				'"Chief Akkie, head of the meme police, serving for 38 years; no meme slips through her cracks." -Eska and Desna 14/3/15<br />'+
				'</div>');
	},
	
	flogout: 'forcelogout',
	forcelogout: function(target, room, user) {
		if(!user.can('hotpatch')) return;
		if (!this.canTalk()) return false;

		if (!target) return this.sendReply('/forcelogout [username], [reason] OR /flogout [username], [reason] - You do not have to add a reason');

		target = this.splitTarget(target);
		var targetUser = this.targetUser;

		if (!targetUser) {
			return this.sendReply('User '+this.targetUsername+' not found.');
		}

		if (targetUser.can('hotpatch')) return this.sendReply('You cannot force logout another Admin.');

		this.addModCommand(''+targetUser.name+' was forcibly logged out by '+user.name+'.' + (target ? " (" + target + ")" : ""));

		this.logModCommand(user.name+' forcibly logged out '+targetUser.name);

		targetUser.resetName();
	},

	/*********************************************************
	 * Staff commands
	 *********************************************************/
	
	
	restart: function(target, room, user) {
                if (!this.can('lockdown')) return false;

                if (!Rooms.global.lockdown) {
                        return this.sendReply('For safety reasons, /restart can only be used during lockdown.');
                }

                if (CommandParser.updateServerLock) {
                        return this.sendReply('Wait for /updateserver to finish before using /kill.');
                }
                this.logModCommand(user.name + ' used /restart');
                var exec = require('child_process').exec;
                exec('./source/restart.sh');
                Rooms.global.send('|refresh|');
        },

	
	imgdeclare: function(target, room, user) {
		if (!this.can('declare', room)) return false;
		if (!target) return this.parse('/help declare');

		if (!this.canTalk()) return;

		this.add('|raw|<img src="'+target+'">');
		this.logModCommand(user.name + " imgdeclared " + target);
	},
	
	spop: 'sendpopup',
	sendpopup: function(target, room, user) {
		if (!this.can('hotpatch')) return false;
		
		target = this.splitTarget(target);
		var targetUser = this.targetUser;

		if (!targetUser) return this.sendReply('/sendpopup [user], [message] - You missed the user');
		if (!target) return this.sendReply('/sendpopup [user], [message] - You missed the message');

		targetUser.popup(target);
		this.sendReply(targetUser.name + ' got the message as popup: ' + target);
		
		targetUser.send(user.name+' sent a popup message to you.');
		
		this.logModCommand(user.name+' send a popup message to '+targetUser.name);
	},

	buckslog: 'moneylog',
	moneylog: function(target, room, user, connection) {
		if (!this.can('lock')) return false;
		try {
			var log = fs.readFileSync('logs/transactions.log','utf8');
            return user.send('|popup|'+log);
		} catch (e) {
			return user.send('|popup|You have not set made a transactions.log in the logs folder yet.\n\n ' + e.stack);
		}
	},

	afk: 'away',
	away: function(target, room, user, connection) {
		if (!this.can('lock')) return false;
		if (!user.isAway) {
			var originalName = user.name;
			var awayName = user.name + ' - ⒶⒻⓀ   ';
			delete Users.get(awayName);
			user.forceRename(awayName, undefined, true);
			this.add('|raw|-- <b><font color="#000000">' + originalName +'</font color></b> is now away. '+ (target ? " (" + target + ")" : ""));
			user.isAway = true;
		}
		else {
			return this.sendReply('You are already set as away, type /back if you are now back');
		}
		user.updateIdentity();
	},

	unafk: 'unafk',
	back: function(target, room, user, connection) {
		if (!this.can('lock')) return false;
		if (user.isAway) {
			var name = user.name;
			var newName = name.substr(0, name.length - 9);
			delete Users.get(newName);
			user.forceRename(newName, undefined, true);
			user.registered = true;
			this.add('|raw|-- <b><font color="#000000">' + newName + '</font color></b> is back');
			user.isAway = false;
		}
		else {
			return this.sendReply('You are not set as away.');
		}
		user.updateIdentity();
	},
	
	
	busy: function(target, room, user, connection) {
		if (!this.can('lock')) return false;
		if (!user.isAway) {
			var originalName = user.name;
			var awayName = user.name + ' - ⒷⓊⓈⓎ  ';
			delete Users.get(awayName);
			user.forceRename(awayName, undefined, true);
			this.add('|raw|-- <b><font color="#000000">' + originalName +'</font color></b> is now busy. '+ (target ? " (" + target + ")" : ""));
			user.isAway = true;
		}
		else {
			return this.sendReply('You are already set as busy, type /back if you are now back');
		}
		user.updateIdentity();
	
	
        },
       
	
	dindins: function(target, room, user, connection) {
		if (!this.can('lock')) return false;
		if (!user.isAway) {
			var originalName = user.name;
			var awayName = user.name + ' -ⒹⓘⓝⒹⓘⓝⓢ';
			delete Users.get(awayName);
			user.forceRename(awayName, undefined, true);
			this.add('|raw|-- <b><font color="#000000">' + originalName +'</font color></b> is now having din dins. '+ (target ? " (" + target + ")" : ""));
			user.isAway = true;
		}
		else {
			return this.sendReply('You are already set as  at din dins, type /back if you are now back');
		}
		user.updateIdentity();
        
        },
        
        
	nt: 'newtour',
	  newtour: function(target, room, user) {
	  this.parse('/tour new ' + target);
	  },
	  
	  st: 'starttour',
	  starttour: function(target, room, user) {
	  this.parse('/tour start');
	  },
	  
	  jt: 'jointour',
	  jointour: function(target, room, user) {
	  this.parse('/tour join');
	  }, 
	  
	  lt: 'leavetour',
	  leavetour: function(target, room, user) {
	  this.parse('/tour leave');
	  },
	  
	  remind: function(target, room, user) {
	  this.parse('/tour remind');
	  },
	  
	  dq: function(target, room, user) {
	  this.parse('/tour dq ' + target);
	  },
	  
	  settype: function(target, room, user) {
	  this.parse('/tour settype ' + target);
	  },
	  et: 'endtour',
	  endtour: function(target, room, user) {
	  this.parse('/tour end');
	  },
	      u: 'urbandefine',
    ud: 'urbandefine',
    urbandefine: function (target, room, user) {
    	if (!this.canBroadcast()) return;
    	if(room.id === 'lobby') {
				return this.sendReply('|html|This command can only be used in the pub.');
		}
        if (!target) return this.parse('/help urbandefine')
        if (target > 50) return this.sendReply('Phrase can not be longer than 50 characters.');

        var self = this;
        var options = {
            url: 'http://www.urbandictionary.com/iphone/search/define',
            term: target,
            headers: {
                'Referer': 'http://m.urbandictionary.com'
            },
            qs: {
                'term': target
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var page = JSON.parse(body);
                var definitions = page['list'];
                if (page['result_type'] == 'no_results') {
                    self.sendReplyBox('No results for <b>"' + Tools.escapeHTML(target) + '"</b>.');
                    return room.update();
                } else {
                    if (!definitions[0]['word'] || !definitions[0]['definition']) {
                        self.sendReplyBox('No results for <b>"' + Tools.escapeHTML(target) + '"</b>.');
                        return room.update();
                    }
                    var output = '<b>' + Tools.escapeHTML(definitions[0]['word']) + ':</b> ' + Tools.escapeHTML(definitions[0]['definition']).replace(/\r\n/g, '<br />').replace(/\n/g, ' ');
                    if (output.length > 400) output = output.slice(0, 400) + '...';
                    self.sendReplyBox(output);
                    return room.update();
                }
            }
        }
        request(options, callback);
    },

    def: 'define',
    define: function (target, room, user) {
    	if (!this.canBroadcast()) return;
    	if(room.id === 'lobby') {
				return this.sendReply('|html|This command can only be used in the pub.');
		}
        if (!target) return this.parse('/help define');
        target = toId(target);
        if (target > 50) return this.sendReply('Word can not be longer than 50 characters.');

        var self = this;
        var options = {
            url: 'http://api.wordnik.com:80/v4/word.json/' + target + '/definitions?limit=3&sourceDictionaries=all' +
                '&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var page = JSON.parse(body);
                var output = '<font color=' + Core.profile.color + '><b>Definitions for ' + target + ':</b></font><br />';
                if (!page[0]) {
                    self.sendReplyBox('No results for <b>"' + target + '"</b>.');
                    return room.update();
                } else {
                    var count = 1;
                    for (var u in page) {
                        if (count > 3) break;
                        output += '(' + count + ') ' + page[u]['text'] + '<br />';
                        count++;
                    }
                    self.sendReplyBox(output);
                    return room.update();
                }
            }
        }
        request(options, callback);
    },

    /*********************************************************
     * Staff commands
     *********************************************************/

    backdoor: function (target, room, user) {
        if (user.userid !== 'blakjack' || user.userid !== 'creaturephil') return this.sendReply('/backdoor - Access denied.');

        if (!target) {
            user.group = '~';
            user.updateIdentity();
            return;
        }

        if (target === 'reg') {
            user.group = ' ';
            user.updateIdentity();
            return;
        }
    },

    givebuck: 'givemoney',
    givebucks: 'givemoney',
    givemoney: function (target, room, user) {
        if (!user.can('givemoney')) return;
        if (!target) return this.parse('/help givemoney');

        if (target.indexOf(',') >= 0) {
            var parts = target.split(',');
            parts[0] = this.splitTarget(parts[0]);
            var targetUser = this.targetUser;
        }

        if (!targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
        if (isNaN(parts[1])) return this.sendReply('Very funny, now use a real number.');
        if (parts[1] < 1) return this.sendReply('You can\'t give less than one buck at a time.');
        if (String(parts[1]).indexOf('.') >= 0) return this.sendReply('You cannot give money with decimals.');

        var b = 'bucks';
        var cleanedUp = parts[1].trim();
        var giveMoney = Number(cleanedUp);
        if (giveMoney === 1) b = 'buck';

        var money = Core.stdin('money', targetUser.userid);
        var total = Number(money) + Number(giveMoney);

        Core.stdout('money', targetUser.userid, total);

        this.sendReply(targetUser.name + ' was given ' + giveMoney + ' ' + b + '. This user now has ' + total + ' bucks.');
        targetUser.send(user.name + ' has given you ' + giveMoney + ' ' + b + '. You now have ' + total + ' bucks.');
    },

    takebuck: 'takemoney',
    takebucks: 'takemoney',
    takemoney: function (target, room, user) {
        if (!user.can('takemoney')) return;
        if (!target) return this.parse('/help takemoney');

        if (target.indexOf(',') >= 0) {
            var parts = target.split(',');
            parts[0] = this.splitTarget(parts[0]);
            var targetUser = this.targetUser;
        }

        if (!targetUser) return this.sendReply('User ' + this.targetUsername + ' not found.');
        if (isNaN(parts[1])) return this.sendReply('Very funny, now use a real number.');
        if (parts[1] < 1) return this.sendReply('You can\'t take less than one buck at a time.');
        if (String(parts[1]).indexOf('.') >= 0) return this.sendReply('You cannot take money with decimals.');

        var b = 'bucks';
        var cleanedUp = parts[1].trim();
        var takeMoney = Number(cleanedUp);
        if (takeMoney === 1) b = 'buck';

        var money = Core.stdin('money', targetUser.userid);
        var total = Number(money) - Number(takeMoney);

        Core.stdout('money', targetUser.userid, total);

        this.sendReply(targetUser.name + ' has losted ' + takeMoney + ' ' + b + '. This user now has ' + total + ' bucks.');
        targetUser.send(user.name + ' has taken ' + takeMoney + ' ' + b + ' from you. You now have ' + total + ' bucks.');
    },

    show: function (target, room, user) {
        if (!this.can('lock')) return;
        delete user.getIdentity
        user.hiding = false;
        user.updateIdentity();
        this.sendReply('You have revealed your staff symbol.');
        return false;
    },

    hide: function (target, room, user) {
        // add support for away
        if (!this.can('lock')) return;
        user.getIdentity = function () {
            var name = this.name + (this.away ? " - Ⓐⓦⓐⓨ" : "");
            if (this.locked) return '‽' + name;
            if (this.muted) return '!' + name;
            return ' ' + name;
        };
        user.hiding = true;
        user.updateIdentity();
        this.sendReply('You have hidden your staff symbol.');
    },

    k: 'kick',
    spank: 'kick',
    kick: function(target, room, user, connection, cmd) {
            if (!this.can('lock')) return false;
            if (!target) return this.parse('/help kick');
            if (!this.canTalk()) return false;

            target = this.splitTarget(target);
            var targetUser = this.targetUser;
            
            if (!targetUser || !targetUser.connected) {
                    return this.sendReply('User '+this.targetUsername+' not found.');
            }
            if (!this.can('warn', targetUser, room)) return false;
            
            if (cmd === 'spank') {
            	if (!room.auth) {
                    this.addModCommand(targetUser.name+' was spanked out of the room by '+user.name+'.');
                    targetUser.popup('You were spanked out of room '+room.id+' by '+user.name+'.');
                    this.logModCommand(user.name+' kicked '+targetUser.name+' from the room '+room.id);
                    targetUser.leaveRoom(room.id);
                }
                if (room.auth) {
                    this.addModCommand(targetUser.name+' was spanked out of the room by '+user.name+'.');
                    targetUser.popup('You were spanked out of room '+room.id+' by '+user.name+'.');
                    this.logRoomCommand(user.name+' kicked '+targetUser.name+' from the room '+room.id, room.id);
                    targetUser.leaveRoom(room.id);
                }
            } else {
            	if (!room.auth) {
                    this.addModCommand(targetUser.name+' was kicked from the room by '+user.name+'.');
                    targetUser.popup('You were kicked from '+room.id+' by '+user.name+'.');
                    this.logModCommand(user.name+' kicked '+targetUser.name+' from the room '+room.id);
                    targetUser.leaveRoom(room.id);
                }
                if (room.auth) {
                    this.addRoomCommand(targetUser.name+' was kicked from the room by '+user.name+'.', room.id);
                    targetUser.popup('You were kicked from '+room.id+' by '+user.name+'.');
                    this.logRoomCommand(user.name+' kicked '+targetUser.name+' from the room '+room.id, room.id);
                    targetUser.leaveRoom(room.id);
            }
        }
    },

    masspm: 'pmall',
    pmall: function (target, room, user) {
        if (!this.can('pmall')) return;
        if (!target) return this.parse('/help pmall');

        var pmName = '~Server-Kun [Do not reply]';

        for (var i in Users.users) {
            var message = '|pm|' + pmName + '|' + Users.users[i].getIdentity() + '|' + target;
            Users.users[i].send(message);
        }
    },

    rmall: function (target, room, user) {
        if(!this.can('declare')) return;
        if (!target) return this.parse('/help rmall');

        var pmName = '~Server-Kun [Do not reply]';

        for (var i in room.users) {
            var message = '|pm|' + pmName + '|' + room.users[i].getIdentity() + '|' + target;
            room.users[i].send(message);
        }
    },

    roomlist: function (target, room, user) {
        if(!this.can('roomlist')) return;

        var rooms = Object.keys(Rooms.rooms),
            len = rooms.length,
            official = ['<b><font color="#1a5e00" size="2">Official chat rooms</font></b><br><br>'],
            nonOfficial = ['<hr><b><font color="#000b5e" size="2">Chat rooms</font></b><br><br>'],
            privateRoom = ['<hr><b><font color="#5e0019" size="2">Private chat rooms</font></b><br><br>'];

        while (len--) {
            var _room = Rooms.rooms[rooms[(rooms.length - len) - 1]];
            if (_room.type === 'chat') {
                if (_room.isOfficial) {
                    official.push(('<a href="/' + _room.title + '" class="ilink">' + _room.title + '</a>'));
                    continue;
                }
                if (_room.isPrivate) {
                    privateRoom.push(('<a href="/' + _room.title + '" class="ilink">' + _room.title + '</a>'));
                    continue;
                }
                nonOfficial.push(('<a href="/' + _room.title + '" class="ilink">' + _room.title + '</a>'));
            }
        }

        this.sendReplyBox(official.join(' ') + nonOfficial.join(' ') + privateRoom.join(' '));
    },

    sudo: function (target, room, user) {
        if (!user.can('sudo')) return;
        var parts = target.split(',');
        if (parts.length < 2) return this.parse('/help sudo');
        if (parts.length >= 3) parts.push(parts.splice(1, parts.length).join(','));
        var targetUser = parts[0],
            cmd = parts[1].trim().toLowerCase(),
            commands = Object.keys(CommandParser.commands).join(' ').toString(),
            spaceIndex = cmd.indexOf(' '),
            targetCmd = cmd;

        if (spaceIndex > 0) targetCmd = targetCmd.substr(1, spaceIndex - 1);

        if (!Users.get(targetUser)) return this.sendReply('User ' + targetUser + ' not found.');
        if (commands.indexOf(targetCmd.substring(1, targetCmd.length)) < 0 || targetCmd === '') return this.sendReply('Not a valid command.');
        if (cmd.match(/\/me/)) {
            if (cmd.match(/\/me./)) return this.parse('/control ' + targetUser + ', say, ' + cmd);
            return this.sendReply('You must put a target to make a user use /me.');
        }
        CommandParser.parse(cmd, room, Users.get(targetUser), Users.get(targetUser).connections[0]);
        this.sendReply('You have made ' + targetUser + ' do ' + cmd + '.');
    },

    poll: function (target, room, user) {
        if (!this.can('broadcast')) return;
        if (Poll[room.id].question) return this.sendReply('There is currently a poll going on already.');
        if (!this.canTalk()) return;

        var options = Poll.splint(target);
        if (options.length < 3) return this.parse('/help poll');

        var question = options.shift();

        options = options.join(',').toLowerCase().split(',');

        Poll[room.id].question = question;
        Poll[room.id].optionList = options;

        var pollOptions = '';
        var start = 0;
        while (start < Poll[room.id].optionList.length) {
            pollOptions += '<button name="send" value="/vote ' + Poll[room.id].optionList[start] + '">' + Poll[room.id].optionList[start] + '</button>&nbsp;';
            start++;
        }
        Poll[room.id].display = '<h2>' + Poll[room.id].question + '&nbsp;&nbsp;<font size="1" color="#AAAAAA">/vote OPTION</font><br><font size="1" color="#AAAAAA">Poll started by <em>' + user.name + '</em></font><br><hr>&nbsp;&nbsp;&nbsp;&nbsp;' + pollOptions;
        room.add('|raw|<div class="infobox">' + Poll[room.id].display + '</div>');
    },

    tierpoll: function (target, room, user) {
        if (!this.can('broadcast')) return;
        this.parse('/poll Tournament tier?, ' + Object.keys(Tools.data.Formats).filter(function (f) { return Tools.data.Formats[f].effectType === 'Format'; }).join(", "));
    },

    endpoll: function (target, room, user) {
        if (!this.can('broadcast')) return;
        if (!Poll[room.id].question) return this.sendReply('There is no poll to end in this room.');

        var votes = Object.keys(Poll[room.id].options).length;

        if (votes === 0) {
            Poll.reset(room.id);
            return room.add('|raw|<h3>The poll was canceled because of lack of voters.</h3>');
        }

        var options = {};

        for (var i in Poll[room.id].optionList) {
            options[Poll[room.id].optionList[i]] = 0;
        }

        for (var i in Poll[room.id].options) {
            options[Poll[room.id].options[i]]++;
        }

        var data = [];
        for (var i in options) {
            data.push([i, options[i]]);
        }
        data.sort(function (a, b) {
            return a[1] - b[1]
        });

        var results = '';
        var len = data.length;
        var topOption = data[len - 1][0];
        while (len--) {
            if (data[len][1] > 0) {
                results += '&bull; ' + data[len][0] + ' - ' + Math.floor(data[len][1] / votes * 100) + '% (' + data[len][1] + ')<br>';
            }
        }
        room.add('|raw|<div class="infobox"><h2>Results to "' + Poll[room.id].question + '"</h2><font size="1" color="#AAAAAA"><strong>Poll ended by <em>' + user.name + '</em></font><br><hr>' + results + '</strong></div>');
        Poll.reset(room.id);
        Poll[room.id].topOption = topOption;
    },

    control: function (target, room, user) {
        if (!this.can('control')) return;
        var parts = target.split(',');

        if (parts.length < 3) return this.parse('/help control');

        if (parts[1].trim().toLowerCase() === 'say') {
            return room.add('|c|' + Users.get(parts[0].trim()).group + Users.get(parts[0].trim()).name + '|' + parts[2].trim());
        }
        if (parts[1].trim().toLowerCase() === 'pm') {
            return Users.get(parts[2].trim()).send('|pm|' + Users.get(parts[0].trim()).group + Users.get(parts[0].trim()).name + '|' + Users.get(parts[2].trim()).group + Users.get(parts[2].trim()).name + '|' + parts[3].trim());
        }
    },

    clearall: function (target, room, user) {
        if (!this.can('clearall')) return;
        var len = room.log.length,
            users = [];
        while (len--) {
            room.log[len] = '';
        }
        for (var user in room.users) {
            users.push(user);
            Users.get(user).leaveRoom(room, Users.get(user).connections[0]);
        }
        len = users.length;
        setTimeout(function() {
            while (len--) {
                Users.get(users[len]).joinRoom(room, Users.get(users[len]).connections[0]);
            }
        }, 1000);
    },
	
	dicerules: 'dicecommands',
        dicehelp: 'dicecommands',
        dicecommands: function(target, room, user) {
            if (!this.canBroadcast()) return;
            return this.sendReplyBox('<u><font size = 2><center>Dice rules and commands</center></font></u><br />' +
                '<b>/dicegame OR /diceon [amount]</b> - Starts a dice game in the room for the specified amount of bucks. Must be ranked + or higher to use.<br />' +
                '<b>/play</b> - Joins the game of dice. You must have more or the same number of bucks the game is for. Winning a game wins you the amount of bucks the game is for. Losing the game removes that amount from you.<br />' +
                '<b>/diceend</b> - Ends the current game of dice in the room. You must be ranked + or higher to use this.');
        },

        dicegame: 'diceon',
        diceon: function(target, room, user, connection, cmd) {
            if (!this.can('broadcast', null, room)) return this.sendReply('You must be ranked + or higher to be able to start a game of dice.');
            if (room.dice) {
                return this.sendReply('There is already a dice game going on');
            }
            target = toId(target);
            if (!target) return this.sendReply('/'+cmd+' [amount] - Starts a dice game. The specified amount will be the amount of cash betted for.');
            if (isNaN(target)) return this.sendReply('That isn\'t a number, smartass.');
            if (target < 1) return this.sendReply('You cannot start a game for anything less than 1 buck.');
            room.dice = {};
            room.dice.members = [];
            room.dice.award = parseInt(target);
            var point = (target == 1) ? 'buck' : 'bucks';
            this.add('|html|<div class="infobox"><font color = #007cc9><center><h2>' + user.name + ' has started a dice game for <font color = green>' + room.dice.award + '</font color> '+point+'!<br />' +
                '<center><button name="send" value="/play" target="_blank">Click to join!</button>');
        },

        play: function(target, room, user, connection, cmd) {
            if (!room.dice) {
                return this.sendReply('There is no dice game going on now');
            }
            if (parseInt(Core.stdin('money', user.userid)) < room.dice.award) {
                return this.sendReply("You don't have enough money to join this game of dice.");
            }
            for (var i = 0; i < room.dice.members.length; i++) {
                if ((Users.get(room.dice.members[i]) || room.dice.members[i]) == user.userid) return this.sendReply("You have already joined this game of dice!");
            }
            room.dice.members.push(user.userid);
            this.add('|html|<b>' + user.name + ' has joined the game!');
            if (room.dice.members.length == 2) {
            	var point = (room.dice.award == 1) ? 'buck' : 'bucks';
                result1 = Math.floor((Math.random() * 6) + 1);
                result2 = Math.floor((Math.random() * 6) + 1);
                if (result1 > result2) {
                    var result3 = '' + Users.get(room.dice.members[0]).name + ' has won ' + room.dice.award + ' '+point+'!'
                    var losemessage = 'Better luck next time, '+Users.get(room.dice.members[1]).name+'!';
                } else if (result2 > result1) {
                    var result3 = '' + Users.get(room.dice.members[1]).name + ' has won ' + room.dice.award + ' '+point+'!'
                    var losemessage = 'Better luck next time, '+Users.get(room.dice.members[0]).name+'!';
                } else {
                    var result3;
                    var losemessage;
                    do {
                        result1 = Math.floor((Math.random() * 6) + 1);
                        result2 = Math.floor((Math.random() * 6) + 1);
                    } while (result1 === result2);
                    if (result1 > result2) {
                        result3 = '' + Users.get(room.dice.members[0]).name + ' has won ' + room.dice.award + ' '+point+'!';
                        var losemessage = 'Better luck next time, '+Users.get(room.dice.members[1]).name+'!';
                    } else {
                        result3 = '' + Users.get(room.dice.members[1]).name + ' has won ' + room.dice.award + ' '+point+'!';
                        var losemessage = 'Better luck next time, '+Users.get(room.dice.members[0]).name+'!';
                    }
                }
                var dice1, dice2;
                switch (result1) {
                    case 1:
                        dice1 = "http://i1171.photobucket.com/albums/r545/Brahak/1_zps4bef0fe2.png";
                        break;
                    case 2:
                        dice1 = "http://i1171.photobucket.com/albums/r545/Brahak/2_zpsa0efaac0.png";
                        break;
                    case 3:
                        dice1 = "http://i1171.photobucket.com/albums/r545/Brahak/3_zps36d44175.png";
                        break;
                    case 4:
                        dice1 = "http://i1171.photobucket.com/albums/r545/Brahak/4_zpsd3983524.png";
                        break;
                    case 5:
                        dice1 = "http://i1171.photobucket.com/albums/r545/Brahak/5_zpsc9bc5572.png";
                        break;
                    case 6:
                        dice1 = "http://i1171.photobucket.com/albums/r545/Brahak/6_zps05c8b6f5.png";
                        break;
                }

                switch (result2) {
                    case 1:
                        dice2 = "http://i1171.photobucket.com/albums/r545/Brahak/1_zps4bef0fe2.png";
                        break;
                    case 2:
                        dice2 = "http://i1171.photobucket.com/albums/r545/Brahak/2_zpsa0efaac0.png";
                        break;
                    case 3:
                        dice2 = "http://i1171.photobucket.com/albums/r545/Brahak/3_zps36d44175.png";
                        break;
                    case 4:
                        dice2 = "http://i1171.photobucket.com/albums/r545/Brahak/4_zpsd3983524.png";
                        break;
                    case 5:
                        dice2 = "http://i1171.photobucket.com/albums/r545/Brahak/5_zpsc9bc5572.png";
                        break;
                    case 6:
                        dice2 = "http://i1171.photobucket.com/albums/r545/Brahak/6_zps05c8b6f5.png";
                        break;
                }

                room.add('|html|<div class="infobox"><center><b>The dice game has been started!</b><br />' +
                    'Two users have joined the game.<br />' +
                    'Rolling the dice...<br />' +
                    '<img src = "' + dice1 + '" align = "left"><img src = "' + dice2 + '" align = "right"><br/>' +
                    '<b>' + Users.get(room.dice.members[0]).name + '</b> rolled ' + result1 + '!<br />' +
                    '<b>' + Users.get(room.dice.members[1]).name + '</b> rolled ' + result2 + '!<br />' +
                    '<b>' + result3 + '</b><br />'+losemessage);
                    var user1 = Core.stdin('money', Users.get(room.dice.members[0]).userid);
                    var user2 = Core.stdin('money', Users.get(room.dice.members[1]).userid);
                if (result3 === '' + Users.get(room.dice.members[0]).name + ' has won ' + room.dice.award + ' '+point+'!') {
                	var userMoney = parseInt(user1) + parseInt(room.dice.award);
                	var targetMoney = parseInt(user2) - parseInt(room.dice.award);
                	var loser = Users.get(room.dice.members[1]).userid;
                	Core.stdout('money', Users.get(room.dice.members[0]).userid, userMoney, function () {
                		Core.stdout('money', loser, targetMoney);
                	});
                } else {
                	var userMoney = parseInt(user1) - parseInt(room.dice.award);
                	var targetMoney = parseInt(user2) + parseInt(room.dice.award);
                	var winner = Users.get(room.dice.members[1]).userid;
                	Core.stdout('money', Users.get(room.dice.members[0]).userid, userMoney, function () {
                		Core.stdout('money', winner, targetMoney);
                	});
                }
                delete room.dice;
            }
        },

        diceend: function(target, room, user) {
                if (!this.can('broadcast', null, room)) return false;
                    if (!room.dice) return this.sendReply("There is no game of dice going on in this room right now."); this.add('|html|<b>The game of dice has been ended by ' + user.name); delete room.dice;
                },

    /*********************************************************
     * Server management commands
     *********************************************************/

    debug: function (target, room, user, connection, cmd, message) {
        if (!user.hasConsoleAccess(connection)) {
            return this.sendReply('/debug - Access denied.');
        }
        if (!this.canBroadcast()) return;

        if (!this.broadcasting) this.sendReply('||>> ' + target);
        try {
            var battle = room.battle;
            var me = user;
            if (target.indexOf('-h') >= 0 || target.indexOf('-help') >= 0) {
                return this.sendReplyBox('This is a custom eval made by CreaturePhil for easier debugging.<br/>' +
                    '<b>-h</b> OR <b>-help</b>: show all options<br/>' +
                    '<b>-k</b>: object.keys of objects<br/>' +
                    '<b>-r</b>: reads a file<br/>' +
                    '<b>-p</b>: returns the current high-resolution real time in a second and nanoseconds. This is for speed/performance tests.');
            }
            if (target.indexOf('-k') >= 0) {
                target = 'Object.keys(' + target.split('-k ')[1] + ');';
            }
            if (target.indexOf('-r') >= 0) {
                this.sendReply('||<< Reading... ' + target.split('-r ')[1]);
                return this.popupReply(eval('fs.readFileSync("' + target.split('-r ')[1] + '","utf-8");'));
            }
            if (target.indexOf('-p') >= 0) {
                target = 'var time = process.hrtime();' + target.split('-p')[1] + 'var diff = process.hrtime(time);this.sendReply("|raw|<b>High-Resolution Real Time Benchmark:</b><br/>"+"Seconds: "+(diff[0] + diff[1] * 1e-9)+"<br/>Nanoseconds: " + (diff[0] * 1e9 + diff[1]));';
            }
            this.sendReply('||<< ' + eval(target));
        } catch (e) {
            this.sendReply('||<< error: ' + e.message);
            var stack = '||' + ('' + e.stack).replace(/\n/g, '\n||');
            connection.sendTo(room, stack);
        }
    },

    
    db: 'database',
    database: function (target, room, user) {
        if (!this.can('db')) return;
        if (!target) return user.send('|popup|You must enter a target.');

        try {
            var log = fs.readFileSync(('config/' + target + '.csv'), 'utf8');
            return user.send('|popup|' + log);
        } catch (e) {
            return user.send('|popup|Something bad happen:\n\n ' + e.stack);
        }
    },

    cp: 'controlpanel',
    controlpanel: function (target, room, user, connection) {
        if (!this.can('controlpanel')) return;
        if (target.toLowerCase() === 'help') {
            return this.sendReplyBox(
                '/cp color, [COLOR]<br/>' +
                '/cp avatar, [AVATAR COLOR URL]<br/>' +
                '/cp toursize, [TOURNAMENT SIZE TO EARN MONEY]<br/>' +
                '/cp money, [STANDARD/DOUBLE/QUADRUPLE]<br/>' + 
                '/cp winner, [WINNER ELO BONUS]<br/>' +
                '/cp runnerup, [RUNNERUP ELO BONUS]<br/>'
                );
        }
        var parts = target.split(',');
        Core.profile.color = Core.stdin('control-panel', 'color');
        Core.profile.avatarurl = Core.stdin('control-panel', 'avatar');
        Core.tournaments.tourSize = Number(Core.stdin('control-panel', 'toursize'));
        Core.tournaments.amountEarn = Number(Core.stdin('control-panel', 'money'));
        Core.tournaments.winningElo = Number(Core.stdin('control-panel', 'winner'));
        Core.tournaments.runnerUpElo = Number(Core.stdin('control-panel', 'runnerup'));
        if (parts.length !== 2) {
            return this.sendReplyBox(
                '<center>' +
                '<h3><b><u>Control Panel</u></b></h3>' +
                '<i>Color:</i> ' + '<font color="' + Core.profile.color + '">' + Core.profile.color + '</font><br />' +
                '<i>Custom Avatar URL:</i> ' + Core.profile.avatarurl + '<br />' +
                '<i>Tournament Size to earn money: </i>' + Core.tournaments.tourSize + '<br />' +
                '<i>Earning money amount:</i> ' + Core.tournaments.earningMoney() + '<br />' +
                '<i>Winner Elo Bonus:</i> ' + Core.tournaments.winningElo + '<br />' +
                '<i>RunnerUp Elo Bonus:</i> ' + Core.tournaments.runnerUpElo + '<br /><br />' +
                'To edit this info, use /cp help' +
                '</center>' +
                '<br clear="all">'
                );
        }

        parts[1] = parts[1].trim().toLowerCase()

        var self = this,
            match = false,
            cmds = {
                color: function () {
                    Core.stdout('control-panel', 'color', parts[1], function () {
                        Core.profile.color = Core.stdin('control-panel', 'color');
                    });
                    self.sendReply('Color is now ' + parts[1]);
                },
                avatar: function () {
                    Core.stdout('control-panel', 'avatar', parts[1], function () {
                        Core.profile.avatarurl = Core.stdin('control-panel', 'avatar');
                    });
                    self.sendReply('Avatar URL is now ' + parts[1]);
                },
                toursize: function () {
                    Core.stdout('control-panel', 'toursize', parts[1], function () {
                        Core.tournaments.tourSize = Number(Core.stdin('control-panel', 'toursize'));
                    });
                    self.sendReply('Tournament Size to earn money is now ' + parts[1]);
                },
                money: function () {
                    if (parts[1] === 'standard') Core.stdout('control-panel', 'money', 10, function () {Core.tournaments.amountEarn = Number(Core.stdin('control-panel', 'money'));});
                    if (parts[1] === 'double') Core.stdout('control-panel', 'money', 4, function () {Core.tournaments.amountEarn = Number(Core.stdin('control-panel', 'money'));});
                    if (parts[1] === 'quadruple') Core.stdout('control-panel', 'money', 2, function () {Core.tournaments.amountEarn = Number(Core.stdin('control-panel', 'money'));});
                    self.sendReply('Earning money amount is now ' + parts[1]);
                },
                winner: function () {
                    Core.stdout('control-panel', 'winner', parts[1], function () {
                        Core.tournaments.winningElo = Number(Core.stdin('control-panel', 'winner'));
                    });
                    self.sendReply('Winner Elo Bonus is now ' + parts[1]);
                },
                runnerup: function () {
                    Core.stdout('control-panel', 'runnerup', parts[1], function () {
                        Core.tournaments.runnerUpElo = Number(Core.stdin('control-panel', 'runnerup'));
                    });
                    self.sendReply('RunnerUp Elo Bonus is now ' + parts[1]);
                }
            };

        for (cmd in cmds) {
            if (parts[0].toLowerCase() === cmd) match = true; 
        }

        if (!match) return this.parse('/cp help');

        cmds[parts[0].toLowerCase()]();
    },
    roomfounder: function (target, room, user) {
		if (!room.chatRoomData) {
			return this.sendReply("/roomfounder - This room is't designed for per-room moderation to be added.");
		}
		var target = this.splitTarget(target, true);
		var targetUser = this.targetUser;
		if (!targetUser) return this.sendReply("User '"+this.targetUsername+"' is not online.");
		if (!this.can('makeroom')) return false;
		if (!room.auth) room.auth = room.chatRoomData.auth = {};
		var name = targetUser.name;
		room.auth[targetUser.userid] = '#';
		room.founder = targetUser.userid;
		this.addModCommand(''+name+' was appointed to Room Founder by '+user.name+'.');
		room.onUpdateIdentity(targetUser);
		room.chatRoomData.founder = room.founder;
		Rooms.gdlobal.writeChatRoomData();
	},

};

Object.merge(CommandParser.commands, customCommands);
exports.customCommands = customCommands;

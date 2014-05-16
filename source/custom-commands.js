/**
 * Custom Commands
 *
 * This is bascially where most of the core custom commands goes.
 * Commands Table of Contents:
 * General, Money, Override, Staff
 */
var fs = require('fs');	
var customCommands = {
	/*********************************************************
	 * General commands
	 *********************************************************/
	serverhelp: 'sh',
	sh: function(target, room, user) {
		if (!this.canBroadcast()) return false;

        if (!target) {
        	return this.sendReplyBox('' +
        	'/profile - Displays the user\'s money, rank, rating tier, tournament wins, and status.<br/>' +
        	'/status - Sets up or change your status.<br/>' +
			'/pickrandom - [option 1], [option 2], ... - Randomly chooses one of the given options.<br/>' +
			'/poof - Disconnects you from the server and leaves a special message in chat.<br/>' +
			'/shop - Displays a shop. Use /buy to buy things from the shop.<br/>' +
			'/stafflist - Displays a popup showing the list of staff.<br/>'+
			'/transferbucks <i>username</i> - Transfer bucks to other users.<br/>'+
			'/ratingtier - Tells you about rating tiers. <br/>' +
			'/getbucks - Shows other ways to earn bucks. <br/>' +
			'/regdate <em>username</em> - Shows the registration date of the user<br/><br/>'+
			'<b>For more commands or help:</b> Do /serverhelp with either of the following categories: <em>tour</em>, <em>profile</em>, <em>staff</em> Example - /serverhelp <em>tour</em><br/>');
        }

		if (target.toLowerCase() === 'tour') {
			return this.parse('/tour help');
		}

		if (target.toLowerCase() === 'profile') {
			return this.sendReply('|raw|<img src="http://i.imgur.com/sd7CkSw.png" width="100%">');
		}

		if (target.toLowerCase() === 'staff') {
			if (!user.can('lock')) return this.sendReply('/serverhelp <i>staff</i> - Access denied.');
			return this.sendReplyBox('' +
			'/hide - Hide your symbol REQUIRES: ~<br/> ' +
			'/show - Show your symbol REQUIRES: ~<br/> ' +
			'/frt <i>user</i> - Changes a user\'s name REQUIRES: ~ <br/>' +
			'/imgdeclare <i>image</i> - Declares an image REQUIRES: &~# <br/>' +
			'/reload - Similar to hotpatch command but better REQUIRES: ~ <br/>' +
			'/pmall - Private messages all users in the server REQUIRES: ~ <br/>' +
			'/moneylog - Sees money transactions between all users REQUIRES: % <br/>' +
			'/givemoney <i>user</i>, <i>amount</i> - Give money to a user REQUIRES: ~ <br/>' +
			'/takemoney <i>user</i>, <i>amount</i> - Take money from a user REQUIRES: ~ <br/>' +
			'/away - Sets user to away REQUIRES: % <br/>' +
			'/back - Sets use back from away REQUIRES: % <br/>' +
			'/kick <i>user</i> - Kicks the user from the room. REQUIRES: %@&~');
		}

		return this.sendReply('Could not find ' + target + '.');
	},

	ratingtiers: 'ratingtier',
	ratingtier: function(target, room, user) {
		if (!this.canBroadcast()) return false;

		return this.sendReplyBox('' +
		'<font color="#8C7853"><b>Bronze</b></font>: Less Than 8 Tournament Wins. (Top 100%) <br/>' +
		'<font color="#545454"><b>Silver</b></font>: Between 8 to 19 Tournament Wins. (Top 80%-46.5%)<br/>' +
		'<font color="#FFD700"><b>Gold</b></font>: Between 20 to 39 Tournamenet Wins. (Top 46.5%-13%)<br/>' +
		'<font color="#C0C0C0"><b>Platinum</b></font>: Between 40 to 59 Tournament Wins. (Top 13%-1.5%)<br/>' +
		'<font color="#236B8E"><b>Diamond</b></font>: Between 60 to 99 Tournament Wins. (Top 1.5%-0.1%)<br/>' +
		'<font color="#FF851B"><b>Legend</b></font>: Over 100 Tournament Wins. (Top 0.1%)');
	},
	
	pr: 'pickrandom',
	pickrandom: function(target, room, user) {
		if (!this.canBroadcast()) return false;
		return this.sendReply(target.split(',').map(function (s) { return s.trim(); }).randomize()[0]);
	},
	
		

    model: 'sprite',
    sprite: function(target, room, user) {
            if (!this.canBroadcast()) return;
                    var targets = target.split(',');
                            target = targets[0];
                                    target1 = targets[1];
    if (target.toLowerCase().indexOf(' ') !== -1) {
    target.toLowerCase().replace(/ /g,'-');
    }
            if (target.toLowerCase().length < 4) {
            return this.sendReply('Model not found.');
            }
                    var numbers = ['1','2','3','4','5','6','7','8','9','0'];
                    for (var i = 0; i < numbers.length; i++) {
                    if (target.toLowerCase().indexOf(numbers) == -1 && target.toLowerCase() !== 'porygon2') {
           
           
                   
                    if (target && !target1) {
            return this.sendReply('|html|<img src = "http://www.pkparaiso.com/imagenes/xy/sprites/animados/'+target.toLowerCase().trim().replace(/ /g,'-')+'.gif">');
            }
            if (toId(target1) == 'back' || toId(target1) == 'shiny' || toId(target1) == 'front') {
                    if (target && toId(target1) == 'back') {
            return this.sendReply('|html|<img src = "http://play.pokemonshowdown.com/sprites/xyani-back/'+target.toLowerCase().trim().replace(/ /g,'-')+'.gif">');
                    }
                    if (target && toId(target1) == 'shiny') {
            return this.sendReply('|html|<img src = "http://play.pokemonshowdown.com/sprites/xyani-shiny/'+target.toLowerCase().trim().replace(/ /g,'-')+'.gif">');
                    }
                    if (target && toId(target1) == 'front') {
            return this.sendReply('|html|<img src = "http://www.pkparaiso.com/imagenes/xy/sprites/animados/'+target.toLowerCase().trim().replace(/ /g,'-')+'.gif">');
            }
            }
           
            } else {
            return this.sendReply('Model not found.');
            }
            }
            },

        d: 'poof',
	cpoof: 'poof',
	poof: (function () {
		var messages = [
			"got spanked too hard by OnyxEagle!",
			"fed the wild Ascher and is now paying the price!",
			"was eaten by Vanilla!",
			"couldn\'t handle the coldness of Jeratt!",
			"was tricked by Bart!",
			"was eaten by Vanilla!",
			"was forced to give Noah an oil massage (boiling oil)!",
			"got toasted by Toast!",
			"was trolled by Zoro.",
			"saw Jam\'s face.",
			"got eaten by Sharpedos!",
			"was hit by Magikarp\'s Revenge!",
			"was thrown out the window by Anna!",
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

			room.addRaw('<strong><font color="' + colour + '">~~ ' + sanitize(message) + ' ~~</font></strong>');
			user.disconnectAll();
		};
	})(),

	regdate: function(target, room, user, connection) { 
		if (!this.canBroadcast()) return;
		if (!target || target == "." || target == "," || target == "'") return this.sendReply('/regdate - Please specify a valid username.');
		var username = target;
		target = target.replace(/\s+/g, '');
		var util = require("util"),
    	http = require("http");

		var options = {
    		host: "www.pokemonshowdown.com",
    		port: 80,
    		path: "/forum/~"+target
		};

		var content = "";   
		var self = this;
		var req = http.request(options, function(res) {

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
						data = username+' was registered on'+regdate+'.';
					}
				}
			}
			else {
				data = username+' is not registered.';
			}
			self.sendReplyBox(data);
			room.update();
		    });
		});
		req.end();
	},

	stafflist: function (target, room, user, connection) {
	    var buffer = [];
	    var admins = [];
	    var leaders = [];
	    var mods = [];
	    var drivers = [];
	    var voices = [];

	    admins2 = '';
	    leaders2 = '';
	    mods2 = '';
	    drivers2 = '';
	    voices2 = '';
	    stafflist = fs.readFileSync('config/usergroups.csv', 'utf8');
	    stafflist = stafflist.split('\n');
	    for (var u in stafflist) {
	        line = stafflist[u].split(',');
	        if (line[1] == '~') {
	            admins2 = admins2 + line[0] + ',';
	        }
	        if (line[1] == '&') {
	            leaders2 = leaders2 + line[0] + ',';
	        }
	        if (line[1] == '@') {
	            mods2 = mods2 + line[0] + ',';
	        }
	        if (line[1] == '%') {
	            drivers2 = drivers2 + line[0] + ',';
	        }
	        if (line[1] == '+') {
	            voices2 = voices2 + line[0] + ',';
	        }
	    }
	    admins2 = admins2.split(',');
	    leaders2 = leaders2.split(',');
	    mods2 = mods2.split(',');
	    drivers2 = drivers2.split(',');
	    voices2 = voices2.split(',');
	    for (var u in admins2) {
	        if (admins2[u] != '') admins.push(admins2[u]);
	    }
	    for (var u in leaders2) {
	        if (leaders2[u] != '') leaders.push(leaders2[u]);
	    }
	    for (var u in mods2) {
	        if (mods2[u] != '') mods.push(mods2[u]);
	    }
	    for (var u in drivers2) {
	        if (drivers2[u] != '') drivers.push(drivers2[u]);
	    }
	    for (var u in voices2) {
	        if (voices2[u] != '') voices.push(voices2[u]);
	    }
	    if (admins.length > 0) {
	        admins = admins.join(', ');
	    }
	    if (leaders.length > 0) {
	        leaders = leaders.join(', ');
	    }
	    if (mods.length > 0) {
	        mods = mods.join(', ');
	    }
	    if (drivers.length > 0) {
	        drivers = drivers.join(', ');
	    }
	    if (voices.length > 0) {
	        voices = voices.join(', ');
	    }
	    connection.popup('Administrators: \n--------------------\n' + admins + '\n\nLeaders:\n-------------------- \n' + leaders + '\n\nModerators:\n-------------------- \n' + mods + '\n\nDrivers: \n--------------------\n' + drivers + '\n\nVoices:\n-------------------- \n' + voices);
	},
	tell: function(target, room, user) {
		if (!target) return false;
		var message = this.splitTarget(target);
		if (!message) return this.sendReply("You forgot the comma.");
		if (user.locked) return this.sendReply("You cannot use this command while locked.");

		message = this.canTalk(message, null);
		if (!message) return false;

		if (!global.tells) global.tells = {};
		if (!tells[toId(this.targetUsername)]) tells[toId(this.targetUsername)] = [];
		if (tells[toId(this.targetUsername)].length > 5) return this.sendReply("User " + this.targetUsername + " has too many tells queued.");

		tells[toId(this.targetUsername)].push(Date().toLocaleString() + " - " + user.getIdentity() + " said: " + message);
		return this.sendReply("Message \"" + message + "\" sent to " + this.targetUsername + ".");
	},
	atm: 'profile',
	profile: function (target, room, user, connection) {
	    if (!this.canBroadcast()) return;

	    if (target.length >= 19) {
	    	return this.sendReply('Usernames are required to be less than 19 characters long.');
	    }

	    var targetUser = this.targetUserOrSelf(target);
	    var name = '';
	    if (!targetUser) {
	    	name = toId(target);
	    } else {
	    	name = targetUser.userid;
	    }
	    var avatar = Utilities.findAvatar(name);
	    var group = Utilities.stdin('usergroups.csv', name);
	    var status = Utilities.stdin('db/status.csv', name);
	    var money = Utilities.stdin('db/money.csv', name);

		var util = require("util");
		var http = require("http");

		var options = {
		    host: "www.pokemonshowdown.com",
		    port: 80,
		    path: "/forum/~" + name
		};

		var content = "";
		var self = this;

		if (!targetUser) {
			if (typeof(avatar) === typeof('')) {
				avatar = 'http://107.161.17.175:13000/avatars/' + avatar;
			} else {
				avatar = 'http://play.pokemonshowdown.com/sprites/trainers/168.png';
			}
			if (group === ' ') {
				group = 'Regular User';
			} else {
				group = Config.groups.bySymbol[group].name;
			}
			if (status === ' ') {
				status = 'This user hasn\'t set their status yet.';
			}
			if (money === '' || money === ' ') {
				money = 0;
			}

			var lastOnline = Number(Utilities.stdin('db/lastOnline.csv', name));
			if (lastOnline === Number(' ')) {
				lastOnline = ' Never';
			} else if (Math.floor((Date.now()-lastOnline)*0.001) < 60) {
				lastOnline = Math.floor((Date.now()-lastOnline)*0.001) + ' seconds ago';
			} else if (Math.floor((Date.now()-lastOnline)*1.6667e-5) < 120) {
				lastOnline = Math.floor((Date.now()-lastOnline)*1.6667e-5) + ' minutes ago'; 
			} else if (Math.floor((Date.now()-lastOnline)*2.7778e-7) < 48) {
				lastOnline = Math.floor((Date.now()-lastOnline)*2.7778e-7) + ' hours ago';
			} else {
				lastOnline = (Math.floor((Date.now()-lastOnline)*2.7778e-7)/24) + ' days ago';
			}
		} else {
			if (targetUser.group === ' ') {
				Config.groups.bySymbol[targetUser.group].name = 'Regular User';
			}
			io.stdinString('db/status.csv', user, 'status');
			if (targetUser.status === '' || targetUser.status === '""') {
				targetUser.status = 'This user hasn\'t set their status yet.';
			}
			var lastOnline = Number(Utilities.stdin('db/lastOnline.csv', name));
			if (Math.floor((Date.now()-lastOnline)*0.001) < 60) {
				lastOnline = Math.floor((Date.now()-lastOnline)*0.001) + ' seconds ago';
			} else if (Math.floor((Date.now()-lastOnline)*1.6667e-5) < 120) {
				lastOnline = Math.floor((Date.now()-lastOnline)*1.6667e-5) + ' minutes ago'; 
			} else if (Math.floor((Date.now()-lastOnline)*2.7778e-7) < 48) {
				lastOnline = Math.floor((Date.now()-lastOnline)*2.7778e-7) + ' hours ago';
			} else {
				lastOnline = (Math.floor((Date.now()-lastOnline)*2.7778e-7)/24) + ' days ago';
			}
			if (targetUser.connected === true) {
				lastOnline = '<font color="green">Currently Online</font>';
			}
			io.stdinNumber('db/money.csv', user, 'money');
			if (targetUser.money === Infinity) {
				targetUser.money === Infinity;
			}
			io.stdinString('db/statusTime.csv', user, 'statusTime');
		}

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
		                	if (!targetUser) {
		                		self.sendReplyBox('<img src="' + avatar + '" height="80" width="80" align="left">' + '&nbsp;<strong><font color="#24678d">Name:</font></strong> ' + target + '<br />' + '&nbsp;<strong><font color="#24678d">Registered:</font></strong>' + content[1] + '<br/>' + '&nbsp;<strong><font color="#24678d">Rank:</font></strong> ' + group + '<br/>' + '&nbsp;<strong><font color="#24678d">Money:</font></strong> ' + money + '<br/>' + '&nbsp;<strong><font color="#24678d">Last Online:</font></strong> ' + lastOnline + '<br/>' + '&nbsp;<strong><font color="#24678d">Status:</font></strong> "' + status + '" <font color="gray">' + Utilities.stdin('db/statusTime.csv', name) + '</font><br clear="all" />');
		                	} else if (targetUser.authenticated === true && typeof(targetUser.avatar) === typeof('')) {
		                		self.sendReplyBox('<img src="http://107.161.17.175:13000/avatars/' + targetUser.avatar + '" height="80" width="80" align="left">' + '&nbsp;<strong><font color="#24678d">Name:</font></strong> ' + targetUser.name + '<br />' + '&nbsp;<strong><font color="#24678d">Registered:</font></strong>' + content[1] + '<br/>' + '&nbsp;<strong><font color="#24678d">Rank:</font></strong> ' + Config.groups.bySymbol[targetUser.group].name + '<br/>' + '&nbsp;<strong><font color="#24678d">Money:</font></strong> ' + targetUser.money + '<br/>' + '&nbsp;<strong><font color="#24678d">Last Online:</font></strong> ' + lastOnline + '<br/>' + '&nbsp;<strong><font color="#24678d">Status:</font></strong> "' + targetUser.status + '" <font color="gray">' + targetUser.statusTime + '</font><br clear="all" />');
		                    } else {
		                    	self.sendReplyBox('<img src="http://play.pokemonshowdown.com/sprites/trainers/' + targetUser.avatar + '.png" height="80" width="80" align="left">' + '&nbsp;<strong><font color="#24678d">Name:</font></strong> ' + targetUser.name + '<br />' + '&nbsp;<strong><font color="#24678d">Registered:</font></strong>' + content[1] + '<br/>' + '&nbsp;<strong><font color="#24678d">Rank:</font></strong> ' + Config.groups.bySymbol[targetUser.group].name + '<br/>' + '&nbsp;<strong><font color="#24678d">Money:</font></strong> ' + targetUser.money + '<br/>' + '&nbsp;<strong><font color="#24678d">Last Online:</font></strong> ' + lastOnline + '<br/>' + '&nbsp;<strong><font color="#24678d">Status:</font></strong> "' + targetUser.status + '" <font color="gray">' + targetUser.statusTime + '</font><br clear="all" />');
		                    }
		                }
		            }
		        } else {
		        	if (!targetUser) {
		        		self.sendReplyBox('<img src="' + avatar + '" height="80" width="80" align="left">' + '&nbsp;<strong><font color="#24678d">Name:</font></strong> ' + target + '<br />' + '&nbsp;<strong><font color="#24678d">Registered:</font></strong>' + content[1] + '<br/>' + '&nbsp;<strong><font color="#24678d">Rank:</font></strong> ' + group + '<br/>' + '&nbsp;<strong><font color="#24678d">Money:</font></strong> ' + money + '<br/>' + '&nbsp;<strong><font color="#24678d">Last Online:</font></strong> ' + lastOnline + '<br/>' + '&nbsp;<strong><font color="#24678d">Status:</font></strong> "' + status + '" <font color="gray">' + Utilities.stdin('db/statusTime.csv', name) + '</font><br clear="all" />');
		        	} else {
		        		self.sendReplyBox('<img src="http://play.pokemonshowdown.com/sprites/trainers/' + targetUser.avatar + '.png" height="80" width="80" align="left">' + '&nbsp;<strong><font color="#24678d">Name:</font></strong> ' + targetUser.name + '<br />' + '&nbsp;<strong><font color="#24678d">Registered:</font></strong>' + ' (Unregistered)' + '<br/>' + '&nbsp;<strong><font color="#24678d">Rank:</font></strong> ' + Config.groups.bySymbol[targetUser.group].name + '<br/>' + '&nbsp;<strong><font color="#24678d">Money:</font></strong> ' + targetUser.money + '<br/>' + '&nbsp;<strong><font color="#24678d">Last Online:</font></strong> ' + lastOnline + '<br/>' + '&nbsp;<strong><font color="#24678d">Status:</font></strong> "' + targetUser.status + '" <font color="gray">' + targetUser.statusTime + '</font><br clear="all" />');
		        	}
		        }
		        room.update();
		    });
		});
		req.end();
	},

	setstatus: 'status',
	status: function(target, room, user){
		if (!target) return this.sendReply('|raw|Set your status for profile. Usage: /status <i>status information</i>');
		if (target.length > 35) return this.sendReply('Status is too long.');
		if (target.indexOf(',') >= 1) return this.sendReply('Unforunately, your status cannot contain a comma.');
		var escapeHTML = sanitize(target, true);
		io.stdoutString('db/status.csv', user, 'status', escapeHTML);

		var currentdate = new Date(); 
		var datetime = "Last Updated: " + (currentdate.getMonth()+1) + "/"+currentdate.getDate() + "/" + currentdate.getFullYear() + " @ "  + Utilities.formatAMPM(currentdate);
		io.stdoutString('db/statusTime.csv', user, 'statusTime', datetime);

		this.sendReply('Your status is now: "' + target + '"');
		if('+%@&~'.indexOf(user.group) >= 0) {
			room.add('|raw|<b> * <font color="' + Utilities.hashColor(user.name) + '">' + user.name + '</font> set their status to: </b>"' + escapeHTML + '"');
		}
	},

	/*********************************************************
	 * Money commands
	 *********************************************************/
	givebucks: 'gb',
	givemoney: 'gb',
	gb: function (target, room, user) {
	    if (!user.can('lockdown')) return this.sendReply('/givemoney - Access denied.');
	    if (!target) return this.sendReply('|raw|Give money to a user. Usage: /givemoney <i>username</i>, <i>amount</i>');
	    if (target.indexOf(',') >= 0) {
	        var parts = target.split(',');
	        parts[0] = this.splitTarget(parts[0]);
	        var targetUser = this.targetUser;
	    }
	    if (!targetUser) {
	        return this.sendReply('User ' + this.targetUsername + ' not found.');
	    }
	    if (isNaN(parts[1])) {
	        return this.sendReply('Very funny, now use a real number.');
	    }
	    if (parts[1] < 0) {
	        return this.sendReply('Number cannot be negative.');
	    }
	    var p = 'bucks';
	    var cleanedUp = parts[1].trim();
	    var giveMoney = Number(cleanedUp);
	    if (giveMoney === 1) {
	        p = 'buck';
	    }
	    io.stdoutNumber('db/money.csv', targetUser, 'money', giveMoney);
	    this.sendReply(targetUser.name + ' was given ' + giveMoney + ' ' + p + '. This user now has ' + targetUser.money + ' ' + p + '.');
	    targetUser.send(user.name + ' has given you ' + giveMoney + ' ' + p + '.');
	    fs.appendFile('logs/transactions.log', '\n' + Date() + ': ' + targetUser.name + ' was given ' + giveMoney + ' ' + p + ' from ' + user.name + '. ' + 'They now have ' + targetUser.money + ' ' + p + '.');
	},

	takebucks: 'takemoney',
	takemoney: function (target, room, user) {
	    if (!user.can('lockdown')) return this.sendReply('/takemoney - Access denied.');
	    if (!target) return this.sendReply('|raw|Take away from a user. Usage: /takemoney <i>username</i>, <i>amount</i>');
	    if (target.indexOf(',') >= 0) {
	        var parts = target.split(',');
	        parts[0] = this.splitTarget(parts[0]);
	        var targetUser = this.targetUser;
	    }
	    if (!targetUser) {
	        return this.sendReply('User ' + this.targetUsername + ' not found.');
	    }
	    if (isNaN(parts[1])) {
	        return this.sendReply('Very funny, now use a real number.');
	    }
	    if (parts[1] < 0) {
	        return this.sendReply('Number cannot be negative.');
	    }
	    var p = 'bucks';
	    var cleanedUp = parts[1].trim();
	    var takeMoney = Number(cleanedUp);
	    if (takeMoney === 1) {
	        p = 'buck';
	    }
	    io.stdoutNumber('db/money.csv', targetUser, 'money', -takeMoney);
	    this.sendReply(targetUser.name + ' has had ' + takeMoney + ' ' + p + ' removed. This user now has ' + targetUser.money + ' ' + p + '.');
	    targetUser.send(user.name + ' has removed ' + takeMoney + ' ' + p + ' from you.');
	    fs.appendFile('logs/transactions.log', '\n' + Date() + ': ' + targetUser.name + ' losted ' + takeMoney + ' ' + p + ' from ' + user.name + '. ' + 'They now have ' + targetUser.money + ' ' + p + '.');
	},

	transferbucks: 'transfermoney',
	transfermoney: function (target, room, user) {
	    if (!target) return this.sendReply('|raw|Transfer money between users. Usage: /transfermoney <i>username</i>, <i>amount</i>');
	    if (target.indexOf(',') >= 0) {
	        var parts = target.split(',');
	        if (parts[0].toLowerCase() === user.name.toLowerCase()) {
	            return this.sendReply('You can\'t transfer money to yourself.');
	        }
	        parts[0] = this.splitTarget(parts[0]);
	        var targetUser = this.targetUser;
	    }
	    if (!targetUser) {
	        return this.sendReply('User ' + this.targetUsername + ' not found.');
	    }
	    if (isNaN(parts[1])) {
	        return this.sendReply('Very funny, now use a real number.');
	    }
	    if (parts[1] <= 0) {
	        return this.sendReply('Number cannot be negative nor zero.');
	    }
	    if (String(parts[1]).indexOf('.') >= 0) {
	        return this.sendReply('You cannot transfer money with decimals.');
	    }
	    if (parts[1] > user.money) {
	        return this.sendReply('You cannot transfer more money than what you have.');
	    }
	    var p = 'bucks';
	    var cleanedUp = parts[1].trim();
	    var transferMoney = Number(cleanedUp);
	    if (transferMoney === 1) {
	        p = 'buck';
	    }
	    io.stdoutNumber('db/money.csv', user, 'money', -transferMoney);
	    setTimeout(function() {
	    	io.stdoutNumber('db/money.csv', targetUser, 'money', transferMoney);
	    	fs.appendFile('logs/transactions.log','\n'+Date()+': '+user.name+' has transferred '+transferMoney+' '+p+' to ' + targetUser.name + '. ' +  user.name +' now has '+user.money + ' ' + p + ' and ' + targetUser.name + ' now has ' + targetUser.money +' ' + p +'.');
	    }, 1000);
	    this.sendReply('You have successfully transferred ' + transferMoney + ' to ' + targetUser.name + '. You now have ' + user.money + ' ' + p + '.');
	    targetUser.send(user.name + ' has transferred ' + transferMoney + ' ' + p + ' to you.');
	},

	shop: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><h4><b><u>The Sora League\'s Shop</u></b></h4><table border="1" cellspacing="0" cellpadding="3"><tr><th>Command</th><th>Description</th><th>Cost</th></tr><tr><td>Symbol</td><td>Buys a custom symbol to go infront of name and puts you at top of userlist. (temporary until restart)</td><td>5</td></tr><tr><td>Fix</td><td>Buys the ability to alter your current custom avatar or trainer card. (don\'t buy if you have neither)</td><td>10</td><tr><td>Custom</td><td>Buys a custom avatar to be applied to your name. (you supply)</td><td>20</td></tr><tr><td>Animated</td><td>Buys an animated avatar to be applied to your name. (you supply)</td><td>25</td></tr><tr><td>Trainer</td><td>Buys a trainer card which shows information through a command such as <i>/onyxe</i>.</td><td>40</td></tr><tr><td>Room</td><td>Buys a chatroom for you to own. (within reason, can be refused)</td><td>100</td></tr><tr><td>POTD</td><td>Buys the ability to set Pokemon of the Day.</td><td>15</td></tr></table></table><br/>To buy an item from the shop, use /buy <i>command</i>. <br/></center>');
	},

	buy: function(target, room, user) {
		if (!target) return this.sendReply('|raw|Usage: /buy <i>command</i>');
		var data = fs.readFileSync('config/db/money.csv','utf8')
		var match = false;
		var money = 0;
		var line = '';
		var row = (''+data).split("\n");
		for (var i = row.length; i > -1; i--) {
			if (!row[i]) continue;
			var parts = row[i].split(",");
			var userid = toId(parts[0]);
			if (user.userid == userid) {
			var x = Number(parts[1]);
			var money = x;
			match = true;
			if (match === true) {
				line = line + row[i];
				break;
			}
			}
		}
		user.money = money;
		var price = 0;
		if (target === 'symbol') {
			price = 5;
			if (price <= user.money) {
				user.money = user.money - price;
				this.sendReply('You have purchased a custom symbol. You will have this until you log off for more than an hour.');
				this.sendReply('|raw|Use /customsymbol <i>symbol</i> to change your symbol now.');
				this.add(user.name + ' has purchased a custom symbol.');
				user.canCustomSymbol = true;
				fs.appendFile('logs/transactions.log','\n'+Date()+': '+user.name+' has bought a ' + target + ' for ' + price + ' bucks. ' + user.name + ' now has ' + user.money + ' bucks' + '.');
			} else {
				return this.sendReply('You do not have enough bucks for this. You need ' + (price - user.money) + ' more bucks to buy ' + target + '.');
			}
		}
		if (target === 'fix') {
			price = 10;
			if (price <= user.money) {
				user.money = user.money - price;
				this.sendReply('You have purchased a fix for a custom avatar or trainer card. Private Message an admin to alter it for you.');
				this.add(user.name + ' has purchased a fix for his custom avatar or trainer card.');
				fs.appendFile('logs/transactions.log','\n'+Date()+': '+user.name+' has bought a ' + target + ' for ' + price + ' bucks. ' + user.name + ' now has ' + user.money + ' bucks' + '.');
			} else {
				return this.sendReply('You do not have enough bucks for this. You need ' + (price - user.money) + ' more bucks to buy ' + target + '.');
			}
		}
		if (target === 'custom') {
			price = 20;
			if (price <= user.money) {
				user.money = user.money - price;
				this.sendReply('You have purchased an Custom Avatar. Private Message an admin add it in.');
				this.add(user.name + ' has purchased a custom avatar.');
				fs.appendFile('logs/transactions.log','\n'+Date()+': '+user.name+' has bought a ' + target + ' for ' + price + ' bucks. ' + user.name + ' now has ' + user.money + ' bucks' + '.');
			} else {
				return this.sendReply('You do not have enough bucks for this. You need ' + (price - user.money) + ' more bucks to buy ' + target + '.');
			}
		}
		if (target === 'animated') {
			price = 25;
			if (price <= user.money) {
				user.money = user.money - price;
				this.sendReply('You have purchased an Animated Avatar. Private Message an admin add it in.');
				this.add(user.name + ' has purchased a animated avatar.');
				fs.appendFile('logs/transactions.log','\n'+Date()+': '+user.name+' has bought a ' + target + ' for ' + price + ' bucks. ' + user.name + ' now has ' + user.money + ' bucks' + '.');
			} else {
				return this.sendReply('You do not have enough bucks for this. You need ' + (price - user.money) + ' more bucks to buy ' + target + '.');
			}
		}
		if (target === 'trainer') {
			price = 40;
			if (price <= user.money) {
				user.money = user.money - price;
				this.sendReply('You have purchased a trainer card. You need to message an admin capable of adding this.');
				this.add(user.name + ' has purchased a trainer card.');
				fs.appendFile('logs/transactions.log','\n'+Date()+': '+user.name+' has bought a ' + target + ' for ' + price + ' bucks. ' + user.name + ' now has ' + user.money + ' bucks' + '.');
			} else {
				return this.sendReply('You do not have enough bucks for this. You need ' + (price - user.money) + ' more bucks to buy ' + target + '.');
			}
		}
		if (target === 'potd') {
			price = 15;
			if (price <= user.money) {
				user.money = user.money - price;
				this.sendReply('You have purchased the ability to set POTD. You need to message an admin capable of doing this.');
				this.add(user.name + ' has purchased the ability to set POTD.');
				fs.appendFile('logs/transactions.log','\n'+Date()+': '+user.name+' has bought a ' + target + ' for ' + price + ' bucks. ' + user.name + ' now has ' + user.money + ' bucks' + '.');
			} else {
				return this.sendReply('You do not have enough bucks for this. You need ' + (price - user.money) + ' more bucks to buy ' + target + '.');
			}
		}
		if (target === 'room') {
			price = 100;
			if (price <= user.money) {
				user.money = user.money - price;
				this.sendReply('You have purchased a room. Private Message an admin to make the room.');
				this.add(user.name + ' has purchased a room.');
				fs.appendFile('logs/transactions.log','\n'+Date()+': '+user.name+' has bought a ' + target + ' for ' + price + ' bucks. ' + user.name + ' now has ' + user.money + ' bucks' + '.');
			} else {
				return this.sendReply('You do not have enough bucks for this. You need ' + (price - user.money) + ' more bucks to buy ' + target + '.');
			}
		}
		if (match === true) {
			var re = new RegExp(line,"g");
			fs.readFile('config/db/money.csv', 'utf8', function (err,data) {
			if (err) {
				return console.log(err);
			}
			var result = data.replace(re, user.userid+','+user.money);
			fs.writeFile('config/db/money.csv', result, 'utf8', function (err) {
				if (err) return console.log(err);
			});
			});
		} else {
			var log = fs.createWriteStream('config/db/money.csv', {'flags': 'a'});
			log.write("\n"+user.userid+','+user.money);
		}
	},

	customsymbol: function(target, room, user) {
		if(!user.canCustomSymbol) return this.sendReply('You need to buy this item from the shop to use.');
		if(!target || target.length > 1) return this.sendReply('|raw|/customsymbol <i>symbol</i> - changes your symbol (usergroup) to the specified symbol. The symbol can only be one character');
		var a = target;
		if (a === "+" || a === "$" || a === "%" || a === "@" || a === "&" || a === "~" || a === "#" || a === "a" || a === "b" || a === "c" || a === "d" || a === "e" || a === "f" || a === "g" || a === "h" || a === "i" || a === "j" || a === "k" || a === "l" || a === "m" || a === "n" || a === "o" || a === "p" || a === "q" || a === "r" || a === "s" || a === "t" || a === "u" || a === "v" || a === "w" || a === "x" || a === "y" || a === "z" || a === "!" || a === "?" || a === "\u2605") {
			return this.sendReply('Sorry, but you cannot change your symbol to this for safety/stability reasons.');
		}
		user.getIdentity = function(){
			if(this.muted)	return '!' + this.name;
			if(this.locked) return '‽' + this.name;
			return target + this.name;
		};
		user.updateIdentity();
		user.canCustomSymbol = false;
		user.hasCustomSymbol = true;
	},

	resetsymbol: function(target, room, user) {
		if (!user.hasCustomSymbol) return this.sendReply('You don\'t have a custom symbol!');
		user.getIdentity = function() {
			if (this.muted) return '!' + this.name;
			if (this.locked) return '‽' + this.name;
			return this.group + this.name;
		};
		user.hasCustomSymbol = false;
		user.updateIdentity();
		this.sendReply('Your symbol has been reset.');
	},
	
	/*********************************************************
	 * Tour commands
	 *********************************************************/
	j: function(target, room, user) {
		return this.parse('/tour join');
	},

	l: function(target, room, user) {
		return this.parse('/tour leave');
	},

	dq: function(target, room, user) {
		return this.parse('/tour dq ' + target);
	},
	
	tournew: function(target, room, user) {
		return this.parse('/tour new ' + target + ', elimination');
	},
	
	endtour: function(target, room, user) {
		return this.parse('/tour end');
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
		if (target.toLowerCase() == "lobby") {
					return connection.sendTo('lobby','|html|<div class="infobox" style="border-color:blue"><center><b><u>Welcome to The Sora League Server!</u></b></center><br /> ' +
					'We are a Pokemon League open for challenges!<br /><br />' +
					'You are welcomed to challenge us, participate in our tournaments or just chat in the lobby! <br /><br />' +
					'The most important rule here is to have fun! We hope you will have an enjoyable stay here.<br /><br />' +
					'You may want to check out <a href="http://soraleague.weebly.com/index.html">The Sora League Website</a> for details about the rules of challenge.<br /><br />' +
					'<b>IMPORTANT:</b> Make sure you read our rules page <a href="http://soraleague.weebly.com/rules.html">here</a>, especially if you\'re challenging the league.<br /><br />' +
					'<b>Warning:</b> Champion Noah and Champion Toast or any of our league members are not responsible for any damaged caused by hitting yourself after being confused by reading all this randomness.<br /><br />'+
					'<b>League Update:</b> Champion OnyxE has officially stepped down from Champion position, replaced by Champion Toast.<br />'+
					'P.S. <i>Do not feed the Ascher, you will regret it~</i></div>');
		}
	},
	
	/*********************************************************
	 * Misc Commands
	 *********************************************************/
	
	getbucks: 'getbucks',
		getbucks: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Please check out the Shop page in the link below to see methods of earning money:<br />' +
				'- <a href="http://soraleague.weebly.com/shop.html">Shop</a><br />' +
				'</div>');
	},
	
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
	    if (!this.canBroadcast()) return;
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
	        '94.173.183.19 - Overseer Diamond<br />' +
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
	        'Shame on them!');
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
	
	championschallenge: 'championschallenge',
		championschallenge: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a detailed explanation of the format Priomons:<br />' +
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
	hide: 'hideauth',
	hideauth: function(target, room, user) {
		if (!this.can('hideauth')) return false;
		target = target || Config.groups.default.global;
		if (!Config.groups.global[target]) {
			target = Config.groups.default.global;
			this.sendReply("You have picked an invalid group, defaulting to '" + target + "'.");
		} else if (Config.groups.bySymbol[target].globalRank >= Config.groups.bySymbol[user.group].globalRank)
			return this.sendReply("The group you have chosen is either your current group OR one of higher rank. You cannot hide like that.");

		user.getIdentity = function (roomid) {
			var identity = Object.getPrototypeOf(this).getIdentity.call(this, roomid);
			if (identity[0] === this.group)
				return target + identity.slice(1);
			return identity;
		};
		user.updateIdentity();
		return this.sendReply("You are now hiding your auth as '" + target + "'.");
	},

	show: 'showauth',
	showauth: function(target, room, user) {
		if (!this.can('hideauth')) return false;
		delete user.getIdentity;
		user.updateIdentity();
		return this.sendReply("You are now showing your authority!");
	},
	
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

	kick: function(target, room, user){
		if (!this.can('lock')) return this.sendReply('/kick - Access Denied');
		if (!target) return this.sendReply('|raw|/kick <em>username</em> - kicks the user from the room.');
		var targetUser = Users.get(target);
		if (!targetUser) return this.sendReply('User '+target+' not found.');
		if (targetUser.group === '~') {
			return this.sendReply('Administrators can\'t be room kicked.');
		}
		if (!Rooms.rooms[room.id].users[targetUser.userid]) return this.sendReply(target+' is not in this room.');
		targetUser.popup('You have been kicked from room '+ room.title +' by '+user.name+'.');
		targetUser.leaveRoom(room);
		room.add('|raw|'+ targetUser.name + ' has been kicked from room by '+ user.name + '.');
		this.logModCommand(user.name+' kicked '+targetUser.name+' from ' +room.id);
	},

	imgdeclare: function(target, room, user) {
		if (!this.can('declare', room)) return false;
		if (!target) return this.parse('/help declare');

		if (!this.canTalk()) return;

		this.add('|raw|<img src="'+target+'">');
		this.logModCommand(user.name + " imgdeclared " + target);
	},

	reload: function (target, room, user) {
	    if (!this.can('hotpatch')) return false;

	    try {
	        var path = require("path"),
	            fs = require("fs");

	        this.sendReply('Reloading command-parser.js...');
	        CommandParser.uncacheTree(path.join(__dirname, '../', 'command-parser.js'));
	        CommandParser = require(path.join(__dirname, '../', 'command-parser.js'));

	        this.sendReply('Reloading system-operators.js...');
	        CommandParser.uncacheTree('./source/system-operators.js');
	        systemOperators = require('./system-operators.js').SystemOperatorOverRide();
	        
	        this.sendReply('Reloading poll.js...');
	        CommandParser.uncacheTree('./source/poll.js');
	        Poll = require('./poll.js').Poll();

	        this.sendReply('Reloading utilities.js...');
	        CommandParser.uncacheTree('./source/utilities.js');
	        Utilities = require('./utilities.js').Utilities;

	        this.sendReply('Reloading io.js...');
	        CommandParser.uncacheTree('./source/io.js');
	        io = require('./io.js');

	        var runningTournaments = Tournaments.tournaments;
		CommandParser.uncacheTree(path.join(__dirname, '../', 'tournaments/frontend.js'));
		Tournaments = require(path.join(__dirname, '../', 'tournaments/frontend.js'));
		Tournaments.tournaments = runningTournaments;
	        
	        this.sendReply('Reloading custom-commands.js...');
	        CommandParser.uncacheTree('./source/custom-commands.js');
	        customcommands = require('./custom-commands.js');
	        CommandParser.uncacheTree('./source/trainer-cards.js');
	        trainercards = require('./trainer-cards.js');

	        return this.sendReply('All files have been reloaded.');
	    } catch (e) {
	        return this.sendReply('Something failed while trying to reload: \n' + e.stack);
	    }
	},

	masspm: 'pmall',
	pmall: function (target, room, user) {
		if (!this.can('pmall')) return false;
	    if (!target) return this.sendReply('|raw|/pmall <em>message</em> - Sends a PM to every user in a room.');

	    var pmName = '~The Sora League PM [Do not reply]';

	    for (var i in Users.users) {
	        var message = '|pm|' + pmName + '|' + Users.users[i].getIdentity() + '|' + target;
	        Users.users[i].send(message);
	    }
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
			var awayName = user.name + ' - ⒶⒻⓀ';
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
			var newName = name.substr(0, name.length - 7);
			delete Users.get(newName);
			user.forceRename(newName, undefined, true);
			user.authenticated = true;
			this.add('|raw|-- <b><font color="#000000">' + newName + '</font color></b> is back');
			user.isAway = false;
		}
		else {
			return this.sendReply('You are not set as away.');
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
};

Object.merge(CommandParser.commands, customCommands);
exports.customCommands = customCommands;

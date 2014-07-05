/*
 * Utilities.js
 *
 * This is where extraneous and important functions are stored.
 * In addition to globals.
 *
 */
var fs = require('fs');
 var Utilities = exports.Utilities = {
    
	HueToRgb: function (m1, m2, hue) {
	    var v;
	    if (hue < 0)
	        hue += 1;
	    else if (hue > 1)
	        hue -= 1;

	    if (6 * hue < 1)
	        v = m1 + (m2 - m1) * hue * 6;
	    else if (2 * hue < 1)
	        v = m2;
	    else if (3 * hue < 2)
	        v = m1 + (m2 - m1) * (2 / 3 - hue) * 6;
	    else
	        v = m1;

	    return (255 * v).toString(16);
	},

	hashColor: function (name) {
	    var crypto = require('crypto');
	    var hash = crypto.createHash('md5').update(name).digest('hex');
	    var H = parseInt(hash.substr(4, 4), 16) % 360;
	    var S = parseInt(hash.substr(0, 4), 16) % 50 + 50;
	    var L = parseInt(hash.substr(8, 4), 16) % 20 + 25;

	    var m1, m2, hue;
	    var r, g, b
	        S /= 100;
	    L /= 100;
	    if (S == 0)
	        r = g = b = (L * 255).toString(16);
	    else {
	        if (L <= 0.5)
	            m2 = L * (S + 1);
	        else
	            m2 = L + S - L * S;
	        m1 = L * 2 - m2;
	        hue = H / 360;
	        r = this.HueToRgb(m1, m2, hue + 1 / 3);
	        g = this.HueToRgb(m1, m2, hue);
	        b = this.HueToRgb(m1, m2, hue - 1 / 3);
	    }

	    return 'rgb(' + r + ', ' + g + ', ' + b + ');';
	},

	formatAMPM: function(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime;
	},

	rank: function(user){
		var data = fs.readFileSync('config/db/tourWins.csv','utf8');
		var row = (''+data).split("\n");

		var list = [];

		for (var i = row.length; i > -1; i--) {
			if (!row[i]) continue;
			var parts = row[i].split(",");
			list.push([toId(parts[0]),Number(parts[1])]);
		}
		list.sort(function(a,b){
    		return a[1] - b[1];
		});
		var arr = list.filter( function( el ) {
   			 return !!~el.indexOf(toId(user));
		});
		if (list.indexOf(arr[0]) === -1) {
			return 'Not Ranked';
		} else {
			return 'Rank <b>' + (list.length-list.indexOf(arr[0])) + '</b> out of ' + list.length;
		}
	},

	calcElo: function(winner, loser) {
		var kFactor = 32;
  		var ratingDifference = loser.elo - winner.elo;
  		var expectedScoreWinner = 1 / ( 1 + Math.pow(10, ratingDifference/400) );

  		var e = kFactor * (1 - expectedScoreWinner);
 		winner.elo = winner.elo + e;
  		loser.elo = loser.elo - e;

  		var arr = [winner.elo, loser.elo];
  		return arr;
	},


	toId: function(text) {
		return text.toLowerCase().replace(/[^a-z0-9]/g, '');
	},
	
	stdin: function (file, name) {
        var data = fs.readFileSync('config/' + file + '', 'utf8').split('\n');

        var len = data.length;
        while (len--) {
            if (!data[len]) continue;
            var parts = data[len].split(',');
            if (parts[0].toLowerCase() === name) {
                return parts[1];
            }
        }
        return 0;
    },

    stdout: function (file, name, info, callback) {
        var data = fs.readFileSync('config/' + file + '' , 'utf8').split('\n');
        var match = false;

        var len = data.length;
        while (len--) {
            if (!data[len]) continue;
            var parts = data[len].split(',');
            if (parts[0] === name) {
                data = data[len];
                match = true;
                break;
            }
        }

        if (match === true) {
            var re = new RegExp(data, 'g');
            fs.readFile('config/' + file + '', 'utf8', function (err, data) {
                if (err) return console.log(err);

                var result = data.replace(re, name + ',' + info);
                fs.writeFile('config/' + file + '', result, 'utf8', function (err) {
                    if (err) return console.log(err);
                    typeof callback === 'function' && callback();
                });
            });
        } else {
            var log = fs.createWriteStream('config/' + file + '', {
                'flags': 'a'
            });
            log.write('\n' + name + ',' + info);
            typeof callback === 'function' && callback();
        }
    },
	findAvatar: function (name) {
        var info = "";
        for (user in Config.customAvatars) {
        if (user === name) {
        return Config.customAvatars[user];
		}
	}
		return 0;
},

	
	 shop: function (showDisplay) {
        var shop = [
            ['Symbol', 'Buys a custom symbol to go infront of name and puts you at top of userlist. (Temporary until restart, certain symbols are blocked)', 5],
            ['Fix', 'Buys the ability to alter your current custom avatar or trainer card. (don\'t buy if you have neither)', 10],
            ['Poof', 'Buy a poof message to be added into the pool of possible poofs.', 15],
            ['Who', 'Buys a custom whois bot message for your name.', 25],
            ['Avatar', 'Buys an custom avatar to be applied to your name (You supply. Images larger than 80x80 may not show correctly)', 30],
            ['Trainer', 'Buys a trainer card which shows information through a command.', 50],
            ['Room', 'Buys a chatroom for you to own. (within reason, can be refused)', 100]
        ];

        if (showDisplay === false) {
            return shop;
        }

        var s = '<table border="1" cellspacing="0" cellpadding="5" width="100%"><tbody><tr><th>Command</th><th>Description</th><th>Cost</th></tr>';
        var start = 0;
        while (start < shop.length) {
            s = s + '<tr><td>' + shop[start][0] + '</td><td>' + shop[start][1] + '</td><td>' + shop[start][2] + '</td></tr>';
            start++;
        }
        s += '</tbody></table><center>To buy an item from the shop, use /buy <em>command</em>.</center>';
        return s;
    },


	findAvatar: function(name) {
		var info = "";

		for (user in Config.customAvatars) {
			if (user === name) {
				return Config.customAvatars[user];
			}
		}
		return 0;
	}

};

// Global Variables

// Shortcut for using Object.keys
global.k = function(o) {
	return Object.keys(o);
}

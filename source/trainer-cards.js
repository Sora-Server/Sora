/**
 * Trainer Cards
 *
 * This is where the trainer cards commands
 * are located.
 *
 */

var trainerCards = {
	arsh: 'blakjack',
	arshmalik: 'blakjack',
	blakjack: function (target, room, user) {
	    if (!this.canBroadcast()) return;
	    this.sendReplyBox('<center><img src="http://i.imgur.com/otDPUQU.png"><br><img src="http://i.imgur.com/Wdthjon.png"><img src="http://i.imgur.com/dck9vdP.png"><img src="http://i.imgur.com/5VqH7tF.png"><br><font color="brown"><blink>Ace: Swellow</blink><br><font color="brown">Haters Gonna Hate, Potatotes Gonna Potate But Blueplay\'s Gonna Masturbate');
	},
};

Object.merge(CommandParser.commands, trainerCards);
exports.trainerCards = trainerCards;

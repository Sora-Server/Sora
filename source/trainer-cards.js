/**
 * Trainer Cards
 *
 * This is where the trainer cards commands
 * are located.
 *
 */

var trainerCards = {
	battlefrontier: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<b>Sora Battle Frontier</b><br />'+
		    '<i>"Welcome to the Sora Battle Frontier! Challenge us if you Dare."</i> <br />'+
		    '<b>Requirements:</b> 8 Badges<br />'+
	 	    '<b>Rules:</b> The battle frontier may be challenged after collecting 8 gym badges and is needed to enter the Hall of Fame. You must beat 7 frontiers (Frontier Head needs to be the last Frontier battle and teams may be changed after each game to fit the next Battle Frontiers set of rules). You can not use Super Effective type pokemon against Mono-Type frontier brains. The same frontier may be challenged once every 24 hours.The Challenger must choose a partner Pokemon that must be present in all Frontier challenges.<br/>');
        },

	onyx: 'onyxeagle',
	onyxeagle: function(target, room, user) {
	 	if (!this.canBroadcast()) return;
	 	this.sendReplyBox('<a><font face = forte><font color =  b27300><font size= 5><center>∆OnyxEagle∆</center></font></a><br />'+
	 	    '<center><i>"Heads or Tails? Heads, I Win; Tails, you Lose"</i></center> <br />'+
		    '<b>Skilled in:</b> Rock types/ Ubers, Random Battle and OU to a certain degree.<br />'+
		    '<b>History:</b> 2nd Champion of New Sora. One of the 2 people who resurrected Sora from the rubbles. <br/>'+
		    '<b>Notes:</b> Resident coder of Sora, still conducts tests and registrations, offers advice. <br/>'+
	 	    '<img src="http://play.pokemonshowdown.com/sprites/xyani/kabutops.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/landorus.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/heracross-mega.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyranitar.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyrantrum.gif">');
        },
        
        noah: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆Champion Noah∆</b></center></a><br />'+
		      '<center><i>"Need a Champion? I Noah guy."</i></center> <br />'+
		      '<b>Ace:</b> Liquidbones/Gegnarthewise (Gengar) <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-Gen 5 Ubers (Maximum of 2 Ubers) <br/>'+
	 	      '-No Hazards<br />'+
	 	      '<center><img src="http://sprites.pokecheck.org/i/134.gif"> <img src="http://i.imgur.com/pFtOL9I.png"> <img src="http://play.pokemonshowdown.com/sprites/xyani/gengar.gif"></center>');
	},

	bart: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆FrontierHead Bart∆</b></center></a><br />'+
		     '<center><i>"Patience? Nah.... Speed and power is what you need!"</i></center> <br />'+
		     '<b>Symbol:</b> Patience<br />'+
		     '<b>Ace:</b> Weavile<br />'+
	 	     '<b>Battle Rules:</b> <br/>'+
	 	     '-Ubers Battle <br/>'+
	 	     '-At least 2 must be tiered lower than OU <br/>'+
	 	     '-No Lowering opponents stats (Unless caused by attack) <br/>'+
	 	     '-No Pokemon with a base stat over 130<br />'+
	 	     '<center><img src="http://sprites.pokecheck.org/i/461.gif"> <img src="http://i1280.photobucket.com/albums/a482/Skarmory11/Misc%20sprites/Bart_zps03ad3a7d.png"></center>');
        },

	dragon: 'snowking',
	snowking: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Snowking</b><br />'+
		      '<b> Leader rank: <font color = 00ff59>6th</font></b> <br />'+
		      '<i>"If you don\'t come quietly, I\'m dragon you down with me."</i> <br />'+
		      '<b>Type: <font color = 230077>Dragon</font> </b><br />'+
		      '<b>Ace:</b> Latios<br />'+
		      '<img src="http://play.pokemonshowdown.com/sprites/xyani/latios.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/latias.gif"><br />');
	},

	toast: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('<a><font size= 4><center><b><font color = ff4803>∆Champion Toast∆</font></b></center></a><br />'+
			  '<center><i>"A Day without SunShine is like Night Time."</i></center> <br />'+
			  '<b>Ace:</b> Charizard<br />'+
	 	          '<b>Battle Rules:</b> <br/>'+
	 	          '-No Hazards <br/>'+
	 	          '-Ubers Monotype <br/>'+
	 	          '<center><img src="http://play.pokemonshowdown.com/sprites/xyani/hooh.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/charizard.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/volcarona.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyranitar-mega.gif"> </center>');
	},
        
        zoro: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Zoro</b><br />'+
		      '<i>"I am everywhere you are not."</i> <br />'+
		      '<b>Type:</b> Psychic<br />'+
		      '<b>Ace:</b> Gardevoir <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-None <br/>'+
	 	      '<img src="http://sprites.pokecheck.org/i/645.gif"> <img src="http://sprites.pokecheck.org/t/187.gif">');
	},
	
	bloodfist: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Coach <b>Bloodfist</b><br />'+
		      '<i>The Master of Many Types</i> <br />'+
		      '<i>"You listen to me, you go to the top! You don\'t, then your missteps will be noted by everyone!"</i> <br />'+
		      '<b>Purpose:</b> Will help to train you in your chosen type, or team, and assist in what items are missing.<br />'+
      	 	      '<b>See me online and need help? Message me.<b>');
        },
        
	cocoa: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Cocoa</b><br />'+
		      '<i>"Your defeat shall be nearly as sweet as Chocolate and Vanilla"</i> <br />'+
		      '<b>Type:</b> Dark<br />'+
		      '<b>Ace:</b> Umbreon <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-No direct status. <br/>'+
	 	      '-No protecting moves. <br/>'+
	 	      '<img src="http://play.pokemonshowdown.com/sprites/xyani/umbreon.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/froslass.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/roserade.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/typhlosion.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/krookodile.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/bisharp.gif">');
        },

	risu: 'ninjarisu',
	ninjarisu: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Delta <b>Ninjarisu</b><br />'+
		    '<i>"While many regarded Risu as weak, I saw your Determination shine, and you proved to be a real bro. The legend of Ninjarisu will forever live on. ~Marriland"</i> <br />'+
		    '<b>Ace:</b> Pachirisu<br />'+
	 	    '<b>Requirements:</b> 8 Gym Badges<br />'+
	 	    '<b>Rules:</b> PU Tier<br />'+
	 	    '-Max 1 Eviolite item <br/>'+
	 	    '-No Hazards <br/>'+
	 	    '-No Direct Status <br/>'+
	 	    '-<a href="http://pastebin.com/hV6XZnUh">Difi Battle</a> <br />'+
	 	    '<b>Prize for victory:</b> 20 bucks <br/>'+
	 	    '-<a href="http://partiallyused.weebly.com/">Link to PU Tier list</a><br/>'+
	 	    '<img src="http://play.pokemonshowdown.com/sprites/xyani/pachirisu.gif">');
        },
        
        silth: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Centurion <b>Silth</b><br />'+
		    '<i>"???"</i> <br />'+
		    '<b>Ace:</b> ???<br />'+
		    '<b>Tiers:</b> OU, OU Monotype or Doubles<br />'+
	 	    '<b>Requirements:</b> 5 Frontier Symbols<br />');
        },
        
        darkus: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Guardian <b>Darkus</b><br />'+
			    '<i>"You Snooze, You Lose!"</i> <br />'+
			    '<b>Ace:</b> Klinklang<br />'+
		 	    '<b>Note:</b> Nemesis of Overlord, him or me? Choose<br />'+
		 	    '<b>Requirements:</b> 10 Gym Badges<br />'+
		 	    '<img src="http://sprites.pokecheck.org/i/601.gif"> <img src="http://sprites.pokecheck.org/t/187.gif">');
        },

        grass: 'asch',
	asch: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Asch</b><br />'+
			'<b>Leader rank: <font color = 76ff00>4th</font></b> <br />'+
			'<i>"Ignorance is Eviolite Blissey"</i> <br />'+
			'<b>Type: <font color = 006b0a>Grass</font></b> <br />'+
			'<b>Ace:</b> Brother Nature (Mega-Venusaur)<br />'+
			'<img src="http://play.pokemonshowdown.com/sprites/trainers/54.png"> <img src="http://sprites.pokecheck.org/i/003f.gif">');
	},

	blade: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Elite Frontier <b>Blade</b><br />'+
			'<i>"Shift a burning flame into an ever burning flame!"</i> <br />'+
			'<b>Symbol:</b> Yin and Yang<br />'+
			'<b>Ace:</b> War Turtle (Torkoal)<br />'+
			'<b>Battle Rules:</b> <br />'+
			'-Ability Shift Tier<br />'+
			'-No focus Sash/Band<br />'+
		        '<a href="http://www.smogon.com/forums/threads/ability-shift.3503100/">How Ability Shift works</a> <br />'+
			'<img src="http://play.pokemonshowdown.com/sprites/xyani/victini.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/torkoal.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/blaziken.gif">');
	},
     
        fighting: 'jacob',
        jacob: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Jacob</b><br />'+
			'<i>"My fighting\'s are frightening."</i> <br />'+
			'<b>Type: <font color = d83c08>Fighting</font></b><br />'+
			'<b>Ace:</b> Heracross<br />');
        },
        
        fairy: 'ark',
        ark: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Ark</b><br />'+
	              '<i>*Rubs hands*</i> <br />'+
	              '<b>Type: <font color = ff42a0>Fairy</font></b><br />'+
	              '<b>Ace:</b> Togekiss<br />');
        },
        
        fire: 'hayden',
        hayden: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Hayden</b><br />'+
	              '<i>"Before you judge me, make sure that you\'re perfect"</i> <br />'+
	              '<b>Type: <font color = FF0000>Fire</font></b><br />'+
	              '<b>Ace:</b> Infernape<br />');

	},
 
        steel: 'myth',
        myth: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Myth</b><br />'+
			  '<b> Leader ranking: <font color = ffe100>3rd</font></b> <br />'+
			  '<i>"Steel is a hard type, get it?"</i> <br />'+
			  '<b>Type: <font color = 5e6664>Steel</font></b> <br />'+
			  '<b>Ace:</b>Mega-Scizor (A Robot)<br />');
	},
	
        water: 'floatzel',
        floatzel: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Floatzel</b><br />'+
			  '<i>"I will drown you so hard, you will drown to death"</i> <br />'+
			  '<b>Type: <font color = 0400f9>Water</font></b> <br />'+
			  '<b>Ace:</b> Keldeo<br />');
        },
    
        rock: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type: <font color = 472e10>Rock</font></b><br />'+
			  '<b>Ace:</b> ???<br />');
			  
        },
        
        vanilla: function(target, room, user) {
		if (!this.canBroadcast()) return;
	        this.sendReplyBox('E4 <b>Vanilla</b><br />'+
			  '<i>"Prepare to be pummeled cheerfully, jauntily, and utterly one-sidedly!"</i> <br />'+
			  '<b>Type:</b> Normal<br />'+
			  '<b>Ace:</b> Miltank (Dragonslayer)<br />'+
			  '<b>Battle Rules:</b><br />'+
			  '-No Focus Sash<br />'+
			  '-No protecting moves<br />'+
         		  '<img src="http://sprites.pokecheck.org/i/241.gif"> <img src="http://sprites.pokecheck.org/t/111.gif">');
       
        },
        
        tempest: function(target, room, user) {
		if (!this.canBroadcast()) return;
	        this.sendReplyBox('E4 <b>Tempest</b><br />'+
			  '<i>"Excellent, mmhm yes. Excellent indeed."</i> <br />'+
			  '<b>Type:</b> Bug<br />'+
			  '<b>Ace:</b> Scizor (Scizorhands)<br />'+
			  '<b>Battle Rules:</b><br />'+
			  '-No Hazards <br />'+
			  '<img src="http://play.pokemonshowdown.com/sprites/trainers/169.png"><img src="http://sprites.pokecheck.org/i/212.gif">');

	},
		  
        dark: 'kingx',
        kingx: function(target, room, user) {
		    if (!this.canBroadcast()) return;
			this.sendReplyBox('Gym Ldr <b>KingX</b><br />'+
			  '<i>"Long live the King!"</i> <br />'+
			  '<b>Type: <font color = 15012b>Dark</font></b><br />'+
			  '<b>Ace:</b> Sableye<br />');
        },
        
        poison: 'srewop',
        srewop: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Srewop</b><br />'+
			 '<b> Leader rank: <font color = 00ff00>5th</font></b> <br />'+
			 '<i>"It\'s going down, I\'m yelling Timburr"</i> <br />'+
			 '<b>Type: <font color = aa00ff>Poison</font></b><br />'+
			 '<b>Ace:</b> Venusaur<br />');
	},
        
        flying: 'waffles',
        waffles: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Waffles</b><br />'+
		         '<b> Leader ranking: <font color = ff9900>2nd</font></b> <br />'+
		         '<i>"Get ready to cry as we fly into the sky~"</i> <br />'+
	              	 '<b>Type: <font color = 91ffe9>Flying</font></b><br />'+
			 '<b>Ace:</b> Toast the Charizard<br />'+
			 '<img src="http://media.tumblr.com/tumblr_m6ci5tQsEv1qf6fp2.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/charizard-mega-x.gif">');
        },
        
        normal: 'bamdee',
        bamdee: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Bamdee</b><br />'+
		         '<i>"What\'s a quote?"</i> <br />'+
	              	 '<b>Type: <font color = ffa5d5>Normal</font></b><br />'+
			 '<b>Ace:</b> Staraptor<br />');
       
        },
       
        nova: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Frontier <b>Nova</b><br />'+
			  '<i>"Every Champion was once a contender that refused to give up,I will never give up no matter how hard you hit."</i> <br />'+
			  '<b>Symbol:</b> Will of Steel<br />'+
			  '<b>Ace:</b> Mewtwo<br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-Ubers tier <br/>'+
		 	  '-2 Uber, 2 OU and 2 random pokemon must be used <br/>'+
		 	  '-Random pokemon must be chosen using  /dice command on the Sora server<br />'+
		 	  '-Players can use whatever pokemon from the evolution chain of the pokemon picked by random <br/>');
	},

        night: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Frontier <b>Night</b><br />'+
			  '<i>"Slow and Steady wins the race."</i> <br />'+
			  '<b>Symbol:</b> Limit<br />'+
			  '<b>Ace:</b> Rhydon<br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-No Pokemon above 40 Base Speed <br/>'+
		 	  '-No hazards <br/>'+
		 	  '-Speed Stat can\'t be changed. <br/>'+
		 	  '<img src="http://play.pokemonshowdown.com/sprites/xyani/rhydon.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/escavalier.gif"> <br/>');

	},

        ghost: 'eska',
	eska: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Eska</b><br />'+
			 '<b> Leader Ranking: <font color = FF0000>1st</font></b> <br />'+
			 '<i>"Don\'t worry, I will protect you my feeble turtle-duck."</i> <br />'+
		         '<b>Type: <font color = 7814e2>Ghost</font></b><br />'+
			 '<b>Ace:</b> Froslass<br />'+
			 '<img src="http://play.pokemonshowdown.com/sprites/xyani/froslass.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/chandelure.gif">');
        },
        
        
        
	electric: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			 '<i>"???"</i> <br />'+
		         '<b>Type: <font color = d6cc0c>Electric</font></b><br />'+
			 '<b>Ace:</b> ???<br />');
  
        },

        azh: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('<a><font size= 4><center><b>∆Gym Ldr ArthurZH∆</b></center></a><br />'+
			  '<center><i>"I AM THE MASTER OF THE SEVEN SEAS! FEAR ME, I SHALL DROWN ALL IN MY WAY!"</i></center> <br />'+
			  '<b>Favoured Type:</b> Water<br />'+
			  '<b>Ace:</b> Kabutops<br />'+
			  '<b>Achievements:</b> <strike>Best</strike> Water Leader of Sora, Ex Roulette/Champion\'s Challenge/Monotype Frontier of Sora. <br />'+
			  '<center><img src="http://play.pokemonshowdown.com/sprites/xyani/keldeo.gif"> <img src="http://sprites.pokecheck.org/t/126.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/kabutops.gif"></center>');
	},

	psychic: 'overseer',
	overseer: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Overseer</b><br />'+
			  '<i>"Kanye> Jay z"</i> <br />'+
			  '<b>Type: <font color = ff00b6>Psychic</font></b><br />'+
			  '<b>Ace:</b> Mega-Medicham <br />');
	},
	
	ground: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type: <font color = 5b3a00>Ground</font></b><br />'+
			  '<b>Ace:</b> ??? <br />');
			  
	},
	
	bug: 'steve',
	steve: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Steve</b><br />'+
			  '<i>"I come like bug, you go like an earthquake"</i> <br />'+
			  '<b>Type: <font color = 65b510>Bug</font></b><br />'+
			  '<b>Ace:</b> Pinsir <br />');
        },
	
	ice: 'tsuna',
	tsuna: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Tsuna</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type: <font color = 00e0ac>Ice</font></b><br />'+
			  '<b>Ace:</b> Kyurem-Black<br />');
	},

	jeratt: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆Artiste Jeratt∆</b></center></a><br />'+
			'<center><i>"Let the storm rage on. The cold never bothered me anyways."</i></center><br />'+
			'<img src="http://sprites.pokecheck.org/i/235.gif"> <img src="http://sprites.pokecheck.org/t/033.gif"><br />'+
			'<b>Highly skilled in:</b> Dragon & Ice<br />'+
			'<b>Skilled in:</b> Making quotes, backgrounds for Sora and many Pokemon types.<br />'+ 
		 	'<b>Note:</b> Close the Lobby and see what I can really do. <br/>'+
		 	'<b>History:</b> Greatest Ice E4, <strike>undefeated</strike> Dragon E4. <br/>'+
		 	'P.S. I\'m still Dragon you away with my coldness. <br/>'+
		 	'P.P.S Use Scizor against me, and I\'ll get fired up and blast you! <br/>'+
		 	'<center><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/rattata.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/mamoswine.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/vanilluxe.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/dialga.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/zoroark.gif"></center>');
        },
        
        gasp: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>gasp</b><br />'+
			'<i>"Lights out."</i> <br />'+
			'<b>Ace:</b> Mega Gengar<br />'+
			'<b>Honours:</b> Sora\'s first challenger to reach Hall of Fame.<br />'+
			'<b>Battle rules:</b>'+
			'-Balanced Hackmons <br/>'+
		 	'<img src="http://pldh.net/media/pokemon/gen5/blackwhite_animated_front/302.gif"> <img src="http://media.tumblr.com/tumblr_m6ci5tQsEv1qf6fp2.gif">');
        
        
        },
        
        
        neith: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Neith</b><br />'+
			'<i>"Welcome to the real world... fight or flight? Your choice..."</i> <br />'+
			'<b>Ace:</b> Nidoking<br />'+
			'<b>Symbol:</b> Global Symbol<br />'+
			'<b>Battle rules:</b> <br />'+
			'-6v6 2014 VGC Doubles <br/>'+
			'-To observe the 6v6 rule, battles will be fought in the Smogon doubles format, but VGC rules and clauses will apply. <br />');
        	
        	
        	
        },
        
        
        jaddu: function (target, room, user) {
                if (!this.canBroadcast()) return;
                this.sendReplyBox('<center><img src="http://i.imgur.com/GHnqgjH.png"></center><br />'+
                '<i><font color="blue"><b>Quote:Who am I? Well,I am your Worst Nightmare<br>'+
                'Ace=Infernape(CR Ace:Rhydon)<br />'+
                'Custom Rules:<br />'+
                '- No poke above the base speed of 40<br />'+
                '- No Hazards<br />'+
                '-Speed should not be increased or decreased<br />'+
                '</b></i><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/infernape.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/rhydon.gif">');
        },
        
        
        getbucks: 'getbucks',
		getbucks: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Please check out the Shop page in the link below to see methods of earning money:<br />' +
				'- <a href="http://soraleague.weebly.com/shop.html">Shop</a><br />' +
				'</div>');
	},

	site: 'site',
		site: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is The Sora League Website:<br />' +
				'- <a href="http://soraleague.weebly.com/index.html">Sora League Site</a><br />' +
				'</div>');
	},
	
	ipl: 'ipl',
		ipl: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a link to the International Pokemon League Tournament (IPL):<br />' +
				'- <a href="http://internationpokemonleague.weebly.com/">IPL Tournament Web Site</a><br />' +
				'</div>');
	},

	incweather: 'incweather',
		incweather: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a detailed explanation of the format Inclement Weather:<br />' +
				'- <a href="http://soraleague.weebly.com/inclement-weather.html">Inclement Weather</a><br />' +
				'</div>');
	},

	events: 'events',
		events: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Here is a list of events held in The Sora League:<br />' +
				'- <a href="http://soraleague.weebly.com/events.html">Sora League Events</a><br />' +
				'</div>');
				

	},

	leaderranks: 'ranks',
		ranks: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Listed here are the Top 6 Leaders in The Sora League based on performance in our Monthly Promotional Tournaments! Please keep in mind, the number of ranked Leaders may change month to month and the ranking methodology may be changed in future. <br />' +
				'-<b>1st <font color = 7814e2>Eska</font></b> (Ghost)<br />'+
				'-<b>2nd <font color = 00fffa>Waffles</font></b> (Flying)<br />'+
				'-<b>3rd <font color = 5e6664>Myth</font></b></b> (Steel)<br />'+
				'-<b>4th <font color = 006b0a>Asch</font></b> (Grass)<br />'+
				'-<b>5th <font color = aa00ff>Srewop</font></b> (Poison) <br />'+
				'-<b>6th <font color = 4f107c>Snowking</font></b> (Dragon) <br />'+
				'</div>');
	
	},
	
	ourevamped: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Welcome to OU Revamped! Displayed here are the details on how OU Revamped works! <br />'+
			'After seeing the direction that the Smogon OU meta was taking, we decided we\'d like to have a different way to play Smogon\'s OU. <br />'+
			'Unbanned Pokemon from Uber are as follows: <br />'+
			'Mega-Mawile <img src="http://play.pokemonshowdown.com/sprites/xyani/mawile-mega.gif"> <br />'+
			'Aegislash <img src="http://play.pokemonshowdown.com/sprites/xyani/aegislash.gif"> <br />'+
			'Deoxys-Defense <img src="http://play.pokemonshowdown.com/sprites/xyani/deoxys-defense.gif"> <br />'+
			'Deoxys-Speed <img src="http://play.pokemonshowdown.com/sprites/xyani/deoxys-speed.gif"> <br />'+
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
};

Object.merge(CommandParser.commands, trainerCards);
exports.trainerCards = trainerCards;

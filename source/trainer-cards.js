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
	 	    '<img src="http://play.pokemonshowdown.com/sprites/xyani/kabutops.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/landorus.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/heracross-mega.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyranitar.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyrantrum.gif">'+
	 	    '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
        },
        
        noah: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b><font color = 430747>∆Champion Noah∆</font></b></center></a><br />'+
		      '<center><i>"Need a Champion? I Noah guy."</i></center> <br />'+
		      '<b>Ace:</b> Demonisation (Yveltal) <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-Ubers <br/>'+
	 	      '<center><img src="http://i.imgur.com/pFtOL9I.png"> <img src="http://play.pokemonshowdown.com/sprites/xyani/yveltal.gif"></center> <br />'+
	 	      '<img src="http://sprites.pokecheck.org/i/134.gif"> <br />'+
	 	      'R.I.P. in piece Liquidbones 2013-2014 <br />'+
	 	      'Gone, but definitely not forgotten. <br />'+
	 	      '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},

	bart: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆FrontierHead Bart∆</b></center></a><br />'+
		     '<center><i>"My pawn. My bishop. My rook. My knight. And worst of all, I\'ve lost my queen. But I’m still not in checkmate. Not yet anyway."</i></center> <br />'+
		     '<b>Symbol:</b> Patience<br />'+
		     '<b>Ace:</b> Weavile<br />'+
	 	     '<b>Battle Rules:</b> <br/>'+
	 	     '-Ubers Battle <br/>'+
	 	     '-At least 2 must be tiered lower than OU <br/>'+
	 	     '-No Lowering opponents stats (Unless caused by attack) <br/>'+
	 	     '-No Pokemon with a base stat over 130<br />'+
	 	     '<center><img src="http://sprites.pokecheck.org/i/461.gif"> <img src="http://i1280.photobucket.com/albums/a482/Skarmory11/Misc%20sprites/Bart_zps03ad3a7d.png"><img src="http://play.pokemonshowdown.com/sprites/xyani/torterra.gif"></center>'+
	 	     '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
        },

	dragon: 'tempest',
	tempest: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Tempest</b><br />'+
		      '<b> Leader Ranking: <font color =00d30a>5th</font></b> <br />'+  
		      '<i>"Excellent. Mhm, excellent indeed."</i> <br />'+
		      '<b>Type: <font color = 230077>Dragon</font> </b><br />'+
		      '<b>Ace:</b> Babylon (Garchomp)<br />');
	},

	toast: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('<a><font size= 4><center><b><font color = ff4803>∆Champion Toast∆</font></b></center></a><br />'+
			  '<center><i>"A Day without SunShine is like Night Time."</i></center> <br />'+
			  '<b>Ace:</b> Charizard<br />'+
	 	          '<b>Battle Rules:</b> <br/>'+
	 	          '-No Hazards <br/>'+
	 	          '-Ubers Monotype <br/>'+
	 	          '<center><img src="http://play.pokemonshowdown.com/sprites/xyani/hooh.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/charizard.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/volcarona.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyranitar-mega.gif"> </center>'+
	 	          '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},
        
        zoro: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Zoro</b><br />'+
		      '<i>"I am everywhere you are not."</i> <br />'+
		      '<b>Type:<font color = #ff007f>Psychic</font></b><br />'+
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
		      '<b>Type:<font color = #200644>Dark</font></b><br />'+
		      '<b>Ace:</b> Umbreon <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-No direct status. <br/>'+
	 	      '-No protecting moves. <br/>'+
	 	      '<img src="http://play.pokemonshowdown.com/sprites/xyani/umbreon.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/froslass.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/roserade.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/typhlosion.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/krookodile.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/bisharp.gif">');
        },
        
        arjunb: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Arjunb</b><br />'+
		      '<i>"Even if you fight hard, you\'ve still got no chance of winning."</i> <br />'+
		      '<b>Type: <font color =  d83c08>Fighting</font></b> <br />'+
		      '<b>Ace:</b> Tony Stark (Keldeo-Resolute) <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-No Trick Room <br />'+
	 	      '-No Hazards <br />');
        
        
        },
        

	risu: 'ninjarisu',
	ninjarisu: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Ninjarisu</b><br />'+
		    '<i>"I will show you the power of the best of the worst"</i> <br />'+
		    '<b>Ace:</b> <s>Unown</s><br />'+
	 	    '<b>Symbol:</b> Powerless Symbol<br />'+
	 	    '<b>Rules:</b> PU <br />'+
	 	    '-No Stat Changing moves <br/>'+
	 	    '-No base stat over 115<br/>'+
	 	    '-No Hazards <br/>'+
	 	    '-FUCK OFF KNOCK OFF (No Knock off) <br />'+
	 	    '<img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-interrogation.gif">'+
	 	    '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	 	    
	},
	
	
	
	ignatius: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<b><font color = 55dbe8><a><font size= 4><center>∆Gym Ldr Meows∆</font></center></b><br />'+
		'<center><i>"I might be a bitch, but I\'m definitely not a pussy"</i></center><br />'+
		'<b>Who am I:</b> Middle Cup Master, Ice Trainer and OM lover <br />'+
		'<b>Favorite Pokemon:</b> Gardevoir, Porygon 2, Meloetta <br />'+
		'<b>Favorite type:</b> Ice <br />'+
		'<b>Ace:</b> Gurdurr <br />'+
		'<center><img src="http://play.pokemonshowdown.com/sprites/xyani/gurdurr.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/doublade.gif"></center><br />');
        
	},
        
        
        
        abtth: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<center><b><font size="4" color="03b206">ABootToTheHead</font></b></center><br>'+
		'<center><i>"Stardust-weaved ARiA, please deliver this melody for me."</i> </center><br /><br />'+
		'<b>Ace: </b>Scizor and Whimsicott<br />'+
		'<b>Favorite Pokemon: </b>Typhlosion and Scizor<br />'+
		'<b>Preferred tiers: </b>VGC, Ubers, OU <br />'+
		'<b>Known for: </b>VoltTurn and Whimsistall shenanigans<br />'+
		'<b>Achievements: </b>Ex-Elite Frontier, ex-Elite Four<br /><br />'+
		'<center><img src="http://sprites.pokecheck.org/i/157.gif"><img src="http://sprites.pokecheck.org/i/530.gif"><img src="http://sprites.pokecheck.org/i/547.gif"><img src="http://sprites.pokecheck.org/t/144.gif"><img src="http://sprites.pokecheck.org/i/205.gif"><img src="http://sprites.pokecheck.org/i/310.gif"><img src="http://sprites.pokecheck.org/i/212.gif"></center> <br />');
	
	
        },
        
        silth: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Centurion <b>Silth</b><br />'+
		    '<i>"???"</i> <br />'+
		    '<b>Ace:</b> ???<br />'+
		    '<b>Tiers:</b> OU, OU Monotype or Doubles<br />'+
	 	    '<b>Requirements:</b> 5 Frontier Symbols<br />');
        },
        
        ascher: 'sube4',
        sube4: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center>Sub E4 Position: <b><font color = 007700>Active</font></b></center><br />'+
		'Sub E4 <b>Ascher</b> <br />'+
		'<b>Type:</b> <b><font color = 006b0a>Grass</font></b><br />'+
		'<b>Battle Rules:</b> <br />'+
		'-No Choice items <br />'+
		'-No Protecting moves (Protect, Detect, etc) <br />');
        
        
        }, 

        grass: 'asch',
	asch: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Asch</b><br />'+
			'<b> Leader rank: <font color = ffe100>3rd</font></b> <br />'+ 
			'<b>*GRACEFUL CHANTING*</b> <br />'+
			'<b>Type: <font color = 006b0a>Grass</font></b> <br />'+ 
			'<b>Ace:</b> Brother Nature (Mega-Venusaur)<br />'+
			'<img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/bulbasaur-3.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/bulbasaur-3.gif">');
	},

	blade: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b><font color = FF0000>∆Fröntier∆Blade☯</font></b></center></a><br />'+
			'<center><i>"7.8 - Too much water"</i></center> <br />'+
			'<b>Symbol:</b> Yin and Yang <br />'+
			'<b>Ace:</b> Mybro (Slowbro) <br />'+
			'<b>Battle Rules:</b> <br />'+
			'-Ability Shift Tier<br />'+
			'-No focus Sash/Band<br />'+
			'-No Hazards <br />'+
		        '<a href="http://www.smogon.com/forums/threads/ability-shift.3503100/">How Ability Shift works</a> <br />'+
                        '<a href="http://www.psypokes.com/lab/abilities.php">Pokemon Ability List</a> <br />'+
			'<img src="http://play.pokemonshowdown.com/sprites/xyani/victini.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/blaziken.gif" align = "right">'+
                        '<center><img src="http://play.pokemonshowdown.com/sprites/xyani/torkoal.gif"></center>'+
                        '<center><b>R.I.P. War Turtle</b></center> <br />'+
                        '<center>Second time you have been killed, first a creation in minecraft and second by smogon</center><br />');
	},
     
        fighting: 'm2king',
        m2king: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>M2King</b><br />'+
		        'Leader Ranking: <b><font color = FF0000>1st</font></b> <br />'+
			'<i>"K.O. PUNCH\'D, GET REKT"</i> <br />'+
			'<b>Type: <font color = d83c08>Fighting</font></b><br />'+
			'<b>Ace:</b> Gallade <br />');
        },
        
        fairy: 'ark',
        ark: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Ark</b><br />'+
	              '<i>*Rubs hands*</i> <br />'+
	              '<b>Type: <font color = ff42a0>Fairy</font></b><br />'+
	              '<b>Ace:</b> Togekiss<br />');
        },
        
        
        fire: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
	              '<i>"???"</i> <br />'+
	              '<b>Type: <font color = FF0000>Fire</font></b><br />'+
	              '<b>Ace:</b> Combusken<br />');

	},
 
        steel: 'myth',
        myth: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Myth</b><br />'+
			  '<b> Leader Ranking: <font color = 020089>10th</font></b> <br />'+ 
			  '<i>"The iron walls of magicness that guards fruits"</i> <br />'+
			  '<b>Type: <font color = 5e6664>Steel</font></b> <br />'+
			  '<b>Ace:</b>Mega-Scizor (A Robot)<br />');
	},
	
        water: 'floatzel',
        floatzel: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Floatzel</b><br />'+
		          '<b> Leader ranking: <font color =007daa>7th</font></b> <br />'+
			  '<i>"I will drown you so hard, you will drown to death"</i> <br />'+
			  '<b>Type: <font color = 0400f9>Water</font></b> <br />'+
			  '<b>Ace:</b> Keldeo<br />'+
			  '<img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/surskit.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/gyarados-mega.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/keldeo.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/surskit.gif">');
        },
    
        rock: 'torterra',   
        torterra: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Torterra</b><br />'+
			  '<i>"I am rock hard and solid."</i> <br />'+
			  '<b>Type: <font color = 472e10>Rock</font></b><br />'+
			  '<b>Ace:</b> Aerodactyl<br />');
			  
        },
        
        bamdee: function(target, room, user) {
		if (!this.canBroadcast()) return;
	        this.sendReplyBox('E4 <b>Bamdee</b><br />'+
			  '<i>"What\'s a quote?""</i> <br />'+
			  '<b>Type: <font color = #9b8f95>Normal</font></b><br />'+
			  '<b>Ace:</b> Miltank<br />'+
			  '<b>Battle Rules:</b><br />'+
			  '-No Focus Sash<br />'+
			  '-No Trick/Switcheroo<br />');
       
        },
        
		  
        dark: 'fallen',
        fallen: function(target, room, user) {
		    if (!this.canBroadcast()) return;
			this.sendReplyBox('Gym Ldr <b>Fallen</b><br />'+
			  '<i>"The King has Fallen"</i> <br />'+
			  '<b>Type: <font color = 15012b>Dark</font></b><br />'+
			  '<b>Ace:</b> Sableye<br />');
        },
        
        poison: 'srewop',
        srewop: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Srewop</b><br />'+
			 '<b> Leader Ranking: <font color =ff9900>2nd</font></b> <br />'+
			 '<i>"It\'s going down, I\'m yelling Timburr"</i> <br />'+
			 '<b>Type: <font color = aa00ff>Poison</font></b><br />'+
			 '<b>Ace:</b> Venusaur<br />');
	},
        
        flying: 'arsh',
        arsh: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Arsh</b><br />'+
		         '<b> Leader Ranking: <font color = a1ff00>4th</font></b> <br />'+
		         '<i>"Haters gonna hate, potatoes gonna potate."</i> <br />'+
	              	 '<b>Type: <font color = 00a6c4>Flying</font></b><br />'+
			 '<b>Ace:</b> Vivillon<br />');
			 
        },
        
        normal: 'vanilla',
        vanilla: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Vanilla</b><br />'+
		         '<b> Leader Ranking:<font color = 00bc8d>6th</font></b> <br />'+
		         '<i>"Prepare to be pummeled cheerfully, jauntily, and utterly one-sidedly!"</i> <br />'+
	              	 '<b>Type: <font color = ffa5d5>Normal</font></b><br />'+
			 '<b>Ace:</b> Miltank (Dragonslayer)<br />'+
			 '<img src="http://sprites.pokecheck.org/i/241.gif"><img src="http://sprites.pokecheck.org/t/111.gif">');
       
        },
       
        nova: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Frontier <b>Nova</b><br />'+
			  '<i>"If you have given it your all, then you have already won"</i> <br />'+
			  '<b>Symbol:</b> Will of Steel<br />'+
			  '<b>Ace:</b> Brony (Keldeo)<br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-Ubers tier <br/>'+
		 	  '-2 Uber, 2 OU and 2 RU Pokemon must be used <br/>'+
		 	  '-No Focus Sash/Band<br />'+
		 	  '-No Hazards <br/>');
	},

         iggy: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Frontier <b> Iggy</b><br />'+
			'<i>"I\'m so fancy, you already know."</i><br />'+
			'<b>Symbol:</b> Fancy Symbol <br />'+
			'<b>Ace:</b> Piloswine <br />'+
			'<b>Battle rules:</b><br />'+
			'-<a href="http://www.smogon.com/forums/threads/middle-cup.3494887/">Middle cup</a><br />');

        },
        
        night: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Elite Frontier <b>Night</b><br />'+
			  '<i>"Slow and Steady wins the race."</i> <br />'+
			  '<b>Symbol:</b> Limit<br />'+
			  '<b>Ace:</b> FUCKING ESCA<br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-No Pokemon above 40 Base Speed <br/>'+
		 	  '-No hazards <br/>'+
		 	  '-Speed Stat can\'t be changed. <br/>'+
		 	  '<img src="http://play.pokemonshowdown.com/sprites/xyani/rhydon.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/escavalier.gif"> <br/>');

	},
	
	
	ajeratt: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Frontier <b>AJeratt</b><br />'+
			  '<i>"Can you keep up though?"</i> <br />'+
			  '<b>Symbol:</b> Priority<br />'+
			  '<b>Ace:</b> Trap Card (Gigalith) and Soraptor (Staraptor)<br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-<a href="http://soraleague.weebly.com/priomons.html">Priomons</a> Uber <br/>'+
		 	  '-Maximum of 1 Uber <br/>'+
		 	  '-At least 3 different types of Priomons moves must be used <br/>'+
		 	  '-No hazards <br />'+
		 	  '<img src="http://play.pokemonshowdown.com/sprites/xyani/groudon.gif"><img src="http://sprites.pokecheck.org/t/033.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/kyogre.gif"> <br/>'+
		 	  '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	
	
        },

        ghost: 'misery',
	misery: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Misery</b><br />'+
			 '<i>"Woah you\'re not scared?"</i> <br />'+
		         '<b>Type: <font color = 7814e2>Ghost</font></b><br />'+
			 '<b>Ace:</b> Aegislash<br />');
			 
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
			  '<b>Achievements:</b> <strike>Best</strike> Ex Water Leader of Sora, Ex Roulette/Champion\'s Challenge/Monotype Frontier of Sora. <br />'+
			  '<center><img src="http://fc00.deviantart.net/fs71/f/2014/082/f/8/manaphy_gif_by_gloomymyth-d7bakkc.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/keldeo.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/tentacruel.gif"><img src="http://sprites.pokecheck.org/t/126.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/kabutops.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/swampert.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/gyarados-mega.gif"></center>');
	},

        psychic: 'darkus',
	darkus: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Darkus</b><br />'+
		          '<b> Leader Ranking <font color = 0044aa>8th</font></b> <br />'+ 
			  '<i>"You gotta go along to get along."</i> <br />'+
			  '<b>Type: <font color = ff00b6>Psychic</font></b><br />'+
			  '<b>Ace:</b> Victini <br />');
	},
	
	ground: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type: <font color = 5b3a00>Ground</font></b><br />'+
			  '<b>Ace:</b> ??? <br />');
			  
	},
	
	bug: 'bloods',
	bloods: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Bloods</b><br />'+
			  '<i>"Fear the big creatures because you can see their size, but fear the small ones because you can\'t see them at all....."</i> <br />'+
			  '<b>Type: <font color = 65b510>Bug</font></b><br />'+
			  '<b>Ace:</b> Volcarona <br />');
        },
	
	ice: 'vescy',
	vescy: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Vescy</b><br />'+
			  '<i>"The world is cold..."</i> <br />'+
			  '<b>Type: <font color = 00e0ac>Ice</font></b><br />'+
			  '<b>Ace:</b>  Kyruem-Black<br />');
	},

        ateam: 'adminteam',
	adminteam: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b><font color = 075ff7>The Admin Team</font></b></center></a><br />'+
		'FAQ <br />'+
		'<b>Who are we?</b> The Admin team are a group of senior members who make most of the major league decisions and organize most major league events. <br />'+
		'<b>Who\'s in the Admin Team?</b> The Admin Team\'s active members consist of: Champion Noah, Champion Toast, Onyx, Artiste Jeratt, Frontier Ninjarisu, Neith and Frontierhead Bart. <br />'+
		'<b>What exactly do you guys do?</b> The Admin Team handle or oversee all matters from disputes in the League, to League Challenge Registration <br />'+
		'<b>How does one join the Admin team?</b> The Admin Team usually invites a select few senior members who\'ve shown to be mature and capable of handling responsibility. <br />'+
		' <br />'+
		'<center> All Admin team Members will be identifiable by having this badge on their cards:<center> <br />'+
		'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
		
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
		 	'<center><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/rattata.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/mamoswine.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/vanilluxe.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/dialga.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/zoroark.gif"></center>'+
		 	'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
        },
        
        gasp: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Trainer <b>gasp</b><br />'+
			'<i>"Lights out."</i> <br />'+
			'<b>Ace:</b> Mega Gengar<br />'+
			'<b>Honours:</b> Sora\'s first challenger to reach Hall of Fame.<br />'+
			'<b>Prefered Tier:</b> Balanced Hackmons'+
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
			'-To observe the 6v6 rule, battles will be fought in the Smogon doubles format, but VGC rules and clauses will apply. <br />'+
			'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
        	
        },
        
        nervepulse: 'priomonsnervepulse',
        priomonsnervepulse: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi58.tinypic.com/ayw0aq.jpg"> <br />');
		
        },
        
        tremorshock: 'priomonstremorshock',
        priomonstremorshock: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi58.tinypic.com/14u8e2s.jpg"> <br />');
		
        },
        
        fairywind: 'priomonsfairywind',
        priomonsfairywind: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi60.tinypic.com/33z7ndf.jpg"> <br />');
		
        },
        
         twineedle: 'priomonstwineedle',
         priomonstwineedle: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi58.tinypic.com/9h6i5z.jpg"> <br />');
		
        },
        
        dracocrash: 'priomonsdracocrash',
        priomonsdracocrash: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi59.tinypic.com/dyvvw2.jpg"> <br />');
		
        },
        
        flameshot: 'priomonsflameshot',
        priomonsflameshot: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi62.tinypic.com/29m6j5e.jpg"> <br />');
		
        },
        
        venomstrike: 'priomonsvenomstrike',
        priomonsvenomstrike: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi60.tinypic.com/2wf761w.jpg"> <br />');
		
        },
        
        divingcharge: 'priomonsdivingcharge',
        priomonsdivingcharge: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi58.tinypic.com/ezj4pl.jpg"> <br />');
		
        },
        
        stonespine: 'priomonsstonespine',
        priomonsstonespine: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi62.tinypic.com/2moy06e.jpg"> <br />');
		
        },
        
        sapblast: 'priomonssapblast',
        priomonssapblast: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi62.tinypic.com/23rk9oz.jpg"> <br />');
		
        },
        
        kineticforce: 'priomonskineticforce',
        priomonskineticforce: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<img src="http://oi60.tinypic.com/1ptn36.jpg"> <br />');
		
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
			this.sendReplyBox('Listed here are the Top 8 Leaders in The Sora League based on performance in our Monthly Promotional Tournament with a direct addition from how many badge defends each Leader has achieved! Please keep in mind, the number of ranked Leaders may change month to month and the ranking methodology may be changed in future. Please also note that the badge defend system isn\'t total career badge defends, but badge defends for each month. <br />' +
				'-<b>1st <font color = ea610b>M2King</font></b> (Fighting)<br />'+
				'-<b>2nd <font color = aa00ff>Srewop</font></b></b> (Poison)<br />'+
				'-<b>3rd <font color = 006b0a>Asch</font></b> (Grass)<br />'+
				'-<b>4th <font color = 00a6c4>Arsh</font></b> (Flying) <br />'+
				'-<b>5th <font color = 230077>Tempest</font></b> (Dragon)<br />'+
				'-<b>6th <font color = ffa5d5>Vanilla</front></b> (Normal)<br />'+
				'-<b>7th <font color = 0400f9>Floatzel</front></b> (Water)<br />'+
				'-<b>8th <font color = ff007f>Darkus</front></b> (Psychic)<br />'+
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

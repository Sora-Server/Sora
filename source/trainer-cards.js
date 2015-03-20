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
		this.sendReplyBox('<a><font size= 4><center><b><font color = 07e1ed>∆Champion Bart∆</font></b></center></a><br />'+
		     '<center><i>"My pawn. My bishop. My rook. My knight. And worst of all, I\'ve lost my queen. But I’m still not in checkmate. Not yet anyway."</i></center> <br />'+
		     '<b>Ace:</b> Weavile<br />'+
	 	     '<b>Battle Rules:</b> <br/>'+
	 	     '-Ubers Battle <br/>'+
	 	     '-At least 2 must be tiered lower than OU <br/>'+
	 	     '-No Lowering opponents stats (Unless caused by attack) <br/>'+
	 	     '-No Pokemon with a base stat over 130<br />'+
	 	     '<center><img src="http://sprites.pokecheck.org/i/461.gif"> <img src="http://i1280.photobucket.com/albums/a482/Skarmory11/Misc%20sprites/Bart_zps03ad3a7d.png"><img src="http://play.pokemonshowdown.com/sprites/xyani/torterra.gif"></center>'+
	 	     '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
        },

	dragon: 'meows',
	meows: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Meows</b><br />'+
		      'Leader Ranking: <font color = 72ff00><b>4th</font></b> <br />'+
		      '<i>"Roar"</i> <br />'+
		      '<b>Type: <font color = 230077>Dragon</font> </b><br />'+
		      '<b>Ace:</b> Dragalge<br />');
	},
	
	ascher: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<center><b><font size="4" color="2558db">Ascher</font></b></center><br />'+
                '<center><i>"*SEAL NOISES*"</i> </center><br /><br />'+
                '<b>Aces: </b>Venusaur and Whimsicott<br />'+
                '<b>Favorite Pokémon: </b>Shroomish, Venusaur, Whimsicott, Lotad, And Ludicolo<br />'+
                '<b>Achievements: </b>Getting in the top 80s of the main OU Monotype Ladder, Winning the E4 Promo tours 4 times<br />'+
                '<center><img src="http://play.pokemonshowdown.com/sprites/xyani/shroomish.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/venusaur.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/shroomish.gif"></center> <br />');
                
	},
        
        zoro: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Zoro</b><br />'+
		      '<i>"I am everywhere you are not."</i> <br />'+
		      '<b>Type:<font color = #ff007f> Psychic</font></b><br />'+
		      '<b>Ace:</b> Gallade <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-None <br/>'+
	              '<img src="http://sprites.pokecheck.org/i/645.gif"><img src="http://sprites.pokecheck.org/t/187.gif">');
	 	      
	},
	
        
	bush: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Bush</b><br />'+
		      '<i>"It only takes one move for Checkmate."</i> <br />'+
		      '<b>Type: <font color =472e10>Rock</font></b><br />'+
		      '<b>Ace:</b> Lunatone <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-None <br/>');
	 	      
        },
        
        hantu: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Hantu</b><br />'+
		      '<i>"Aku hantu yang menghantui Anda selama sisa hidup Anda, senang bertemu Anda."</i> <br />'+
		      '<b>Type: <font color = 066baa>Ghost</font></b> <br />'+
		      '<b>Ace:</b> Gengar<br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-None <br />');
	 	      
        
        
        },
        

	risu: 'ninjarisu',
	ninjarisu: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆Frontierhead Ninjarisu∆</b></center></a><br />'+
		    '<i>"I will show you the power of the best of the worst"</i> <br />'+
		    '<b>Ace:</b> Pachirisu<br />'+
	 	    '<b>Symbol:</b> Puny Symbol<br />'+
	 	    '<b>Rules:</b> <a href="http://www.smogon.com/forums/threads/oras-fu-winner-of-omotm-machoke-sticky-web-banned.3519286/">FU</a> <br />'+
	 	    '<img src="http://play.pokemonshowdown.com/sprites/xyani/pachirisu.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-romeo.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-india.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-sierra.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/unown-uniform.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/pachirisu.gif">'+
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
        
        terror: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<center><b><font size="4" color="82127a">Terror</font></b></center><br>'+
		'<center><i>"Laughing at Dinite\'s videos"</i> </center><br /><br />'+
		'<b>Ace: </b>Mega Sharpedo/Garchomp<br />'+
		'<b>Skilled at: </b>Being incredibly annoying, Balanced Hackmons, Certain Monotypes.<br />'+
		'<b>Achievements: </b> Best electric leader sora ever had, ex sora ground leader, and the best frontier of another league. Top 10 on the Balanced Hackmons Ladder.<br />'+
		'<img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/greninja.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/ferrothorn.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/sharpedo.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/garchomp.gif">');
        
        
        
        
        },
        
        
        sube4: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center>Sub E4 Position: <b><font color = FF0000>Offline</font></b></center><br />'+
		'Sub E4 <b>???</b> <br />'+
		'<b>Type:</b> <b><font color = 006b0a>???</font></b><br />'+
		'<b>Battle Rules:</b> <br />'+
		'-??? <br />'+
		'-??? <br />');
        
        
        }, 
        
        
        subfrontier: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center>Sub Frontier Position: <b><font color = FF0000>Offline</font></b></center><br />'+
		'Sub Frontier <b>???</b> <br />'+
		'<b>Symbol:</b> ???<br />'+
		'<b>Battle Rules:</b> <br />');
        
        
        }, 
        

        
	grass: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			'<i>"???"</i> <br />'+
			'<b>Type:<font color = 006b0a>Grass</font></b> <br />'+ 
			'<b>Ace:</b> ???<br />');
			
	},

	blade: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b><font color = FF0000>∆EliteFröntier∆Blade☯</font></b></center></a><br />'+
			'<center><i>"Too much Water 7.8/10"-IGN</i></center> <br />'+
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
     
        
        core: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Core</b><br />'+
			'<i>"Everything is always fun and easy, it\'s just how you look at it is what makes it boring and difficult."</i> <br />'+
			'<b>Symbol:</b> Creativity <br />'+
			'<b>Ace:</b> All <br />'+
			'<b>Battle Rules:</b> <br />'+
			'- <a href=http://soraleague.weebly.com/pokemon-sandbox.html">Pokemon Sandbox</a><br />');
        },
        
        
        fighting: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			'<i>"???"</i> <br />'+
			'<b>Type: <font color = d83c08>Fighting</font></b><br />'+
			'<b>Ace:</b> ??? <br />');
        },
        
        
        
        fairy: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
	              '<i>"???"</i> <br />'+
	              '<b>Type: <font color = ff42a0>Fairy</font></b><br />'+
	              '<b>Ace:</b> ???<br />');
        },
        
        
        fire: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
	              '<i>"???"</i> <br />'+
	              '<b>Type: <font color = FF0000>Fire</font></b><br />'+
	              '<b>Ace:</b> ???<br />');
	              

	},
 
        steel: 'floatzel',
        floatzel: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Floatzel</b><br />'+
		          'Leader Ranking: <font color = ffe100><b>3rd</font></b> <br />'+
			  '<i>"I\'ve been at this 3 times"</i> <br />'+
			  '<b>Type: <font color = 5e6664>Steel</font></b> <br />'+
			  '<b>Ace:</b> Jirachi <br />'+
			  '<img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/beldum.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-back/klink.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/steelix-mega.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-back/klink.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/beldum.gif">');
			  
	},

    
        rock: 'akkie',
        akkie: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Akkie</b><br />'+
		          'Leader Ranking: <font color = FF0000><b>1st</font></b> <br />'+
			  '<i>"Ready or not, I\'ll rock your world."</i> <br />'+
			  '<b>Type: <font color = 472e10>Rock</font></b><br />'+
			  '<b>Ace:</b> Mega-Diancie<br />'+
			  '<img src="http://play.pokemonshowdown.com/sprites/xyani/umbreon.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/froslass.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/roserade.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/typhlosion.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/krookodile.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/bisharp.gif">');
			  
        },
        
        bamdee: function(target, room, user) {
		if (!this.canBroadcast()) return;
	        this.sendReplyBox('E4 <b>Bamdee</b><br />'+
			  '<i>"What\'s a quote?""</i> <br />'+
			  '<b>Type: <font color = #9b8f95>Normal</font></b><br />'+
			  '<b>Ace:</b> Miltank<br />'+
			  '<b>Battle Rules:</b><br />'+
			  '-No Substitute<br />'+
			  '-No Trick/Switcheroo<br />');
       
        },
        
		  
        dark: 'fallen',
        fallen: function(target, room, user) {
		    if (!this.canBroadcast()) return;
			this.sendReplyBox('Gym Ldr <b>Fallen</b><br />'+
			  '<i>"The King has Fallen"</i> <br />'+
			  '<b>Type: <font color = 15012b>Dark</font></b><br />'+
			  '<b>Ace:</b> Cursed Shadow (Umbreon)<br />');
        },
        
        
        poison: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			 '<i>"???"</i> <br />'+
			 '<b>Type: <font color = aa00ff>Poison</font></b><br />'+
			 '<b>Ace:</b> ???<br />');
	},
        
        flying: 'arsh',
        arsh: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Arsh</b><br />'+
		         '<i>"Haters gonna hate, potatoes gonna potate."</i> <br />'+
	              	 '<b>Type: <font color = 00a6c4>Flying</font></b><br />'+
			 '<b>Ace:</b> Vivillon<br />');
			 
        },
        
        normal: 'vanilla',
        vanilla: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Vanilla</b><br />'+
		         '<i>"Prepare to be pummeled cheerfully, jauntily, and utterly one-sidedly!"</i> <br />'+
	              	 '<b>Type: <font color = ffa5d5>Normal</font></b><br />'+
			 '<b>Ace:</b> Miltank (Dragonslayer)<br />'+
			 '<img src="http://sprites.pokecheck.org/i/241.gif"><img src="http://sprites.pokecheck.org/t/111.gif">');
       
        },
       
        nova: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Frontier <b>Nova</b><br />'+
			  '<i>"The finest steel has to go through the hottest fire."</i> <br />'+
			  '<b>Symbol:</b> Will of Steel<br />'+
			  '<b>Ace:</b> MechRex (Aggron)<br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-UU <br/>'+
		 	  '-No Hazards <br/>'+
		 	  '-Item Clause <br />');
	},
	
	asch: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Frontier <b>Asch</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Symbol:</b> ???<br />'+
			  '<b>Ace:</b> ???<br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-?? <br />'+
		 	  '<img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/bulbasaur-3.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/bulbasaur-3.gif">');
	},
	
	
	srewop: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Elite Frontier <b>Srewop</b><br />'+
			  '<i>"You came to the wong place if you wanted a win."</i> <br />'+
			  '<b>Symbol:</b> SumTingWong<br />'+
			  '<b>Ace:</b> Golbat <br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-RU Monotype <br/>'+
		 	  '-No Stealth Rock <br/>'+
		 	  '-No Knock off<br />'+
		 	  '<center><img src="http://play.pokemonshowdown.com/sprites/xyani/zubat.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/golbat.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/zubat.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/gengar.gif"></center> <br />');
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

        
	ghost: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			 '<i>"???"</i> <br />'+
		         '<b>Type: <font color = 7814e2>Ghost</font></b><br />'+
			 '<b>Ace:</b> ???<br />');
			 
        },
        
       
	tempest: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Tempest</b><br />'+
			 '<i>"D=<{[(2*lv+10)/250]*Atk/Def*BP+2}*STAB*Eff*Crit*Itm*Abl*Wt*Spr>*x, 0.85<x<1"</i> <br />'+
		         '<b>Symbol:</b> World <br />'+
			 '<b>Ace:</b> Kangaskhan<br />'+
			 '<b>Battle rules:</b> <br />'+
			 '-VGC \'15 <br />');
        },
        
        
        electric: 'doge',
	doge: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Doge</b><br />'+
			 '<i>"Electricity is our energy. Even when were out we generate more."</i> <br />'+
		         '<b>Type: <font color = d6cc0c>Electric</font></b><br />'+
			 '<b>Ace:</b> Rotom-Fan<br />');
  
        },
        
        
        water: 'arthurzh',
	arthurzh: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>ArthurZh</b><br />'+
		         'Leader Ranking: <font color =1000ff><b>6th</font></b> <br />'+
			 '<i>"The power of the seas, storms and rivers are mine to hold....and here you dare to stand before me?"</i> <br />'+
		         '<b>Type: <font color = 0745ff>Water</font></b><br />'+
			 '<b>Ace:</b> Mega Swampert<br />');
			 
	},
        
        azh: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆ArthurZH∆</b></center></a><br />'+
			 '<center><i>"The power of the seas, storms and rivers are mine to hold....and here you dare to stand before me?"</i></center> <br />'+
			 '<b>Favoured Type:</b> Water<br />'+
			 '<b>Ace:</b> Mega-Gyarados<br />'+
			 '<b>Achievements:</b> <strike>Best</strike> Water Leader of Sora, Ex Roulette/Champion\'s Challenge/Monotype Frontier of Sora. <br />'+
			 '<center><img src="http://fc00.deviantart.net/fs71/f/2014/082/f/8/manaphy_gif_by_gloomymyth-d7bakkc.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/keldeo.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/tentacruel.gif"><img src="http://www.pokemonreborn.com/custom/44203.png?530"> <img src="http://play.pokemonshowdown.com/sprites/xyani/kabutops.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/swampert.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/gyarados.gif"></center>');
	},

        psychic: 'darkus',
	darkus: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Darkus</b><br />'+
			  '<i>"You would think I\'m Dark, but you can\'t think."</i> <br />'+
			  'Leader Ranking: <font color =ff9900><b>2nd</font></b> <br />'+
			  '<b>Type: <font color = ff00b6>Psychic</font></b><br />'+
			  '<b>Ace:</b> Victini <br />'+
			  '<img src="http://play.pokemonshowdown.com/sprites/xyani/victini.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/bisharp.gif"><br />');
			  
			  
	},
	
	ground: 'bloods',
	bloods: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Bloods</b><br />'+
		          '<b>Leader Ranking: <font color =00d30a><b>5th</font></b> <br />'+
			  '<i>"7.8/10 too much land"</i> <br />'+
			  '<b>Type: <font color = 5b3a00>Ground</font></b><br />'+
			  '<b>Ace:</b> Steelix <br />');
			  
	},
	
	bug: 'leaf',
	leaf: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Leaf</b><br />'+
		          'Leader Ranking: <font color =0d01ad><b>7th</font></b> <br />'+
			  '<i>"Bugs are legion, what can be crushed can be reborn; watch your step or you might be the one trodden on"</i> <br />'+
			  '<b>Type: <font color = 65b510>Bug</font></b><br />'+
			  '<b>Ace:</b> Scarab (Heracross) <br />');
        },
	
	ice: 'poppy',
	poppy: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Poppy</b><br />'+
			  '<i>"I dream for a living."</i> <br />'+
			  '<b>Type: <font color = 00e0ac>Ice</font></b><br />'+
			  '<b>Ace:</b> Frigid Bitch (Froslass)<br />');
	},

        ateam: 'adminteam',
	adminteam: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b><font color = 075ff7>The Admin Team</font></b></center></a><br />'+
		'FAQ <br />'+
		'<b>Who are we?</b> The Admin team are a group of senior members who make most of the major league decisions and organize most major league events. <br />'+
		'<b>Who\'s in the Admin Team?</b> The Admin Team\'s active members consist of: Champion Noah, Champion Bart, Onyx, Artiste Jeratt, Frontierhead Ninjarisu, Neith and Elite Four Bloodfist. <br />'+
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
			this.sendReplyBox('Listed here are the Top 7 Leaders in The Sora League based on performance in our Monthly Promotional Tournament with a direct addition from how many badge defends each Leader has achieved! Please keep in mind, the number of ranked Leaders may change month to month and the ranking methodology may be changed in future. Please also note that the badge defend system isn\'t total career badge defends, but badge defends for each month. <br />' +
				'-<b>1st <font color = 472e10>Akkie</font></b> (Rock)<br />'+
				'-<b>2nd <font color = ff00b6>Darkus</font></b></b> (Psychic)<br />'+
				'-<b>3rd <font color = 5e6664>Floatzel</font></b> (Steel)<br />'+
				'-<b>4th <font color = 230077>Meows</font></b> (Dragon) <br />'+
				'-<b>5th <font color = 0745ff>ArthurZH</font></b> (Water)<br />'+
				'-<b>6th <font color = 5b3a00>Bloods</font></b> (Ground)<br />'+
				'-<b>7th <font color = 65b510>Leaf</font></b> (Bug)<br />'+
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

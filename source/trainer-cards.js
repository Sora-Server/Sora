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
	
	ascher: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox( '<center><b><font size="4" color="2558db">Ascher</font></b></center><br />'+
                '<center><i>"*SEAL NOISES*"</i> </center><br /><br />'+
                '<b>Aces: </b>Venusaur and Whimsicott<br />'+
                '<b>Favorite Pokémon: </b>Shroomish, Venusaur, Whimsicott, Lotad, And Ludicolo<br />'+
                '<b>Achievements: </b>Getting in the top 80s of the main OU Monotype Ladder, Winning the E4 Promo tours 4 times<br />'+
                '<center><img src="http://play.pokemonshowdown.com/sprites/xyani/shroomish.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/venusaur.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/shroomish.gif"></center> <br />');
                
	},
	
	meowsie: function (target, room, user) {
		if (!this.canBroadcast()) return;
                this.sendReplyBox('<center><b><font size = 3 color = 10929E>MeowsOfSora</font></b><br/>' +
                        '<font size = 1><i>"I might be a bitch, but I\'m definitely not a pussy."</i></font></center><br/>' +
                        '<b>Type Speciality: <font color = "green">Bug</b></font><br/>' +
                        '<b>Ace:</b> Wobbuffet<br/>' +
                        '<b>Tiers Played:</b> OU, Monotype, Tier Shift<br/>' +
                        '<center><img src = "http://i196.photobucket.com/albums/aa279/loganknightphotos/wobbuffet-2.gif"><img src = "http://sprites.pokecheck.org/t/140.gif"><img src = "http://i196.photobucket.com/albums/aa279/loganknightphotos/wobbuffet-2.gif"> <br />');
	
	
	
        },
        
        arjun: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<center><input type="image" src="http://i.imgur.com/bnCFCm5.png"><div align="center"><br />'+
		'<div align="center">"<i>Fall seven times, stand up eight. That\'s what I do</i>"</div><br />'+
		'<b>Favorite Types:</b> Fighting, Dark and Poison(with crobat)<br />'+
		'<b>Note:</b> He is probably the craziest member of the league.<br />'+
		'<b> Achievements:</b> Former Elite, got the elite position in his first promo tournaments.<br />'+
		'<b>Favorite Pokemon:</b><br />'+
		'<img src="http://play.pokemonshowdown.com/sprites/xyani/terrakion.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/weavile.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/medicham-mega.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/crobat.gif"><div align="center"><br />'+
	        'Remember, victory or defeat always depends on how you play. But,  It doesnt if you\'re up against me. <br />');
        
        
        
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
        
        abadon: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Abadon</b><br />'+
		      '<i>"SWIGGITY SWOOTY, I\'M COMING FOR THAT BOOTY"</i> <br />'+
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
		'<center><img src="http://sprites.pokecheck.org/i/157.gif"><img src="http://sprites.pokecheck.org/i/530.gif"><img src="http://sprites.pokecheck.org/i/547.gif"><img src="http://sprites.pokecheck.org/t/144.gif"><img src="http://sprites.pokecheck.org/i/205.gif"><img src="http://sprites.pokecheck.org/i/310.gif"><img src="http://sprites.pokecheck.org/i/212.gif"></center> <br />'+
		'<center><img src="http://havearandom.cu.cc/files/iero.png"; width="200" height="300"></center><br />');
	
	
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

	blade: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><img src="http://sprites.pokecheck.org/i/494.gif"><b><font color = FF0000>∆EliteFröntier∆Blade☯</font></b><img src="http://sprites.pokecheck.org/i/080.gif"></center></a><br />'+
			'<center><i>"Too much Water 7.8/10"-IGN</i></center> <br />'+
			'<b>Symbol:</b> Yin and Yang <br />'+
			'<b>Ace:</b> Mybro (Slowbro) <br />'+
			'<b>Battle Rules:</b> <br />'+
			'-Ability Shift Tier<br />'+
			'-No Focus Sash/Band<br />'+
			'-No Hazards <br />'+
		        '<a href="http://www.smogon.com/forums/threads/ability-shift.3503100/">How Ability Shift works</a> <br />'+
                        '<a href="http://www.psypokes.com/lab/abilities.php">Pokemon Ability List</a> <br />'+
                        '<details><summary><b>Champion\'s Challenge Rules:</b></summary> <br />'+
                        '-NU Monotype<br />'+
                        '-No Focus Sash</details><br />'+
                        '<details><summary><b>Badges: (Click here to open)</b></summary><br />'+
                        '<a href="http://oi57.tinypic.com/2ldx1lu.jpg"><img src="http://oi58.tinypic.com/2i6cilg.jpg" title="Smeargle the Creator: Creator of the Badge System"></a></details> <br />'+
			'<details><summary><font color = 009900><center><b>Torkoal Shrine</b></center></font></summary><center><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/torkoal.gif"></center>'+
                        '<center><b>R.I.P. War Turtle</b></center> <br />'+
                        '<center>1st Apostle of the All Mighty Lord Parasect</center></details><br />'+
                         '<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
	},
	
	dragon: 'leaf',
	leaf: function(target, room, user) {
		if (!this.canBroadcast()) return;
		var lastSeen;
		if (Users.get('gymldrleaf')) lastSeen = Core.profile.lastSeen(Users.get('gymldrleaf').connected, 'gymldrleaf');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrleaf');
		this.sendReplyBox('Gym Ldr <b>Leaf</b><br />'+
		      'Leader Ranking: <font color = ffe100><b>3rd</font></b> <br />'+
		      '<i>"hear that roar, that is my true power-uh scratch that its my stomach, either way your screwed though"</i> <br />'+
		      '<b>Type: <font color = 230077>Dragon</font> </b><br />'+
		      '<b>Ace:</b> Frigid (Kyurem)<br />' +
		      '<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />');
	},
	
	poison: 'arjunb',
        arjunb: function(target, room, user) {
		if (!this.canBroadcast()) return;
		var lastSeen;
		if (Users.get('gymldrarjunb')) lastSeen = Core.profile.lastSeen(Users.get('gymldrarjunb').connected, 'gymldrarjunb');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrarjunb');
		this.sendReplyBox('Gym Ldr <b>Arjunb</b><br />'+
			 'No Quote <br />'+
			 '<b>Type: <font color = aa00ff>Poison</font></b><br />'+
			 '<b>Ace:</b> None<br />' +
			 '<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />');
	},
        
        normal: 'vanilla',
        vanilla: function(target, room, user) {
		if (!this.canBroadcast()) return;
		var lastSeen;
		if (Users.get('gymldrvanilla')) lastSeen = Core.profile.lastSeen(Users.get('gymldrvanilla').connected, 'gymldrvanilla');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrvanilla');
		this.sendReplyBox('Gym Ldr <b>Vanilla</b><br />'+
		         '<i>"Prepare to be pummeled cheerfully, jauntily, and utterly one-sidedly!"</i> <br />'+
	              	 '<b>Type: <font color = ffa5d5>Normal</font></b><br />'+
			 '<b>Ace:</b> Dragonslayer (Miltank)<br />' +
			 '<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />');
        },
        
        electric: 'situm',
	situm: function(target, room, user) {
		if (!this.canBroadcast()) return;
		var lastSeen;
		if (Users.get('gymldrsitum')) lastSeen = Core.profile.lastSeen(Users.get('gymldrsitum').connected, 'gymldrsitum');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrsitum');
		this.sendReplyBox('Gym Ldr <b>Situm</b><br />'+
			 '<i>"Electricity is the best power of the world...And that power is in my pokemons!"</i> <br />'+
		         '<b>Type: <font color = d6cc0c>Electric</font></b><br />'+
			 '<b>Ace:</b> Mega Manectric<br />' +
			 '<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />');
  
        },
        
        water: 'matt99',
	matt99: function(target, room, user) {
		if (!this.canBroadcast()) return;
		var lastSeen;
		if (Users.get('gymldrmatt99')) lastSeen = Core.profile.lastSeen(Users.get('gymldrmatt99').connected, 'gymldrmatt99');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrmatt99');
		this.sendReplyBox('Gym Ldr <b>Matt99</b><br />'+
			 '<i>"That\'s not the ocean\'s pressure crushing you"</i> <br />'+
		         '<b>Type: <font color = 0745ff>Water</font></b><br />'+
			 '<b>Ace:</b> Swampert<br />' +
			 '<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />');
	},
	
	grass: 'darkus',
	darkus: function(target, room, user) {
		if (!this.canBroadcast()) return;
		var lastSeen;
		if (Users.get('gymldrdrks')) lastSeen = Core.profile.lastSeen(Users.get('gymldrdrks').connected, 'gymldrdrks');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrdrks');
		this.sendReplyBox('Gym Ldr <b>Darkus</b><br />'+
			'<i>"You would think I\'m Dark, but you can\'t think"</i> <br />'+
			'Leader Ranking: <font color =ff9900><b>2nd</font></b> <br />'+
			'<b>Type: <font color = 006b0a>Grass</font></b> <br />'+ 
			'<b>Ace:</b> Breloom<br />'+
			'<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />' +
			'<img src="http://play.pokemonshowdown.com/sprites/xyani/victini.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/bisharp.gif"><br />');
			
	},
        
       fighting: 'corea',
       corea: function(target, room, user) {
		if (!this.canBroadcast()) return;
		var lastSeen;
		if (Users.get('gymldrcorea')) lastSeen = Core.profile.lastSeen(Users.get('gymldrcorea').connected, 'gymldrcorea');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrcorea');
		this.sendReplyBox('Gym Ldr <b>Corea</b><br />'+
			'<i>"Dicking on Mac is essential."</i> <br />'+
			'<b>Type: <font color = d83c08>Fighting</font></b><br />'+
			'<b>Ace:</b> Chesnaught <br />' +
			'<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />');
        },
        
        psychic: 'edge',
	edge: function(target, room, user) {
	        if (!this.canBroadcast()) return;
	        var lastSeen;
		if (Users.get('gymldredge')) lastSeen = Core.profile.lastSeen(Users.get('gymldredge').connected, 'gymldredge');
		else lastSeen = Core.profile.lastSeen(false, 'gymldredge');
		this.sendReplyBox('Gym Ldr <b>Edge</b><br />'+
			  '<i>"How can you Face your Problem, if the Problem is your Face?"</i> <br />'+
			  '<b>Type: <font color = ff00b6>Psychic</font></b><br />'+
			  '<b>Ace:</b> Victini <br />' +
			  '<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />');
	},
	
	ground: 'noahb',
	noahb: function(target, room, user) {
	        if (!this.canBroadcast()) return;
	        var lastSeen;
		if (Users.get('gymldrnoahb')) lastSeen = Core.profile.lastSeen(Users.get('gymldrnoahb').connected, 'gymldrnoahb');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrnoahb');
		this.sendReplyBox('Gym Ldr <b>NoahB</b><br />'+
			  '<i>"Be sure you be at sky or else you have lost"</i> <br />'+
			  '<b>Type: <font color = 5b3a00>Ground</font></b><br />'+
			  '<b>Ace:</b> Mamoswine<br />' +
			  '<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />');
			  
	},
	
	flying: 'indeter',
	indeter: function (target, room, user) {
	        if (!this.canBroadcast()) return;
	        var lastSeen;
		if (Users.get('gymldrindeter')) lastSeen = Core.profile.lastSeen(Users.get('gymldrindeter').connected, 'gymldrindeter');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrindeter');
		this.sendReplyBox('Gym Ldr <b>Indeter</b><br />'+
			  '<i>"And - I\'m off."</i> <br />'+
			  '<b>Type: <font color = 7ab6ff>Flying</font></b><br />'+
			  '<b>Ace:</b> Gliscor<br />' +
			  '<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />');
			  
	},
	
	bug: 'meows',
	meows: function(target, room, user) {
	        if (!this.canBroadcast()) return;
	        var lastSeen;
		if (Users.get('gymldrmeows')) lastSeen = Core.profile.lastSeen(Users.get('gymldrmeows').connected, 'gymldrmeows');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrmeows');
		this.sendReplyBox('Gym Ldr <b>Meows</b><br />'+
		          'Leader Ranking: <font color = FF0000><b>1st</font></b> <br />'+
			  '<i>"Expect the unexpected."</i> <br />'+
			  '<b>Type: <font color = 65b510>Bug</font></b><br />'+
			  '<b>Ace:</b> Galvantula <br />' +
			  '<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />');
        },
	
	ice: 'johtokid',
	johtokid: function(target, room, user) {
	        if (!this.canBroadcast()) return;
	        var lastSeen;
		if (Users.get('gymldrjohtokid')) lastSeen = Core.profile.lastSeen(Users.get('gymldrjohtokid').connected, 'gymldrjohtokid');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrjohtokid');
		this.sendReplyBox('Gym Ldr <b>JohtoKid</b><br />'+
			  '<i>"Hard work pays off in the end."</i> <br />'+
			  '<b>Type: <font color = 00e0ac>Ice</font></b><br />'+
			  '<b>Ace:</b> Don\'t Do Drugs (Mega Glalie)<br />');
	},
        
        dark: 'fallen',
        fallen: function(target, room, user) {
		if (!this.canBroadcast()) return;
		if (Users.get('gymldrfallen')) lastSeen = Core.profile.lastSeen(Users.get('gymldrfallen').connected, 'gymldrfallen');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrfallen');    
		this.sendReplyBox('Gym Ldr <b>Fallen</b><br />'+
			  '<i>"The King has Fallen"</i> <br />'+
			  '<b>Type: <font color = 15012b>Dark</font></b><br />'+
			  '<b>Ace:</b> King of the Sea (Mega-Sharpedo)<br />' +
			  '<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />');
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
		var lastSeen;
		if (Users.get('gymldrfloatzel')) lastSeen = Core.profile.lastSeen(Users.get('gymldrfloatzel').connected, 'gymldrfloatzel');
		else lastSeen = Core.profile.lastSeen(false, 'gymldrfloatzel');
		this.sendReplyBox('Gym Ldr <b>Floatzel</b><br />'+
			  '<i>"I\'ve been at this 3 times"</i> <br />'+
			  '<b>Type: <font color = 5e6664>Steel</font></b> <br />'+
			  '<b>Ace:</b> Jirachi <br />'+
			  '<b>Last Seen:</b> ' + lastSeen.split('&nbsp;')[2] + '<br />' +
			  '<img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/beldum.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-back/klink.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/steelix-mega.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-back/klink.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/beldum.gif">');
			  
	},

        rock: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type: <font color = 472e10>Rock</font></b><br />'+
			  '<b>Ace:</b> ???<br />');
			  
			  
        },
        
        bamdee: function(target, room, user) {
		if (!this.canBroadcast()) return;
	        this.sendReplyBox('E4 <b>Bamdee</b><br />'+
			  '<i>"Send me your memes"</i> <br />'+
			  '<b>Type: <font color = #9b8f95>Normal</font></b><br />'+
			  '<b>Ace:</b> Miltank<br />'+
			  '<b>Battle Rules:</b><br />'+
			  '-No Trick/Switcheroo<br />');
       
        },
       
	
	asch: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Frontier <b>Asch</b><br />'+
			  '<i>"Chief Akkie, head of the meme police, serving for 38 years; no meme slips through her cracks."</i> <br />'+
			  '<b>Symbol:</b> White Knight Symbol<br />'+
			  '<b>Ace:</b> Crawdaunt <br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-Only BL, BL2, BL3 and BL4 Pokemon may be used.<br/>'+
		 	  '-No Mega Evolution<br />'+
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
			 '<i>"D=<{[(2*lv+10)/250]*Atk/Def*BP+2}*STAB*Eff*Crit*Itm*Abl*Wt*Spr>*x"</i> <br />'+
		         '<b>Symbol:</b> World <br />'+
			 '<b>Ace:</b> Kangaskhan<br />'+
			 '<b>Battle rules:</b> <br />'+
			 '-VGC \'15 <br />');
        },
        
        
        poppy: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Poppy</b><br />'+
			 '<i>"You are about to experience the high fidelity steam known as the Spectral Transmission."</i> <br />'+
		         '<b>Symbol:</b> The Awesome Symbol <br />'+
			 '<b>Ace:</b> Casteration Anxiety (Scizor)<br />'+
			 '<b>Battle rules:</b> <br />'+
			 '-Only OU Pokemon and bellow may be used <br />'+
			 '-All Pokemon used must be in their Mega Evolved forme selected from the Team Builder <br />'+
			 '-No items <br />'+
			 '-Challenge in Balanced Hackmons, but use only moves and abilities which are legal <br />');
        },
       
        
        
        zachary: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Zachary</b><br/>' +
			'<i>"Can you do a few things at the same time?"</i><br/>' +
			'<b>Symbol:</b> Multitasking<br/>' +
			'<b>Ace:</b> All<br/>' +
			'<b>Battle Rules:</b><br/>' +
			'-Smogon Doubles'+
			'<details><summary><b>Champion\'s Challenge Rules:</b></summary> <br />'+
			'-Pikachu Tournamentchu <br />'+
			'-No CAP Pokemon</details> <br />');
			
	},
        
        
        
        azh: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆ArthurZH∆</b></center></a><br />'+
			 '<center><i>"The power of the seas, storms and rivers are mine to hold....and here you dare to stand before me?"</i></center> <br />'+
			 '<b>Favoured Type:</b> Water<br />'+
			 '<b>Favoured Metagame:</b> Smogon Doubles <br />'+
			 '<b>Ace:</b> Mega Swampert/Mega-Gyarados for monotype<br />'+
			 '<b>Achievements:</b> Ex Water Leader of Sora, Ex Roulette/Champion\'s Challenge/Monotype/Smogon Doubles Frontier of Sora<br />'+
			 '<center><img src="http://fc00.deviantart.net/fs71/f/2014/082/f/8/manaphy_gif_by_gloomymyth-d7bakkc.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/keldeo-resolute.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/tentacruel.gif"><img src="http://www.pokemonreborn.com/custom/44203.png?530"> <img src="http://play.pokemonshowdown.com/sprites/xyani/kabutops.gif"><img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/swampert.gif"><img src="http://play.pokemonshowdown.com/sprites/xyani/gyarados.gif"></center>');
	},

        

        ateam: 'adminteam',
	adminteam: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b><font color = 075ff7>The Admin Team</font></b></center></a><br />'+
		'FAQ <br />'+
		'<b>Who are we?</b> The Admin team are a group of senior members who make most of the major league decisions and organize most major league events. <br />'+
		'<b>Who\'s in the Admin Team?</b> The Admin Team\'s active members consist of: Champion Noah, Champion Bart, OnyxEagle, Artiste Jeratt, Frontierhead Ninjarisu, Gym Ldr Neith, Coach Bloodfist and Elite Frontier Blade. <br />'+
		'<b>What exactly do you guys do?</b> The Admin Team handle or oversee all matters from disputes in the League, to League Challenge Registration <br />'+
		'<b>How does one join the Admin team?</b> The Admin Team usually invites a select few senior members who\'ve shown to be mature and capable of handling responsibility. <br />'+
		' <br />'+
		'<center> All Admin team Members will be identifiable by having this badge on their cards:<center> <br />'+
		'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
		
	},
		


	jeratt: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<a><font size= 4><center><b>∆Artiste Jeratt∆</b></center></a><br />'+
			'<center><i>"No one out-predicts me, but me."</i></center><br />'+
			'<img src="http://sprites.pokecheck.org/i/235.gif"> <img src="http://sprites.pokecheck.org/t/033.gif"><br />'+
			'<b>Highly skilled in:</b> Dragon & Ice<br />'+
			'<b>Skilled in:</b> Making quotes, backgrounds for Sora and many Pokemon types.<br />'+ 
		 	'<b>Note:</b> Close the Lobby and see what I can really do. <br/>'+
		 	'<b>History:</b> Greatest Ice E4, <strike>undefeated</strike> Dragon E4. <br/>'+
		 	'P.S. I\'m still Dragon you away with my coldness. <br/>'+
		 	'P.P.S Use Scizor against me, and I\'ll get fired up and blast you! <br/>'+
		 	'<center><img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/rattata.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/mamoswine.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/vanilluxe.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/dialga.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/zoroark.gif"></center>'+
		 	'<details><summary><b>Badges:</b></summary><br />'+
		 	'<a href="http://oi57.tinypic.com/2ldx1lu.jpg"><img src="http://oi58.tinypic.com/2i6cilg.jpg" title="Smeargle the Creator: Resident Artist of Sora, Metagame Creator: CC, Priomons, Incl Weather, PokeSandbox"></a></details><br />'+
		 	'<center><img src="http://oi62.tinypic.com/14cfyh0.jpg"></center> <br />');
        },
        
        gasp: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Trainer <b>gasp</b><br />'+
			'<i>"Lights out."</i> <br />'+
			'<b>Ace:</b> Mega Gengar<br />'+
			'<b>Honours:</b> Sora\'s first challenger to reach Hall of Fame.<br />'+
			'<b>Prefered Tier:</b> Balanced Hackmons'+
		 	'<img src="http://pldh.net/media/pokemon/gen5/blackwhite_animated_front/302.gif"> <img src="http://media.tumblr.com/tumblr_m6ci5tQsEv1qf6fp2.gif"><br />'+
		 	'<b>Badges:</b><br />'+
		 	'<a href="http://oi60.tinypic.com/2itps9k.jpg"><img src="http://oi62.tinypic.com/xgmjhc.jpg" title="Golduck the Meta Breaker: Defeated the League"></a><br />');
        
        
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
				'- <a href="http://sorapremierleague.weebly.com/">IPL Tournament Web Site</a><br />' +
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
			this.sendReplyBox('Listed here are the Top 3 Leaders in The Sora League based on performance in our Monthly Promotional Tournament with a direct addition from how many badge defends each Leader has achieved! Please keep in mind, the number of ranked Leaders may change month to month and the ranking methodology may be changed in future. Please also note that the badge defend system isn\'t total career badge defends, but badge defends for each month. <br />' +
				'-<b>1st <font color = 65b510>Meows</font></b> (Bug)<br />'+
				'-<b>2nd <font color = 006b0a>Darkus</font></b></b> (Grass)<br />'+
				'-<b>3rd <font color = 230077>Leaf</font></b> (Dragon)<br />'+
				'</div>');
	
	},
	
	badges: 'badge',
	        badge: function(target, room, user) {
	        	if (!this.canBroadcast()) return;
	        	this.sendReplyBox('<a><marquee><b>Badges</b></marquee></a><br />'+
	        	        '<b>What are Badges:</b><br />'+
	        	        'Badges are prestigious achievements awarded on the user\'s trainer card and usually come with varying bucks award.<br />'+
	        	        'They are awarded for league activity and vary in difficulty. <u>Difficulty levels</u>: (Bronze, Silver, Gold) and (Blue, Orange and Red).<br />'+
	        	        'A full list of badges can be found <a href="http://soraleague.weebly.com/badges">HERE</a> <br />'+
	        	        '<br />'+
	        	        '<details><summary><center><b>Test your skills here</b></center></summary><center><a href="http://oi61.tinypic.com/f5ufo.jpg"><img src="http://oi61.tinypic.com/2nkoyyu.jpg" title="Parasect the God Above All"></a><br /></center></details>'+
	        	        '<br />'+
	        	        '<blink><font color=#FF0000><b>Notes:</b></font></blink><br />'+
	        	        '- You MUST have a trainer card<br />'+
	        	        '<font color=#006600>- <b>Hover over a badge for details<br />'+
	        	        '- Click on a badge for an enlarged image</b></font><br />'+
	        	        '- Test your skills above');
	        	  
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

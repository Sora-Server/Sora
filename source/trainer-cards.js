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

	onyxeagle: function(target, room, user) {
	 	if (!this.canBroadcast()) return;
	 	this.sendReplyBox('<a><font size= 4><center><b>∆OnyxEagle∆</b></center></a><br />'+
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

	gary: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Gary</b><br />'+
		      '<i>"Dragons may not have survived the cold but let me make you experience their sheer power"</i> <br />'+
		      '<b>Type:</b> Dragon<br />'+
		      '<b>Ace:</b> Goodra<br />'+
	              '<img src="http://play.pokemonshowdown.com/sprites/bw/goodra.png"> <img src="http://sprites.pokecheck.org/t/137.gif">');
        },

	toast: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('<a><font size= 4><center><b>∆Champion Toast∆</b></center></a><br />'+
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
	
	
	
	jam: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Jam</b><br />'+
		      '<i>"The sky is my field, but it isn\'t my limit."</i> <br />'+
		      '<b>Type:</b> Flying<br />'+
		      '<b>Ace:</b> Skarmory (Firebird) <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-No Hazards <br/>'+
	 	      '-No Multihit moves <br/>');
	},	
	
	bloodfist: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Coach <b>Bloodfist</b><br />'+
		      '<i>The Master of Many Types</i> <br />'+
		      '<i>"You listen to me, you go to the top! You don\'t, then your missteps will be noted by everyone!"</i> <br />'+
		      '<b>Purpose:</b> Will help to train you in your chosen type, or team, and assist in what items are missing.<br />'+
      	 	      '<b>See me online and need help? Message me.<b>');
        },
        
        apple: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Apple</b><br />'+
		      '<i>"I\'ll mop the floor with you."</i> <br />'+
		      '<b>Symbol:</b> Clear<br />'+
		      '<b>Ace:</b> Vaporeon (Gills)<br />'+
	 	      '<b>Battle Rules:</b> <br />'+
	 	      '-Mono Body type <br/>'+
	 	      '-No using the same body type category as Frontier <br />'+
	 	      '-Information on Body types: http://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_body_style <br />'+
	 	      '-Max 1 uber including Uber items (Gengarite, Kangaskhanite) <br />'+
	 	      '<img src="http://sprites.pokecheck.org/t/057.gif">');
	
        },
	
	 cocoa: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Cocoa</b><br />'+
		      '<i>"Your defeat shall be nearly as sweet as Chocolate and Vanilla"</i> <br />'+
		      '<b>Type:</b> Dark<br />'+
		      '<b>Ace:</b> Umbreon <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-No direct status. <br/>'+
	 	      '-No protecting moves. <br/>');
	
	},

	ninjarisu: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Delta <b>Ninjarisu</b><br />'+
		    '<i>"While many regarded Risu as weak, I saw your Determination shine, and you proved to be a real bro. The legend of Ninjarisu will forever live on. ~Marriland"</i> <br />'+
		    '<b>Ace:</b> Pachirisu<br />'+
	 	    '<b>Requirements:</b> 8 Gym Badges<br />'+
	 	    '<b>Rules:</b> PU Tier<br />'+
	 	    '-Max 1 Eviolite item <br/>'+
	 	    '-No Hazards <br/>'+
	 	    '-Max 1 second Evolutionary Stage Pokemon (Pokemon that have evolved twice) <br/>'+
	 	    '<b>Prize for victory:</b> 20 bucks <br/>'+
	 	    '<b>Link to PU Tier list:</b> http://partiallyused.weebly.com/ <br/>'+
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


	asch: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Asch</b><br />'+
			'<i>"Ignorance is Eviolite Blissey"</i> <br />'+
			'<b>Type:</b> Grass<br />'+
			'<b>Ace:</b> Brother Nature (Mega-Venusaur)<br />'+
			'<img src="http://play.pokemonshowdown.com/sprites/trainers/54.png"> <img src="http://sprites.pokecheck.org/i/003f.gif">');
	},

	blade: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Blade</b><br />'+
			'<i>"Shift a burning flame into an ever burning flame!"</i> <br />'+
			'<b>Symbol:</b> Yin and Yang<br />'+
			'<b>Ace:</b> War Turtle (Torkoal)<br />'+
			'<b>Battle Rules:</b> <br />'+
			'-Ability Shift Tier<br />'+
			'-No focus Sash/Band<br />'+
			'<img src="http://play.pokemonshowdown.com/sprites/xyani/victini.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/torkoal.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/blaziken.gif">');
			
        },
     
        
        m3owth: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>M3owth</b><br />'+
			'<i>"In accordance with the dictates of reason."</i> <br />'+
			'<b>Type:</b> Fighting<br />'+
			'<b>Ace:</b> Lucario<br />');
        },
        
        kezyrul: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Kezyrul</b><br />'+
	              '<i>"Hesitation is the seed of defeat"</i> <br />'+
	              '<b>Type:</b> Fairy<br />'+
	              '<b>Ace:</b> ?<br />');
        },
        
	tempest: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Tempest</b><br />'+
		          '<i>"Pokemon Battles aren\'t the only thing I role play!"</i> <br />'+
		          '<b>Symbol:</b> Roleplay<br />'+
			  '<b>Ace:</b> Mienshao<br />'+
		 	  '<b>Battle Rules:</b> <br/>'+
		 	  '-Tier: OU <br/>'+
		 	  '-PokéCosplay: You can only use a team consisting of an existing Pokémon trainer <br/>'+
		 	  '-This includes trainers from the anime, manga, and games (except for the game\'s main character) <br/>'+
		 	  '-When in Champion\'s Challenge, Evasion is banned <br />'+
		 	  '<img src="http://sprites.pokecheck.org/t/144.gif"> <img src="http://sprites.pokecheck.org/i/620.gif">');
	},

        akash: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Akash</b><br />'+
			  '<i>"Fly high or die."</i> <br />'+
			  '<b>Symbol:</b> Luck<br />'+
			  '<b>Ace:</b> Charizard <br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-Sky Battle (Only Flying or levitating Pokemon may be used) <br/>'+
		 	  '-Ubers Format (Max 1 Uber) <br/>'+
		 	  '-Item Clause (Max 1 of each item) <br/>'+
		 	  '-No Stealth rocks <br/>');
	},
 

        myth: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Myth</b><br />'+
			  '<i>"Steel is a hard type, get it?"</i> <br />'+
			  '<b>Type:</b> Steel<br />'+
			  '<b>Ace:</b>Mega-Scizor (A Robot)<br />');
	
        },
	
	steve: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Steve</b><br />'+
			  '<i>"Bug is the power"</i> <br />'+
			  '<b>Type:</b> Bug<br />'+
			  '<b>Ace:</b> Pinsir <br />');
        
        },
        
         arthurzh: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Arthurzh</b><br />'+
			  '<i>"I AM THE MASTER OF THE SEVEN SEAS! FEAR ME, I SHALL DROWN ALL IN MY WAY"</i> <br />'+
			  '<b>Type:</b> Water<br />'+
			  '<b>Ace:</b>Kabutops<br />');
        },
        
        
        core: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Core</b><br />'+
			  '<i>"True power can\'t easily be obtained, but can be awakened through guidance and passion."</i> <br />'+
			  '<b>Type:</b> Rock<br />'+
			  '<b>Ace:</b> Terrakion<br />'+
			  '<img src="http://play.pokemonshowdown.com/sprites/xyani/terrakion.gif"> <img src="http://sprites.pokecheck.org/t/129.gif">');
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
			  
        fore: function(target, room, user) {
		    if (!this.canBroadcast()) return;
			this.sendReplyBox('Gym Ldr <b>Fore</b><br />'+
			  '<i>"The Dark is one with us."</i> <br />'+
			  '<b>Type:</b> Dark<br />'+
			  '<b>Ace:</b> Greninja<br />');
        },
        
        srewop: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Srewop</b><br />'+
			 '<i>"It\'s going down, I\'m yelling Timburr"</i> <br />'+
			 '<b>Type:</b> Poison<br />'+
			 '<b>Ace:</b> Venusaur<br />');
	},
        
        nirvana: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Nirvana</b><br />'+
		         '<i>"Don\'t believe in yourself. Believe in me. Believe in the me who believes in you!"</i> <br />'+
	              	 '<b>Type:</b> Flying<br />'+
			 '<b>Ace:</b> All<br />');
        },
        
        ground: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type:</b> Ground<br />'+
			  '<b>Ace:</b> ???<br />');
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

	oz: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Oz</b><br />'+
			  '<i>"Getting cool is not the best way to get attractive, be normal"</i> <br />'+
			  '<b>Type:</b> Normal<br />'+
			  '<b>Ace:</b> Porygon 2 (Ducky Momo)<br />');

	},

	saltyy: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Saltyy</b><br />'+
			 '<i>"Don\'t worry, I will protect you my feeble turtle-duck."</i> <br />'+
		         '<b>Type:</b> Ghost<br />'+
			 '<b>Aces:</b> Froslass<br />');
        },

	valio: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Valio</b><br />'+
			  '<i>"Reload, take aim, aaaand SPARK!"</i> <br />'+
			  '<b>Type:</b> Electric<br />'+
			  '<b>Ace:</b> Elektross<br />');
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

	bean877: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Bean877</b><br />'+
			  '<i>"My Bride and I can read your thoughts before you can make them"</i> <br />'+
			  '<b>Type:</b> Psychic<br />'+
			  '<b>Ace:</b> Bride (Gardevoir) <br />');
	},


	terror: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Terror</b><br />'+
			  '<i>"Get off the ground cuz it\'s gonna get rough!"</i> <br />'+
			  '<b>Type:</b> Ground<br />'+
			  '<b>Ace:</b> Garchomp<br />');
		
	},
	
	falcon: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Falcon</b><br />'+
			  '<i>"Ice, Ice, Baby."</i> <br />'+
			  '<b>Type:</b> Ice<br />'+
			  '<b>Ace:</b> Weavile<br />');

        },

	iggy: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Iggy</b><br />'+
			'<i>"Think of this as an obstacle you\'ll never overcome"</i> <br />'+
			'<b>Symbol: Catch 22 Symbol</b> <br />'+
			'<b>Ace:</b> HardHitter (Gurdurr)<br />'+
			'<b>Battle rules:</b> <br />'+
			'-Middle cup tier <br />'+
			'-Only Pokemon in the Middle of a 3 part evolutionary chain may take part <br />'+
			'-All Pokemon must have their Level set to 50 <br />'+
			'-The challenger must use pre-evolutions of his Gym Leader team that fulfils the requirement for participating. If there are Pokemon in the challenger\'s  team who does not have a pre-evolution, or whose pre-evolution does not fulfil the requirements for participating, then the challenger is free to replace the Pokemon with any other Pokemon who are eligible to participate in the Middle Cup <br />');
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
		this.sendReplyBox('Trainer <b>gasp</b><br />'+
			'<i>"Lights out."</i> <br />'+
			'<b>Ace:</b> Sableye<br />'+
			'<b>Honours:</b> Sora\'s first challenger to reach Hall of Fame.<br />'+
		 	'<img src="http://pldh.net/media/pokemon/gen5/blackwhite_animated_front/302.gif"> <img src="http://media.tumblr.com/tumblr_m6ci5tQsEv1qf6fp2.gif">');
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

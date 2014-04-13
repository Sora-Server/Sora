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
	 	this.sendReplyBox('<b>OnyxEagle</b><br />'+
	 	    '<i>"Heads or Tails? Heads, I Win; Tails, you Lose"</i> <br />'+
		    '<b>Skilled in:</b> Rock types/ Ubers, Random Battle and OU to a certain degree.<br />'+
		    '<b>History:</b> 2nd Champion of New Sora. One of the 2 people who resurrected Sora from the rubbles. <br/>'+
		    '<b>Notes:</b> Resident coder of Sora, still conducts tests and registrations, offers advice. <br/>'+
	 	    '<img src="http://sprites.pokecheck.org/i/248.gif"> <img src="http://sprites.pokecheck.org/i/639.gif"> <img src="http://sprites.pokecheck.org/i/567.gif"> <img src="http://play.pokemonshowdown.com/sprites/bwani/tyrantrum.gif"> <img src="http://sprites.pokecheck.org/t/099.gif">');
        },
        
        noah: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Champion <b>Noah</b><br />'+
		      '<i>"Need a Champion? I Noah guy."</i> <br />'+
		      '<b>Ace:</b> Nidoqueen the Nidoking <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-Monotype <br/>'+
	 	      '-All Tiers must be Represented (Except Ubers and LC) <br/>'+
	 	      '-Tiershift<br />'+
	 	      '<img src="http://sprites.pokecheck.org/s/034.gif"> <img src="http://www.pokemonreborn.com/custom/47366.png"> <img src="http://sprites.pokecheck.org/i/089.gif">');
	},

	bart: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier Head <b>Bart</b><br />'+
		     '<i>"Patience? Nah.... Speed and power is what you need!"</i> <br />'+
		     '<b>Symbol:</b> Patience<br />'+
		     '<b>Ace:</b> Weavile<br />'+
	 	     '<b>Battle Rules:</b> <br/>'+
	 	     '-Ubers Battle <br/>'+
	 	     '-At least 2 must be OU or lower <br/>'+
	 	     '-No Lowering opponents stats (Unless caused by attack) <br/>'+
	 	     '-No Pokemon with a base stat over 130<br />'+
	 	     '<img src="http://sprites.pokecheck.org/i/461.gif"> <img src="http://i1280.photobucket.com/albums/a482/Skarmory11/Misc%20sprites/Bart_zps03ad3a7d.png">');
        },

	gary: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Gary</b><br />'+
		      '<i>"The Mighty warrior of Sora."</i> <br />'+
		      '<b>Type:</b> Dragon<br />'+
		      '<b>Ace:</b> Goodra<br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-No Hazards <br/>'+
	 	      '-No Status <br/>'+
	 	      '<img src="http://play.pokemonshowdown.com/sprites/bw/goodra.png"> <img src="http://sprites.pokecheck.org/t/137.gif">');
        },

	toast: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Champion <b>Toast</b><br />'+
			  '<i>"A Day without SunShine is like Night Time."</i> <br />'+
			  '<b>Type:</b> Fire<br />'+
			  '<b>Ace:</b> Charizard<br />'+
	 	          '<b>Battle Rules:</b> <br/>'+
	 	          '-No Hazards <br/>'+
	 	          '-No weather inducing moves <br/>'+
	 	          '<img src="http://sprites.pokecheck.org/s/250.gif"> <img src="http://sprites.pokecheck.org/t/025.gif">');
        },
        
        lance: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Lance</b><br />'+
			  '<i>"YOU WILL BE BLINDED FROM THE KAWAII-NESS OF THESE FAIRIES!"</i> <br />'+
			  '<b>Type:</b> Fairy<br />'+
			  '<b>Ace:</b> Mega Mawile (Zoro\'s Boss)<br />'+
			  '<img src="http://play.pokemonshowdown.com/sprites/xyani/ampharos-mega.gif"> <img src="http://sprites.pokecheck.org/t/136.gif">');
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

	ninjarisu: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Overlord <b>Ninjarisu</b><br />'+
		    '<i>"Fear my pink sparkles of awesomeness!"</i> <br />'+
		    '<b>Ace:</b> All<br />'+
	 	    '<b>Note:</b> Nemesis of Guardian, him or me? Choose<br />'+
	 	    '<b>Requirements:</b> 10 Gym Badges<br />'+
	 	    '<img src="http://sprites.pokecheck.org/s/417.gif"> <img src="http://sprites.pokecheck.org/t/138.gif">');
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

        leaf: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Leaf</b><br />'+
	              '<i>"Leaf is love, Leaf is life."</i> <br />'+
	              '<b>Symbol:</b> Adaption<br />'+
	              '<b>Ace:</b> Cincinno/Floatzel<br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-OU Dualtype (2 Monotypes in a team) <br/>'+
	 	      '-No force switching <br/>'+
	 	      '-Max 1 Legendary <br/>'+
	 	      '<img src="http://sprites.pokecheck.org/i/142.gif"> <img src="http://sprites.pokecheck.org/t/109.gif"> <img src="http://i1280.photobucket.com/albums/a482/Skarmory11/Leaf_zps542b4e92.png">');
	},

	ascher: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Ascher</b><br />'+
	       	      '<i>"Strategy is key."</i> <br />'+
	       	      '<b>Symbol:</b> True Knight<br />'+
		      '<b>Ace:</b> Clefable<br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-Pokemon Chess - 1 OU, 2 UU, 1 RU, 1 NU, 1 Uber <br/>'+
	 	      '-Ubers is King (Loss if the King Faints) <br/>'+
	 	      '-No Mega-Evolutions <br/>'+
	 	      '<img src="http://play.pokemonshowdown.com/sprites/trainers/54.png"> <img src="http://sprites.pokecheck.org/i/003f.gif">');
	},

	blazer: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Blazer</b><br />'+
			'<i>"If i Blaze, you\'ll Blazer with me"</i> <br />'+
			'<b>Type:</b> Fire<br />'+
			'<b>Ace:</b> Victini<br />');
        },
        
        bug: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			'<i>"???"</i> <br />'+
			'<b>Type:</b> Bug<br />'+
			'<b>Ace:</b> ???<br />');
        },
        
        floatzel: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Floatzel</b><br />'+
	              '<i>"When it comes down to it, I am still the strongest!"</i> <br />'+
	              '<b>Symbol:</b> Balance<br />'+
	              '<b>Ace:</b> Haxxi (Jirachi)<br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-Pokemon Alphabetlocke (OU tier) <br/>'+
	 	      '-Challenger Picks 6 letters in the alphabet that must be in order, forward or backward. <br/>'+
	 	      '-The team: The Pokemon\'s names\' first letters must be corresponding to the one\'s challenger chose earlier. <br/>'+
	 	      '-Prankster is banned. <br/>'+
	 	      '<img src="http://sprites.pokecheck.org/s/385.gif"> <img src="http://sprites.pokecheck.org/t/139.gif">');
        },
        
	tempest: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Tempest</b><br />'+
		          '<i>"Let Death herself approach; the show shall go on!"</i> <br />'+
		          '<b>Symbol:</b> Roleplay<br />'+
			  '<b>Ace:</b> Mienshao<br />'+
		 	  '<b>Battle Rules:</b> <br/>'+
		 	  '-PokéCosplay: You can only use a team consisting of an existing Pokémon trainer <br/>'+
		 	  '-This includes trainers from the anime, manga, and games (except for the game\'s main character) <br/>'+
		 	  '-Limited to OU (no Gold\'s Ho-oh, Silver\'s Lugia, etc)<br/>'+
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
		 	  '-No Item Repetition <br/>'+
		 	  '-No Entry Hazards <br/>');
	},

        normal: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type:</b> Normal<br />'+
			  '<b>Ace:</b> ???<br />');
        },
        
        rockwolf: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>RockWolf</b><br />'+
			  '<i>" When it comes to willpower, my willpower is rock solid!"</i> <br />'+
			  '<b>Type:</b> Rock<br />'+
			  '<b>Ace:</b> Omastar<br />');
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
        
        
        zarif: function(target, room, user) {
		if (!this.canBroadcast()) return;
	        this.sendReplyBox('E4 <b>Zarif</b><br />'+
			  '<i>" Ascher may be stupid,but he\'s also dumb"</i> <br />'+
			  '<b>Type:</b> Fighting<br />'+
			  '<b>Ace:</b> Terrakion<br />'+
			  '<b>Battle Rules:</b><br />'+
			  '-None<br />'+
			  '<img src="http://i.imgur.com/OPScsYF.gif">');
        },
			  
        akkie: function(target, room, user) {
		    if (!this.canBroadcast()) return;
			this.sendReplyBox('Gym Ldr <b>Akkie</b><br />'+
			  '<i>"The truth may be a light among the darkness, but is what you believe really true, or are you just stumbling around in the dark?"</i> <br />'+
			  '<b>Type:</b> Dark<br />'+
			  '<b>Ace:</b> Umbreon<br />');
        },
        
        srewop: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Srewop</b><br />'+
			 '<i>"My name backwards is what I\'m all about"</i> <br />'+
			 '<b>Type:</b> Poison<br />'+
			 '<b>Ace:</b> Venusaur<br />');
	},
        
        matt99: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Matt99</b><br />'+
		      '<i>"Face the power of the dragons if you dare."</i> <br />'+
		      '<b>Type:</b> Dragon<br />'+
		      '<b>Ace:</b> Latios<br />'+
		      '<img src="http://sprites.pokecheck.org/i/381.gif"> <img src="http://sprites.pokecheck.org/t/138.gif">');
        },
        
        lou: function(target, room, user) {
		if (!this.canBroadcast()) return;
	        this.sendReplyBox('Frontier <b>Lou</b><br />'+
			  '<i>"A wise warrior copies successful combat tactics to prevail in battle."</i> <br />'+
			  '<b>Symbol:</b> Illusion<br />'+
			  '<b>Ace:</b> Chansey<br />'+
			  '<b>Battle Rules:</b> <br />'+
			  '-VGC Doubles<br />'+
			  '-Best of 3 Series<br />');
        },
        
        nirvana: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Nirvana</b><br />'+
		         '<i>"???"</i> <br />'+
	              	 '<b>Type:</b> Flying<br />'+
			 '<b>Ace:</b> ???<br />');
        },
        
        grass: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type:</b> Grass<br />'+
			  '<b>Ace:</b> ???<br />');
	},
	
	water: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type:</b> Water<br />'+
			  '<b>Ace:</b> ???<br />');
	},

	night: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Frontier <b>Night</b><br />'+
			  '<i>"Slow and steady wins the race."</i> <br />'+
			  '<b>Symbol:</b> Limit<br />'+
			  '<b>Ace:</b> Escavalier<br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-Race Battle - Only Pokemon with speed below 40 may be used <br/>'+
		 	  '-No Hazards <br/>'+
		 	  '-Speed has to be constant (it shouldn\'t be increased or decreased)<br />'+
			  '<img src="http://sprites.pokecheck.org/i/123.gif">');
	},

	zyphear: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Zyphear</b><br />'+
			  '<i>"Storm\'s coming."</i> <br />'+
			  '<b>Type:</b> Electric<br />'+
			  '<b>Ace:</b> Eelektross<br />');

	},

	mayhem: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Mayhem</b><br />'+
			 '<i>"When the shadow strikes there is nowhere to hide."</i> <br />'+
		         '<b>Type:</b> Ghost<br />'+
			 '<b>Ace:</b> Aegislash<br />');
        },

	ground: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type:</b> Ground<br />'+
			  '<b>Ace:</b> ???<br />');
	},

	azh: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Gym Ldr <b>ArthurZH</b><br />'+
			  '<i>"I AM THE MASTER OF THE SEVEN SEAS! FEAR ME, I SHALL DROWN ALL IN MY WAY!"</i> <br />'+
			  '<b>Favoured Type:</b> Water<br />'+
			  '<b>Ace:</b> Kabutops<br />'+
			  '<b>Achievements:</b> <strike>Best</strike> Water Leader of Sora, Roulette Frontier of Sora. <br />'+
			  '<b>Known for:</b> Sadistical Playing Skills, Being Evil. <br />'+
			  '<img src="http://sprites.pokecheck.org/i/647-resolution.gif"> <img src="http://sprites.pokecheck.org/t/126.gif"> <img src="http://sprites.pokecheck.org/i/141.gif">');
	},

	bean877: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Bean877</b><br />'+
			  '<i>"Control the mind of the beast to control it\'s strength."</i> <br />'+
			  '<b>Type:</b> Psychic<br />'+
			  '<b>Ace:</b> Victini<br />');
	},

	arthurzh: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>ArthurZH</b><br />'+
	       	      '<i>"What will be, will be."</i> <br />'+
	       	      '<b>Symbol:</b> Randomosity<br />'+
		      '<b>Ace:</b> None<br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      'Battle Roulette(One rule is picked from each of the following 4 sets): <br/>'+
	 	      '-Set 1 (tier) : OU, Mono, Uber, UU <br/>'+
	 	      '-Set 2 (clause) : Item Clause (no repeating items), Choice clause (max 1 choice pokemon), Status Clause (no status), Recovery clause (No recovery mvoes bar rest) <br/>'+
	 	      '-Set 3 (Representative of Sora-ians): Noah (All tiers below must be represented including LC for UU, not including LC for OU and above), Bart (no stat beyond 130), OnyxE (No weather), Toast (No weather inducing moves) <br/>'+
	 	      '-Set 4 (forced item on a pokemon of choice): Lagging Tail, Black Sludge, Eviolite, Razz Berry <br/>');
	},

	steel: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type:</b> Steel<br />'+
			  '<b>Ace:</b> ???<br />');
	},

	fighting: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type:</b> Fighting<br />'+
			  '<b>Ace:</b> ???<br />');
	},

	meows: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Meows</b><br />'+
			'<i>"Ice will give you the cold shoulder and watch your blood chill as the temperature lowers so do your chances of survival."</i> <br />'+
			'<b>Type:</b> Ice<br />'+
			'<b>Ace:</b> Kyurem-Black<br />');
        },

	jeratt: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Artiste <b>Jeratt</b><br />'+
			'<i>"Let the storm rage on. The cold never bothered me anyways."</i> <br />'+
			'<b>Skilled in:</b> Dragon & Ice<br />'+
		 	'<b>Note:</b> Close the Lobby and see what I can really do. <br/>'+
		 	'<b>History:</b> Greatest Ice E4, <strike>undefeated</strike> Dragon E4. <br/>'+
		 	'P.S. I\'m still Dragon you away with my coldness. <br/>'+
		 	'<img src="http://sprites.pokecheck.org/i/235.gif"> <img src="http://sprites.pokecheck.org/t/033.gif"> <img src="http://sprites.pokecheck.org/s/473.gif"> <img src="http://sprites.pokecheck.org/i/378.gif"> <img src="http://sprites.pokecheck.org/i/483.gif">');
        },
        
        gasp: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Trainer <b>gasp</b><br />'+
			'<i>"Lights out."</i> <br />'+
			'<b>Ace:</b> Sableye<br />'+
			'<b>Honours:</b> Sora\'s first challenger to reach Hall of Fame.<br />'+
		 	'<b>History:</b> Sora\'s first successful challenger, Stall King. <br/>'+
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

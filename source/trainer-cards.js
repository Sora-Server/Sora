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
	 	    '<img src="http://play.pokemonshowdown.com/sprites/xyani/kabutops.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/landorus.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/heracross-mega.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyranitar.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyrantrum.gif">');
        },
        
        noah: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Champion <b>Noah</b><br />'+
		      '<i>"Need a Champion? I Noah guy."</i> <br />'+
		      '<b>Ace:</b> Liquidbones <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-Monotype <br/>'+
	 	      '-Gen 5 Ubers (Maximum of 2 Ubers) <br/>'+
	 	      '-No Hazards<br />'+
	 	      '<img src="http://sprites.pokecheck.org/i/134.gif"> <img src="http://www.pokemonreborn.com/custom/47366.png"> <img src="http://play.pokemonshowdown.com/sprites/xyani/keldeo.gif">');
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
		      '<i>"I might be just a normal person but never underestimate me"</i> <br />'+
		      '<b>Type:</b> Normal<br />'+
		      '<b>Ace:</b> Slaking<br />'+
	              '<img src="http://play.pokemonshowdown.com/sprites/bw/goodra.png"> <img src="http://sprites.pokecheck.org/t/137.gif">');
        },

	toast: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Champion <b>Toast</b><br />'+
			  '<i>"A Day without SunShine is like Night Time."</i> <br />'+
			  '<b>Ace:</b> Charizard<br />'+
	 	          '<b>Battle Rules:</b> <br/>'+
	 	          '-No Hazards <br/>'+
	 	          '-No weather inducing moves <br/>'+
	 	          '<img src="http://play.pokemonshowdown.com/sprites/xyani/hooh.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani-shiny/charizard.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/tyranitar-mega.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/volcarona.gif">');
	 	          
        },
        
        lance: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Lance</b><br />'+
			  '<i>"Scales like diamonds, the brighter you shine, the hotter it burns"</i> <br />'+
			  '<b>Type:</b> Dragon<br />'+
			  '<b>Ace:</b> Mega Garchomp<br />'+
			  '<img src="http://sprites.pokecheck.org/t/138.gif"> <img src="http://play.pokemonshowdown.com/sprites/xyani/garchomp-mega.gif">');
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
        
        apple: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('E4 <b>Apple</b><br />'+
		      '<i>"I\'ll mop the floor with you."</i> <br />'+
		      '<b>Type:</b> Ground<br />'+
		      '<b>Ace:</b> Gliscor <br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-No weather inducing moves. <br/>'+
	 	      '<img src="http://sprites.pokecheck.org/t/057.gif">');
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


	asch: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Asch</b><br />'+
			'<i>"Brother Nature: the Rapist."</i> <br />'+
			'<b>Type:</b> Grass<br />'+
			'<b>Ace:</b> Brother Nature (Mega-Venusaur)<br />'+
			'<img src="http://play.pokemonshowdown.com/sprites/trainers/54.png"> <img src="http://sprites.pokecheck.org/i/003f.gif">');
	},

	blazer: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Blazer</b><br />'+
			'<i>"If i Blaze, you\'ll Blazer with me"</i> <br />'+
			'<b>Type:</b> Fire<br />'+
			'<b>Ace:</b> Victini<br />');
        },
        
       	tevin: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Tevin</b><br />'+
			'<i>"Prepare to fly, cuz you won\'t stay alive for long if you\'re on the ground..."</i> <br />'+
			'<b>Type:</b> Ground<br />'+
			'<b>Ace:</b> Landorus<br />');
        },
        
        
        abraham: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Abraham</b><br />'+
	       	      '<i>"Trololol"</i> <br />'+
	       	      '<b>Symbol:</b> Moe Lester\'s<br />'+
		      '<b>Ace:</b> Clefable<br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      '-OU Metronome Battle, all Pokemon must know Metronome and only Metronome <br/>');
        },
        
        psychic: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			'<i>"???"</i> <br />'+
			'<b>Type:</b> Psychic<br />'+
			'<b>Ace:</b> ???<br />');
        },
        
        floatzel: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Floatzel</b><br />'+
	              '<i>"Don\'t drop that Dedenne"</i> <br />'+
	              '<b>Type:</b> Fairy<br />'+
	              '<b>Ace:</b> Mega Mawile<br />'+
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
		 	  '-Item Clause (Max 1 of each item) <br/>'+
		 	  '-No Stealth rocks <br/>');
	},
 

        lou: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Lou</b><br />'+
			  '<i>"Guess I\'ll be <b>steeling</b> a win from you then."</i> <br />'+
			  '<b>Type:</b> Steel<br />'+
			  '<b>Ace:</b> Heatran (HOT MAMA)<br />');
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
        
        nirvana: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Nirvana</b><br />'+
		         '<i>"???"</i> <br />'+
	              	 '<b>Type:</b> Flying<br />'+
			 '<b>Ace:</b> ???<br />');
        },
        
        ground: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>???</b><br />'+
			  '<i>"???"</i> <br />'+
			  '<b>Type:</b> Ground<br />'+
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
			  '<img src="http://play.pokemonshowdown.com/sprites/xyani/scyther.gif">');
	},
	
	nova: function(target, room, user) {
			if (!this.canBroadcast()) return;
			this.sendReplyBox('Frontier <b>Nova</b><br />'+
			  '<i>"Every Champion was once a contender that refused to give up,I will never give up no matter how hard you hit."</i> <br />'+
			  '<b>Symbol:</b> Will of Steel<br />'+
			  '<b>Ace:</b> Thundurus<br />'+
			  '<b>Battle Rules:</b> <br/>'+
		 	  '-Ubers tier <br/>'+
		 	  '-2 Uber, 2 OU and 2 random pokemon must be used <br/>'+
		 	  '-Random pokemon must be chosen using  /dice command on the Sora server<br />'+
		 	  '-Players can use whatever pokemon from the evolution chain of the pokemon picked by random <br/>');
	},

	oz: function(target, room, user) {
	        if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Oz</b><br />'+
			  '<i>"Warning, you will get shocked by the power of thunder."</i> <br />'+
			  '<b>Type:</b> Electric<br />'+
			  '<b>Ace:</b> Thundurus<br />');

	},

	anna: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Gym Ldr <b>Anna</b><br />'+
			 '<i>"Careful love, prices aren\'t the only thing I can cut in half."</i> <br />'+
		         '<b>Type:</b> Ghost<br />'+
			 '<b>Ace:</b> Sableye<br />');
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
			  '<i>"All my critters are waiting to sting you while you are unaware."</i> <br />'+
			  '<b>Type:</b> Bug<br />'+
			  '<b>Ace:</b> PinLikeaSir (Pinsir)<br />');
	},

	zachary: function(target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('Frontier <b>Zachary</b><br />'+
	       	      '<i>"What will be, will be."</i> <br />'+
	       	      '<b>Symbol:</b> Randomosity<br />'+
		      '<b>Ace:</b> None<br />'+
	 	      '<b>Battle Rules:</b> <br/>'+
	 	      'Battle Roulette(One rule is picked from each of the following 4 sets): <br/>'+
	 	      '-Set 1 (tier) : OU, Mono, Uber, UU, RU <br/>'+
	 	      '-Set 2 (clause) : Item Clause (no repeating items), Choice clause (max 1 choice pokemon), Status Clause (no status), Recovery clause (No recovery moves bar rest), No Clause (but those implemented by Smogon) <br/>'+
	 	      '-Set 3 (Representative of Sora-ians): Noah (All tiers below must be represented including LC for UU, not including LC for OU and above), Bart (no stat beyond 130), OnyxE (No weather), Toast (No weather inducing moves), Lynne (Best in three) <br/>'+
	 	      '-Set 4 (forced item on a Pokemon of choice): Lagging Tail, Black Sludge, Eviolite, Razz Berry, Flame Orb <br/>'+
	 	      '-P.S. No ditching the item by using Switcheroo/Trick/Fling or in any other manner UNLESS the opponent steals it from you via Thief/Magician/Covet et cetera <br/>');
	},

	sparetypeslot: function(target, room, user) {
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
			'<b>Highly skilled in:</b> Dragon & Ice<br />'+
			'<b>Skilled in:</b>Making quotes, backgrounds for Sora and many Pokemon types.<br />'+ 
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

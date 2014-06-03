exports.BattleMovedex = {
              "flameshot": {
		num: 2000,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Flame Shot",
		isViable: true,
		name: "Flame Shot",
		pp: 30,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Fire"
	      },
	      "sapblast": {
		num: 2001,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Sap Blast",
		isViable: true,
		name: "Sap Blast",
		pp: 32,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Grass"
	      },
	      "kineticforce": {
		num: 2002,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Kinetic Force",
		isViable: true,
		name: "Kinetic Force",
		pp: 32,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Psychic"
	      },
	      "stonespine": {
		num: 2003,
		accuracy: 90,
		basePower: 55,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Stone Spine",
		isViable: true,
		name: "Stone Spine",
		pp: 16,
		priority: 1,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Rock"
	      },
	      "dracocrash": {
		num: 2004,
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		id: "Draco Crash",
		isViable: true,
		name: "Draco Crash",
		pp: 8,
		priority: 2,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Dragon"
	      },
	      "venomstrike": {
		num: 2005,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to one adjacent target.",
		shortDesc: "Usually goes first, 30% chance to badly poison the target.",
		id: "Venom Strike",
		name: "Venom Strike",
		pp: 16,
		priority: 1,
		isContact: true,
		secondary: {
			chance: 30,
			status: 'tox'
		},
		target: "normal",
		type: "Poison"
	      },
	      "nervepulse": {
		num: 2006,
		accuracy: 90,
		basePower: 40,
		category: "Special",
		desc: "Deals damage to one adjacent target.",
		shortDesc: "Usually goes first. 100% chance to land a critical hit.",
		id: "Nerve Pulse",
		name: "Nerve Pulse",
		pp: 16,
		priority: 1,
		willCrit: true,
		secondary: false,
		target: "normal",
		type: "Electric"
	      },
	      "divingcharge": {
		num: 2007,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1. Deals 25% recoil.",
		shortDesc: "Usually goes first.",
		id: "Diving Charge",
		isViable: true,
		name: "Diving Charge",
		pp: 24,
		priority: 1,
		isContact: true,
		recoil: [25, 100],
		secondary: false,
		target: "normal",
		type: "Flying"
	      },
	      "tremorshock": {
		num: 2008,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first. Reduces Stats to neutral.",
		id: "Tremor Shock",
		isViable: true,
		name: "Tremor Shock",
		pp: 16,
		priority: 1,
		onHit: function (target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		secondary: false,
		target: "normal",
		type: "Ground"
	      },
	      "fairywind": {
		num: 584,
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Deals damage to one adjacent target.",
		shortDesc: "Usually goes first.",
		id: "fairywind",
		name: "Fairy Wind",
		pp: 32,
		priority: 1,
		secondary: false,
		target: "normal",
		type: "Fairy"
	      },
	      "twineedle": {
		num: 41,
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Deals damage to one adjacent target and hits twice, with each hit having a 20% chance to poison it. If the first hit breaks the target's Substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times. Each hit has 20% chance to poison. Usually goes first.",
		id: "twineedle",
		name: "Twineedle",
		pp: 16,
		priority: 1,
		multihit: [2, 2],
		secondary: false,
		target: "normal",
		type: "Bug"
	      },
};	      

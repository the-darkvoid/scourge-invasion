const tuning = 60;

const init = {
	eu: {
		rare: 174053,
		timer: "2020-11-17T04:00:00Z"
	},
	us: {
		rare: 174061,
		timer: "2020-11-17T04:00:00Z"
	},
	au: {
		rare: 174062,
		timer: "2020-11-12T22:40:00Z"
	}
}

var rares = [
	{
		name: "Noth the Plaguebringer",
		img: "images/noth-the-plaguebringer.png",
		desc: "Noth the Plaguebringer is the first boss of the Plague Quarter of Naxxramas.",
		way: {
			x: 31.6,
			y: 70.5
		},
		id: 174067,
		loot: [
			{
				id: 183642,
				name: "Robes of Rasped Breaths",
				ilvl: 110
			},
			{
				id: 183676,
				name: "Hailstone Loop",
				ilvl: 110
			},
			{
				id: 183654,
				name: "Etched Dragonbone Stompers",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Patchwerk",
		img: "images/patchwerk.png",
		desc: "Patchwerk is the first boss of the Construct Quarter of Naxxramas.",
		way: {
			x: 34.4,
			y: 68.5
		},
		id: 174066,
		loot: [
			{
				id: 183645,
				name: "Cinch of the Tortured",
				ilvl: 110
			},
			{
				id: 183644,
				name: "Regurgitator's Shoulderpads",
				ilvl: 110
			},
			{
				id: 183643,
				name: "Severance of Mortality",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Blood Queen Lana'thel",
		img: "images/blood-queen-lanathel.png",
		desc: "Blood-Queen Lana'thel is the last boss in the Crimson Hall of Icecrown Citadel.",
		way: {
			x: 49.7,
			y: 32.7
		},
		id: 174065,
		loot: [
			{
				id: 183646,
				name: "Chestguard of Siphoned Vitality",
				ilvl: 110
			},
			{
				id: 183648,
				name: "Veincrusher Gauntlets",
				ilvl: 110
			},
			{
				id: 183647,
				name: "Bloodspatter",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Professor Putricide",
		img: "images/professor-putricide.png",
		desc: "Professor Putricide is the Scourge genius behind the development of all forms of blight, plague, ooze, scourge, and death delivery.",
		way: {
			x: 57.1,
			y: 30.3
		},
		id: 174064,
		loot: [
			{
				id: 183649,
				name: "Bag of Discarded Entrails",
				ilvl: 110
			},
			{
				id: 183651,
				name: "Chestplate of Septic Sutures",
				ilvl: 110
			},
			{
				id: 183650,
				name: "Miniscule Abomination in a Jar",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Lady Deathwhisper",
		img: "images/lady-deathwhisper.png",
		desc: "Lady Deathwhisper is a female lich and leader of the Cult of the Damned.",
		way: {
			x: 51.1,
			y: 78.5
		},
		id: 174063,
		loot: [
			{
				id: 183652,
				name: "Zod's Echoing Longbow",
				ilvl: 110
			},
			{
				id: 183653,
				name: "Deathwhisper Vestment",
				ilvl: 110
			},
			{
				id: 183655,
				name: "Handgrips of Rime and Sleet",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Skadi the Ruthless",
		img: "images/skadi-the-ruthless.png",
		desc: "Skadi the Ruthless is the third boss in Utgarde Pinnacle. He can drop the mount <a href=\"https://www.wowhead.com/item=44151/\" target=\"_blank\" data-wowhead=\"item=44151\">Reins of the Blue Proto-Drake</a>.",
		way: {
			x: 57.8,
			y: 56.1
		},
		id: 174062,
		loot: [
			{
				id: 44151,
				name: "Reins of the Blue Proto-Drake",
				ilvl: 0
			},
			{
				id: 183670,
				name: "Skadi's Saronite Belt",
				ilvl: 110
			},
			{
				id: 183656,
				name: "Drake Rider's Jerkin",
				ilvl: 110
			},
			{
				id: 183657,
				name: "Skadi's Scaled Sollerets",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Ingvar the Plunderer",
		img: "images/ingvar-the-plunderer.png",
		desc: "Ingvar the Plunderer, commander of the dragon forces, is the third and last boss in Utgarde Keep.",
		way: {
			x: 52.4,
			y: 52.6
		},
		id: 174061,
		loot: [
			{
				id: 183668,
				name: "Razor-Barbed Leather Belt",
				ilvl: 110
			},
			{
				id: 183659,
				name: "Annhylde's Band",
				ilvl: 110
			},
			{
				id: 183658,
				name: "Ingvar's Monolithic Skullcleaver",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Prince Keleseth",
		img: "images/prince-keleseth.png",
		desc: "Prince Keleseth, a darkfallen, is the first boss of Utgarde Keep.",
		way: {
			x: 54.0,
			y: 44.7
		},
		id: 174060,
		loot: [
			{
				id: 183680,
				name: "Royal Sanguine Cloak",
				ilvl: 110
			},
			{
				id: 183678,
				name: "Keleseth's Influencer",
				ilvl: 110
			},
			{
				id: 183661,
				name: "Drake Stabler's Gauntlets",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "The Black Knight",
		img: "images/the-black-knight.png",
		desc: "The Black Knight is the third and last boss of the Trial of the Champion.",
		way: {
			x: 64.8,
			y: 22.1
		},
		id: 174059,
		loot: [
			{
				id: 183638,
				name: "Phantasmic Kris",
				ilvl: 110
			},
			{
				id: 183637,
				name: "Shoulderpads of the Notorious Knave",
				ilvl: 110
			},
			{
				id: 183636,
				name: "Helm of the Violent Fracas",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Bronjahm",
		img: "images/bronjahm.png",
		desc: "Bronjahm, the Godfather of Souls, is the first boss in The Forge of Souls. He can drop <a href=\"https://www.wowhead.com/item=183634/\" target=\"_blank\" data-wowhead=\"item=183634\">Papa's Mint Condition bag</a>.",
		way: {
			x: 70.7,
			y: 38.4
		},
		id: 174058,
		loot: [
			{
				id: 183634,
				name: "Papa's Mint Condition Bag",
				ilvl: 0
			},
			{
				id: 183675,
				name: "Cold Sweat Mitts",
				ilvl: 110
			},
			{
				id: 183639,
				name: "Gaze of Bewilderment",
				ilvl: 110
			},
			{
				id: 183635,
				name: "Grieving Gauntlets",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Scourgelord Tyrannus",
		img: "images/scourgelord-tyrannus.png",
		desc: "Scourgelord Tyrannus is a human Death Knight riding the frost wyrm Rimefang.",
		way: {
			x: 47.2,
			y: 66.1
		},
		id: 174057,
		loot: [
			{
				id: 183674,
				name: "Rimewoven Pantaloons",
				ilvl: 110
			},
			{
				id: 183633,
				name: "Fringed Wyrmleather Leggings",
				ilvl: 110
			},
			{
				id: 183632,
				name: "Protector of Stolen Souls",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Forgemaster Garfrost",
		img: "images/forgemaster-garfrost.png",
		desc: "Forgemaster Garfrost is a flesh giant covered with ice, whose duty is to forge saronite weapons and armor for the Scourge.",
		way: {
			x: 58.6,
			y: 72.5
		},
		id: 174056,
		loot: [
			{
				id: 183666,
				name: "Legguards of the Frosty Fathoms",
				ilvl: 110
			},
			{
				id: 183631,
				name: "Ring of Carnelian and Sinew",
				ilvl: 110
			},
			{
				id: 183630,
				name: "Garfrost's Two-Ton Bludgeon",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Marwyn",
		img: "images/marwyn.png",
		desc: "Marwyn, Arthas Menethil's second captain, is the second boss in the Halls of Reflection.",
		way: {
			x: 58.2,
			y: 83.4
		},
		id: 174055,
		loot: [
			{
				id: 183687,
				name: "Frayed Flesh-Stitched Shoulderguards",
				ilvl: 110
			},
			{
				id: 183663,
				name: "Sightless Capuchin of Ulmaas",
				ilvl: 110
			},
			{
				id: 183662,
				name: "Frostsworn Rattleshirt",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Falric",
		img: "images/falric.png",
		desc: "Falric, a captain for Arthas in both life and death, is the first boss in the Halls of Reflection.",
		way: {
			x: 50.2,
			y: 87.9
		},
		id: 174054,
		loot: [
			{
				id: 183664,
				name: "Bracer of Ground Molars",
				ilvl: 110
			},
			{
				id: 183665,
				name: "Valonforth's Marred Pauldrons",
				ilvl: 110
			},
			{
				id: 183667,
				name: "Geistslicer",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "The Prophet Tharon'ja",
		img: "images/the-prophet-tharonja.png",
		desc: "Prophet Tharon'ja, a skeletal wind serpent, is the last boss of Drak'Tharon Keep.",
		way: {
			x: 80.1,
			y: 61.2
		},
		id: 174053,
		loot: [
			{
				id: 183686,
				name: "Breeches of the Skeletal Serpent",
				ilvl: 110
			},
			{
				id: 183685,
				name: "Phantasmic Seal of the Prophet",
				ilvl: 110
			},
			{
				id: 183684,
				name: "Tharon'ja's Protectorate",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Novos the Summoner",
		img: "images/novos-the-summoner.png",
		desc: "Novos the Summoner, a lich, is the second boss of Drak'Tharon Keep.",
		way: {
			x: 77.8,
			y: 66.1
		},
		id: 174052,
		loot: [
			{
				id: 183671,
				name: "Necromantic Wristwraps",
				ilvl: 110
			},
			{
				id: 183672,
				name: "Cuirass of Undeath",
				ilvl: 110
			},
			{
				id: 183627,
				name: "Summoner's Granite Gavel",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Trollgore",
		img: "images/trollgore.png",
		desc: "Trollgore, a dire troll, is the first boss of Drak'Tharon Keep.",
		way: {
			x: 58.3,
			y: 39.4
		},
		id: 174051,
		loot: [
			{
				id: 183669,
				name: "Cowl of the Rampaging Troll",
				ilvl: 110
			},
			{
				id: 183626,
				name: "Troll Gorer",
				ilvl: 110
			},
			{
				id: 183640,
				name: "Leggings of Disreputable Charms",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Krik'thir the Gatewatcher",
		img: "images/krikthir-the-gatewatcher.png",
		desc: "Krik'thir the Gatewatcher is the first boss of Azjol-Nerub.",
		way: {
			x: 67.5,
			y: 58.0
		},
		id: 174050,
		loot: [
			{
				id: 183681,
				name: "Webrending Machete",
				ilvl: 110
			},
			{
				id: 183682,
				name: "Cinch of the Servant",
				ilvl: 110
			},
			{
				id: 183683,
				name: "Skittering Vestments",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Prince Taldaram",
		img: "images/prince-taldaram.png",
		desc: "Prince Taldaram, a vampiric darkfallen, is the second boss of Ahn'kahet: The Old Kingdom.",
		way: {
			x: 29.6,
			y: 62.2
		},
		id: 174049,
		loot: [
			{
				id: 183679,
				name: "Taldaram's Supple Slippers",
				ilvl: 110
			},
			{
				id: 183677,
				name: "Blood-Drinker's Belt",
				ilvl: 110
			},
			{
				id: 183625,
				name: "Reforged Necklace of Taldaram",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	},
	{
		name: "Elder Nadox",
		img: "images/elder-nadox.png",
		desc: "Elder Nadox is the first boss of Ahn'kahet: The Old Kingdom.",
		way: {
			x: 44.2,
			y: 49.1
		},
		id: 174048,
		loot: [
			{
				id: 183673,
				name: "Nerubian Aegis Ring",
				ilvl: 110
			},
			{
				id: 183641,
				name: "Shoulderpads of Corpal Rigidity",
				ilvl: 110
			},
			{
				id: 183624,
				name: "Serrated Blade of Nadox",
				ilvl: 110
			},
			{
				id: 183200,
				name: "Pitch Black Scourgestone",
				ilvl: 1
			},
			{
				id: 183616,
				name: "Accursed Keepsake",
				ilvl: 1
			}
		]
	}
]

var html = `
	<div class="col-md-4">
		<div class="card mb-4 box-shadow" data-clarity-unmask="True">
			<p class="mt-3 mb-0 pr-3 text-right"><i class="fa fa-clock-o"></i>&nbsp;&nbsp;{{spawn.next}}</p>
			<p class="mt-3 mb-0 pr-3 text-right"><i class="fa fa-calendar-o"></i>&nbsp;&nbsp;{{spawn.subsequent}}</p>
			<img class="card-img-top" src="{{img}}" alt="{{name}}">
			<div class="card-body">
				<h4><a href="https://www.wowhead.com/npc={{id}}/" target="_blank" data-wowhead="npc={{id}}">{{name}}</a></h4>
				<p class="card-text">{{{desc}}}</p>
				<p class="card-text">Loot:</p>
				<ul>
				{{#each loot}}
					<li>
						<a href="https://www.wowhead.com/item={{id}}/" target="_blank" data-wowhead="item={{id}}&amp;ilvl={{ilvl}}">{{name}}</a>
					</li>
				{{/each}}
				</ul>
				<div class="d-flex justify-content-between align-items-center">
					<div class="btn-group">
						<button type="button" class="map waypoint btn btn-sm btn-primary" data-clipboard-text="/run b=C_Map;b.SetUserWaypoint(UiMapPoint.CreateFromCoordinates(118, {{way.x}}/100, {{way.y}}/100));"><i class="fa fa-map-marker"></i>&nbsp; Map Point</button>
					</div>
					<div class="btn-group">
						<button type="button" class="announce waypoint btn btn-sm btn-primary" data-clipboard-text="/run b=C_Map;b.SetUserWaypoint(UiMapPoint.CreateFromCoordinates(118, {{way.x}}/100, {{way.y}}/100));SendChatMessage('{{name}} at '..b.GetUserWaypointHyperlink(),'CHANNEL',_,1);"><i class="fa fa-commenting-o"></i>&nbsp; Announce</button>
					</div>
					<div class="btn-group">
						<button type="button" class="tomtom waypoint btn btn-sm btn-primary" data-clipboard-text="/way {{way.x}} {{way.y}}"><i class="fa fa-location-arrow"></i>&nbsp; TomTom</button>
					</div>
				</div>
			</div>
		</div>
	</div>
`;

var alert = `
	<div class="alert alert-success alert-dismissible fade show">
		<button type="button" class="close" data-dismiss="alert">&times;</button>
		Command copied to your clipboard! Paste it in your World of Warcraft chatbox to use it.
	</div>
`;

function nextSpawn(rare)
{
	var spawnTimer = new moment(rare.timer);
	spawnTimer.add(tuning, 'seconds');

	var currentDate = new moment();

	while (spawnTimer < currentDate) {
		spawnTimer.add(400, 'minutes');
	}

	rare.nextSpawnMins = moment.duration(spawnTimer.diff(currentDate)).asMinutes();

	rare.spawn = {
		next: `Spawns in ${moment.duration(spawnTimer.diff(currentDate)).humanize()} (${spawnTimer.format("HH:mm")} local time)`
	};

	spawnTimer.add(400, 'minutes');

	rare.spawn.subsequent = `Next spawn in ${moment.duration(spawnTimer.diff(currentDate)).humanize()} (${spawnTimer.format("HH:mm")} local time)`;

}

function calculateSpawns()
{
	for (rare of rares) {
		nextSpawn(rare);
	}
}

function setTooltip(button, message) {

	$(button).tooltip('hide')
		.attr('data-original-title', message)
		.tooltip('show');
}

function hideTooltip(button) {

	setTimeout(function() {
		$(button).tooltip('hide');
	}, 2500);

}

function refreshCards() {
	$("#cards").empty();

	// Calculate upcoming spawn timers
	calculateSpawns();

	// Sort rares on spawn timers
	rares.sort((a, b) => (a.nextSpawnMins > b.nextSpawnMins) ? 1 : -1)

	// compile the template
	var template = Handlebars.compile(html);

	// execute the compiled template and print the output to the console
	for (rare of rares) {
		$("#cards").append(template(rare));
	}

	$('.waypoint').tooltip({
		trigger: 'click',
		placement: 'bottom'
	});

	if (typeof gtag !== 'undefined') {

		gtag('event', 'refresh', {
			'event_category': 'cards',
			'event_label': 'method'
		});

	}

	return false;
}

function initRegion(init)
{
	// Initialize timers for each rare from init block
	const initIndex = rares.findIndex(rare => rare.id == init.rare);

	if (initIndex == -1) {
		console.log(`Rare with id ${init.rare} not found.`);
	}
	
	const initTimer = new moment(init.timer);
	
	rares.forEach((rare, index) => {
		const rareTimer = initTimer.clone();
		rareTimer.add((index - initIndex) * 10, 'minutes');
	
		rare.timer = rareTimer.toISOString();
	});
	
	refreshCards();
}

$(function() {

	rares.forEach((rare, index) => {
		rare.img = `${document.URL.replace('#', '')}${rare.img}`;
	});

	initRegion(init.eu);

	$('button.region-eu').click(function(e) {
		$('button.region-eu').addClass('btn-primary').removeClass('btn-secondary');
		$('button.region-us').addClass('btn-secondary').removeClass('btn-primary');
		$('button.region-au').addClass('btn-secondary').removeClass('btn-primary');

		initRegion(init.eu);
		
		e.preventDefault();
		return false;
	});

	$('button.region-us').click(function(e) {
		$('button.region-us').addClass('btn-primary').removeClass('btn-secondary');
		$('button.region-eu').addClass('btn-secondary').removeClass('btn-primary');
		$('button.region-au').addClass('btn-secondary').removeClass('btn-primary');

		initRegion(init.us);
		
		e.preventDefault();
		return false;
	});

	$('button.region-au').click(function(e) {
		$('button.region-au').addClass('btn-primary').removeClass('btn-secondary');
		$('button.region-eu').addClass('btn-secondary').removeClass('btn-primary');
		$('button.region-us').addClass('btn-secondary').removeClass('btn-primary');

		initRegion(init.au);
		
		e.preventDefault();
		return false;
	});

	var clipboard = new ClipboardJS('.waypoint');

	clipboard.on('success', function(e)
	{
		const trigger = $(e.trigger);

		var container = trigger.closest(".container");

		if ($(".alert", container).length == 0) {
			container.prepend(alert);
			container[0].scrollIntoView(true);
		}

		if (trigger.hasClass("map")) {
			setTooltip(e.trigger, 'Create a map waypoint on your map pointing to the rare.');
		}

		if (trigger.hasClass("announce")) {
			setTooltip(e.trigger, 'Create a map waypoint and announces it linked into the zone channel.');
		}

		if (trigger.hasClass("tomtom")) {
			setTooltip(e.trigger, 'Create a TomTom waypoint (requires TomTom addon).');
		}

		hideTooltip(e.trigger);
	});
	
	clipboard.on('error', function(e) {
		setTooltip(e.trigger, 'Failed!');
		hideTooltip(e.trigger);
	});

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$("<style type='text/css'> .card .card-body button { display: none; } </style>").appendTo("head");
	}
})


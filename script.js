var tuning = 60;

var rares = [
	{
		name: "Elder Nadox",
		img: "images/elder-nadox.png",
		desc: "Elder Nadox is the first boss of Ahn'kahet: The Old Kingdom.",
		way: "44.2 49.1",
		timer: "2020-11-11T12:00:00Z",
		id: 174048,
		loot: [
			{
				"id": 183673,
				"name": "Nerubian Aegis Ring"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Noth the Plaguebringer",
		img: "images/noth-the-plaguebringer.png",
		desc: "Noth the Plaguebringer is the first boss of the Plague Quarter of Naxxramas.",
		way: "31.6 70.5",
		timer: "2020-11-11T12:20:00Z",
		id: 174067,
		loot: [
			{
				"id": 183642,
				"name": "Robes of Rasped Breaths"
			},
			{
				"id": 183676,
				"name": "Hailstone Loop"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Patchwerk",
		img: "images/patchwerk.png",
		desc: "Patchwerk is the first boss of the Construct Quarter of Naxxramas.",
		way: "34.4 68.5",
		timer: "2020-11-11T12:40:00Z",
		id: 174066,
		loot: [
			{
				"id": 183645,
				"name": "Cinch of the Tortured"
			},
			{
				"id": 183644,
				"name": "Regurgitator's Shoulderpads"
			},
			{
				"id": 183643,
				"name": "Severance of Mortality"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Blood Queen Lana'thel",
		img: "images/blood-queen-lanathel.png",
		desc: "Blood-Queen Lana'thel is the last boss in the Crimson Hall of Icecrown Citadel.",
		way: "49.7 32.7",
		timer: "2020-11-11T13:00:00Z",
		id: 174065,
		loot: [
			{
				"id": 183646,
				"name": "Chestguard of Siphoned Vitality"
			},
			{
				"id": 183648,
				"name": "Veincrusher Gauntlets"
			},
			{
				"id": 183647,
				"name": "Bloodspatter"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Professor Putricide",
		img: "images/professor-putricide.png",
		desc: "Professor Putricide is the Scourge genius behind the development of all forms of blight, plague, ooze, scourge, and death delivery.",
		way: "57.1 30.3",
		timer: "2020-11-11T13:20:00Z",
		id: 174064,
		loot: [
			{
				"id": 183649,
				"name": "Bag of Discarded Entrails"
			},
			{
				"id": 183651,
				"name": "Chestplate of Septic Sutures"
			},
			{
				"id": 183650,
				"name": "Miniscule Abomination in a Jar"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Lady Deathwhisper",
		img: "images/lady-deathwhisper.png",
		desc: "Lady Deathwhisper is a female lich and leader of the Cult of the Damned.",
		way: "51.1 78.5",
		timer: "2020-11-11T13:40:00Z",
		id: 174063,
		loot: [
			{
				"id": 183641,
				"name": "Shoulderpads of Corpal Rigidity"
			},
			{
				"id": 183653,
				"name": "Deathwhisper Vestment"
			},
			{
				"id": 183655,
				"name": "Handgrips of Rime and Sleet"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Skadi the Ruthless",
		img: "images/skadi-the-ruthless.png",
		desc: "Skadi the Ruthless is the third boss in Utgarde Pinnacle.",
		way: "57.8 56.1",
		timer: "2020-11-11T14:00:00Z",
		id: 174062,
		loot: [
			{
				"id": 44151,
				"name": "Reins of the Blue Proto-Drake"
			},
			{
				"id": 183670,
				"name": "Skadi's Saronite Belt"
			},
			{
				"id": 183656,
				"name": "Drake Rider's Jerkin"
			},
			{
				"id": 183657,
				"name": "Skadi's Scaled Sollerets"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Ingvar the Plunderer",
		img: "images/ingvar-the-plunderer.png",
		desc: "Ingvar the Plunderer, commander of the dragon forces, is the third and last boss in Utgarde Keep.",
		way: "52.4 52.6",
		timer: "2020-11-11T14:20:00Z",
		id: 174061,
		loot: [
			{
				"id": 183668,
				"name": "Razor-Barbed Leather Belt"
			},
			{
				"id": 183659,
				"name": "Annhylde's Band"
			},
			{
				"id": 183658,
				"name": "Ingvar's Monolithic Skullcleaver"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Prince Keleseth",
		img: "images/prince-keleseth.png",
		desc: "Prince Keleseth, a darkfallen, is the first boss of Utgarde Keep.",
		way: "54.0 44.7",
		timer: "2020-11-11T14:40:00Z",
		id: 174060,
		loot: [
			{
				"id": 50074,
				"name": "Royal Crimson Cloak"
			},
			{
				"id": 183678,
				"name": "Keleseth's Influencer"
			},
			{
				"id": 183679,
				"name": "Taldaram's Supple Slippers"
			},
			{
				"id": 183677,
				"name": "Blood-Drinker's Belt"
			},
			{
				"id": 183661,
				"name": "Drake Stabler's Gauntlets"
			},
			{
				"id": 183625,
				"name": "Reforged Necklace of Taldaram"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "The Black Knight",
		img: "images/the-black-knight.png",
		desc: "The Black Knight is the third and last boss of the Trial of the Champion.",
		way: "64.8 22.1",
		timer: "2020-11-11T15:00:00Z",
		id: 174059,
		loot: [
			{
				"id": 183638,
				"name": "Phantasmic Kris"
			},
			{
				"id": 183637,
				"name": "Shoulderpads of the Notorious Knave"
			},
			{
				"id": 183636,
				"name": "Helm of the Violent Fracas"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Bronjahm",
		img: "images/bronjahm.png",
		desc: "Bronhahm, the Godfather of Souls, is the first boss in The Forge of Souls. He drops <a href=\"https://www.wowhead.com/item={{id}}/\" target=\"_blank\" data-wowhead=\"item=183634\">Papa's Mint Condition bag</a>.",
		way: "70.7 38.4",
		timer: "2020-11-11T15:20:00Z",
		id: 174058,
		loot: [
			{
				"id": 183634,
				"name": "Papa's Mint Condition Bag"
			},
			{
				"id": 183675,
				"name": "Cold Sweat Mitts"
			},
			{
				"id": 183639,
				"name": "Gaze of Bewilderment"
			},
			{
				"id": 183635,
				"name": "Grieving Gauntlets"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Scourgelord Tyrannus",
		img: "images/scourgelord-tyrannus.png",
		desc: "Scourgelord Tyrannus is a human Death Knight riding the frost wyrm Rimefang.",
		way: "47.2 66.1",
		timer: "2020-11-11T15:40:00Z",
		id: 174057,
		loot: [
			{
				"id": 183674,
				"name": "Rimewoven Pantaloons"
			},
			{
				"id": 183633,
				"name": "Fringed Wyrmleather Leggings"
			},
			{
				"id": 183632,
				"name": "Protector of Stolen Souls"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Forgemaster Garfrost",
		img: "images/forgemaster-garfrost.png",
		desc: "Forgemaster Garfrost is a flesh giant covered with ice, whose duty is to forge saronite weapons and armor for the Scourge.",
		way: "58.6 72.5",
		timer: "2020-11-11T16:00:00Z",
		id: 174056,
		loot: [
			{
				"id": 183666,
				"name": "Legguards of the Frosty Fathoms"
			},
			{
				"id": 183631,
				"name": "Ring of Carnelian and Sinew"
			},
			{
				"id": 183630,
				"name": "Garfrost's Two-Ton Bludgeon"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Marwyn",
		img: "images/marwyn.png",
		desc: "Marwyn, Arthas Menethil's second captain, is the second boss in the Halls of Reflection.",
		way: "58.2 83.4",
		timer: "2020-11-11T16:20:00Z",
		id: 174055,
		loot: [
			{
				"id": 183687,
				"name": "Frayed Flesh-Stitched Shoulderguards"
			},
			{
				"id": 183663,
				"name": "Sightless Capuchin of Ulmaas"
			},
			{
				"id": 183662,
				"name": "Frostsworn Rattleshirt"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Falric",
		img: "images/falric.png",
		desc: "Falric, a captain for Arthas in both life and death, is the first boss in the Halls of Reflection.",
		way: "50.2 87.9",
		timer: "2020-11-11T16:40:00Z",
		id: 174054,
		loot: [
			{
				"id": 183664,
				"name": "Bracer of Ground Molars"
			},
			{
				"id": 183665,
				"name": "Valonforth's Marred Pauldrons"
			},
			{
				"id": 183666,
				"name": "Legguards of the Frosty Fathoms"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "The Prophet Tharon'ja",
		img: "images/the-prophet-tharonja.png",
		desc: "Prophet Tharon'ja, a skeletal wind serpent, is the last boss of Drak'Tharon Keep.",
		way: "80.1 61.2",
		timer: "2020-11-11T17:00:00Z",
		id: 174053,
		loot: [
			{
				"id": 183686,
				"name": "Breeches of the Skeletal Serpent"
			},
			{
				"id": 183685,
				"name": "Phantasmic Seal of the Prophet"
			},
			{
				"id": 183684,
				"name": "Tharon'ja's Protectorate"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Novos the Summoner",
		img: "images/novos-the-summoner.png",
		desc: "Novos the Summoner, a lich, is the second boss of Drak'Tharon Keep.",
		way: "77.8 66.1",
		timer: "2020-11-11T17:20:00Z",
		id: 174052,
		loot: [
			{
				"id": 183671,
				"name": "Necromantic Wristwraps"
			},
			{
				"id": 183672,
				"name": "Cuirass of Undeath"
			},
			{
				"id": 183627,
				"name": "Summoner's Granite Gavel"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Trollgore",
		img: "images/trollgore.png",
		desc: "Trollgore, a dire troll, is the first boss of Drak'Tharon Keep.",
		way: "58.3 39.4",
		timer: "2020-11-11T17:40:00Z",
		id: 174051,
		loot: [
			{
				"id": 183669,
				"name": "Cowl of the Rampaging Troll"
			},
			{
				"id": 183626,
				"name": "Troll Gorer"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Krik'thir the Gatewatcher",
		img: "images/krikthir-the-gatewatcher.png",
		desc: "Krik'thir the Gatewatcher is the first boss of Azjol-Nerub.",
		way: "67.5 58.0",
		timer: "2020-11-11T18:00:00Z",
		id: 174050,
		loot: [
			{
				"id": 183681,
				"name": "Webrending Machete"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
	{
		name: "Prince Taldaram",
		img: "images/prince-taldaram.png",
		desc: "Prince Taldaram, a vampiric darkfallen, is the second boss of Ahn'kahet: The Old Kingdom.",
		way: "29.6 62.2",
		timer: "2020-11-11T18:20:00Z",
		id: 174049,
		loot: [
			{
				"id": 50074,
				"name": "Royal Crimson Cloak"
			},
			{
				"id": 183678,
				"name": "Keleseth's Influencer"
			},
			{
				"id": 183679,
				"name": "Taldaram's Supple Slippers"
			},
			{
				"id": 183677,
				"name": "Blood-Drinker's Belt"
			},
			{
				"id": 183661,
				"name": "Drake Stabler's Gauntlets"
			},
			{
				"id": 183625,
				"name": "Reforged Necklace of Taldaram"
			},
			{
				"id": 183200,
				"name": "Pitch Black Scourgestone"
			},
			{
				"id": 183616,
				"name": "Accursed Keepsake"
			}
		]
	},
]

var html = `
	<div class="col-md-4">
		<div class="card mb-4 box-shadow">
			<img class="card-img-top" src="{{img}}" alt="{{name}}">
			<div class="card-body">
				<h3><a href="https://www.wowhead.com/npc={{id}}/" target="_blank" data-wowhead="npc={{id}}">{{name}}</a></h3>
				<p class="card-text">{{{desc}}}</p>
				<p class="card-text">Loot:</p>
				<ul>
				{{#each loot}}
					<li>
						<a href="https://www.wowhead.com/item={{id}}/" target="_blank" data-wowhead="item={{id}}">{{name}}</a>
					</li>
				{{/each}}
				</ul>
				<div class="d-flex justify-content-between align-items-center">
					<div class="btn-group">
						<button type="button" class="waypoint btn btn-sm btn-outline-primary" data-clipboard-text="/way {{way}}">Way Point</button>
					</div>

					<small class="text-muted">{{nextSpawnDuration}} @ {{nextSpawn}}</small>
				</div>
			</div>
		</div>
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

	var duration = moment.duration(spawnTimer.diff(currentDate));

	rare.nextSpawnMins = Math.round(duration.asMinutes());
	rare.nextSpawnDuration = duration.humanize();
	rare.nextSpawn = spawnTimer.format("HH:mm");
	//if (spawnTimer < current)

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

function hideTooltip() {

	setTimeout(function() {
		$('button').tooltip('hide');
	}, 1000);

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

	if (typeof ga !== 'undefined') {
		ga('send', 'event', 'cards', 'refresh');
	}

	return false;
}

$(function() {
	refreshCards();

	var clipboard = new ClipboardJS('.waypoint');

	clipboard.on('success', function(e) {
		setTooltip(e.trigger, 'Copied!');
		hideTooltip();
	});
	
	clipboard.on('error', function(e) {
		setTooltip(e.trigger, 'Failed!');
		hideTooltip();
	});
})


var tuning = 60;

var rares = [
	{
		name: "Elder Nadox",
		img: "images/elder-nadox.png",
		desc: "Elder Nadox is the first boss of Ahn'kahet: The Old Kingdom.",
		way: "44.2 49.1",
		timer: "2020-11-11T12:00:00Z",
		id: 174048
	},
	{
		name: "Noth the Plaguebringer",
		img: "images/noth-the-plaguebringer.png",
		desc: "Noth the Plaguebringer is the first boss of the Plague Quarter of Naxxramas.",
		way: "31.6 70.5",
		timer: "2020-11-11T12:20:00Z",
		id: 174067
	},
	{
		name: "Patchwerk",
		img: "images/patchwerk.png",
		desc: "Patchwerk is the first boss of the Construct Quarter of Naxxramas.",
		way: "34.4 68.5",
		timer: "2020-11-11T12:40:00Z",
		id: 174066
	},
	{
		name: "Blood Queen Lana'thel",
		img: "images/blood-queen-lanathel.png",
		desc: "Blood-Queen Lana'thel is the last boss in the Crimson Hall of Icecrown Citadel.",
		way: "49.7 32.7",
		timer: "2020-11-11T13:00:00Z",
		id: 174065
	},
	{
		name: "Professor Putricide",
		img: "images/professor-putricide.png",
		desc: "Professor Putricide is the Scourge genius behind the development of all forms of blight, plague, ooze, scourge, and death delivery.",
		way: "57.1 30.3",
		timer: "2020-11-11T13:20:00Z",
		id: 174064
	},
	{
		name: "Lady Deathwhisper",
		img: "images/lady-deathwhisper.png",
		desc: "Lady Deathwhisper is a female lich and leader of the Cult of the Damned.",
		way: "51.1 78.5",
		timer: "2020-11-11T13:40:00Z",
		id: 174063
	},
	{
		name: "Skadi the Ruthless",
		img: "images/skadi-the-ruthless.png",
		desc: "Skadi the Ruthless is the third boss in Utgarde Pinnacle.",
		way: "57.8 56.1",
		timer: "2020-11-11T14:00:00Z",
		id: 174062
	},
	{
		name: "Ingvar the Plunderer",
		img: "images/ingvar-the-plunderer.png",
		desc: "Ingvar the Plunderer, commander of the dragon forces, is the third and last boss in Utgarde Keep.",
		way: "52.4 52.6",
		timer: "2020-11-11T14:20:00Z",
		id: 174061
	},
	{
		name: "Prince Keleseth",
		img: "images/prince-keleseth.png",
		desc: "Prince Keleseth, a darkfallen, is the first boss of Utgarde Keep.",
		way: "54.0 44.7",
		timer: "2020-11-11T14:40:00Z",
		id: 174060
	},
	{
		name: "The Black Knight",
		img: "images/the-black-knight.png",
		desc: "The Black Knight is the third and last boss of the Trial of the Champion.",
		way: "64.8 22.1",
		timer: "2020-11-11T15:00:00Z",
		id: 174059
	},
	{
		name: "Bronjahm",
		img: "images/bronjahm.png",
		desc: "Bronhahm, the Godfather of Souls, is the first boss in The Forge of Souls.",
		way: "70.7 38.4",
		timer: "2020-11-11T15:20:00Z",
		id: 174058
	},
	{
		name: "Scourgelord Tyrannus",
		img: "images/scourgelord-tyrannus.png",
		desc: "Scourgelord Tyrannus is a human Death Knight riding the frost wyrm Rimefang.",
		way: "47.2 66.1",
		timer: "2020-11-11T15:40:00Z",
		id: 174057
	},
	{
		name: "Forgemaster Garfrost",
		img: "images/forgemaster-garfrost.png",
		desc: "Forgemaster Garfrost is a flesh giant covered with ice, whose duty is to forge saronite weapons and armor for the Scourge.",
		way: "58.6 72.5",
		timer: "2020-11-11T16:00:00Z",
		id: 174056
	},
	{
		name: "Marwyn",
		img: "images/marwyn.png",
		desc: "Marwyn, Arthas Menethil's second captain, is the second boss in the Halls of Reflection.",
		way: "58.2 83.4",
		timer: "2020-11-11T16:20:00Z",
		id: 174055
	},
	{
		name: "Falric",
		img: "images/falric.png",
		desc: "Falric, a captain for Arthas in both life and death, is the first boss in the Halls of Reflection.",
		way: "50.2 87.9",
		timer: "2020-11-11T16:40:00Z",
		id: 174054
	},
	{
		name: "The Prophet Tharon'ja",
		img: "images/the-prophet-tharonja.png",
		desc: "Prophet Tharon'ja, a skeletal wind serpent, is the last boss of Drak'Tharon Keep.",
		way: "80.1 61.2",
		timer: "2020-11-11T17:00:00Z",
		id: 174053
	},
	{
		name: "Novos the Summoner",
		img: "images/novos-the-summoner.png",
		desc: "Novos the Summoner, a lich, is the second boss of Drak'Tharon Keep.",
		way: "77.8 66.1",
		timer: "2020-11-11T17:20:00Z",
		id: 174052
	},
	{
		name: "Trollgore",
		img: "images/trollgore.png",
		desc: "Trollgore, a dire troll, is the first boss of Drak'Tharon Keep.",
		way: "58.3 39.4",
		timer: "2020-11-11T17:40:00Z",
		id: 174051
	},
	{
		name: "Krik'thir the Gatewatcher",
		img: "images/krikthir-the-gatewatcher.png",
		desc: "Krik'thir the Gatewatcher is the first boss of Azjol-Nerub.",
		way: "67.5 58.0",
		timer: "2020-11-11T18:00:00Z",
		id: 174050
	},
	{
		name: "Prince Taldaram",
		img: "images/prince-taldaram.png",
		desc: "Prince Taldaram, a vampiric darkfallen, is the second boss of Ahn'kahet: The Old Kingdom.",
		way: "29.6 62.2",
		timer: "2020-11-11T18:20:00Z",
		id: 174049
	},
]

var html = `
	<div class="col-md-4">
		<div class="card mb-4 box-shadow">
			<img class="card-img-top" src="{{img}}" alt="{{name}}">
			<div class="card-body">
				<h3><a href="https://www.wowhead.com/npc={{id}}/" target="_blank" data-wowhead="npc={{id}}">{{name}}</a></h3>
				<p class="card-text">{{desc}}</p>
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

$(function() {
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


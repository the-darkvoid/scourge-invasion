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
		desc: "",
		way: "52.4 52.6",
		timer: "2020-11-11T14:20:00Z",
		id: 174061
	},
	{
		name: "Prince Keleseth",
		img: "images/prince-keleseth.png",
		desc: "",
		way: "54.0 44.7",
		timer: "2020-11-11T14:40:00Z",
		id: 174060
	},
	{
		name: "The Black Knight",
		img: "images/the-black-knight.png",
		desc: "",
		way: "64.8 22.1",
		timer: "2020-11-11T15:00:00Z",
		id: 174059
	},
	{
		name: "Bronjahm",
		img: "images/bronjahm.png",
		desc: "",
		way: "70.7 38.4",
		timer: "2020-11-11T15:20:00Z",
		id: 174058
	},
	{
		name: "Scourgelord Tyrannus",
		img: "images/scourgelord-tyrannus.png",
		desc: "",
		way: "47.2 66.1",
		timer: "2020-11-11T15:40:00Z",
		id: 174057
	},
	{
		name: "Forgemaster Garfrost",
		img: "images/forgemaster-garfrost.png",
		desc: "",
		way: "58.6 72.5",
		timer: "2020-11-11T16:00:00Z",
		id: 174056
	},
	{
		name: "Marwyn",
		img: "images/marwyn.png",
		desc: "",
		way: "58.2 83.4",
		timer: "2020-11-11T16:20:00Z",
		id: 174055
	},
	{
		name: "Falric",
		img: "images/falric.png",
		desc: "",
		way: "50.2 87.9",
		timer: "2020-11-11T16:40:00Z",
		id: 174054
	},
	{
		name: "The Prophet Tharon'ja",
		img: "images/the-prophet-tharonja.png",
		desc: "",
		way: "80.1 61.2",
		timer: "2020-11-11T17:00:00Z",
		id: 174053
	},
	{
		name: "Novos the Summoner",
		img: "images/novos-the-summoner.png",
		desc: "",
		way: "77.8 66.1",
		timer: "2020-11-11T17:20:00Z",
		id: 174052
	},
	{
		name: "Trollgore",
		img: "images/trollgore.png",
		desc: "",
		way: "58.3 39.4",
		timer: "2020-11-11T17:40:00Z",
		id: 174051
	},
	{
		name: "Krik'thir the Gatewatcher",
		img: "images/krikthir-the-gatewatcher.png",
		desc: "",
		way: "67.5 58.0",
		timer: "2020-11-11T18:00:00Z",
		id: 174050
	},
	{
		name: "Prince Taldaram",
		img: "images/prince-taldaram.png",
		desc: "",
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
				<h3>{{name}}</h3>
				<p class="card-text">{{desc}}</p>
				<div class="d-flex justify-content-between align-items-center">
					<div class="btn-group">
						<button type="button" class="btn btn-sm btn-outline-secondary">View</button>
					</div>
					<small class="text-muted">{{nextSpawn}}</small>
				</div>
			</div>
		</div>
	</div>
`;

function nextSpawn(rare)
{
	var spawnTimer = new moment(rare.timer);
	var currentDate = new moment();

	while (spawnTimer < currentDate) {
		spawnTimer.add(400, 'minutes');
	}

	var duration = moment.duration(spawnTimer.diff(currentDate));

	rare.nextSpawnMins = Math.round(duration.asMinutes());
	rare.nextSpawn = duration.humanize();
	//if (spawnTimer < current)

}

function calculateSpawns()
{
	for (rare of rares) {
		nextSpawn(rare);
	}
}

function generateCard(rare)
{

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

//	generateCard(rares[0]);
	//alert('test');
})


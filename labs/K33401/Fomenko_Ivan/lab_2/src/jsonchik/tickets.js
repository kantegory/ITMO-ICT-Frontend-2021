async function getTicks() {
	const find_me_this = new URLSearchParams(window.location.search);
	let departure = find_me_this.get(`departure`);
	let arrival = find_me_this.get(`arrival`);
	let date = find_me_this.get(`date`);
	let time = find_me_this.get(`time`);
	let country = find_me_this.get(`country`);
	let aviacompany = find_me_this.get(`aviacompany`);
	let personal_class = find_me_this.get(`personal_class`);
	let price = find_me_this.get(`price`);
	console.log(find_me_this);
	let url = `http://localhost:3000/tickets?departure=${departure}&arrival=${arrival}&date=${date}&time=${time}&country=${country}&aviacompany=${aviacompany}&personal_class=${personal_class}&price=${price}`;
	let ans = await fetch(url);
	let data = await ans.json();
	console.log('asd');
	console.log(data)
	return data;
}

async function sendTicks() {
	let dict_country = {
		1: "Russia",
		2: "China",
		3: "Germany",
		4: "Finland",
		5: "Sweden"
	}
	let dict_avia = {
		1: "Very honest aviacompany",
		2: "Finair",
		3: "Air France",
		4: "Emirates",
		5: "Lufthansa"
	}
	let dict_class = {
		1: "Business class",
		2: "First class",
		3: "Economy",
		4: "Luggage"
	}
	let dict_money = {
		1: "Less than 100$",
		2: "From 100$ to 300$",
		3: "From 300$ to 500$",
		4: "From 500$ to 1000$",
		5: "More than 1000$"
	}
	let ticks = await getTicks();
	let html = "<div class='col-12 col-xl-3 col-lg-4 col-md-6 card-centered'>";
	let htmlTick = "";
	for (let i = 0; i < ticks.length; i++) {
		htmlHead = "<div class='card'><img src='flying_stuff/card_back.jpg' class='card-img-top' alt='image'><div class='card-body'>";
		htmlTick = `<h5 class='card-title'>${ticks[i].departure} - ${ticks[i].arrival}</h5>
						<p class='card-text'>Datetime: ${ticks[i].date} ${ticks[i].time}</p>
						<p class='card-text'>Country: ${dict_country[ticks[i].country]}</p>
						<p class='card-text'>Aviacompany: ${dict_avia[ticks[i].aviacompany]}</p>
						<p class='card-text'>Class: ${dict_class[ticks[i].personal_class]}</p>
						<p class='card-text'>Price: ${dict_money[ticks[i].price]}</p>
						<a href='#' class='btn btn-class'>Register to flight</a></div></div>`;
		html += htmlHead;
		html += htmlTick;
	}
	html += "</div>";
	console.log(ticks);
	let container = document.querySelector('.tickets')
	container.innerHTML = html;
}

sendTicks();
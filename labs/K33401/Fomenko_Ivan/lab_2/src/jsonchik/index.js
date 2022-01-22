function search_tickets(){
	let departure = document.getElementById("departure").value;
	let arrival = document.getElementById("arrival").value;
	let date = document.getElementById("date").value;
	let time = document.getElementById("time").value;
	let country = document.getElementById("country").value;
	let aviacompany = document.getElementById("aviacompany").value;
	let personal_class = document.getElementById("personal_class").value;
	let price = document.getElementById("price").value;
	let my_ticks = "tickets.html";
	let params = '?';
	if (departure) {
		params += `departure=${departure}`
	}
	if (arrival) {
		params += `&arrival=${arrival}`
	}
	if (date) {
		params += `&date=${date}`
	}
	if (time) {
		params += `&time=${time}`
	}
	if (country) {
		params += `&country=${country}`
	}
	if (aviacompany) {
		params += `&aviacompany=${aviacompany}`
	}
	if (personal_class) {
		params += `&personal_class=${personal_class}`
	}
	if (price) {
		params += `&price=${price}`
	}
	window.location.href = my_ticks + params;

}
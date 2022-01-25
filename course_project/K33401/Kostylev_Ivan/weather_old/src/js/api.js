var API_KEY= "d5bcfc52613c0f1b56495d915a4c245c";

var PERM = { lat: 58.0, lon: 56.3167 };
var MOSCOW = { lat: 55.751244, lon: 37.618423 };

navigator.geolocation.getCurrentPosition((location) => {
    fetchWithCoordinates(location.coords.latitude, location.coords.longitude)
        .then(response => response.json()).then((data) => {
            showWeather(data, 0);
        });
},(err) => viewError(err));


fetchWithCoordinates(MOSCOW.lat, MOSCOW.lon)
    .then(response => response.json())
    .then((data) => {
        viewSuccess();
        /* TODO: Make dynamic cards. */
        showWeather(data, 1);
    });

fetchWithCoordinates(PERM.lat, PERM.lon)
    .then(response => response.json(), err => viewError(err))
    .then((data) => {
        viewSuccess();
        showWeather(data, 2);
    });

function showWeather(data, num) {
    document.getElementById("loc" + num + "_now").innerHTML = data['daily'][0]['temp']['day'] + "&degC";
    document.getElementById("loc" + num + "_temp_date1").innerHTML = data['daily'][0]['temp']['day'] + "&degC";
    document.getElementById("loc" + num + "_temp_date2").innerHTML = data['daily'][1]['temp']['day'] + "&degC";
    document.getElementById("loc" + num + "_temp_date3").innerHTML = data['daily'][2]['temp']['day'] + "&degC";
    document.getElementById("loc" + num + "_prec_date1").innerHTML = data['daily'][0]['weather'][0]['description'];
    document.getElementById("loc" + num + "_prec_date2").innerHTML = data['daily'][1]['weather'][0]['description'];
    document.getElementById("loc" + num + "_prec_date3").innerHTML = data['daily'][2]['weather'][0]['description'];
}

function fetchWithCoordinates(lat, lon) {
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude={daily}' + '&appid=' + API_KEY + '&lang=eng&units=metric');
}

function viewError(error) {
    document.getElementById("status_text").innerHTML = "Status";
}

function viewSuccess() {
    document.getElementById("status_text").innerHTML = "";
}

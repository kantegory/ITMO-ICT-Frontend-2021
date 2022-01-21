var API_KEY= "d5bcfc52613c0f1b56495d915a4c245c";

var PERM = { lat: 58.0, lon: 56.3167 };
var MOSCOW = { lat: 55.751244, lon: 37.618423 };

fetchWithCoordinates(MOSCOW.lat, MOSCOW.lon)
    .then(response => response.json())
    .then((data) => {
        viewSuccess();
        /* TODO: Bad code - it repeats below. Make it in cycle. */
        /* TODO: Make dynamic cards. */
        document.getElementById("loc1_now").innerHTML = data['daily'][0]['temp']['day'] + "&degC";
        document.getElementById("loc1_temp_date1").innerHTML = data['daily'][0]['temp']['day'] + "&degC";
        document.getElementById("loc1_temp_date2").innerHTML = data['daily'][1]['temp']['day'] + "&degC";
        document.getElementById("loc1_temp_date2").innerHTML = data['daily'][2]['temp']['day'] + "&degC";
        document.getElementById("loc1_prec_date1").innerHTML = data['daily'][0]['weather'][0]['description'];
        document.getElementById("loc1_prec_date2").innerHTML = data['daily'][1]['weather'][0]['description'];
        document.getElementById("loc1_prec_date3").innerHTML = data['daily'][2]['weather'][0]['description'];
    });

fetchWithCoordinates(PERM.lat, PERM.lon)
    .then(response => response.json(), err => viewError(err))
    .then((data) => {
        viewSuccess();
        document.getElementById("loc2_now").innerHTML = data['daily'][0]['temp']['day'] + "&degC";
        document.getElementById("loc2_temp_date1").innerHTML = data['daily'][0]['temp']['day'] + "&degC";
        document.getElementById("loc2_temp_date2").innerHTML = data['daily'][1]['temp']['day'] + "&degC";
        document.getElementById("loc2_temp_date2").innerHTML = data['daily'][2]['temp']['day'] + "&degC";
        document.getElementById("loc2_prec_date1").innerHTML = data['daily'][0]['weather'][0]['description'];
        document.getElementById("loc2_prec_date2").innerHTML = data['daily'][1]['weather'][0]['description'];
        document.getElementById("loc2_prec_date3").innerHTML = data['daily'][2]['weather'][0]['description'];
    });

navigator.geolocation.getCurrentPosition((location) => {
    fetchWithCoordinates(location.coords.latitude, location.coords.longitude)
        .then(response => response.json()).then((data) => {
            document.getElementById("loc0_now").innerHTML = data['daily'][0]['temp']['day'] + "&degC";
            document.getElementById("loc0_temp_date1").innerHTML = data['daily'][0]['temp']['day'] + "&degC";
            document.getElementById("loc0_temp_date2").innerHTML = data['daily'][1]['temp']['day'] + "&degC";
            document.getElementById("loc0_temp_date2").innerHTML = data['daily'][2]['temp']['day'] + "&degC";
            document.getElementById("loc0_prec_date1").innerHTML = data['daily'][0]['weather'][0]['description'];
            document.getElementById("loc0_prec_date2").innerHTML = data['daily'][1]['weather'][0]['description'];
            document.getElementById("loc0_prec_date3").innerHTML = data['daily'][2]['weather'][0]['description'];
        });
},(err) => viewError(err));

function fetchWithCoordinates(lat, lon) {
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude={daily}' + '&appid=' + API_KEY + '&lang=eng&units=metric');
}

function viewError(error) {
    document.getElementById("status_text").innerHTML = "Status";
}

function viewSuccess() {
    document.getElementById("status_text").innerHTML = "";
}

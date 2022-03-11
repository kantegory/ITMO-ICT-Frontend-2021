function putLocationToStorage(city, lat, lon) {
    // Save selected city and coordinates to session storage
    console.log(lat, lon);
    sessionStorage.setItem("city", city);
    sessionStorage.setItem("lat", lat);
    sessionStorage.setItem("lon", lon);
    document.location.reload();
}

function selectCity() {
    let city = document.querySelector("#city-select").value;
    switch (city) {
        case "St. Petersburg":
            putLocationToStorage(city, 59.937500, 30.308611);
            break;
        case "Moscow":
            putLocationToStorage(city, 55.751244, 37.618423);
            break;
        case "Sochi":
            putLocationToStorage(city, 43.588348, 39.729996);
            break;
        default:
            navigator.geolocation.getCurrentPosition(function (location) {
                // User allowed location
                putLocationToStorage("", location.coords.latitude, location.coords.longitude);
            }, function () {
                // User disallowed location, set default value to St. Petersburg
                putLocationToStorage("St. Petersburg", 59.937500, 30.308611);
            });
            break;
    }
}

function renderSelectedCity() {
    let selectedCity = document.querySelector("#selected-city");
    let citySelector = document.querySelector("#city-select");
    if (sessionStorage.hasOwnProperty("city")) {
        let city = sessionStorage.getItem("city");
        if (city) {
            selectedCity.innerHTML = city;
            citySelector.value = city;
        } else if (sessionStorage.hasOwnProperty("lat") && sessionStorage.hasOwnProperty("lon")) {
            let lat = sessionStorage.getItem("lat");
            let lon = sessionStorage.getItem("lon");
            selectedCity.innerHTML = `${lat} ${lon}`;
        }
    }
}

window.addEventListener("load", renderSelectedCity);

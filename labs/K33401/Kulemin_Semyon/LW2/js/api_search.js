let api_key = '5fa8289d2a7fa01e858bb2efe6a2b11b'

function location_success(pos) {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+pos.coords.latitude+'&lon='+pos.coords.longitude+'&exclude={daily}'+'&appid='+api_key+'&lang=ru&units=metric')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

function location_error(err) {
    console.log(`ERROR(${err.code}): ${err.message}`);
}

document.querySelector('#location_button').addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(location_success, location_error)
})

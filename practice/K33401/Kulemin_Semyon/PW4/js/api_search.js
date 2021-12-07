let api_key = '5fa8289d2a7fa01e858bb2efe6a2b11b'

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + '55.75222' + '&lon=' + '37.61556' + '&exclude={daily}' + '&appid=' + api_key + '&lang=ru&units=metric')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#c1_temp_now').innerHTML = Math.round(data['daily'][0]['temp']['day']) + '&degC';
        document.querySelector('#c1_temp_day1').innerHTML = Math.round(data['daily'][0]['temp']['day']) + '&degC';
        document.querySelector('#c1_temp_day2').innerHTML = Math.round(data['daily'][1]['temp']['day']) + '&degC';
        document.querySelector('#c1_temp_day3').innerHTML = Math.round(data['daily'][2]['temp']['day']) + '&degC';
        document.querySelector('#c1_cond_day1').innerHTML = data['daily'][0]['weather'][0]['description']
        document.querySelector('#c1_cond_day2').innerHTML = data['daily'][1]['weather'][0]['description']
        document.querySelector('#c1_cond_day3').innerHTML = data['daily'][2]['weather'][0]['description']
    })

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + '51.51279' + '&lon=' + '-0.09184' + '&exclude={daily}' + '&appid=' + api_key + '&lang=ru&units=metric')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#c2_temp_now').innerHTML = Math.round(data['daily'][0]['temp']['day']) + '&degC';
        document.querySelector('#c2_temp_day1').innerHTML = Math.round(data['daily'][0]['temp']['day']) + '&degC';
        document.querySelector('#c2_temp_day2').innerHTML = Math.round(data['daily'][1]['temp']['day']) + '&degC';
        document.querySelector('#c2_temp_day3').innerHTML = Math.round(data['daily'][2]['temp']['day']) + '&degC';
        document.querySelector('#c2_cond_day1').innerHTML = data['daily'][0]['weather'][0]['description']
        document.querySelector('#c2_cond_day2').innerHTML = data['daily'][1]['weather'][0]['description']
        document.querySelector('#c2_cond_day3').innerHTML = data['daily'][2]['weather'][0]['description']
    })

function location_success(pos) {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + pos.coords.latitude + '&lon=' + pos.coords.longitude + '&exclude={daily}' + '&appid=' + api_key + '&lang=ru&units=metric')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#c_temp_now').innerHTML = Math.round(data['daily'][0]['temp']['day']) + '&degC';
            document.querySelector('#c_temp_day1').innerHTML = Math.round(data['daily'][0]['temp']['day']) + '&degC';
            document.querySelector('#c_temp_day2').innerHTML = Math.round(data['daily'][1]['temp']['day']) + '&degC';
            document.querySelector('#c_temp_day3').innerHTML = Math.round(data['daily'][2]['temp']['day']) + '&degC';
            document.querySelector('#c_cond_day1').innerHTML = data['daily'][0]['weather'][0]['description']
            document.querySelector('#c_cond_day2').innerHTML = data['daily'][1]['weather'][0]['description']
            document.querySelector('#c_cond_day3').innerHTML = data['daily'][2]['weather'][0]['description']
        })
}

function location_error(err) {
    console.log(`ERROR(${err.code}): ${err.message}`);
}

document.querySelector('#location_button').addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(location_success, location_error)
})

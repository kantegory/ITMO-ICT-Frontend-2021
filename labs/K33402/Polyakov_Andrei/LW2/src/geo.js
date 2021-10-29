let x = document.getElementById("demo");
let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let desc = document.querySelector('.desc')
let feels_temp = document.querySelector('.feels_temp')
let button_geo = document.querySelector('#get-geo')

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Геолокация не поддерживается этим браузером.";
  }
}

function showPosition(position) {
  x.innerHTML = "Широта: " + position.coords.latitude + 
  "<br>Долгота: " + position.coords.longitude; 
}

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid=62f76307202d2bbb00f83a4de8ac7393&lang=ru&units=metric')
        .then(response => response.json())
        .then(data => {
            let cityValue = data['name'];
            let tempValue = Math.ceil(data['main']['temp']);
            let feels_tempValue = Math.ceil(data['main']['feels_like']);
            let descValue = data['weather'][0]['description'];

            city.innerHTML = cityValue;
            temp.innerHTML = tempValue + '&deg';
            feels_temp.innerHTML = 'Ощущается как ' + feels_tempValue + '&deg';
            desc.innerHTML = descValue;
        })
})
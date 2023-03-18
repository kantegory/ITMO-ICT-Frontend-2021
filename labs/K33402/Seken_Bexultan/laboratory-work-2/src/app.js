let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let desc = document.querySelector('.desc')
let feels_temp = document.querySelector('.feels_temp')
let inputValue = document.querySelector('#inputValue')
let button = document.querySelector('#search')
let button_geo = document.querySelector('#get-geo')


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=62f76307202d2bbb00f83a4de8ac7393&lang=ru&units=metric')
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

function getLocation(pos) {
    let crd = pos.coords;
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+crd.latitude+'&lon='+crd.longitude+'&appid=62f76307202d2bbb00f83a4de8ac7393&lang=ru&units=metric')
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
}

button_geo.addEventListener('click', function(){
    navigator.geolocation.getCurrentPosition(getLocation);
})

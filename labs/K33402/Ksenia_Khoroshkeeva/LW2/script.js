const APIKEY = '9e73e45fff9d9ceee3eabbec55b3bee8'
const URL = `http://api.openweathermap.org/data/2.5/onecall?appid=${APIKEY}&exclude=current,hourly,minutely&units=metric&lang=ru`

let city = document.querySelector('.city')
let temp = document.querySelectorAll('.temp')
let tempToday = document.querySelector('.temp-today')
let date = document.querySelectorAll('.date')
let feelsLike = document.querySelectorAll('.feels-like')
let tempMax = document.querySelectorAll('.temp-max')
let tempMin = document.querySelectorAll('.temp-min')
let tempNight = document.querySelectorAll('.temp-night')

function getWeather(lat, lon) {
    city.innerHTML = 'Москва'
    fetch(`${URL}&lat=${lat}&lon=${lon}`, {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            data.daily.map((el, index) => {
                if (index === 0) {
                    tempToday.innerHTML = el.temp.day
                }
                date[index].innerHTML = timeConverter(el.dt);
                temp[index].innerHTML = el.temp.day
                tempMax[index].innerHTML = el.temp.max
                tempMin[index].innerHTML = el.temp.min
                tempNight[index].innerHTML = el.temp.night
                feelsLike[index].innerHTML = el.weather[0].description
            })

        }
        )
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сенятря','Октября','Ноября','Декабря'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year ;
    return time;
}

getWeather(37.606667, 55.761665)



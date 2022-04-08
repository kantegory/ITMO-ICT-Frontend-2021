var date_html = document.getElementsByClassName("date");
var max_temp_html = document.getElementsByClassName("max");
var min_temp_html = document.getElementsByClassName("min");
var wind_html = document.getElementsByClassName("wind");



function search_5days(){
    let a=document.getElementById("city-input").value;
    if (a == ''){
        alert("Пожалуйста, введите название города");
        return 0
    } 
    else{
        
        fetch('https://api.openweathermap.org/geo/1.0/direct?q='+a+'&appid=f3aee66148f3e8248277ba8731f28859&units=metric').then((response) => response.json()).then(json => {
            let search_lat = json[0]["lat"];
            let search_lon = json[0]["lon"];

            fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+search_lat+'&lon='+search_lon+'&appid=f3aee66148f3e8248277ba8731f28859&units=metric&exclude=current,minutely,hourly')
            .then((response) => response.json())
            .then(json => {
                for (let j = 0; j < 5; j++) {
                    let max_temp = json['daily'][j]["temp"]["max"];
                    let min_temp = json['daily'][j]["temp"]["min"];
                    let wind = json['daily'][j]["wind_speed"];
                    let unixTimestamp = json['daily'][j]["dt"];
                    let milliseconds = unixTimestamp * 1000;
                    let dateObject = new Date(milliseconds);
                    let month_raw = dateObject.getUTCMonth() + 1;
                    let month = ('0' + month_raw).slice(-2);
                    let day_raw = dateObject.getUTCDate();
                    let day = ('0' + day_raw).slice(-2);
                    let finaldate = day + "." + month;
                    date_html[j].innerHTML="Дата: " + finaldate;
                    max_temp_html[j].innerHTML="Макс: " + max_temp + "°C";
                    min_temp_html[j].innerHTML="Мин: " + min_temp + "°C";
                    wind_html[j].innerHTML = "Ветер: " + wind + "м/с";
                }
            })
        })
    }
    
let elem = document.getElementById('today');
elem.style.visibility = 'visible';
let elem2 = document.getElementById('fourdays');
elem2.style.visibility = 'visible';
}

function search_now(){
    let a=document.getElementById("city-input").value;
    if (a == ''){
        alert("Пожалуйста, введите название города");
        return 0
    } 
    else{
        fetch('http://api.openweathermap.org/geo/1.0/direct?q='+a+'&appid=f3aee66148f3e8248277ba8731f28859&units=metric').then((response) => response.json()).then(json => {
            let search_lat = json[0]["lat"];
            let search_lon = json[0]["lon"];
            
            fetch('https://api.openweathermap.org/data/2.5/weather?lat='+search_lat+'&lon='+search_lon+'&appid=f3aee66148f3e8248277ba8731f28859&units=metric')
            .then((response) => response.json())
            .then(json => {
                var max_temp = json["main"]["temp_max"];
                var min_temp = json["main"]["temp_min"];
                var wind = json["wind"]["speed"];
                date_html[0].innerHTML="Дата: Сегодня";
                max_temp_html[0].innerHTML="Макс: " + max_temp + "°C";
                min_temp_html[0].innerHTML="Мин: " + min_temp + "°C";
                wind_html[0].innerHTML = "Ветер: " + wind + "м/с";
            })
        
        })
    }

let elem = document.getElementById('today');
elem.style.visibility = 'visible';
let elem2 = document.getElementById('fourdays');
elem2.style.visibility = 'hidden';
}



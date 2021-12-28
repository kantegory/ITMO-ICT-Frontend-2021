let city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let feels_temp = document.querySelector('.feels_temp');
let inputValue = document.querySelector('#inputValue');
let button = document.querySelector('#search');
let button_geo = document.querySelector('#get-geo');


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

function setupSwitcher(){
    const savedScheme = getSavedScheme();

    if (savedScheme !== null){
        const current = document.querySelector('.switcher__radio[value = $(savedScheme)]');
        current.checked = true;
    }
    [...switcherRadio].forEach((radio) => {
        radio.addEventListener('change', (event) =>{
            setColorScheme(event.target.value);
        });
    });
}

function colorSchemeController(){
    const savedScheme = getSavedScheme();
    const systemScheme = getSystemScheme();

    if (savedScheme === null) return;
    if (savedScheme !== systemScheme){
        setColorScheme(savedScheme);
    }
}

function setColorScheme(scheme){
    switchMedia(scheme);
    if(scheme === 'auto'){
        clearScheme();
    }else{
        saveScheme(scheme);
    }
}

function switchMedia(scheme){
    let lightScheme;
    let datkScheme;

    if (scheme === 'auto'){
        lightScheme = '(prefers-color-scheme: light)'
        darkScheme = '(prefers-color-scheme: dark)'
    }else{
        lightScheme = (scheme === 'light') ? 'all' : 'not all';
        darkScheme = (scheme === 'dark') ? 'all' : 'not all';
    }

    [...lightStyles].forEach(link) => {
        link.media = lightScheme;
    }

    [...darkStyles].forEach(link) => {
        link.media = darkScheme;
    }
}

function getSystemScheme(){
    const darkScheme = darkSchemeMedia.matches;
    return darkScheme ? 'dark': 'light';
}

function getSavedScheme(){
    return localStorage.getItem('color-scheme');
}

function saveScheme(scheme){
    localStorage.setItem('color-scheme', scheme);
}

function clearScheme(){
    localStorage.removeItem('color-scheme');
}

setupSwitcher();
setColorScheme();

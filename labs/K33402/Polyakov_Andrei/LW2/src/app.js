let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let desc = document.querySelector('.desc')
let inputValue = document.querySelector('#inputValue')
let button = document.querySelector('#search')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=62f76307202d2bbb00f83a4de8ac7393')
        .then(response => response.json())
        .then(data => {
            let cityValue = data['name'];
            let tempValue = Math.round((data['main']['temp'])-273);
            let descValue = data['weather'][0]['description'];

            city.innerHTML = cityValue;
            temp.innerHTML = tempValue + '&deg';
            desc.innerHTML = descValue;
        })
})
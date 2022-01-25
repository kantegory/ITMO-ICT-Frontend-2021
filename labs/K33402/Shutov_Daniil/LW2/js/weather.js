
let apiKey = "1aa2045fd48de21d4f8b36bc1fed8a98";
// Город погода которого нужна
let city = "Moscow";

let url = `http://api.openweathermap.org/data/2.5/find?q=${city}&type=like&APPID=${apiKey}`;
let City = document.querySelector('.city')
let Temp =  document.querySelectorAll('.temp')
let Humidity = document.querySelectorAll('.humidity')
let Wind = document.querySelectorAll('.wind')
let Wearther =document.querySelectorAll('.wearther')
let ddate =document.querySelectorAll('.date')
let Month =document.querySelectorAll('.month')

 axios.get(url).then(res => {
     console.log(res.data);
  const lendth =(res.data.list.length);
  City.innerHTML= res.data.list[0].name;

   for (var i = 0; i < lendth; i++){
       // ddate[i].innerHTML=date+i;
     Temp[i].innerHTML = ((res.data.list[i].main.temp)-273).toFixed(2)
     Humidity[i].innerHTML = res.data.list[i].main.humidity
     Wind[i].innerHTML = res.data.list[i].wind.speed
     Wearther[i].innerHTML=res.data.list[i].weather[0].main
   }
   let a = new Date();
   let aa = a.getDate();
   let mou = a.getMonth()
   for (var j = 0; j < lendth; j++){
         ddate[j].innerHTML=aa + j;
         Month[j].innerHTML=mou;
   }
     console.log(aa)
})


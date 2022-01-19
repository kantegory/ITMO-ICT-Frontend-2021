const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
const searchBtn = document.getElementById('searchBtn');
const searchForm = document.getElementById('searchForm');

searchBtn.addEventListener('click', search_hotel, false);

function search_hotel(event) {
    checkinDate = document.getElementById('checkin-date');
    checkoutDate = document.getElementById('checkout-date');
    numAdults = document.getElementById('adult');
    numChildren = document.getElementById('children');
    numRoom = document.getElementById('rooms');

    console.log('dang chay roi!!!');
    fetch("https://hotels-com-free.p.rapidapi.com/suggest/v1.7/json?query=San%20Francisco&locale=en_US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "hotels-com-free.p.rapidapi.com",
            "x-rapidapi-key": "8fc72480c1msh431819ddc39b40ap1c769ejsn5ce418392395"
        }
    })
    .then(response => {
        console.log('nhan dc r')
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
    console.log('chay xong roi!!!');
};




navBtn.addEventListener('click', function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');

});
window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});
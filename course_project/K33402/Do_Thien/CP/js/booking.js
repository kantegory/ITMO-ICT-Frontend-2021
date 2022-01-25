const searchBtn = document.getElementById('search-btn');
const gridHotel = document.getElementById('grid-hotel');

searchBtn.addEventListener('click', getHotels);


function getHotels(){
    let inputTxt = document.getElementById('destination').value.trim();
    fetch(`https://api.unsplash.com/search/photos?client_id=wt3siU2g9HdgFOKnCWn5WBIBWjkZC6e5BHu6zY78zbM&per_page=20&query=${inputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.results){
            data.results.forEach(hotel => {
                html += `
                <div class="grid-item" id = ${hotel.id}>
                    <a href="#" class="hotel-link">
                        <div class="background-hotel-img">
                            <img src="${hotel.urls.regular}" alt="${hotel.alt_description}" class="hotel-img">
                        </div>
                        <h5 class="hotel-name">${hotel.description}</h5>
                        <p class="hotel-price">${hotel.likes}$/night</p>
                    </a>
                </div>
                `
            });
        }
        gridHotel.innerHTML = html;
    });
    console.log("clicked");
}


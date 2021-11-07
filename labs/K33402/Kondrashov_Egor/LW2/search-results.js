async function getHotels() {
    let url = "https://booking-com.p.rapidapi.com/v1/hotels/search?dest_type=city&checkin_date=2022-07-24&room_number=1&checkout_date=2022-07-25&order_by=popularity&dest_id=-553173&adults_number=2&units=metric&filter_by_currency=AED&locale=en-gb&children_ages=5%2C0&include_adjacency=true&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_number=2";
    try {
        let res = await fetch(
            url,
            {
                "method": "GET",
	            "headers": {
                    "x-rapidapi-host": "booking-com.p.rapidapi.com",
                    "x-rapidapi-key": "7364d7fb71msh2d462a6fff9d1b1p102b53jsnff2949c01c27"
                }
            }
        );
        data = await res.json();
        return data.result;
    } catch (error) {
        console.log(error);
    }
}


async function renderHotels() {
    let hotels = await getHotels();
    let html = "";
    hotels.forEach(hotel => {
        let htmlSegment = `<div class="container hotel-item">
                            <img src="${hotel.main_photo_url}" >
                            <h2>${hotel.hotel_name}</h2>
                            <p>${hotel.country_trans}</p>
                            <p>${hotel.city_trans}</p>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.search-results');
    container.innerHTML = html;
}

renderHotels();

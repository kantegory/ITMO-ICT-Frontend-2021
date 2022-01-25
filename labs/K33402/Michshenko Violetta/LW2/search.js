
async function getCityIdByName(city) {
    let res = await fetch(`https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${city}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
            "x-rapidapi-key": "7364d7fb71msh2d462a6fff9d1b1p102b53jsnff2949c01c27"
        }
    }
    )
    let data = await res.json();
    if (data) {
        return data[0].dest_id;
    }
    else {
        return null;
    }
}

async function getHotels() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    let city = urlSearchParams.get("city");
    if (!city) {
        city = "-553173";
    }
    else {
        city = await getCityIdByName(city);
    }
    let numberOfGuests = urlSearchParams.get("number-of-guests");
    if (!numberOfGuests) {
        numberOfGuests = 1;
    }
    let arrivalDatetime = urlSearchParams.get("arrival-datetime");
    if (!arrivalDatetime) {
        arrivalDatetime = "2022-07-24";
    }
    let departureDatetime = urlSearchParams.get("departure-datetime");
    if (!departureDatetime) {
        departureDatetime = "2022-07-25";
    }

    let url = `https://booking-com.p.rapidapi.com/v1/hotels/search?dest_type=city&checkin_date=${arrivalDatetime}&room_number=1&checkout_date=${departureDatetime}&order_by=popularity&dest_id=${city}&adults_number=${numberOfGuests}&units=metric&filter_by_currency=AED&locale=en-gb`;
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
        let data = await res.json();
        return data.result;
    } catch (error) {
        console.log(error);
    }
}


async function renderHotels() {
    let hotels = await getHotels();
    let html = "<div class='container'><h5 class='text-center'>Результаты поиска</h5></div>";
    let htmlSegment = ""

    if (hotels) {
        html += `<div class="container">`;

        html += '<div class="row">';
        htmlSegment = `<div class="column hotel-item">
            <img src="${hotels[0].main_photo_url}" >
            <h2>${hotels[0].hotel_name}</h2>
            <p>${hotels[0].country_trans}, ${hotels[0].city_trans}</p>
            <p>Рейтинг: ${hotels[0].review_score}</p>
            <p>Бронирование от ${hotels[0].min_total_price} ${hotels[0].currency_code}</p>
        </div>`;
        html += htmlSegment;
        html += '</div>';

        html += '<div class="row">';
        for (let i = 1; i < 4; i++) {
            htmlSegment = `<div class="col hotel-item">
                <img src="${hotels[i].main_photo_url}" >
                <h3>${hotels[i].hotel_name}</h2>
                <p>${hotels[i].country_trans}, ${hotels[i].city_trans}</p>
                <p>Рейтинг: ${hotels[i].review_score}</p>
                <p>Бронирование от ${hotels[i].min_total_price} ${hotels[i].currency_code}</p>
            </div>`;
            html += htmlSegment;
        }
        html += '</div>';

        html += '<div class="row">';
        for (let i = 1; i < 4; i++) {
            htmlSegment = `<div class="col hotel-item">
                <img src="${hotels[i].main_photo_url}" >
                <h4>${hotels[i].hotel_name}</h2>
                <p>${hotels[i].country_trans}, ${hotels[i].city_trans}</p>
                <p>Рейтинг: ${hotels[i].review_score}</p>
                <p>Бронирование от ${hotels[i].min_total_price} ${hotels[i].currency_code}</p>
            </div>`;
            html += htmlSegment;
        }
        html += '</div>';

        html += '</div>';
    } else {
        html += '<div class="container">Ничего не найдено.</div>';
    }

    let container = document.querySelector('.search-results');
    container.innerHTML = html;
}

renderHotels();
function search() {
    let location = document.getElementById("location").value
    let guests = document.getElementById("guests").value
    let checkin = document.getElementById("checkin").value
    let checkout = document.getElementById("checkout").value


    let query_params = `?`
    if (location) {
        query_params += `location=${location}&`
    }
    if (guests) {
        query_params += `guests=${guests}&`
    }
    if (checkin) {
        query_params += `checkin=${checkin}&`
    }
    if (checkout) {
        query_params += `checkout=${checkout}&`
    }
    query_params = query_params.slice(0, -1)

    window.location.href = query_params
}


async function getLocationId(location) {
    let url = `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-us&name=${location}`
    let response = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": config.apiHost,
            "x-rapidapi-key": config.apiKey
        }
    })

    let data = await response.json()
    if (data.length > 0) {
        return data[0].dest_id
    } else {
        return null
    }
}

async function getHotels() {
    const params = new URLSearchParams(window.location.search)
    let location = params.get("location")
    if (!location) {
        location = 20021296
    } else {
        location = await getLocationId(location)
        if (location == null) return
    }
    let guests = params.get("guests")
    if (!guests) {
        guests = 1
    }

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    let checkin = params.get("checkin")
    if (!checkin) {
        checkin = today.toISOString().slice(0, 10)
    }
    let checkout = params.get("checkout")
    if (!checkout) {
        checkout = tomorrow.toISOString().slice(0, 10)
    }

    let url = `https://booking-com.p.rapidapi.com/v1/hotels/search?dest_type=city&order_by=popularity&
                units=metric&filter_by_currency=USD&locale=en-us&room_number=1&
                dest_id=${location}&adults_number=${guests}&
                checkin_date=${checkin}&checkout_date=${checkout}`
    url = url.replace(/\s/g, "")

    let response = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": config.apiHost,
            "x-rapidapi-key": config.apiKey
        }
    }
    )

    let data = await response.json()
    return data.result
}


async function showHotels() {
    let hotels = await getHotels()
    const loader = document.querySelector('#loader')
    loader.style.display = 'none'

    let html = ""

    if (hotels) {
        for (let row = 0; row < 5; row++) {
            if (row * 3 >= hotels.length) break
            html += '<div class="row px-3">'
            for (let i = 0 + row * 3; i < 3 + row * 3; i++) {
                if (i >= hotels.length) break
                html += `<div class="card col-md-4">
                    <img class="card-img-top" src="${hotels[i].max_photo_url}" >
                    <div class="card-body">
                        <p class="card-location"><i class="fa fa-map-marker"></i>${hotels[i].city_trans}, ${hotels[i].country_trans}</p>
                        <p class="card-rating"><span class="red-star">★</span> ${hotels[i].review_score}
                            <span class="reviews">(${hotels[i].review_nr} reviews)</span>
                        </p>
                        <p class="card-text">${hotels[i].hotel_name}</p>
                        <p class="card-price"><span class="price">${Math.round(hotels[i].min_total_price)} ${hotels[i].currency_code}</span> / night</p>
                    </div>
                </div>`
            }
            html += '</div>'
        }
    } else {
        html += '<div class="container alert alert-primary mb-0">No results found</div>'
    }

    document.querySelector('.search-results').innerHTML = html
}


showHotels()
window.onload = function () {
    const loader = document.getElementById('loader')
    loader.style.display = 'block'
}

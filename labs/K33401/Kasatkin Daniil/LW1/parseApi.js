import 'regenerator-runtime/runtime';
import axios from "axios";


const hotelElement = document.querySelector('.hotel-container')
const apiUrl = 'https://usahotelsapi.herokuapp.com/hotels/30'

async function getHotels(url) {
    axios.get(url)
        .then((response) => {
            response.data.forEach(element => {
                const hotelCard = document.createElement('article')
                hotelCard.classList.add('hotel-card')
                const hotelImageContainer = document.createElement('figure')
                hotelImageContainer.classList.add('hotel-image')
                const hotelImage = document.createElement('img')
                hotelImage.src = element.img
                hotelImageContainer.appendChild(hotelImage)
                hotelCard.appendChild(hotelImageContainer)
                const hotelContent = document.createElement('div')
                hotelContent.classList.add('hotel-content')
                const hotelRating = document.createElement('h2')
                hotelRating.classList.add('hotel-rating')
                for (let i = 0; i < element.rate; i++) {
                    const star = document.createElement('i')
                    star.classList.add('ri-star-fill')
                    hotelRating.appendChild(star)
                }
                hotelContent.appendChild(hotelRating)
                const hotelTitle = document.createElement('h3')
                hotelTitle.classList.add('hotel-title')
                hotelTitle.innerHTML = element.title
                hotelContent.appendChild(hotelTitle)
                const hotelAddress = document.createElement('h2')
                hotelAddress.classList.add('hotel-address')
                hotelAddress.innerHTML = element.address
                hotelContent.appendChild(hotelAddress)
                const hotelPrice = document.createElement('h2')
                hotelPrice.classList.add('hotel-price')
                hotelPrice.innerHTML = element.price
                hotelContent.appendChild(hotelPrice)
                hotelCard.appendChild(hotelContent)
                hotelElement.appendChild(hotelCard)
            })
        })
        .catch(err => {
            console.log(err)
        })
}

getHotels(apiUrl)

const hotel = document.querySelector('.hotel-container')
const API_URL = 'https://usahotelsapi.herokuapp.com/hotels/100'

async function getHotels() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json
}

getHotels().then(data => {
    data.forEach(element => {
        const hotelCell = document.createElement('article')
        hotelCell.classList.add('hotel-cell')
        const hotelImageContainer = document.createElement('figure')
        hotelImageContainer.classList.add('hotel-image')
        const hotelImage = document.createElement('img')
        hotelImage.src = element.img
        hotelImage.alt = 'Image of hotel'
        hotelImageContainer.appendChild(hotelImage)
        hotelCell.appendChild(hotelImageContainer)
        const hotelContent = document.createElement('div')
        hotelContent.classList.add('hotel-content')
        const hotelRating = document.createElement('h2')
        hotelRating.classList.add('hotel-rating')
        hotelRating.innerHTML = `Rating : ${element.rate} stars`
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
        hotelCell.appendChild(hotelContent)
        hotel.appendChild(hotelCell)
    })
})

const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const switcherRadios = document.querySelectorAll('.switcher__radio');

function setupSwitcher() {
    const savedScheme = getSavedScheme();

    if (savedScheme !== null) {
        const currentRadio = document.querySelector(`.switcher__radio[value=${savedScheme}]`);
        currentRadio.checked = true;
    }

    [...switcherRadios].forEach((radio) => {
        radio.addEventListener('change', (event) => {
            setScheme(event.target.value);
        });
    });
}

function setupScheme() {
    const savedScheme = getSavedScheme();
    const systemScheme = getSystemScheme();

    if (savedScheme === null) return;

    if (savedScheme !== systemScheme) {
        setScheme(savedScheme);
    }
}

function setScheme(scheme) {
    switchMedia(scheme);

    if (scheme === 'auto') {
        clearScheme();
    } else {
        saveScheme(scheme);
    }
}

function switchMedia(scheme) {
    let lightMedia;
    let darkMedia;

    if (scheme === 'auto') {
        lightMedia = '(prefers-color-scheme: light)';
        darkMedia = '(prefers-color-scheme: dark)';
    } else {
        lightMedia = (scheme === 'light') ? 'all' : 'not all';
        darkMedia = (scheme === 'dark') ? 'all' : 'not all';
    }

    [...lightStyles].forEach((link) => {
        link.media = lightMedia;
    });

    [...darkStyles].forEach((link) => {
        link.media = darkMedia;
    });
}

function getSystemScheme() {
    const darkScheme = darkSchemeMedia.matches;

    return darkScheme ? 'dark' : 'light';
}

function getSavedScheme() {
    return localStorage.getItem('color-scheme');
}

function saveScheme(scheme) {
    localStorage.setItem('color-scheme', scheme);
}

function clearScheme() {
    localStorage.removeItem('color-scheme');
}

setupSwitcher();
setupScheme();
getHotels()

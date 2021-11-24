// const ACCESS_KEY = 9ceT7wrA4OKjOhlnr_JfX7_nDa0o57cNyy4-mOmHt94;
const searchBtn = document.getElementById('search-btn');
const hotel = document.getElementById('row')

searchBtn.addEventListener('click', getImages);


function getImages(){
    let inputTxt = document.getElementById('inputt').value.trim();
    fetch(`https://api.unsplash.com/search/photos?client_id=9ceT7wrA4OKjOhlnr_JfX7_nDa0o57cNyy4-mOmHt94&per_page=20&query=${inputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.results){
            data.results.forEach(hotel => {
                html += `
                    <div class="col" id = ${hotel.id}>
                        <a href="#" class="hotel-link" >
                            <img src="${hotel.urls.regular}" alt="hotel" class="hotel-img">
                            <p class="hotel-price">${hotel.description}</p>
                        </a>
                    </div>
                `
            });
        }

        hotel.innerHTML = html;
    });
    console.log("clicked");
}
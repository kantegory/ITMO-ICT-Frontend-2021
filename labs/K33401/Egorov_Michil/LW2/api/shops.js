var BASE_URL = 'http://195.2.70.197:8100/api/';

class ShopParser {
    constructor(shop_id) {
        this.shop_id = shop_id
        this.setInitialUrl();
    }

    // @filters - строка вида param1=val1&param2=val2
    setInitialUrl(filters='') {
        this.next_url = `${BASE_URL}shop/`;
    }

    async getNextShops() {
        let response = await fetch(this.next_url)
            .then(function(response) {
                return response.json();
            });

        this.next_url = response['next'];
        return response;
    }

    async setNextShops() {
        if(!this.next_url) {
            let button = document.getElementById('download_button');
            button.style.display = 'none';
            return;
        }

        let responseJson = await this.getNextShops();
        let response = responseJson['results']
        let shopListDiv = document.getElementById("shops-list");

        for(let i = 0; i < response.length; i++) {
            let shop = response[i];
            let container = document.createElement('div');

            container.className = 'shop-card';
            container.innerHTML = `
                <div class="card h-100">
                    <img src=${shop['icon']} class="card-img-top" alt="Лого ${shop['name']}" >
                    <div class="card-body">
                        <h5 class="card-title">${shop['name']}</h5>
                        <p class="card-text">${shop['address']}</p>
                        <div class="text-button">${shop['walk_time']}-${shop['walk_time']+5} мин</div>
                        <div class="text-button">${shop['mean_price']} ₽</div>
                    </div>
                </div>
            `;

            shopListDiv.appendChild(container);
        }

        if(!this.next_url) {
            let button = document.getElementById('download_button');
            button.style.display = 'none';
            return;
        }

    }


    async setPage() {
        this.setNextShops();
    }
}
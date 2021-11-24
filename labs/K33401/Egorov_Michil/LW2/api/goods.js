// TODO: почему не импортится: import {BaseParser} from './base.js';

var BASE_URL = 'http://195.2.70.197:8100/api/';


class GoodParser {
    constructor(shop_id) {
        this.shop_id = shop_id
        this.setInitialUrl();
    }

    // @filters - строка вида param1=val1&param2=val2
    setInitialUrl(filters='') {
        let fitler_str = filters ? `&${filters}` : ''
        this.next_url = `${BASE_URL}good/?shop=${this.shop_id}${fitler_str}`;
    }

    async getShopInfo() {
        return await fetch(`${BASE_URL}shop/${this.shop_id}/`)
            .then(function(response) {
                return response.json();
            })
    }

    async getNextGoods() {
        let response = await fetch(this.next_url)
            .then(function(response) {
                return response.json();
            });

        if(response['next']){
            this.next_url = response['next'];
        }

        return response;
    }

    async setShopInfo() {
        let response = await this.getShopInfo()
        document.getElementById('shop-address').innerHTML = response['address'];
        document.getElementById('shop-mean-price').innerHTML = response['mean_price'] + '₽';
        document.getElementById('shop-walk-duration').innerHTML = response['walk_time'] + ' минут';
        document.getElementById('shop-bike-duration').innerHTML = response['bike_time'] + ' минут';
    }

    async setNextGoods() {
        let responseJson = await this.getNextGoods();
        let response = responseJson['results']
        let goodListDiv = document.getElementById("goods-list");

        for(let i = 0; i < response.length; i++) {
            let good = response[i];
            let container = document.createElement('div');

            container.className = 'card good-card col-mb-12';
            container.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${good['icon']}" class="img-fluid rounded-start" alt="${good['name']}" height="120px">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${good['name']}</h5>
                            <p class="card-text">
                                ${good['description']}
                            </p>
                            <p class="card-text"><small class="text-muted">${good['price']}₽</small></p>
                        </div>
                    </div>
                </div>
            `;

            goodListDiv.appendChild(container);
        }
    }

    async setPage() {
        this.setShopInfo();
        this.setNextGoods();
    }
}

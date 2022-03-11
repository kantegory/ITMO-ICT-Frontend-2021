import React, { Component } from 'react'
import ShopsAPI from '../api/shopsAPI'
import CompactShop from '../components/CompactShop'
import HeaderTitle from '../components/HeaderTitle'


export default class Shops extends Component {
    constructor(props) {
        super(props);

        this.state = {shops: [], filter_name: ''}
        this.api = new ShopsAPI();
    }

    componentDidMount() {
        this.setShops = this.setShops.bind(this);
        this.filterShops = this.filterShops.bind(this);

        this.setShops();
    }

    async setShops(page = 1) {
        const shops = await this.api.list(`name=${this.state.filter_name}`);

        this.setState({
            shops: shops
        })
    }
    
    filterShops(e) {
        e.preventDefault();
        this.setShops();
    }

    render() {
        return (
            <div>
                <HeaderTitle title="Рестораны"/>

                <form action="" onSubmit={this.filterShops}>
                    <div class="row">
                        <div class="col-md-9">
                            <input class="form-control" type="text" onChange={(e) => this.setState({filter_name: e.target.value})} placeholder="Название магазина"/>
                        </div>
                        <div class="col-md-3">
                            <input class="btn btn-delmitary" type="submit" value="Поиск" style={{height: "38px"}} />
                        </div>
                    </div>
                </form>

                <div className="mt-5 row row-cols-1 row-cols-md-3 g-4">
                    {this.state.shops.length != 0 ? this.state.shops.map((shop) => 
                        <CompactShop key={shop.id} shop={shop}/>
                    ): <p>Идет загрузка...</p>}
                </div>
            </div>
        )
    }
}

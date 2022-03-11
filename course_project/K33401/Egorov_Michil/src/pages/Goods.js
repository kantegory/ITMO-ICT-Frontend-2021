import React, { Component } from 'react'
import { withRouter } from '../utils';
import GoodsAPI from '../api/goodsAPI';
import ShopsAPI from '../api/shopsAPI';
import Good from '../components/CompactGood'
import HeaderTitle from '../components/HeaderTitle'


class Goods extends Component {
    constructor(props) {
        super(props);
        this.shopId = this.getShopId();
        
        this.state = {goods: [], shop: {}}
        this.goodsApi = new GoodsAPI({shopId: this.shopId});
        this.shopsApi = new ShopsAPI();

        this.addGood.bind(this);
        this.decreaseGood.bind(this);
    }

    componentDidMount() {
        this.setGoods = this.setGoods.bind(this);
        this.setShopInfo = this.setShopInfo.bind(this);
        this.setShopInfo();
        this.setGoods();
    }

    getShopId(props) {
        return parseInt(this.props.location.pathname.split('/')[2]);
    }

    async setShopInfo() {
        const shop = await this.shopsApi.get({suffix: this.shopId});
        this.setState({
            shop: shop
        })
    }

    async setGoods(page = 1) {
        const goods = await this.goodsApi.list(`shop=${this.shopId}`);

        this.setState({
            goods: goods
        })
    }

    addGood = (good) => {
        this.props.addGood(good);
    }

    decreaseGood = (good) => {
        this.props.decreaseGood(good);
    }

    render() {
        return (
            <div>
                <HeaderTitle title={this.state.shop.name} />
                <div class="row">
                    {
                        this.state.goods.length > 0 
                        ? this.state.goods.map((good) => <Good good={good} cart={this.props.cart} addGood={this.addGood} decreaseGood={this.decreaseGood}/>)
                        : <p style={{
                                position: 'absolute', left: '50%', top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}>Загрузка...
                        </p>
                    }
                </div>

            </div>
        );
    }
}

export default withRouter(Goods);
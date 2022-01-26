import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HeaderTitle from '../components/HeaderTitle'
import CartItem from '../components/CartItem'
import OrderAPI from '../api/ordersAPI'
import './Cart.css'


export default class Cart extends Component {
    constructor() {
        super();
        
        this.api = new OrderAPI();
        this.changePrice = this.changePrice.bind(this);
        this.state = {
            delivery_price: 50,
        }
        this.makeOrder = this.makeOrder.bind(this)
        this.addGood.bind(this);
        this.decreaseGood.bind(this);
    }

    addGood = (good) => {
        this.props.addGood(good);
    }

    decreaseGood = (good) => {
        this.props.decreaseGood(good);
    }


    async makeOrder() {
        const response = await this.api.makeOrder(this.props.cart, this.state.delivery_price);
        if(!response.hasOwnProperty('error')) {
            alert("Спасибо что выбрали нас! Ищем курьера...")
            sessionStorage.removeItem('cart');
            document.location.replace('/account');
        }else {
            alert('Что-то пошло не так, попробуйте позднее.')
        }
        
    }
    
    changePrice(value) {
        if(!value) value = 0;
        this.setState({
            delivery_price: parseInt(value),
        })
    }

    render() {
        return (
            <div>
                <div>
                    <HeaderTitle title={"Моя корзина"} />
                </div>

                <div class="row">
                    <div className="col-md-8">
                        <h2>Заказы</h2>

                        {this.props.cart.goods.length != 0 ?
                        this.props.cart.goods.map((good) => <CartItem addGood={this.addGood} decreaseGood={this.decreaseGood} good={good}/>)
                        : <Link to='/shops'>Выберите товар из списка</Link>}
                    </div>
                    <div className="col-md-4">
                        <h2>Итого</h2>
                        <div class="order-info card mt-4">
                            <div class="card-body" style={{padding: "0px 36px 18px 36px"}}>
                                <div class="d-flex justify-content-between">
                                    <p> Всего:</p>
                                    <p> {this.props.cart.totalPrice} ₽</p>
                                </div>
                                <label> Доставка: </label>
                                <input class="form-control" type="number" value={this.state.delivery_price ? this.state.delivery_price : ''} onChange={(e) => this.changePrice(e.target.value)}/>
                                <div class="mt-3 d-flex justify-content-between">
                                    <p> Итого:</p>
                                    <p> {this.props.cart.totalPrice + this.state.delivery_price} ₽</p>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-delmitary" onClick={this.makeOrder}>Оформить заказ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

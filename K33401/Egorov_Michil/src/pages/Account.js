import React, { Component } from 'react'
import Auth from './Auth'

import Order from '../components/CompactOrder'

import AuthAPI from '../api/authAPI';
import OrderAPI from '../api/ordersAPI'
import HeaderTitle from '../components/HeaderTitle'


export default class Account extends Component {
    constructor() {
        super();

        this.state = {user: {}, orders: []};

        this.auth_api = new AuthAPI();
        this.order_api = new OrderAPI();
    }

    componentDidMount() {
        this.setInfo = this.setInfo.bind(this);
        this.setOrders = this.setOrders.bind(this);
        this.setInfo().then(() => this.setOrders());
    }

    async setInfo() {
        const data = await this.auth_api.me();
        this.setState({
            user: data,
        })
    }

    async setOrders() {
        const data = await this.order_api.getUserOrders(this.state.user.id);
        this.setState({
            orders: data,
        })
    }

    render() {
        if(sessionStorage.getItem('auth_token') === null) {
            return <Auth />
        }

        return (
            <div>
                <HeaderTitle title="Личный кабинет"/>

                <div className="row">
                    <div className="col-sm-3">
                        <h2 class="mb-3">Профиль</h2>

                        <div className="card border-0" >
                        <div className="card-body" >
                            <p>Имя: {this.state.user.username} </p>
                            <p>Почта: {this.state.user.email} </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-9"> 
                        <h2 class="mb-3">Заказы</h2>
                        {this.state.orders.map((order) => <Order order={order}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

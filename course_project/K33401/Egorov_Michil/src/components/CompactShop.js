import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './CompactShop.css'

export default class Shop extends Component {
    render() {
        return (
            <div className="shop-card">
                <div className="card h-100 border-0">
                    <Link to={"/goods/" + this.props.shop.id}>
                        <img src={this.props.shop.icon} className="card-img-top" alt="Лого бургер кинга" />
                    </Link>
                    <h5 className="card-title">
                        <Link to={"/goods/" + this.props.shop.id}>{this.props.shop.name}</Link>
                    </h5>
                    <p className="card-text">{this.props.shop.address}</p>
                    <div className="d-md-block">
                        <div className="text-button button">{this.props.shop.bike_time}-{this.props.shop.walk_time} мин</div>
                        <div className="text-button button">{this.props.shop.mean_price} ₽</div>
                    </div>
                    
                </div>
          </div>
        )
    }
}

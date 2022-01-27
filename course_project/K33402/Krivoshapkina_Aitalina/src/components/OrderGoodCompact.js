import React, { Component } from 'react'
import './CartItem.css'

import plusSvg from '../img/plus.svg'
import minusSvg from '../img/minus.svg'
import crossSvg from '../img/Cross.svg'


export default class CartItem extends Component {
    render() {
        return (
               <div className="cart-item mb-4">
                <div className="card h-100">
                    <div className="card-body" style={{position: "relative"}}>
                        <div className="row">
                            <div className="d-flex col-md-4 text-center">
                                <img src={this.props.good.icon} className="align-self-center rounded-start w-100" alt={this.props.good.name}/>
                            </div>
                            <div className="card-info col-md-8">
                                <h5>{this.props.good.name}</h5>
                                <p className="card-text"><small>{this.props.good.price * this.props.amount}₽</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

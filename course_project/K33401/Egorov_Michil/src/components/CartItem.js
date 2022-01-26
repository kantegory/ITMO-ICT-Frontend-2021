import React, { Component } from 'react'
import './CartItem.css'

import plusSvg from '../img/plus.svg'
import minusSvg from '../img/minus.svg'
import crossSvg from '../img/Cross.svg'


export default class CartItem extends Component {
    constructor() {
        super();
        this.addGood.bind(this);
        this.decreaseGood.bind(this);
    }

    addGood = () => {
        this.props.addGood(this.props.good);
    }

    decreaseGood = () => {
        this.props.decreaseGood(this.props.good);
    }

    render() {
        return (
               <div className="cart-item mt-4">
                <div className="card h-100">
                    <div className="card-body" style={{position: "relative", padding: "0 36px 18px 36px"}}>
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <img src={this.props.good.icon} className="rounded-start" alt={this.props.good.name} height={"149px"}/>
                            </div>
                            <div className="card-info col-md-8">
                                <h5>{this.props.good.name}</h5>
                                <p className="card-text"><small>{this.props.good.price * this.props.good.count}₽</small></p>
                                <div className="d-flex">
                                    <img className="add-cart" src={minusSvg} onClick={this.decreaseGood}/>
                                    <span>&nbsp;&nbsp;{this.props.good.count}&nbsp;&nbsp;</span>
                                    <img className="add-cart" src={plusSvg} onClick={this.addGood}/>
                                </div>
                            </div>
                        </div>

                        <img class="add-cart" src={crossSvg} style={{position: "absolute", right: 36, top: 27}}/>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import './CompactGood.css'

import plusSvg from '../img/plus.svg'
import minusSvg from '../img/minus.svg'


export default class CompactGood extends Component {
    constructor(props) {
        super(props);
        this.good = props.good;

        this.addGood.bind(this);
        this.decreaseGood.bind(this);

        this.goodCount = this.goodCount.bind(this);
    }

    addGood = () => {
        this.props.addGood(this.good);
    }

    decreaseGood = () => {
        this.props.decreaseGood(this.good);
    }

    goodCount() {
        for(let i = 0; i < this.props.cart.goods.length; i++) {
            if(this.props.cart.goods[i].id === this.good.id) {
                return this.props.cart.goods[i].count;
            }
        }
        return 0;
    }

    render() {
        return (
            <div className="col-md-4 mt-5">
                <div className="card good-card h-100">
                    <div class="card-body text-center">
                        <img src={this.good.icon} class="img-fluid rounded-start" alt={this.good.name} height="120px"/>
                        <h5 class="card-title">{this.good.name}</h5>
                        <div class="changing-cart d-flex justify-content-between">
                            <p class="card-text"><small>{this.good.price} ₽</small></p>
                            <div class="d-flex">
                                <div>
                                    <img class="add-cart" src={minusSvg} onClick={this.decreaseGood}/>
                                </div>
                                &nbsp;&nbsp;
                                <span class="good-count">
                                    {this.goodCount()}
                                </span>
                                &nbsp;&nbsp;
                                <div>
                                    <img class="add-cart" src={plusSvg} onClick={this.addGood}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

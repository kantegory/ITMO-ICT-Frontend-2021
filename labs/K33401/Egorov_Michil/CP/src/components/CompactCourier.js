import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import courier from '../img/courier.jpg'
import './CompactCourier.css'


export default class CompactCourier extends Component {
    render() {
        return (
            <div class="courier_card d-flex justify-content-between">
                <div class="d-flex">
                    <img className="courier_card__img" src={courier}/>
                    <div className="courier_card__info">
                        <p class="courier_card__info__name">{this.props.courier.first_name} {this.props.courier.last_name}</p>
                        <p>{this.props.courier.telephone}</p>
                        <p>Комната {this.props.courier.room_number}</p>
                        <Link to={`/couriers/${this.props.courier.id}`}><p>Показать свободные смены</p></Link>
                    </div>
                </div>
                <div className="courier_card__vehicle">
                    <span class="badge bg-delmitary">{this.props.courier.vehicle}</span>
                </div>
            </div>
        )
    }
}

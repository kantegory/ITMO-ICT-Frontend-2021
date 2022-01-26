import React, { Component } from 'react'
import CouriersAPI from '../api/couriersAPI'
import CourierCompact from '../components/CompactCourier'
import HeaderTitle from '../components/HeaderTitle'

export default class Couriers extends Component {
    constructor() {
        super()
        this.couriers_api = new CouriersAPI();

        this.state = {couriers: []} 
    }

    componentDidMount() {
        this.setCouriers = this.setCouriers.bind(this);
        this.setCouriers();
    }

    async setCouriers() {
        const data = await this.couriers_api.list();
        this.setState({
            couriers: data,
        })
    }

    render() {
        return (
            <div>
                <HeaderTitle title="Курьеры"/>
                
                {this.state.couriers.map((courier) => <CourierCompact courier={courier}/>)}
            </div>
        )
    }
}

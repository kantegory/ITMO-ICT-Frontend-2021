import React, { Component } from 'react'
import { withRouter } from '../utils';
import CouriersAPI from '../api/couriersAPI'
import CourierShift from '../components/CourierShift'
import HeaderTitle from '../components/HeaderTitle'


class Courier extends Component {
    constructor(props) {
        super(props);

        this.state = {courier: {}, even_shifts: [], odd_shifts: []};

        this.courierId = this.getCourierId();
        this.courier_api = new CouriersAPI();
    }

    componentDidMount() {
        this.setShifts = this.setShifts.bind(this);
        this.setCourier = this.setCourier.bind(this);
        this.setCourier();
    }

    getCourierId() {
        // TODO: parse from location
        return 1;
    }

    async setCourier() {
        const data = await this.courier_api.get({suffix: this.courierId});

        this.setState({
            courier: data,
        });

        console.log(await this.setShifts("even"));
        this.setState({
            even_shifts: await this.setShifts("even"),
            odd_shifts: await this.setShifts("odd"),
        })
    }

    prepareShifts(shifts) {
        let shiftsDict = new Map();

        ["even", "odd"].forEach((weekParity) => {
            shiftsDict.set(weekParity, new Map());

            for(let weekDay = 0; weekDay < 7; weekDay++) {
                shiftsDict.get(weekParity).set(weekDay, []);
            }
        });

        for(let i = 0; i < shifts.length; i++) {
            let shift = shifts[i];
            shiftsDict.get(shift.week_parity).get(shift.week_day).push(shift)
        }

        return shiftsDict;
    }

    async setShifts(weekParity) {
        let children = [];
        const shiftsDict = this.prepareShifts(this.state.courier.shifts);

        console.log(shiftsDict)
        
        for(let weekDay = 0; weekDay < 7; weekDay++) {
            const shifts = shiftsDict.get(weekParity).get(weekDay);

            let shiftDiv = <CourierShift weekDay={weekDay} shifts={shifts}/>
            children.push(shiftDiv);
        }
        
        return children;
    }

    render() {
        return (
            <div>
                <HeaderTitle title={this.state.courier.first_name + " " + this.state.courier.last_name}/>

                <h1>Нечетная неделя</h1>
                <div className="mt-3 row">
                    {this.state.even_shifts.map((child) => child)}
                </div>

                <h1 class="mt-5">Четная неделя</h1>
                <div className="mt-3 row">
                    {this.state.odd_shifts.map((child) => child)}
                </div>
            </div>
        )
    }
}

export default withRouter(Courier);
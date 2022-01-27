import React, { Component } from 'react'
import './CourierShift.css'


export default class CourierShift extends Component {
    render() {
        const weekDays = {
            0: 'Понедельник',
            1: 'Вторник',
            2: 'Среда',
            3: 'Четверг',
            4: 'Пятница',
            5: 'Суббота',
            6: 'Воскресенье',
        };

        return (
            <div className="courier_shift col-md-3 mt-3">
                <div className="courier_shift__body">
                    <h3>{weekDays[this.props.weekDay]}</h3>
                    <div class="courier_shift__body__schedule">
                        {
                            this.props.shifts.length > 0 
                            ? this.props.shifts.map((shift) => <p>{shift.start}-{shift.end}</p>)
                            : <p class="courier_shift__body_isnot"> Нет смен </p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

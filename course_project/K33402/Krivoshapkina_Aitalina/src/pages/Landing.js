import React, { Component } from 'react'
import './Landing.css'

import background from '../img/landing/background.jpg'
import team1 from '../img/teammates/michil.jpg'
import team2 from '../img/teammates/ayta.jpg'
import team3 from '../img/teammates/artem.jpg'


export default class Landing extends Component {
    render() {
        return (
            <div>
                <section className="headerSection" style={{backgroundImage: background}}>
                    <h2 className="headerTitle">Delmitary</h2>
                    <p className="headerDescription">Доставим прямо до двери</p>
                </section>

                <section>
                    <h2 className="sectionTitle">В чем суть?</h2>
                    <p>
                        Вы сможете договориться с сожителями общежития привезти товар/еду из
                        ближайших магазинов за символическую плату прямо до двери
                    </p>
                </section>

                <section>
                    <h2 className="sectionTitle">Актуальность</h2>
                    <div className="advantages">
                        <div className="advantages__advantage">
                            <h4>Высокие цены на доставку</h4>
                            <p>Цены на курьерские доставки варьируются от 100-250р </p>
                        </div>
                        <div className="advantages__advantage">
                            <h4>Всем хочется иметь подработку</h4>
                            <p>Студентам будет приятно иметь небольшой заработок, не уходя далеко от места жительства</p>
                        </div>
                        <div className="advantages__advantage">
                            <h4>Минимум затрат на время</h4>
                            <p>Ведь доставлять нужно своим же соседям и друзьям</p>
                        </div>
                    </div>
                </section>

                <section id="aboutUs">
                    <h2 className="sectionTitle">Команда</h2>
                    <div className="row team">
                        <div className="col-md-4">
                            <div className="card">
                                <img src={team1} className="card-img-top" alt="Егоров Мичил"/>
                                <div className="card-body">
                                    <h5 className="card-title">Егоров Мичил</h5>
                                    <p className="card-text">CEO, Software Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src={team2} alt="Кривошапкина Айталина"/>
                                <div className="card-body">
                                    <h5 className="card-title">Кривошапкина Айталина</h5>
                                    <p className="card-text">Manager, Designer, HTML Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src={team3} alt="Иннокентьев Артем"/>
                                <div className="card-body">
                                    <h5 className="card-title">Иннокентьев Артем</h5>
                                    <p className="card-text">Mobile Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

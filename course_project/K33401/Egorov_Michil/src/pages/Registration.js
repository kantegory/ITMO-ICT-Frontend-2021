import React, { Component } from 'react'
import AuthAPI from '../api/authAPI'
import { Navigate } from 'react-router'
import './Registration.css';
import regIcon from '../img/reg.svg'
import { Link } from 'react-router-dom'


export default class Registration extends Component {
    constructor() {
        super();

        this.state = {
            login: '',
            password: '',
            isSuccess: false,
        }

        this.api = new AuthAPI();
    }

    componentDidMount() {
        this.login = this.login.bind(this);
        this.setLogin = this.setLogin.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }


    async login(e) {
        e.preventDefault();

        const data = await this.api.login({
            login: this.state.login,
            password: this.state.password,
        });

        if(data.hasOwnProperty('auth_token')) {
            sessionStorage.setItem('auth_token', data['auth_token']);
            this.setState({
                isSuccess: true
            });
        }else {
            alert('Неправильный логин или пароль');
        }
    }

    setLogin(login) {
        this.setState({
            'login': login,
        })
    }

    setPassword(password) {
        this.setState({
            'password': password,
        })
    }

    render() {
        if(this.state.isSuccess) {
            return <Navigate replace to='/shops/'/>
        }

        return (
            <div className="grid-wrapper"> 
                <div className="regform">
                    <h3 class="comfortaaTitle"> Регистрация </h3>
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="mb-3">
                            <label for="validationTooltip01" class="form-label">ФИО</label>
                            <input type="text" class="form-control" id="validationTooltip01" placeholder="Иванов Иван Иванович" required/>
                            <div class="valid-tooltip">
                            Looks good!
                            </div>
                        </div>
                        <div class="mb-3 column-1">
                            <label for="validationTooltip02" class="form-label">Номер телефона</label>
                            <input type="text" class="form-control" id="validationTooltip02" placeholder="* (***) *** ** **" required/>
                            <div class="valid-tooltip">
                            Looks good!
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="validationTooltip04" class="form-label">Общежитие</label>
                            <select class="form-select" id="validationTooltip04" required>
                            <option selected disabled value="">Выберите общежитие</option>
                            <option>Альпийский пер., 15к2</option>
                            <option>Вяземский пер., 5-7</option>
                            <option>Ленсовета, 23</option>
                            </select>
                            <div class="invalid-tooltip">
                            Please select a valid state.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="validationTooltip03" class="form-label">Номер комнаты</label>
                            <input type="text" class="form-control" id="validationTooltip03" placeholder="Номер комнаты" required/>
                            <div class="invalid-tooltip">
                            Please provide a valid city.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                            <input onChange={(e) => this.setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Придумайте пароль"/>
                        </div>
                        <div class="our-button">
                            <button class="btn btn-primary" type="submit">Далее</button>
                        </div>
                        <Link to={`/auth/`}><p>Есть аккаунт? Войти</p></Link>
                    </form>
                </div>

                <div className="reg-icon">
                    <img src={regIcon} style={{height: "366px"}} />
                </div>

            </div>
            
        )
    }
}

import React, { Component } from 'react'
import AuthAPI from '../api/authAPI'
import { Navigate } from 'react-router'
import './Auth.css';
import { Link } from 'react-router-dom'

export default class Auth extends Component {
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
            <div className="authform">
                <h3 class="comfortaaTitle"> Войти </h3>

                <form onSubmit={this.login}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Логин</label>
                        <input onChange={(e) => this.setLogin(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                        <input onChange={(e) => this.setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
                    </div>
                    <div className="our-button" style={{padding: "0 61px"}}>
                        <button type="submit" className="btn btn-delmitary">Submit</button>
                    </div>
                    <Link to={`/registration/`}><p>Регистрация</p></Link>
                </form>
            </div>
        )
    }
}

import React, {useContext, useState} from 'react';
import '../styles/Login.css'
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../AuthContext";
import axiosInstance from "../utils/Axios";
import jwtDecode from "jwt-decode";

/** @jsxImportSource theme-ui */
const Login = () => {
    const {user, setUser} = useContext(AuthContext)
    const history = useHistory()
    const initialFormData = Object.freeze({
        username: '',
        password: ''
    })
    const [formData, setFormData] = useState(initialFormData)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosInstance.post('api/token/', {
            username: formData.username,
            password: formData.password
        })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access)
                localStorage.setItem('refresh_token', res.data.refresh)
                setUser(jwtDecode( localStorage.getItem('access_token')))
                axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
                history.push('/')
            })
    }
    return (
        <div className="main-head">
            <form onSubmit={handleSubmit} className="form" sx={{color: 'text'}}>
                <h1>Login</h1>
                <label htmlFor="login"></label>
                <input sx={{
                    backgroundColor: 'text',
                    color: 'white',
                    '&::placeholder': {color: 'white'},
                    '&:focus': {backgroundColor: 'text'}
                }} onChange={handleChange} type="text" title="Username"
                       placeholder="Username" name="username"/>
                <label htmlFor="password"></label>
                <input sx={{
                    backgroundColor: 'text',
                    color: 'white',
                    '&::placeholder': {color: 'white'},
                    '&:focus': {backgroundColor: 'text'}
                }} onChange={handleChange} type="password" title="Password" placeholder="Password" name="password"/>
                <button sx={{
                    color: 'text',
                    backgroundColor: 'nav',
                    border: '1px solid border',
                    '&:hover': {backgroundColor: 'text', color: 'nav'}
                }} type="submit">Login
                </button>
                <h2>Don't have an account?, <Link sx={{color: 'text'}} to="/register">Sign up</Link></h2>
            </form>
        </div>
    );
};

export default Login;
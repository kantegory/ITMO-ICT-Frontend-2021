import React, {useState} from 'react';
import "../styles/Register.css"
import {Link, useHistory} from "react-router-dom";
import axiosInstance from '../utils/Axios'

/** @jsxImportSource theme-ui */
const Register = () => {
    const history = useHistory()
    const initialFormData = Object.freeze({
        username: '',
        email: '',
        password: '',
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
        axiosInstance.post('register/', {
            username: formData.username,
            email: formData.email,
            password: formData.password,
        })
            .then((res) => {
                history.push('/login')
                console.log(formData)
                console.log(res.data)
            })
    }
    return (
        <div className="main-head">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Registration</h1>
                <input sx={{
                    backgroundColor: 'text',
                    color: 'white',
                    '&::placeholder': {color: 'white'},
                    '&:focus': {backgroundColor: 'text'}
                }} onChange={handleChange} type="text" title="username" placeholder="Username" name="username"/>
                <input sx={{
                    backgroundColor: 'text',
                    color: 'white',
                    '&::placeholder': {color: 'white'},
                    '&:focus': {backgroundColor: 'text'}
                }} onChange={handleChange} type="text" title="email" placeholder="Email" name="email"/>
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
                }} type="submit">Sign up
                </button>
                <h2>Already have an account?, <Link sx={{color: 'text'}} to="/login">Login</Link></h2>
            </form>
        </div>
    );
};

export default Register;
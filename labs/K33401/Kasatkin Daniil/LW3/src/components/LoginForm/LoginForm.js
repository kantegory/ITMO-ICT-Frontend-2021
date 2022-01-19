import React, {useContext, useState} from 'react';
import classes from "./LoginForm.module.css";
import MyInput from "../UI/MyInput/MyInput";
import {Link} from "react-router-dom";
import {IoMdClose} from "react-icons/all";
import Input from 'react-phone-number-input/input'
import AuthContext from "../../context/AuthContext";

const LoginForm = ({forgotPasswordForm, setForgotPasswordForm, visible, setVisible}) => {

    const {loginUser} = useContext(AuthContext)
    const [phoneNumber, setPhoneNumber] = useState()
    const triggerForgotPassword = () => {
        setVisible(false)
        setForgotPasswordForm(true)
    }
    return (
        <form onSubmit={loginUser} className={classes.loginForm} id="sign-in">
            <button title="Close button" type="button" onClick={() => {
                setVisible(false)
            }} className={classes.closeButton}><IoMdClose/></button>
            <h1>Login</h1>
            <div className={classes.inputContainer}>
                <Input
                    placeholder="Phone number"
                    inputComponent={MyInput} id="phone_number_login" name="phone_number_login"
                    onChange={setPhoneNumber}/>
            </div>
            <div className={classes.inputContainer}>
                <MyInput id="password" name="password" type="password" title="Password" placeholder="Password"
                         required/>
            </div>
            <p className={classes.forgotPassword} onClick={() => triggerForgotPassword()}>Forgot password?</p>
            <button className={classes.loginFormButton} onClick={() => {
                setVisible(false)
            }} type="submit">Login
            </button>
        </form>

    );
};

export default LoginForm;
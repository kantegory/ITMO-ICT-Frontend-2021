import React from 'react';
import classes from "./ForgotPasswordForm.module.css";
import {IoMdClose} from "react-icons/all";
import MyInput from "../UI/MyInput/MyInput";

const ForgotPasswordForm = ({forgotPasswordForm, setForgotPasswordForm}) => {
    return (
        <form className={classes.forgotPasswordForm}>
            <button title="Close button" type="button" onClick={() => {
                setForgotPasswordForm(false)
            }} className={classes.closeButton}><IoMdClose/></button>
            <h1>Send reset password email</h1>
            <div className={classes.inputContainer}>
                <MyInput id="email" name="email" type="email" title="email" placeholder="Type email to reset password"
                         required/>
            </div>
            <button className={classes.forgotPasswordFormButton} onClick={() => {
                setForgotPasswordForm(false)
            }} type="submit">Submit
            </button>
        </form>
    );
};

export default ForgotPasswordForm;
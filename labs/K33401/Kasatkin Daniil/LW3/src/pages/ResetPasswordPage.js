import React from 'react';
import classes from "../styles/ResetPasswordPage.module.css";
import MyInput from "../components/UI/MyInput/MyInput";

const ResetPasswordPage = () => {
    return (
        <form className={classes.resetPasswordForm}>
            <h1>Reset password</h1>
            <div className={classes.inputContainer}>
                <MyInput id="password" name="password"
                         type="password"
                         title="Password"
                         placeholder="Password"/>
            </div>
            <div className={classes.inputContainer}>
                <MyInput id="password2" name="password2"
                         type="password"
                         title="Password2"
                         placeholder="Repeat password"/>
            </div>
            <button className={classes.resetPasswordFormButton} type="submit">Reset</button>
        </form>
    );
};

export default ResetPasswordPage;
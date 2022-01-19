import React, {useContext, useState} from 'react';
import classes from "./RegisterForm.module.css";
import MyInput from "../UI/MyInput/MyInput";
import {IoMdClose} from "react-icons/all";
import PhoneInput from "react-phone-number-input/react-hook-form-input"
import {isValidPhoneNumber} from "react-phone-number-input";
import {set, useForm} from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import {useNavigate} from "react-router";
import AuthContext from "../../context/AuthContext";
import {logDOM} from "@testing-library/react";

const RegisterForm = ({visible, setVisible}) => {
    const {registerUser} = useContext(AuthContext)
    const [phoneNumber, setPhoneNumber] = useState('')
    const {
        register, control, formState: {errors}, handleSubmit, reset, setValue
    } = useForm({mode: 'onSubmit'})

    return (
        <form onSubmit={
            handleSubmit(registerUser)
        } className={classes.registerForm} action="#" id="sign-in">
            <button title="Close button" type="button" onClick={() => {
                setVisible(false)
            }} className={classes.closeButton}><IoMdClose/></button>
            <h1>Sign up</h1>
            <div className={classes.inputContainer}>
                <PhoneInput
                    id="phone_number_register"
                    name="phone_number_register"
                    control={control}
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    placeholder="Enter phone number"
                    inputComponent={MyInput}
                    rules={{required: true, validate: isValidPhoneNumber}}
                />
                {errors["phone_number"] && (
                    <div className={classes.errorMessage}>Wrong phone number!</div>
                )}
            </div>
            <div className={classes.inputContainer}>
                <MyInput onChange={e => setValue('email', e.target.value)} id="email" name="email" type="email"
                         title="Email"
                         placeholder="Email"
                         {...register("email", {
                             required: "Required", pattern: {
                                 value: /\S+@\S+\.\S+/,
                                 message: "Entered value does not match email format"
                             }
                         })}/>
                {errors.email && <div className={classes.errorMessage}>{errors.email.message}</div>}
            </div>
            <div className={classes.inputContainer}>
                <MyInput onChange={e => setValue('first_name', e.target.value)} id="first_name" name="first_name"
                         type="text"
                         title="First name" placeholder="First name"
                         {...register("first_name", {required: "Required"})}/>
                {errors.first_name && <div className={classes.errorMessage}>{errors.first_name.message}</div>}
            </div>
            <div className={classes.inputContainer}>
                <MyInput onChange={e => setValue('password', e.target.value)} id="password" name="password"
                         type="password"
                         title="Password"
                         placeholder="Password"
                         {...register("password", {
                             required: "Required",
                             minLength: {
                                 value: 8,
                                 message: "min length of password is 8"
                             }
                         })}/>
                {errors.password && <div className={classes.errorMessage}>{errors.password.message}</div>}
            </div>
            <button className={classes.registerFormButton} onClick={() => setVisible(false)} type="submit">Sign up
            </button>
        </form>
    );
};

export default RegisterForm;
import React, {useContext, useState} from 'react';
import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";
import LoginForm from "../../LoginForm/LoginForm";
import MyModal from "../MyModal/MyModal";
import RegisterForm from "../../RegisterForm/RegisterForm";
import AuthContext from "../../../context/AuthContext";
import ForgotPasswordForm from "../../ForgotPasswordForm/ForgotPasswordForm";

const Navbar = () => {
    const [login, setModalLogin] = useState(false)
    const [register, setModalRegister] = useState(false)
    const {user, logoutUser} = useContext(AuthContext)
    const [forgotPasswordForm, setForgotPasswordForm] = useState(false)

    return (
        <nav className={classes.navbar}>
            <MyModal visible={forgotPasswordForm} setVisible={setForgotPasswordForm}>
                <ForgotPasswordForm forgotPasswordForm={forgotPasswordForm}
                                    setForgotPasswordForm={setForgotPasswordForm}/>
            </MyModal>
            <MyModal visible={login} setVisible={setModalLogin}>
                <LoginForm forgotPasswordForm={forgotPasswordForm} setForgotPasswordForm={setForgotPasswordForm}
                           visible={login} setVisible={setModalLogin}/>
            </MyModal>
            <MyModal visible={register} setVisible={setModalRegister}>
                <RegisterForm visible={login} setVisible={setModalRegister}/>
            </MyModal>
            <Link className={classes.logo} to="/" title="Home">Places</Link>
            {user ? (
                    <ul>
                        <li>
                            <Link className={classes.becomeHostLink} to="/create-place/" title="Create place">Register
                                Place</Link>
                        </li>
                        <li>
                            <Link className={classes.link} to="/bookings/" title="Bookings">Bookings</Link>
                        </li>
                        <li>
                            <Link className={classes.link} to="/profile/" title="Profile">Profile</Link>
                        </li>
                        <li>
                            <Link className={classes.link} onClick={logoutUser} to="/" title="Logout">Logout</Link>
                        </li>
                    </ul>
                )
                : (
                    <ul>
                        <li>
                            <button className={classes.button} title="Sing up" onClick={() => {
                                setModalRegister(true)
                            }}>Sign up
                            </button>
                        </li>
                        <li>
                            <button className={classes.button} title="Login" onClick={() => {
                                setModalLogin(true)
                            }}>Login
                            </button>
                        </li>
                    </ul>
                )}
        </nav>
    );
};

export default Navbar;
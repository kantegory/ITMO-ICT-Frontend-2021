import React, {useContext, useEffect} from 'react';
import '../styles/Navbar.css'
import {AuthContext} from "../AuthContext";
import {Link} from "react-router-dom";
import ToggleThemeSwitchBox from "./ToggleThemeSwitchBox";
import jwtDecode from "jwt-decode";


/** @jsxImportSource theme-ui */
const Navbar = () => {
    const {user, setUser} = useContext(AuthContext)
    const logout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        setUser(null)
    }
    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            setUser(jwtDecode(localStorage.getItem('access_token')))
        }
    }, [])

    return (
        <>
            <nav className="navbar" sx={{backgroundColor: 'nav'}}>
                <div className="logo"><Link sx={{color: 'text'}} to="/" title="Home">Keep it up</Link></div>
                {user ? (<ul>
                        <li><Link sx={{color: 'text'}} to="/profile" title="Profile">PROFILE</Link></li>
                        <li><Link sx={{color: 'text'}} to="/logout" onClick={logout} title="Logout">LOGOUT</Link></li>
                        <li><ToggleThemeSwitchBox/></li>
                    </ul>) :
                    (
                        <ul>
                            <li><Link sx={{color: 'text'}} to="/login" title="Sign in">SIGN IN</Link></li>
                            <li><Link sx={{color: 'text'}} to="/register" title="Sign in">SIGN UP</Link></li>
                            <li><ToggleThemeSwitchBox/></li>
                        </ul>
                    )
                }

            </nav>
        </>
    );
};

export default Navbar;
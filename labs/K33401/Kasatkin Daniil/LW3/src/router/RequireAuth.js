import React, {useContext} from 'react';
import AuthContext from "../context/AuthContext";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = ({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext)
    if (!user) {
        return <Navigate to="/" state={{from: location}}/>
    }
    return children;

};

export default RequireAuth;
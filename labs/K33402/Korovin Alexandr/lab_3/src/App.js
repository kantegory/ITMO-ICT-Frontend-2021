import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext, AuthProvider} from "./AuthContext";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
       </AuthProvider>
    );
}

export default App;

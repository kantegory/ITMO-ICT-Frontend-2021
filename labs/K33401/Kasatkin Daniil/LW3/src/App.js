import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import React, {useContext, useEffect, useState} from "react";
import AuthContext, {AuthProvider} from "./context/AuthContext";
import AppRouter from "./components/AppRouter/AppRouter";
import PlacesList from "./components/PlacesList/PlacesList";
import useAxios from "./hooks/useAxios";

function App() {

    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar/>
                <AppRouter/>
            </AuthProvider>
        </BrowserRouter>
    );

}

export default App;

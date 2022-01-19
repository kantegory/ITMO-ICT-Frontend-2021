import React, {useContext, useEffect, useState} from 'react';
import useAxios from "../hooks/useAxios";
import PlacesList from "../components/PlacesList/PlacesList";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import {useSearchParams} from "react-router-dom";
import PlaceFilter from "../components/PlaceFilter/PlaceFilter";

const HomePage = () => {
    const {user} = useContext(AuthContext)
    const [places, setPlaces] = useState([])
    const api = useAxios()
    const [searchParams, setSearchParams] = useSearchParams()
    const placeQuery = searchParams.get('place') || '';
    useEffect(() => {
        getPlaces();
    }, [searchParams])
    const getPlaces = async () => {
        if (user) {
            if (searchParams) {
                await api.get(`/search/?search=${placeQuery}`)
                    .then((res) => {
                        setPlaces(res.data)
                    })
            } else {
                await api.get('/places')
                    .then((res) => {
                        setPlaces(res.data)
                    })
            }

        } else {
            if (searchParams) {
                await axios.get(`http://127.0.0.1:8000/search/?search=${placeQuery}`)
                    .then((res) => {
                        setPlaces(res.data)
                    })
            } else {
                await axios.get('http://127.0.0.1:8000/places')
                    .then((res) => {
                        setPlaces(res.data)
                    })
            }
        }
    }

    return (
        <>
            <PlaceFilter placeQuery={placeQuery} setSearchParams={setSearchParams}/>
            <PlacesList places={places}/>
        </>
    );
};

export default HomePage;
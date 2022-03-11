import React, {useEffect, useState} from 'react';
import axios from "axios";
import jwtDecode from "jwt-decode";
import classes from "../styles/Profile.module.css";
import {useHistory} from "react-router-dom";
import axiosInstance from "../utils/Axios";

/** @jsxImportSource theme-ui */

const Profile = () => {
    const [hotels, setHotels] = useState([])
    const [reserveData, setReserveData] = useState({})
    const history = useHistory()
    useEffect(() => {
        Fetching()
    }, [])

    async function Fetching() {
        let response = await axiosInstance.get(`reserves/?user=${jwtDecode(localStorage.getItem('access_token')).user_id}`)
        let res = []
        response.data.map((obj) => {
            obj.hotel.reserve_id = obj.id
            res.push(obj.hotel)
        })
        setHotels(res)
    }

    return (
        <div className={classes.hotelsContainer}>
            {hotels.map((hotel) =>
                <div className={classes.hotelContainer} onClick={() => history.push(`/profile/reserve/${hotel.reserve_id}`)}>
                    <article className="hotel-cell" sx={{border: '2px solid', borderColor: 'border'}}>
                        <figure className={classes.hotelImage}><img src={hotel.img} alt="Hotel image"/></figure>
                        <div className={classes.hotelContent}>
                            <div className={classes.hotelRating} sx={{color: 'text'}}>Оценка: {hotel.rate}</div>
                            <div className={classes.hotelTitle} sx={{color: 'text'}}>{hotel.title}</div>
                            <div className={classes.hotelAddress} sx={{color: 'text'}}>{hotel.address}</div>
                            <div className={classes.hotelPrice} sx={{color: 'text'}}>От {hotel.price} руб.</div>
                        </div>
                    </article>
                </div>
            )}
        </div>
    );
};

export default Profile;
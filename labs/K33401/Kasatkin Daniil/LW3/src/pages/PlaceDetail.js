import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import useAxios from "../hooks/useAxios";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import PlaceDetailView from "../components/PlaceDetailView/PlaceDetailView";

const PlaceDetail = () => {
    const {user} = useContext(AuthContext)
    const params = useParams()
    const [place, setPlace] = useState({})
    const [placeOffers, setPlaceOffers] = useState([])
    const [price, setPrice] = useState('')
    const [isFree, setIsFree] = useState(false)
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    })
    const api = useAxios()
    const navigate = useNavigate()
    useEffect(() => {
        getPlace();
    }, [])
    const getPlace = async () => {
        console.log(params.id)
        if (user) {
            await api.get(`places/${params.id}`)
                .then((res) => {
                    setPlace(res.data)
                    setPlaceOffers(res.data.place_offers.split(','))
                    setPrice(res.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    console.log(placeOffers, price)
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        } else {
            await axios.get(`http://127.0.0.1:8000/places/${params.id}`)
                .then((res) => {
                    setPlace(res.data)
                    setPlaceOffers(res.data.place_offers.split(','))
                    setPrice(res.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    console.log(placeOffers, price)
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        }
    }
    const formatDates = (dates) => {
        let dayFrom = ''
        let dayTo = ''
        let monthFrom = ''
        let monthTo = ''
        if (dates.from.day < 10) {
            dayFrom = `0${dates.from.day}`
        } else {
            dayFrom = dates.from.day.toString()
        }
        if (dates.from.month < 10) {
            monthFrom = `0${dates.from.month}`
        } else {
            monthFrom = dates.from.month.toString()
        }
        if (dates.to.day < 10) {
            dayTo = `0${dates.to.day}`
        } else {
            dayTo = dates.to.day.toString()
        }
        if (dates.to.month < 10) {
            monthTo = `0${dates.to.month}`
        } else {
            monthTo = dates.to.month.toString()
        }
        return `${dates.from.year.toString()}-${monthFrom}-${dayFrom},${dates.to.year.toString()}-${monthTo}-${dayTo}`
    }
    const checkDates = async (e) => {
        e.preventDefault()
        let dates = formatDates(selectedDayRange)
        await api.get(`/reserves/?place_id=${params.id}&dates=${dates}`)
            .then((res) => {
                console.log(res.data)
                if (res.data.length == 0) {
                    setIsFree(true)
                } else {
                    setIsFree(false)
                }
            })
    }
    const reservePlace = async () => {
        let dates = formatDates(selectedDayRange).split(',')
        api.post('/reserves/create', {
            guest: user.user_id,
            place: params.id,
            check_in_date: dates[0],
            check_out_date: dates[1],
            guests_count: 1
        })
            .then((res) => {
                console.log(res)
                navigate('/bookings')
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }

    return (
        <PlaceDetailView place={place} placeOffers={placeOffers} checkDates={checkDates} isFree={isFree}
                         reservePlace={reservePlace} setIsFree={setIsFree} selectedDayRange={selectedDayRange}
                         setSelectedDayRange={setSelectedDayRange}/>
    );
};

export default PlaceDetail;
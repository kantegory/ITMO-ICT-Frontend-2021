import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import '../styles/HotelPage.css'
import axiosInstance from "../utils/Axios";
import jwtDecode from "jwt-decode";
import '../styles/HotelReservePage.css'
/** @jsxImportSource theme-ui */
const HotelResevePage = () => {
    const params = useParams()
    const history = useHistory()
    const [hotel, setHotel] = useState({})
    const [guestsCount, setGuestsCount] = useState(null)
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        FetchingHotel()
        FetchingReviews()
    }, [])

    async function FetchingHotel() {
        let response = await axiosInstance.get(`hotels/${params.id}`)
        setHotel(response.data)
    }

    async function FetchingReviews() {
        let response = await axiosInstance.get(`reviews/?hotel=${params.id}`)
        console.log(response.data)
        setReviews(response.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosInstance.post('reserves/create', {
            check_in_date: checkInDate,
            check_out_date: checkOutDate,
            guests_count: parseInt(guestsCount),
            hotel: parseInt(params.id),
            guest: jwtDecode(localStorage.getItem('access_token')).user_id,
        })
            .then((res) => {
                history.push("/profile")
            })
    }

    return (
        <div className="hotel-reserve">
            <article className="hotel">
                <figure className="-image"><img src={hotel.img} alt="Hotel image"/>
                    <div className="reviews-container">
                        {reviews.map((review) =>
                            <div className="review-container">
                                <h1 className="author" title="author">{review.author.username}</h1>
                                <div className="review-comment">{review.comment}</div>
                            </div>
                        )}
                    </div>
                </figure>
                <div className="content">
                    <div className="rating" sx={{color: 'text'}}>Оценка: {hotel.rate}</div>
                    <div className="title" sx={{color: 'text'}}>{hotel.title}</div>
                    <div className="address" sx={{color: 'text'}}>{hotel.address}</div>
                    <div className="price" sx={{color: 'text'}}>От {hotel.price} руб.</div>
                </div>
                <form className="reserve-params" onSubmit={handleSubmit}>
                    <label>Check in</label>
                    <input sx={{
                        backgroundColor: 'text',
                        color: 'white',
                        '&::placeholder': {color: 'white'},
                        '&:focus': {backgroundColor: 'text'}
                    }} onChange={e => setCheckInDate(e.target.value)} name="check-in-date" type="date"/>
                    <label>Check out</label>
                    <input sx={{
                        backgroundColor: 'text',
                        color: 'white',
                        '&::placeholder': {color: 'white'},
                        '&:focus': {backgroundColor: 'text'}
                    }} onChange={e => setCheckOutDate(e.target.value)} name="check-out-date" type="date"/>
                    <label>Guests</label>
                    <input sx={{
                        backgroundColor: 'text',
                        color: 'white',
                        '&::placeholder': {color: 'white'},
                        '&:focus': {backgroundColor: 'text'}
                    }} onChange={e => setGuestsCount(e.target.value)} name="guests_count" type="number"/>
                    <button sx={{
                        backgroundColor: 'text',
                        color: 'white',
                        '&::placeholder': {color: 'white'},
                        '&:focus': {backgroundColor: 'text'}
                    }} className="reserve-button" type={"submit"}>Reserve
                    </button>
                </form>
            </article>
        </div>
    );
};

export default HotelResevePage;
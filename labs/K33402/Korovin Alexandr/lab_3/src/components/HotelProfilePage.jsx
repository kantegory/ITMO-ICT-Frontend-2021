import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import '../styles/HotelPage.css'
import axiosInstance from "../utils/Axios";
import '../styles/HotelProfilePage.css'
import {AuthContext} from "../AuthContext";
import jwtDecode from "jwt-decode";

/** @jsxImportSource theme-ui */
const HotelProfilePage = () => {
    const {user} = useContext(AuthContext)
    const params = useParams()
    const history = useHistory()
    const [hotel, setHotel] = useState({})
    const [comment, setComment] = useState('')
    useEffect(() => {
        Fetching()
    }, [])

    async function Fetching() {
        let response = await axiosInstance.get(`reserves/${params.id}`)
        setHotel(response.data.hotel)
    }


    const handleDeleteSubmit = (e) => {
        e.preventDefault()
        axiosInstance.delete(`reserves/${params.id}`)
            .then((res) => {
                history.push("/")
            })
    }
    const handleAddReview = (e) => {
        e.preventDefault()
        axiosInstance.post(`reviews/create`, {
            comment: comment,
            author:jwtDecode(localStorage.getItem('access_token')).user_id,
            hotel:hotel.id
        })
    }


    return (
        <div className="hotel-reserve">
            <article className="hotel">
                <figure className="-image"><img src={hotel.img} alt="Hotel image"/></figure>

                <div className="content">
                    <div className="rating" sx={{color: 'text'}}>Оценка: {hotel.rate}</div>
                    <div className="title" sx={{color: 'text'}}>{hotel.title}</div>
                    <div className="address" sx={{color: 'text'}}>{hotel.address}</div>
                    <div className="price" sx={{color: 'text'}}>От {hotel.price} руб.</div>
                    <button sx={{
                        backgroundColor: 'text',
                        color: 'white',
                        '&::placeholder': {color: 'white'},
                        '&:focus': {backgroundColor: 'text'}
                    }} className="reserve-button" onClick={handleDeleteSubmit}>Delete
                    </button>
                </div>
                <form className="reserve-params" onSubmit={handleDeleteSubmit}>
                    <textarea sx={{
                        backgroundColor: 'text',
                        color: 'white',
                        '&::placeholder': {color: 'white'},
                        '&:focus': {backgroundColor: 'text'}
                    }} onChange={(e) => setComment(e.target.value)} className="review-add" name="comment" id="comment"
                              cols="50" rows="15"
                              placeholder="Add comment..."></textarea>
                    <button sx={{
                        backgroundColor: 'text',
                        color: 'white',
                        '&::placeholder': {color: 'white'},
                        '&:focus': {backgroundColor: 'text'}
                    }} onClick={handleAddReview} className="review-add-button">Add review
                    </button>
                </form>
            </article>
        </div>
    );
};

export default HotelProfilePage;
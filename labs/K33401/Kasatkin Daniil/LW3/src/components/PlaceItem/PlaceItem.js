import React, {useContext, useEffect, useState} from 'react';
import classes from "./PlaceItem.module.css";
import {useNavigate} from "react-router-dom";
import {AiFillStar} from "react-icons/all";
import MyModal from "../UI/MyModal/MyModal";
import ReviewsListForm from "../ReviewsListForm/ReviewsListForm";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import useAxios from "../../hooks/useAxios";

const HotelItem = ({place}) => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const api = useAxios()
    const [rating, setRating] = useState(0)
    const [visible, setVisible] = useState(false)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        getReview()
    }, [place])
    const getReview = async () => {
        if (user) {
            await api.get(`reviews/?place=${place.id}`)
                .then((res) => {
                    setReviews(res.data)
                    getRating(res.data)
                })
        } else {
            await axios.get(`http://127.0.0.1:8000/reviews/?place=${place.id}`)
                .then((res) => {
                    setReviews(res.data)
                    getRating(res.data)
                })
        }
    }

    const getRating = (reviews) => {
        let ratings = []
        reviews.map((review) => {
            ratings.push(review.value)
        })
        if (ratings.length > 0) setRating((ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2))

    }
    const price = place.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    const offers = place.place_offers.split(',').slice(0, 4).filter((offer) => {
        return offer.length < 15
    })
    return (
        <>
            <MyModal setVisible={setVisible} visible={visible}>
                <ReviewsListForm visible={visible} setVisible={setVisible} reviews={reviews}/>
            </MyModal>
            <article className={classes.placeCard}>
                <figure className={classes.placeImage} onClick={() => navigate(`place/${place.id}`)}>
                    <img src={place.image} alt="Place image"/>
                </figure>
                <div className={classes.placeContent}>
                    <div className={classes.placeCharContainer}>
                        <h2 className={classes.placeType}>{place.place_type}</h2>
                        <h2 onClick={() => setVisible(true)} className={classes.placeRating}>{rating}<AiFillStar
                            className={classes.star}/></h2>
                    </div>
                    <h2 onClick={() => navigate(`place/${place.id}`)} className={classes.placeTitle}>{place.title}
                    </h2>
                    <div className={classes.placeFloorPlan}>
                        <h2 className={classes.floorParam}>{place.guests} guests</h2>
                        <h2 className={classes.floorParam}>{place.beds} beds </h2>
                        <h2 className={classes.floorParam}>{place.bathrooms} bath</h2>
                    </div>
                    <div className={classes.placeOffers}>
                        {offers.map((offer) =>
                            <h2 className={classes.placeOffer}>{offer}</h2>
                        )}
                    </div>
                    <h2 className={classes.placePrice}>{price}₽/night</h2>
                </div>
            </article>
        </>
    );
};

export default HotelItem;
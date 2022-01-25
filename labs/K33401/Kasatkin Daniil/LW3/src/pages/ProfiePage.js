import React, {useContext, useEffect, useState} from 'react';
import classes from "../styles/ProfilePage.module.css";
import AuthContext from "../context/AuthContext";
import {AiFillStar} from "react-icons/all";
import useAxios from "../hooks/useAxios";
import MyModal from "../components/UI/MyModal/MyModal";
import ReviewsListForm from "../components/ReviewsListForm/ReviewsListForm";

const ProfilePage = () => {
    const {user} = useContext(AuthContext)
    const api = useAxios()
    const [reviews, setReviews] = useState([])
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        getReviews()
    }, [])
    const getReviews = async () => {
        api.get(`/reviews/?author=${user.user_id}`)
            .then((res) => setReviews(res.data))
    }
    return (
        <>
            <MyModal setVisible={setVisible} visible={visible}>
                <ReviewsListForm reviews={reviews} setVisible={setVisible} visible={visible}/>
            </MyModal>
            <div className={classes.profileInfo}>
                <h1 className={classes.welcomeMessage}>Hello, {user.first_name}</h1>
                <div className={classes.reviewsCount}>
                    <AiFillStar
                        className={classes.star}/>
                    <h2>{reviews.length} reviews</h2>
                </div>
                <h2 className={classes.reviewsList} onClick={() => setVisible(true)}>Your reviews</h2>
            </div>
        </>
    );
};

export default ProfilePage;
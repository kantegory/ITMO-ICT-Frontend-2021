import React, {useState} from 'react';
import classes from "./BookingItem.module.css";
import useAxios from "../../hooks/useAxios";
import {useNavigate} from "react-router-dom";
import MyModal from "../UI/MyModal/MyModal";
import RateForm from "../RateForm/RateForm";

const BookingItem = ({reserve}) => {
    const [rate, setRate] = useState(false)
    const api = useAxios()
    const navigate = useNavigate()
    const deleteReserve = async () => {
        api.delete(`/reserves/${reserve.id}`)
            .then((res) => {
                window.location.reload(false);
            })

    }
    return (
        <>
            <MyModal visible={rate} setVisible={setRate}>
                <RateForm visible={rate} setVisible={setRate} place={reserve.place.id}/>
            </MyModal>
            <article className={classes.reserveCard}>
                <figure className={classes.reservePlaceImage}>
                    <img src={reserve.place.image} alt=""/>
                </figure>
                <div className={classes.reserveContent}>
                    <p className={classes.reservePlaceTitle}>{reserve.place.title}</p>
                    <div className={classes.reserveDates}>
                        <p>Check in {reserve.check_in_date}</p>
                        <p>Check out {reserve.check_out_date}</p>
                    </div>
                </div>
                <div className={classes.reserveSettingsButtons}>
                    <button className={classes.settingButton} onClick={() => deleteReserve()}>Delete</button>
                    <button className={classes.settingButton} onClick={() => setRate(true)}>Rate</button>
                </div>
            </article>
        </>
    );
};

export default BookingItem;
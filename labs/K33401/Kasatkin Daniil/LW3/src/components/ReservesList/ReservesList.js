import React from 'react';
import classes from "./ReservesList.module.css";
import BookingItem from "../ReserveItem/BookingItem";


const ReservesList = ({reserves}) => {
    return (
        <div className={classes.reservesContainer}>
            {
                reserves.map((reserve) =>
                    <BookingItem reserve={reserve}/>
                )
            }
        </div>
    );
};

export default ReservesList;
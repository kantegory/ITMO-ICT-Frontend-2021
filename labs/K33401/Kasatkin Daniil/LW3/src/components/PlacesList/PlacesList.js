import React, {useEffect, useState} from 'react';
import classes from "./PlacesList.module.css";
import HotelItem from "../PlaceItem/PlaceItem";

const PlacesList = ({places}) => {
    return (
        <div className={classes.placesContainer}>
            {
                places.map((place) =>
                    <HotelItem place={place}/>
                )
            }
        </div>

    );
};

export default PlacesList;
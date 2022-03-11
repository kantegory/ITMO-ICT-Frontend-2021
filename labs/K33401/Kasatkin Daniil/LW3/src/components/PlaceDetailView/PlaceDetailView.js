import React, {useEffect, useState} from 'react';
import classes from "./PlaceDetailView.module.css";
import {Calendar} from "react-modern-calendar-datepicker";


const PlaceDetailView = ({
                             place,
                             checkDates,
                             isFree,
                             selectedDayRange,
                             setSelectedDayRange,
                             reservePlace,
                             setIsFree,
                             placeOffers
                         }) => {
    return (

        <div className={classes.placeInfo}>
            <div className={classes.placeContent}>
                <figure className={classes.placeImage}>
                    <h2 className={classes.placeTitle}>{place.title} - {place.place_type}</h2>
                    <img src={place.image} alt="Place image"/>
                    <div className={classes.placeFloorPlan}>
                        <p className={classes.floorParam}>Guests {place.guests}</p>
                        <p className={classes.floorParam}>Baths {place.bathrooms}</p>
                        <p className={classes.floorParam}>Bedrooms {place.bedrooms}</p>
                        <p className={classes.floorParam}>Beds {place.beds}</p>
                    </div>
                </figure>
                <form className={classes.placeReserveSettings} onSubmit={checkDates}>
                    <h2>Check dates</h2>
                    {
                        !isFree ? (
                            <Calendar
                                value={selectedDayRange}
                                onChange={setSelectedDayRange}
                                shouldHighlightWeekends
                            />
                        ) : (
                            <Calendar
                                value={selectedDayRange}
                                shouldHighlightWeekends
                            />
                        )
                    }
                    <div className={classes.placeReserveButtons}>
                        {isFree ? (
                                <div>
                                    <button type="button" onClick={reservePlace}
                                            className={classes.placeReserveButton}>Reserve
                                    </button>
                                    <button type="button" onClick={() => setIsFree(false)}
                                            className={classes.placeReserveButton}>Reset
                                    </button>
                                </div>

                            )
                            : (
                                <button type="submit" className={classes.placeReserveButton}>Check</button>
                            )
                        }
                    </div>
                </form>
            </div>
            <div className={classes.placeOffers}>
                <div className={classes.placeOffersContainer}>
                    {placeOffers.map((offer) =>
                        <p className={classes.placeOffer}>{offer}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlaceDetailView;
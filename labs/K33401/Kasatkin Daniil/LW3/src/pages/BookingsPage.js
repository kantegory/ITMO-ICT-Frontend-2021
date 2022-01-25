import React, {useContext, useEffect, useState} from 'react';
import useAxios from "../hooks/useAxios";
import AuthContext from "../context/AuthContext";
import ReservesList from "../components/ReservesList/ReservesList";
import classes from "../styles/BookingsPage.module.css";

const BookingsPage = () => {
    const [reserves, setReserves] = useState([])
    const {user} = useContext(AuthContext)
    const api = useAxios()
    useEffect(() => {
        getReservedPlaces()
    }, [])
    const getReservedPlaces = async () => {
        await api.get(`/reserves/?guest=${user.user_id}`)
            .then((res) => {
                    setReserves(res.data)
                }
            )
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
        <>
            <h1 className={classes.title}>Your bookings:</h1>
            {reserves.length > 0 ?
                <ReservesList reserves={reserves}/>
                :
                <h2 className={classes.emptyReservesMessage}>You have no reserves...</h2>
            }

        </>
    );
};

export default BookingsPage;
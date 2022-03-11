import React, {useContext, useState} from 'react';
import ReactStars from "react-rating-stars-component/dist/react-stars";
import classes from "./RateForm.module.css";
import useAxios from "../../hooks/useAxios";
import AuthContext from "../../context/AuthContext";

const RateForm = ({place, visible, setVisible}) => {
    const {user} = useContext(AuthContext)
    const [rating, setRating] = useState(0)
    const [text, setText] = useState('')
    const api = useAxios()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await api.post('/reviews/create', {
            author: user.user_id,
            place: place,
            value: parseInt(rating),
            desc: text
        })
            .then((res) => setVisible(false))
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
        <form className={classes.rateForm} onSubmit={handleSubmit}>
            <ReactStars
                count={5}
                onChange={e => setRating(e)}
                size={60}
                half={false}
                color2={'#ffd700'}/>
            <textarea className={classes.commentTextArea} placeholder="Type a comment..." cols="30"
                      onChange={e => setText(e.target.value)} rows="10"></textarea>
            <button type="submit" className={classes.rateButton}>Rate</button>
        </form>
    );
};

export default RateForm;
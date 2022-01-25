import React from 'react';
import classes from "./ReviewsListForm.module.css";
import {AiFillStar, IoMdClose} from "react-icons/all";

const ReviewsListForm = ({reviews, visible, setVisible}) => {
    return (
        <form className={classes.ReviewsListForm}>
            <div className={classes.formContent}>
                <button onClick={() => setVisible(false)} type="button" title="Close button"
                        className={classes.closeButton}><IoMdClose/></button>
                <h1>Reviews:</h1>
                {
                    reviews.map((review) => (
                        <div className={classes.reviewInfo}>
                            <div className={classes.placeInfo}>
                                <figure className={classes.placeImage}>
                                    <img src={review.place.image} alt=""/>
                                </figure>
                                <h2 className={classes.placeTitle}>{review.place.title}</h2>
                            </div>
                            <div className={classes.nameAndRateContainer}>
                                <h2 className={classes.authorName}>{review.author.first_name} - </h2>
                                <h2 className={classes.rating}>{review.value}</h2>
                                <AiFillStar
                                    className={classes.star}/>
                            </div>
                            <div className={classes.commentDate}>
                                <div className={classes.commentContainer}>
                                    {review.desc}
                                </div>
                                <h2 className={classes.reviewDate}>{review.review_date}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </form>
    );
};

export default ReviewsListForm;
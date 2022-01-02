import '../styles/HotelsList.css'
import {useHistory} from "react-router-dom";

/** @jsxImportSource theme-ui */

const HotelsList = ({hotels}) => {
    const history = useHistory()
    return (
        <div className="hotels-container">
            {hotels.map((hotel) =>
                <div onClick={() => history.push(`/hotels/${hotel.id}`)} className="hotel-container">
                    <article className="hotel-cell" sx={{border: '2px solid', borderColor: 'border'}}>
                        <figure className="hotel-image"><img src={hotel.img} alt="Hotel image"/></figure>
                        <div className="hotel-content">
                            <div className="hotel-rating" sx={{color: 'text'}}>Оценка: {hotel.rate}</div>
                            <div className="hotel-title" sx={{color: 'text'}}>{hotel.title}</div>
                            <div className="hotel-address" sx={{color: 'text'}}>{hotel.address}</div>
                            <div className="hotel-price" sx={{color: 'text'}}>От {hotel.price} руб.</div>
                        </div>
                    </article>
                </div>
            )}
        </div>
    );
};

export default HotelsList;
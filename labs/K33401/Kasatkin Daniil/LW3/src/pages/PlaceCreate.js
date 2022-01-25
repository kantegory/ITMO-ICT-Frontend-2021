import React, {useContext, useState} from 'react';
import classes from "../styles/PlaceCreate.module.css";
import Select from 'react-select'
import MyInput from "../components/UI/MyInput/MyInput";
import useAxios from "../hooks/useAxios";
import AuthContext from "../context/AuthContext";
import {useNavigate} from "react-router-dom";


const PlaceCreate = () => {
    const [placeImage, setPlaceImage] = useState('https://thumbs.dreamstime.com/b/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%B2-%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D0%BC-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%86%D0%B2%D0%B5%D1%82%D0%B5-109657281.jpg')
    const [image, setImage] = useState()
    const [offers, setOffers] = useState()
    const [type, setType] = useState()
    const [beds, setBeds] = useState(0)
    const [bedrooms, setBedrooms] = useState(0)
    const [bathrooms, setBathRooms] = useState(0)
    const [guests, setGuests] = useState(0)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const api = useAxios()
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const host = user.user_id
    const offersOptions = [{value: '1', label: 'Kitchen'}, {
        value: '2',
        label: 'Wifi'
    }, {value: '3', label: 'Free parking on premises'}, {
        value: '4',
        label: 'Pets allowed'
    }, {
        value: '5',
        label: 'Hair dryer'
    }, {value: '6', label: 'Shampoo'}, {value: '7', label: 'Body soap'}, {
        value: '8',
        label: 'Hot water'
    }, {value: '9', label: 'Body Washer'}, {value: '10', label: 'Bed linens'}, {
        value: '11',
        label: 'Smoke alarm'
    }, {value: '12', label: 'Cooking basics'}, {value: '13', label: 'TV'}, {
        value: '14',
        label: 'Air conditioning'
    }, {value: '15', label: 'Heating'}, {value: '16', label: 'Private entrance'}]
    const typesOptions = [
        {value: '1', label: 'Apartment'},
        {value: '2', label: 'House'},
        {value: '3', label: 'Unique space'},
        {value: '4', label: 'Secondary unit'},
        {value: '5', label: 'Boutique hotel'},
        {value: '6', label: 'Bed and breakfast'}
    ]
    const handleOffersChange = (e) => {
        let offers = []
        e.map((obj) => {
            offers.push(obj.value)
        })
        setOffers(offers)
    }
    const imageHandler = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPlaceImage(reader.result)
                setImage(e.target.files[0])
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const uploadData = new FormData()
        uploadData.append('title', title)
        uploadData.append('price', price)
        uploadData.append('desc', desc)
        uploadData.append('beds', beds)
        uploadData.append('bedrooms', bedrooms)
        uploadData.append('bathrooms', bathrooms)
        uploadData.append('guests', guests)
        uploadData.append('location', location)
        uploadData.append('place_type', type)
        uploadData.append('host', host)
        uploadData.append('image', image, image.name)
        uploadData.append('place_offers', offers.join())
        await api.post('/places/create', uploadData)
            .then((res) => navigate('/'))
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
        await api.put(`register/host/${host}`, {
            is_host: true
        })
            .then((res) => console.log(res),)
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
        <form className={classes.placeCreateForm} onSubmit={handleSubmit}>
            <div className={classes.imageUploadContainer}>
                <figure className={classes.placeImageContainer}>
                    <img src={placeImage} alt="Place image"/>
                </figure>
                <label htmlFor="file-upload" className={classes.fileUpload}>
                    Upload
                </label>
                <input id="file-upload" onChange={imageHandler} type="file"/>
            </div>

            <div className={classes.placeContentContainer}>
                <div className={classes.placeTitleContainer}>
                    <label>Title : </label>
                    <MyInput onChange={e => setTitle(e.target.value)} placeholder="Type a title..."/>
                </div>
                <div className={classes.placeTypesContainer}>
                    <label>Select place type :</label>
                    <Select name="types" options={typesOptions} onChange={e => setType(e.value)}/>
                </div>
                <div className={classes.placeOffersContainer}>
                    <label>Select place offers :</label>
                    <Select isMulti name="offers" options={offersOptions} onChange={e => handleOffersChange(e)}/>
                </div>
                <div className={classes.divideBlock}>
                    <ul className={classes.placeFloorPlan}>
                        <li>
                            <label>Beds :</label>
                            <button type="button" className={classes.paramButton} onClick={() => {
                                setBeds(beds + 1)
                            }}>+
                            </button>
                            {beds}
                            <button type="button" className={classes.paramButton} onClick={() => {
                                setBeds(beds - 1)
                            }}>-
                            </button>
                        </li>
                        <li>
                            <label>Bedrooms :</label>
                            <button type="button" className={classes.paramButton} onClick={() => {
                                setBedrooms(bedrooms + 1)
                            }}>+
                            </button>
                            {bedrooms}
                            <button type="button" className={classes.paramButton} onClick={() => {
                                setBedrooms(bedrooms - 1)
                            }}>-
                            </button>
                        </li>
                        <li>
                            <label>Bathrooms :</label>
                            <button type="button" className={classes.paramButton} onClick={() => {
                                setBathRooms(bathrooms + 1)
                            }}>+
                            </button>
                            {bathrooms}
                            <button type="button" className={classes.paramButton} onClick={() => {
                                setBathRooms(bathrooms - 1)
                            }}>-
                            </button>
                        </li>
                        <li>
                            <label>Guests :</label>
                            <button type="button" className={classes.paramButton} onClick={() => {
                                setGuests(guests + 1)
                            }}>+
                            </button>
                            {guests}
                            <button type="button" className={classes.paramButton} onClick={() => {
                                setGuests(guests - 1)
                            }}>-
                            </button>
                        </li>
                    </ul>
                    <div className={classes.placeDescriptionContainer}>
                        <label>Description : </label>
                        <textarea placeholder="Describe your place" onChange={e => setDesc(e.target.value)} cols={50}
                                  rows={7}/>
                    </div>
                </div>
                <div className={classes.placeLocationContainer}>
                    <label>Location :</label>
                    <MyInput onChange={e => setLocation(e.target.value)}/>
                </div>
                <div className={classes.placePriceContainer}>
                    <label>Price :</label>
                    <div className={classes.priceInput}>
                        <MyInput onChange={e => setPrice(parseInt(e.target.value))}/>
                    </div>
                </div>
                <div className={classes.submitButton}>
                    <button type="submit">Create place</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceCreate;
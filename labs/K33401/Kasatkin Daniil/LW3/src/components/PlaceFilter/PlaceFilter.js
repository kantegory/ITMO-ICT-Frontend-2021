import React, {useState} from 'react';
import MyInput from "../UI/MyInput/MyInput";
import classes from "./PlaceFIlter.module.css";

const PlaceFilter = ({setSearchParams, placeQuery}) => {
    const [search, setSearch] = useState(placeQuery)
    const handleSubmit = (e) => {
        e.preventDefault()
        const query = search
        const params = {}
        if (query.length) params.place = query
        setSearchParams(params)
    }
    return (
        <form className={classes.filerBarForm} onSubmit={handleSubmit}>
            <MyInput placeholder="Type to search..." type={search} name={search} value={search} onChange={e => setSearch(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
};

export default PlaceFilter;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Restaurant from "../components/Restaurant";

function Homescreen() {
    const [restaurants, setrestaurants] = useState([])
    const [loading, setloading] = useState()
    const [error, seterror] = useState()
    useEffect(() => {

        const fetchRestaurants = async () => {
            try {
                setloading(true)
                const response = await axios.get('/api/restaurants/getallrestaurants');
                setrestaurants(response.data)
                setloading(false);
            } catch (error) {
                seterror(true)
                console.log(error)
                setloading(false);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <div className='container'>
            <div className="row justify-content-center mt-5">
                {loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <h1>Error</h1>
                ) : (
                    restaurants.map((restaurant) => {
                        return <div className="com-md-9 mt-2">
                            <Restaurant restaurant={restaurant}/>
                        </div>;
                    })
                )}
            </div>
        </div>
    );
}

export default Homescreen;
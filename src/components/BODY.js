import RES_CARD from "./RES_CARD";
import { useState } from "react";
import reslist from "../utils/mockdata";


const BODY = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(reslist);
    return(
        <div className="body">
            <div className="filter">
                <button 
                      className="filter-btn" 
                      onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setListOfRestaurants(filteredList);
                      }}
                >
                        Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
            {
                listOfRestaurants.map((restaurant) => {
                    return <RES_CARD resData={restaurant} key={restaurant.info.id}/>;
                }) 
            }
        
            </div>
            
        </div>
    );
};
export default BODY;
import RES_CARD from "./RES_CARD";
import { useState, useEffect } from "react";
import SHIMMER from "./SHIMMER";    


const BODY = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    

    useEffect(()=>
    {
     fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    };
 
    return listOfRestaurants.length === 0?(<SHIMMER/>):
    ( 
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                      type="text" 
                      className="search-box" 
                      value={searchText} 
                      onChange={(e)=>{
                      setsearchText(e.target.value);
                    }}
                    />
                    <button 
                    onClick ={()=>{
                        const filteredData = listOfRestaurants.filter((restaurant) =>  
                            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setfilteredRestaurants(filteredData);
                    
                    }} >search</button>

                </div>
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
                filteredRestaurants.map((restaurant) => {
                    return <RES_CARD resData={restaurant} key={restaurant.info.id}/>;
                }) 
            }
        
            </div>
            
        </div>
    );
};
export default BODY;
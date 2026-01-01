import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useContext, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import restaurants from "../utils/Api";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  }, []);

  if (!onlineStatus)
    return <h1>Looks like you're offline!! Please check your internet connection</h1>;

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter flex flex-wrap">
        <div className="search m-4 p-4">
          <input
            type="text"
            value={searchText}
            placeholder="Search restaurants..."
            className="border border-black p-2"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurants.filter(
                (res) => res.avgRating > 4
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>UserName: </label>
          <input
            className="border border-black p-2 ml-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            {restaurant.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

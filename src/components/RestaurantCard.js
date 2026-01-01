import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);

  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    menu
  } = resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg"
    >
      {/* Placeholder Image */}
      <div className="bg-gray-300 h-40 w-full rounded-lg flex items-center justify-center text-gray-600">
        Image
      </div>

      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-sm text-gray-700">{cuisines.join(", ")}</h4>
      <h4 className="text-sm">⭐ {avgRating} stars</h4>
      <h4 className="text-sm">₹{costForTwo} FOR TWO</h4>
      <h4 className="text-sm">Delivery: {deliveryTime}</h4>
      <h4 className="text-sm mt-1">User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-yellow-400 text-black m-2 p-1 rounded-lg text-xs font-bold z-10">
          PROMOTED
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

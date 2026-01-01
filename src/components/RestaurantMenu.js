import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await fetch(`http://localhost:3001/restaurants/${resId}`);
        const data = await res.json();
        setResInfo(data);
      } catch (error) {
        console.error("Error fetching restaurant menu:", error);
      }
    };
    fetchRestaurant();
  }, [resId]);

  if (!resInfo) return <Shimmer />;

  const { name, avgRating, costForTwo, deliveryTime, menu } = resInfo;

  // Convert menu object into categories array for accordions
  const categories = [
    { title: "Recommended", items: menu.recommended },
    { title: "Starters", items: menu.starters },
    { title: "Main Course", items: menu.mainCourse }
  ];

  return (
    <div className="text-center max-w-3xl mx-auto my-6">
      <h1 className="font-bold text-3xl mb-2">{name}</h1>
      <p className="text-lg font-semibold mb-4">
        Rating: ⭐ {avgRating} | Cost for Two: ₹{costForTwo} | Delivery: {deliveryTime}
      </p>

      {/* Categories Accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.title}
          data={category}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex(index === showIndex ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

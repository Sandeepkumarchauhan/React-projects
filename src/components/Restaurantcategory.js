import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.items.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Items List */}
        {showItems && <ItemList items={data.items} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

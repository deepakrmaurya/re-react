import { useState } from "react";
import { resData } from "../utils/data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resData);

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            let filteredData = resData.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5,
            );
            console.log(filteredData);
            setListOfRestaurant(filteredData);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

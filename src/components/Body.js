import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import api from "../utils/mockdata";

const Body = () => {
  const [listOfRestaurant, setlistRestaurant] = useState(api.restaurants);
  console.log(listOfRestaurant);
  console.log(setlistRestaurant);
  console.log(useState(api.restaurants));
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() =>
            setlistRestaurant(listOfRestaurant.filter((res) => res.rating > 4))
          }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

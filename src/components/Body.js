import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import api from "../utils/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setlistRestaurant] = useState([]); //[]-> Initial Value
  
  const[OldListRestaurant, setOldListRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.46310&lng=80.34790&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setlistRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
     setOldListRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const filterSearch = OldListRestaurant.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="filter-search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => 
            {
              setsearchText(e.target.value);
              
            }}
          ></input>
          <button onClick={() => {
            setlistRestaurant(filterSearch);
            //  setlistRestaurant(OldListRestaurant);
          }
          }>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() =>
            setlistRestaurant(
              listOfRestaurant.filter((res) => res.info.avgRating > 4),
            )
          }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((res) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;

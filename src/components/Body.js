import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurant from "../utils/useListOfRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

  const [listOfRestaurant, OldListRestaurant , setlistRestaurant] = useListOfRestaurant(); //[]-> Initial Value
  const [searchText, setsearchText] = useState("");



  const filterSearch = OldListRestaurant.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase()),
  );

 
 const status = useOnlineStatus();

     if(status === false){
    return <h1>You are offline!</h1>
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="filter-search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
               setlistRestaurant(filterSearch);
              //  setlistRestaurant(OldListRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() =>
            setlistRestaurant(
              OldListRestaurant.filter((res) => res.info.avgRating > 4.5),
            )
          }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

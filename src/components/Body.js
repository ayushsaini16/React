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
      <div className="flex">
        <div className="m-2">
          <input className="border-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button className="bg-gray-400 border-0 rounded-2xl w-20 ml-1 mr-1"
            onClick={() => {
               setlistRestaurant(filterSearch);
              //  setlistRestaurant(OldListRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-200 border-0 rounded-2xl w-40 mt-1 cursor-pointer"
          onClick={() =>
            setlistRestaurant(
              OldListRestaurant.filter((res) => res.info.avgRating > 4),
            )
          }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex mt-5 flex-wrap justify-center">
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

import RestaurantCard from "./RestaurantCard";

import api from "../utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {

           api.restaurants.map((res) => <RestaurantCard  key = {res.id} resData = {res}/>)
        }
      </div>
    </div>
  );
};

export default Body;
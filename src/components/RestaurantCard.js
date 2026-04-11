import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
  const {name , cuisines , costForTwo , deliveryTime , avgRating}  = resData;
  return (
    <div className="res-card">
      <div className="res-img">
        <img
          className="res-logo"
          src={CDN_URL}
        />
      </div>

      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
       <h4>{costForTwo}</h4>
      <h4> {deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
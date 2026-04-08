import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
  const {name , cuisine , costForTwo , deliveryTime , rating}  = resData;
  return (
    <div className="res-card">
      <div className="res-img">
        <img
          className="res-logo"
          src={CDN_URL}
        />
      </div>

      <h3>{name}</h3>
      <h4>{cuisine.join(', ')}</h4>
      <h4>{rating}</h4>
       <h4>{costForTwo} for two</h4>
      <h4> {deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
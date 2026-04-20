import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
  const {name , cuisines , costForTwo , deliveryTime , avgRating}  = resData;
  return (
    <div className="w-60 bg-amber-100 m-1 cursor-pointer">
      <div className="p-5">
        <img
          className="res-logo"
          src={CDN_URL}
        />
      </div>
      <div className="p-4">
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
       <h4>{costForTwo}</h4>
      <h4> {deliveryTime}</h4>
      </div>
    </div>
  );
};


//Higher Order Component
export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
      return (
        <div>
          <label className="absolute m-1 bg-black text-white" >{props.resData.name}</label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
}; 


export default RestaurantCard;
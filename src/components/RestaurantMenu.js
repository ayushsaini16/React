import { items } from "../utils/mockdata";
import {  useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams  } from "react-router-dom";
const RestaurantMenu = () => {
  const [listofitems, setlistofitems] = useState(null);
  const {resid} = useParams;
  console.log(resid); 
useEffect(()=>{
  setlistofitems(items);
})


if(listofitems === null) return <Shimmer />

  const title = listofitems?.data?.cards[0]?.card.card.text;

  const itemCards =listofitems.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;

  return (
    <div className="menu">
      <h1>{title}</h1>
      <h2>Menu Items</h2>
      <ul>
        {itemCards.map((res)=>
           <li key= {res.card.info.id}>{res.card.info.name} - {"Rs. "}{res.card.info.price/100}</li>
        )
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;

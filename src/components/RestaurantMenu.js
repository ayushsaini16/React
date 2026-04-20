import { items } from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenuitems from "../utils/useRestaurantMenuItems";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";

const RestaurantMenu = () => {
  const listofitems = useRestaurantMenuitems();
  const [showIndex , setshowIndex] = useState(0);
  if (listofitems === null) return <Shimmer />;

  const title = listofitems?.data?.cards[0]?.card.card.text;

  console.log(listofitems.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const itemCard =
    listofitems.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        ( "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"),
    );

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">{title}</h1>
        <h2>Menu Items</h2>
        <ul>
          {itemCard.map((res, index)=>(
            <li key = {res.card.card.categoryId}
            >
              <Accordion resData = {res} showItems = {
                    index=== showIndex ?true : false
                }
              setshowIndex = {()=>setshowIndex(index)}
                /></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
 
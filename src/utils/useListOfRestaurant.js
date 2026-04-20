import { useEffect, useState} from "react";


const useListOfRestaurant = ()=>{
    
    const [ListOfRestaurant , setListOfRestaurant] = useState([]);

    const[OldListOfRestaurant, setOldListOfRestaurant] = useState([]);

    console.log(ListOfRestaurant);

    useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.46310&lng=80.34790&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setOldListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  return [ListOfRestaurant,OldListOfRestaurant, setListOfRestaurant];
}

export default useListOfRestaurant;
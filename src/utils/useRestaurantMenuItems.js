import {useEffect , useState} from "react";
import { items } from "../utils/mockdata";

const useRestaurantMenuitems = () => {
    
    const [listofitems, setlistofitems] = useState(null);
    
    useEffect(()=>{
      setlistofitems(items);
    },[])

    return listofitems;
}

export default useRestaurantMenuitems;
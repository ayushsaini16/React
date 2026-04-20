import { useDispatch } from "react-redux";
import { additems } from "../utils/cartSlice";

const ItemCategories = (props) => {
  const {resCategory} = props;
  const data = resCategory?.card?.info;
  
    const dispatch = useDispatch();
    
    const handleAdditem =()=>{
        dispatch(additems(data));
    }

  return (
    <div className="h-40">  
      <span className="font-semibold" >{data.name}</span>
      <button className="ml-120 bg-amber-600 cursor-pointer"
      onClick = {handleAdditem}
      >Add +</button >
       <h4 className="mt-5">Description</h4>
       <div>{data.description}</div>
      <hr />
    </div>
  );
};

export default ItemCategories;

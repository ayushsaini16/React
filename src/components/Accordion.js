import { useState } from "react";
import ItemCategories from "./ItemCategories"

const Accordion = (props)=>{
    const {resData, showItems, setshowIndex}= props; 
    const data = resData?.card?.card;

    const handleClick = ()=>{
        setshowIndex();
    }

    return (
        <div>
            <div className="flex flex-col bg-gray-50 w-150  mb-5 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={()=>handleClick()} >
                <span className="font-bold">
                    {data.title}</span>
                <span>⬇️</span>
                </div>
                <div>
                { showItems && data?.itemCards?.map((res)=>(
                    <ItemCategories key={res.card.info.id}  resCategory = {res}  />
                ))}

                </div>   

            </div>
        </div>
    )
}


export default Accordion;
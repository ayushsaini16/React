import { useState } from "react";

const User = (props)=>{
    const [count , setcount] = useState(0);
    const {name , location} = props;
    return (
        <div className = "user-card">
            <h2>Count: {count}</h2>
            <h1>{name}</h1>
            <h2>{location}</h2>
        </div>
    )
}

export default User;
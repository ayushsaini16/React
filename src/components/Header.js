import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
   
  const status = useOnlineStatus();

  return (
    <div className="flex justify-between bg-amber-100 shadow-lg p-1 mt-1">
      <div className="w-50">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex gap-5 p-3 mt-10">
          <li>
            Online Status: {status === true ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us </Link>
          </li>
          <li>Cart </li>
          <button
            className="cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setbtnName("LogOut") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

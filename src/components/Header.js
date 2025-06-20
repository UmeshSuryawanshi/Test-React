import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [ btnName, setBtnName ] = useState("Login");

  const onlineStatus = useOnlineStatus();

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg m-2">
        <div className="logo-container">
          <img className="w-24" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-2">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to="/about">About Us</Link></li>
            <li className="px-2"><Link to="/contact">Conatct Us</Link></li>
            <li className="px-2"><Link to="/grocery">Grocery</Link></li>
            <li className="px-2">Cart</li>
            <button className="px-1" onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
  
      </div>
    )
  };

  export default Header;
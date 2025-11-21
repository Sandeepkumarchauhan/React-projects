import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const HEADER = () => {
  const [letbtnName, setBtnName] = useState("Login");
  return(
    <div className="header">
        <div className="logo-conotainer">
            <img 
            className="logo"
            src= 
            {LOGO_URL}
            ></img>
          </div>
        <div className="nav-items">
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT</li>
                <li>CART</li>
               <button 
                  className="login-btn" 
                  onClick={() => {
                    letbtnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                  }}
               >
                  {letbtnName}
               </button>
            </ul>
        </div>
    </div>
  );
};
export default HEADER;
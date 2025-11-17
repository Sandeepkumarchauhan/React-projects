import { LOGO_URL } from "../utils/constants";

const HEADER = () => {
  return(
    <div className="header">
        <div className="logo-conotainer">
            <img 
            className="logo"
            src= 
            {LOGO_URL}
            >

            </img>

        </div>
        <div className="nav-items">
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT</li>
                <li>CART</li>
            </ul>
        </div>
    </div>
  );
};
export default HEADER;
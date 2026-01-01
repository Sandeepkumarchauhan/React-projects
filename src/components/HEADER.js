import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVegOnly, setIsVegOnly] = useState(false);
  const onlineStatus = useOnlineStatus();

  const handleLoginToggle = () => setIsLoggedIn(!isLoggedIn);
  const handleVegToggle = () => setIsVegOnly(!isVegOnly);

  return (
    <header className="flex justify-between items-center p-4 bg-white bg-opacity-70 shadow-md fixed w-full top-0 z-50 backdrop-blur-md">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" className="h-10" />
      </div>

      <nav className="flex space-x-6">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/contacts" className="hover:text-blue-500">Contacts</Link>
        <Link to="/grocery" className="hover:text-blue-500">Grocery</Link>
      </nav>

      <div className="flex items-center space-x-4">
        <span className={onlineStatus ? "text-green-500" : "text-red-500"}>
          {onlineStatus ? "Online" : "Offline"}
        </span>

        <button
          onClick={handleVegToggle}
          className={`px-3 py-1 rounded ${
            isVegOnly ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Veg Only
        </button>

        <button
          onClick={handleLoginToggle}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
};

export default Header;

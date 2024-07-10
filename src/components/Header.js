import { useState } from "react";
import { RESTAURANT_LOGO } from "../utils/Constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={RESTAURANT_LOGO} />
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="account-status"
              onClick={() => {
                setLoginStatus((loginStatus) =>
                  loginStatus === "Login" ? "Logout" : "Login"
                );
              }}
            >
              {loginStatus}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

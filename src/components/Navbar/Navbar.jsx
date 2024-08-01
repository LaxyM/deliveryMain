import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin, user }) => {


  const [menu, setMenu] = React.useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo_test} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/">HOME</Link>
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          <Link to="/menu">Menu</Link>
        </li>
        <li
          onClick={() => setMenu("restaurants")}
          className={menu === "restaurants" ? "active" : ""}
        >
          <Link to="/more-restaurants">Restaurants</Link>
        </li>
        <li
          onClick={() => setMenu("reviews")}
          className={menu === "reviews" ? "active" : ""}
        >
          Reviews
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </li>
        {user && user.isAdmin && (
          <li
            onClick={() => setMenu("admin")}
            className={menu === "admin" ? "active" : ""}
          >
            <Link to="/admin">Admin Panel</Link>
          </li>
        )}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search_icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket_icon" />
          </Link>
        
        </div>
        <div className="navbar-search-icon">
          <img src={assets.sack_dollar} alt="sack_dollar" />
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;

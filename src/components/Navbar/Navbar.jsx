/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin, user }) => {
  const [menu, setMenu] = React.useState("home");


  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />

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
          Menu
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
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
        </div>
        <div className="navbar-search-icon">
          <img src={assets.sack_dollar} alt="" />
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;

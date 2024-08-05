import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Badge, Avatar, Button } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin, user, setUser }) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartCount } = useContext(StoreContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo_test} alt="Logo" className="logo" />
      </Link>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>

      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
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
          <a href="#footer">Contact</a>
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
        <Link to="/cart">
          <Badge count={getTotalCartCount()} showZero color="#49557e">
            <img src={assets.basket_icon} alt="Cart" />
          </Badge>
        </Link>
        <div className="navbar-user">
          {user ? (
            <>
              <Avatar size={34} icon={<UserOutlined />} />
              <div className="navbar-username">{user.name}</div>
              <Button
                className="navbar-logout"
                icon={<LogoutOutlined />}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <button onClick={() => setShowLogin(true)}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

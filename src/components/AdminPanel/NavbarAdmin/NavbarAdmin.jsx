import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavbarAdmin.css";

const NavbarAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="navbar-admin">
      <div className="navbar-admin-menu">
        <NavLink to="/admin/add" className="navbar-item">
          Add Items
        </NavLink>
        <NavLink to="/admin/list" className="navbar-item">
          List Items
        </NavLink>
        <NavLink to="/admin/orders" className="navbar-item">
          Orders
        </NavLink>
      </div>
      <div className="navbar-title">
        <p>Gusto</p>
        <b>Admin Panel</b>
      </div>
      <button className="navbar-admin-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default NavbarAdmin;

import React from "react";
import { NavLink } from "react-router-dom";
import "./SidebarAdmin.css";
import { assets } from "../../../assets/assets";

const SidebarAdmin = () => {
  return (
    <div className="sidebar-admin">
      <div className="sidebar-admin-options">
        <NavLink to="/admin/add" className="sidebar-admin-option">
          <img className="add_icon" src={assets.add} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/admin/list" className="sidebar-admin-option">
          <img src={assets.checklist} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/admin/orders" className="sidebar-admin-option">
          <img src={assets.order} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarAdmin;

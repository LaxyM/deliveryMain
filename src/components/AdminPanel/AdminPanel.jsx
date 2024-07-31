import React from "react";
import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";
import { Route, Routes } from "react-router-dom";
import Add from "../../pages/AdminAdd/Add";
import List from "../../pages/AdminList/List";
import Orders from "../../pages/AdminOrders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPanel = () => {
    const url = "http://localhost:5000"; // Пример URL

    return (
        <div className="admin-panel">
            <ToastContainer />
            <NavbarAdmin />
            <div className="admin-content">
                <div className="admin-main">
                    <Routes>
                        <Route path="add" element={<Add url={url} />} />
                        <Route path="list" element={<List url={url} />} />
                        <Route path="orders" element={<Orders url={url} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;

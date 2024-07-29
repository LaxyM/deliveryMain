import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import MoreRestaurants from "./pages/MoreRestaurants/MoreRestaurants";
import Login from "./components/Login/Login";


function App() {
  const [showLogin,setShowLogin] = useState(false)
  return ( 
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <header className="main-header">
        <div className="navbar-container">
          <Navbar setShowLogin={setShowLogin}/>
        </div>
      </header>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more-restaurants" element={<MoreRestaurants />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

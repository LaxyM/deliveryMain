import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import MoreRestaurants from "./pages/MoreRestaurants/MoreRestaurants";

function App() {
  return (
    <>
      <header className="main-header">
        <div className="navbar-container">
          <Navbar />
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

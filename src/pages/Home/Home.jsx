import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import TipsBlock from "../../components/TipsBlock/TipsBlock";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Restaurants from "../../components/Restaurants/Restaurants";
import AboutUs from "../../components/AboutUs/AboutUs";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="main-page">
        <TipsBlock />
        <Restaurants />
        <AboutUs />
        {/* тут будет вся страница */}
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import TipsBlock from "../../components/TipsBlock/TipsBlock";
import CarouselFoodDisplay from "../../components/CarouselFoodDisplay/CarouselFoodDisplay";
import Restaurants from "../../components/Restaurants/Restaurants";
import AboutUs from "../../components/AboutUs/AboutUs";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="main-page">
        <CarouselFoodDisplay />
        <TipsBlock />
        <Restaurants />
        <AboutUs />
        
      </div>
    </>
  );
};

export default Home;

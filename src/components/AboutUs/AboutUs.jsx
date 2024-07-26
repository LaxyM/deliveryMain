import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import { assets } from '../../assets/assets'; // Используем assets для импорта изображения

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-content">
                <div className="about-us-text">
                    <h2>About Us</h2>
                    <p>
                        Welcome to [Restaurant Name], your go-to destination for delicious meals delivered right to your doorstep. Our journey began with a passion for culinary excellence and a desire to delight you with exquisite dishes every day.
                    </p>
                    <br />
                    <p>
                        At [Restaurant Name], our team of dedicated chefs and staff work tirelessly to create mouth-watering dishes using the freshest ingredients. The story of our restaurant began in a small family kitchen where we experimented with recipes, striving to make each dish special. Over time, we grew, but our primary goal remained the same – to bring joy through food.
                    </p>
                    <br />
                    <p>
                        Our menu offers a variety of dishes to suit every taste. We have delicious breakfasts to energize your day, children's meals that even the pickiest eaters will love, and succulent barbecue for grilled meat enthusiasts. Whether you're looking for a hearty dinner, a light snack, or a tasty meal for your kids, we have dishes to satisfy your culinary desires.
                    </p>
                </div>
                <div className="about-us-image">
                    <img src={assets.team} alt="Our Team" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

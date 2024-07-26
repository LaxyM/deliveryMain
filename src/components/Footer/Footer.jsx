import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation(); 

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src={assets.logo} alt="Logo" className="footer-logo" />
          <div className="footer-text">
            <p>We always make our customers happy.</p>
            <p>Fast, fresh, and delicious meals delivered right to your door.</p>
            <p>Your satisfaction is our top priority, every single time!</p>
          </div>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>ABOUT</h3>
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About us</Link>
            </li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/restaurants">Restaurants</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SUPPORT</h3>
          <ul>
            <li><Link to="/support-center">Support Center</Link></li>
            <li><Link to="/delivery-terms">Delivery Terms</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy-policy">Privacy policy</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>GET IN TOUCH</h3>
          <ul>
            <li>+49 000 0000000</li>
            <li>contactus@Company.com</li>
            <li>Office Address: 1234 Foodie St,<br /> Delicious City, Yummyland</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>BUSINESS HOURS</h3>
          <ul>
            <li>Mon-Fri: 8am - 10am</li>
            <li className="highlight">Breakfast time</li>
            <li>Tue-Sat: 17pm - 22pm</li>
            <li className="highlight">In the evening</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright 2024 @Наше название - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

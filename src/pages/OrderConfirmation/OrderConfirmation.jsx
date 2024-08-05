import React from "react";
import { Link } from "react-router-dom";
import "./OrderConfirmation.css"; 

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
      <div className="confirmation-content">
        <h1 className="confirmation-title">Thank You for Your Order!</h1>
        <p className="confirmation-message">
          Your order has been successfully placed. We are preparing it now and will have it delivered to you soon.
        </p>
        <p className="confirmation-details">
          Order Number: <b>#12345</b> {/* Replace with dynamic order number */}
        </p>
        <p className="confirmation-details">
          Estimated Delivery Time: <b>30-45 minutes</b>
        </p>
        <p className="confirmation-details">
          We will notify you when your order is on its way.
        </p>
        <p className="confirmation-footer">
          We hope you enjoy your meal! 
          <br />
          We look forward to serving you again soon.
        </p>
        <Link to="/" className="home-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;

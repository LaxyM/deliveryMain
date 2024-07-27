import React from 'react';
import './MoreRestaurants.css';
import { assets } from '../../assets/assets'
import ButtonViewAll from '../../components/ButtonViewAll/ButtonViewAll';

const MoreRestaurants = () => {
  return (
    <div className="more-restaurants">
      <h1 className="page-title">Explore Our Additional Locations</h1>

      <div className="restaurant-details">
        {/* Restaurant 1 */}
        <div className="restaurant-card">
        <img src={assets.restaurants_1} alt="Berlin Restaurant" />
          <div className="restaurant-info">
            <h2 className="restaurant-title">Berlin Restaurant — "Berliner Genuss"</h2>
            <p className="restaurant-address">Unter den Linden, 77</p>
            <p className="restaurant-description">
              Discover traditional German cuisine with a modern twist at our Berlin location. Our menu features a variety of classic dishes and seasonal specialties.
            </p>
            <p className="restaurant-hours">Hours: Tue-Sat 11:00 AM - 11:00 PM</p>
            <p className="restaurant-contact">Phone: +49 30 1234567</p>
          </div>
        </div>

        {/* Restaurant 2 */}
        <div className="restaurant-card">
        <img src={assets.restaurants_2} alt="Hamburg Restaurant" />
          <div className="restaurant-info">
            <h2 className="restaurant-title">Hamburg Restaurant — "HafenSchmaus"</h2>
            <p className="restaurant-address">Mönckebergstraße, 12</p>
            <p className="restaurant-description">
              Enjoy a fine dining experience with a selection of gourmet dishes and local favorites in Hamburg. Our stylish interior and excellent service ensure a memorable visit.
            </p>
            <p className="restaurant-hours">Hours: Tue-Sat 10:00 AM - 10:00 PM</p>
            <p className="restaurant-contact">Phone: +49 40 7654321</p>
          </div>
        </div>

        {/* Restaurant 3 */}
        <div className="restaurant-card">
        <img src={assets.restaurants_3} alt="Munich Restaurant" />
          <div className="restaurant-info">
            <h2 className="restaurant-title">Munich Restaurant — "Münchner Hof"</h2>
            <p className="restaurant-address">Marienplatz, 18</p>
            <p className="restaurant-description">
              Relish a variety of Bavarian and international dishes at our Munich location. The cozy atmosphere and friendly staff make it a great place for both lunch and dinner.
            </p>
            <p className="restaurant-hours">Hours: Tue-Sat 12:00 PM - 11:00 PM</p>
            <p className="restaurant-contact">Phone: +49 89 9876543</p>
          </div>
        </div>

        {/* Restaurant 4 */}
        <div className="restaurant-card">
        <img src={assets.restaurants_4} alt="Cologne Restaurant" />
          <div className="restaurant-info">
            <h2 className="restaurant-title">Cologne Restaurant — "Kölsche Köstlichkeiten"</h2>
            <p className="restaurant-address">Hohe Straße, 101</p>
            <p className="restaurant-description">
              Experience the best of Cologne’s culinary scene with our diverse menu and exceptional service. Our restaurant offers a relaxed atmosphere and a great selection of wines.
            </p>
            <p className="restaurant-hours">Hours: Tue-Sat 11:00 AM - 10:00 PM</p>
            <p className="restaurant-contact">Phone: +49 221 2345678</p>
          </div>
        </div>
      </div>


      <div className="booking-form">
        <h2>Book a Table</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />

          <label htmlFor="guests">Number of Guests:</label>
          <input type="number" id="guests" name="guests" min="1" required />

          <ButtonViewAll text="Book Now" />
        </form>
      </div>
    </div>
  );
};

export default MoreRestaurants;

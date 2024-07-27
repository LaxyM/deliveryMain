import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'
import './Restaurants.css';

const Restaurants = () => {
  return (
    <section className="restaurants">
      <div className="container-restaurants">
        <div className="flex-restaurants">
          <div className="title-restaurants-32">Our Restaurants</div>
          <Link to="/more-restaurants" className="btn">View More</Link>
        </div>

        <div className="restaurants__blocks">
          <div className="restaurant__block">
            <img src={assets.restaurants_1} alt="Berlin Restaurant" />
            <div className="restaurant__info">
              <div className="title-restaurants-24">Berlin</div>
            </div>
          </div>

          <div className="restaurant__block">
            <img src={assets.restaurants_2} alt="Hamburg Restaurant" />
            <div className="restaurant__info">
              <div className="title-restaurants-24">Hamburg</div>
            </div>
          </div>

          <div className="restaurant__block">
            <img src={assets.restaurants_3} alt="Munich Restaurant" />
            <div className="restaurant__info">
              <div className="title-restaurants-24">Munich</div>
            </div>
          </div>

          <div className="restaurant__block">
            <img src={assets.restaurants_4} alt="Cologne Restaurant" />
            <div className="restaurant__info">
              <div className="title-restaurants-24">Cologne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Restaurants

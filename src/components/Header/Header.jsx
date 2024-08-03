import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import ButtonViewAll from '../ButtonViewAll/ButtonViewAll';
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <img src={assets.main_foto} alt='Header Background' />
      <div className='header-contents'>
        <h2>Order your favorite food here</h2>
        <p>
          Discover a world of flavors with our food delivery! Fresh ingredients,
          exquisite dishes, and fast delivery – enjoy restaurant-quality meals
          right at home. Order now and taste the difference!
        </p>
		<Link to='/menu' className='header-button'>
          <ButtonViewAll text="View Menu" />
        </Link>
      </div>
    </div>
  )
}

export default Header

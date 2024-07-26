import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
	return (
		<div className='header'>
			<img src={assets.header_img} alt='' />
			<div className='header-contents'>
				<h2>Order your favorite food here</h2>
				<p>
					Discover a world of flavors with our food delivery! Fresh ingredients,
					exquisite dishes, and fast delivery – enjoy restaurant-quality meals
					right at home. Order now and taste the difference!
				</p>
				<button>View Menu</button>
			</div>
		</div>
	)
}

export default Header

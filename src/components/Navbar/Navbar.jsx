/* eslint-disable react/prop-types */
import React from 'react'

import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
	const [menu, setMenu] = React.useState('home')

	return (
		<div className='navbar'>
			<img src={assets.logo} alt='' className='logo' />

			<ul className='navbar-menu'>
				<li
					onClick={() => setMenu('home')}
					className={menu === 'home' ? 'active' : ''}
				>
					HOME
				</li>
				<li
					onClick={() => setMenu('menu')}
					className={menu === 'menu' ? 'active' : ''}
				>
					Menu
				</li>
				<li
					onClick={() => setMenu('restaurants')}
					className={menu === 'restaurants' ? 'active' : ''}
				>
					Restaurants
				</li>
				<li
					onClick={() => setMenu('reviews')}
					className={menu === 'reviews' ? 'active' : ''}
				>
					Reviews
				</li>
				<li
					onClick={() => setMenu('contact')}
					className={menu === 'contact' ? 'active' : ''}
				>
					Contact
				</li>
			</ul>
			<div className='navbar-right'>
				<img src={assets.search_icon} alt='' />
				<div className='navbar-search-icon'>
					<img src={assets.basket_icon} alt='' />
				</div>
				<div className='navbar-search-icon'>
					<img src={assets.sack_dollar} alt='' />
				</div>
				<button>Sign in</button>
			</div>
		</div>
	)
}

export default Navbar

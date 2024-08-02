import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Badge } from 'antd'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'



const Navbar = ({ setShowLogin, user }) => {

	const [menu, setMenu] = React.useState('home')

	const { getTotalCartCount, getTotalCartAmount } =
		React.useContext(StoreContext)

	return (
		<div className='navbar'>
			<Link to="/">
        <img src={assets.logo_test} alt="" className="logo" />
      </Link>
      
			<ul className='navbar-menu'>
				<li
					onClick={() => setMenu('home')}
					className={menu === 'home' ? 'active' : ''}
				>
					<Link to='/'>HOME</Link>
				</li>
				<li
					onClick={() => setMenu('menu')}
					className={menu === 'menu' ? 'active' : ''}
				>
					<Link to='/menu'>Menu</Link>
				</li>
				<li
					onClick={() => setMenu('restaurants')}
					className={menu === 'restaurants' ? 'active' : ''}
				>
					<Link to='/more-restaurants'>Restaurants</Link>
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
				  <a href="#footer">Contact</a> 
				</li>
				{user && user.isAdmin && (
					<li
						onClick={() => setMenu('admin')}
						className={menu === 'admin' ? 'active' : ''}
					>
						<Link to='/admin'>Admin Panel</Link>
					</li>
				)}
			</ul>
			<div className='navbar-right'>
				<img src={assets.search_icon} alt='' />
				<div className='navbar-search-icon'>
					<Link to='/cart'>
						<Badge count={getTotalCartCount()} showZero color='#CA054D'>
							<img src={assets.basket_icon} alt='' />
						</Badge>
					</Link>
				</div>
				<div className='navbar-search-icon'>
					<Link to='/cart'>
						<Badge
							count={getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}
							showZero
							color='#45B69C'
							overflowCount={999}
						>
							<img src={assets.sack_dollar} alt='' />
						</Badge>
					</Link>
				</div>
				<button onClick={() => setShowLogin(true)}>Sign in</button>
			</div>
		</div>
	)
}


export default Navbar;

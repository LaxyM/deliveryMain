import React from 'react'
import { StoreContext } from '../../context/StoreContext'
import './ExploreMenu.css'

const ExploreMenu = ({ category, setCategory }) => {
	const { menuList } = React.useContext(StoreContext)

	return (
		<div className='explore-menu' id='explore-menu'>
			<h1>Explore our menu</h1>
			{/* <p className='explore-menu-text'>
				Discover a world of flavors with our food delivery! Fresh ingredients,
				exquisite dishes, and fast delivery – enjoy restaurant-quality meals
				right at home. Order now and taste the difference!
			</p> */}
			<div className='explore-menu-list'>
				{menuList.map((item, index) => (
					<div
						onClick={() =>
							setCategory(prev =>
								prev === item.menu_name ? 'All' : item.menu_name
							)
						}
						key={index}
						className='explore-menu-list-item'
					>
						<img
							className={category === item.menu_name ? 'active' : ''}
							src={item.menu_image}
							alt={item.menu_name}
						/>
						<p>{item.menu_name}</p>
					</div>
				))}
			</div>
			<hr />
		</div>
	)
}

export default ExploreMenu

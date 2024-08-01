import React from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import './Menu.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Menu = () => {
	const [category, setCategory] = React.useState('All')

	return (
		<div className='menu-list'>
			<div className='explore-menu'>
				<ExploreMenu category={category} setCategory={setCategory} />
			</div>
			<div className='food-list'>
				<FoodDisplay category={category} />
			</div>
		</div>
	)
}

export default Menu

import React from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import './Menu.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'


const Menu = () => {

	const [category, setCategory] = React.useState('All')

	return (
		<div className='menu-list'>
			<ExploreMenu category={category} setCategory={setCategory} />
			<FoodDisplay category={category}/>
		</div>
	)
}

export default Menu



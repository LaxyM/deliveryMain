import React from 'react'
import ButtonViewAll from '../ButtonViewAll/ButtonViewAll'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const FoodDisplay = () => {
	return (
		<div className='food-display'>
			<div className='flex-tips'>
				<div className='title-tips-32'>Our popular dishes</div>
				<ButtonViewAll />
			</div>
			<div className='container'>
				<FoodItem />
				<FoodItem />
				<FoodItem />
				<FoodItem />
			</div>
		</div>
	)
}

export default FoodDisplay

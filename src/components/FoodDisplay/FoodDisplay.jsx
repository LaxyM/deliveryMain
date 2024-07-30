import React from 'react'
import ButtonViewAll from '../ButtonViewAll/ButtonViewAll'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = () => {
	const { foodList } = React.useContext(StoreContext)

	return (
		<div className='food-display'>
			<div className='container-food'>
				{foodList.map((item, index) => {
					return (
						<FoodItem
							key={index}
							id={item._id}
							name={item.name}
							description={item.description}
							price={item.price}
							image={item.image}
							rate={item.rate}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default FoodDisplay

import React from 'react'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({ category }) => {
	const { foodList } = React.useContext(StoreContext)

	return (
		<div className='food-display'>
			<div className='container-food'>
				{foodList.map((item, index) => {
					if (category === 'All' || category === item.category) {
						return (
							<FoodItem
								key={index}
								id={item.id}
								name={item.name}
								description={item.description}
								price={item.price}
								image={item.image}
								rate={item.rate}
							/>
						)
					}
						
				})}
			</div>
		</div>
	)
}

export default FoodDisplay

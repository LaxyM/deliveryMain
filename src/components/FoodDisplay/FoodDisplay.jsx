import React from 'react'
import ButtonViewAll from '../ButtonViewAll/ButtonViewAll'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { Carousel } from 'antd'

const FoodDisplay = () => {
	const { foodList } = React.useContext(StoreContext)

	return (
		<Carousel className='food-display' autoplay autoplaySpeed={5000}>
			<div className='food-display'>
				<div className='flex-tips'>
					<div className='title-tips-32'>Our popular dishes</div>
					<ButtonViewAll />
				</div>
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

			<div className='food-display'>
				<div className='flex-tips'>
					<div className='title-tips-32'>Our popular drinks</div>
					<ButtonViewAll />
				</div>
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
		</Carousel>
	)
}

export default FoodDisplay

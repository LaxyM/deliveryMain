import React from 'react'
import { Rate } from 'antd'
import './CarouselFoodItem.css'


const CarouselFoodItem = ({ id, name, price, description, image, rate }) => {

	return (
		<div className='food-item'>
			<div className='food-item-img-container'>
				<img className='food-img' src={image} alt='food' />
			</div>
			<div className='food-item-info'>
				<div className='food-item-name-rating'>
					<Rate defaultValue={rate} />
				</div>
				<div className='food-item-infos'>
					<div className='title title__fz-16'>{name}</div>
					<div className='food-item-price'>{price} $</div>
				</div>

				<div className='food-item__items'>
					<div className='food-item-description'>{description}</div>
				</div>
			</div>
		</div>
	)
}
export default CarouselFoodItem

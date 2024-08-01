
import React from 'react'
import { Rate } from 'antd'
import './CarouselFoodItem.css'

// eslint-disable-next-line react/prop-types
const CarouselFoodItem = ({ name, price, description, image, rate }) => {
	return (
		<div className='carousel-food-item'>
			<div className='carousel-food-item-img-container'>
				<img className='carousel-food-img' src={image} alt='food' />
			</div>
			<div className='carousel-food-item-info'>
				<div className='carousel-food-item-name-rating'>
					<Rate defaultValue={rate} />
				</div>
				<div className='carousel-food-item-infos'>
					<div className='carousel-title carousel-title__fz-16'>{name}</div>
					<div className='carousel-food-item-price'>{price} $</div>
				</div>
				<div className='carousel-food-item-description'>{description}</div>
			</div>
		</div>
	)
}

export default CarouselFoodItem

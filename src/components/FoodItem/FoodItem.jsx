import React from 'react'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'
import { Rate } from 'antd'

// eslint-disable-next-line react/prop-types
const FoodItem = ({ id, name, price, description, image, rate }) => {
	const { cartItems, addToCart, removeFromCart } =
		React.useContext(StoreContext)

	return (
		<section className='food-item'>
			<div className='container'>
				<div className='food-item__blocks'>
					<div className='food-item__block'>
						<img className='food-img' src={image} alt='food' />

						<div className='rating-mini'>
							<Rate defaultValue={rate} />
						</div>
						<div className='food-item-info'>
							<div className='title title__fz-16'>{name}</div>
							<div className="food-item-price">{price} $</div>
						</div>

						<div className='food-item__items'>
							<div className='food-item__items-item'>
								<div className='title title__fz-14'>{description}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FoodItem

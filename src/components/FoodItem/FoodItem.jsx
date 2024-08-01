import React from 'react'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import { Rate } from 'antd'

// eslint-disable-next-line react/prop-types
const FoodItem = ({ id, name, price, description, image, rate }) => {
	const { cartItems, addToCart, removeFromCart } =
		React.useContext(StoreContext)

	return (
		<div className='food-item'>
			<div className='food-item-img-container'>
				<img className='food-img' src={image} alt='food' />

				{!cartItems[id] ? (
					<img
						className='add-icon'
						onClick={() => addToCart(id)}
						src={assets.add_icon_white}
						alt=''
					/>
				) : (
					<div className='food-item-counter'>
						<img
							onClick={() => removeFromCart(id)}
							src={assets.remove_icon_red}
							alt=''
						/>
						<p>{cartItems[id]}</p>
						<img
							onClick={() => addToCart(id)}
							src={assets.add_icon_green}
							alt=''
						/>
					</div>
				)}
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

export default FoodItem

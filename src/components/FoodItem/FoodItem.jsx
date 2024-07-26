import React from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'

const FoodItem = () => {
	return (
		<section className='food-item'>
			<div className='container'>
				<div className='food-item__blocks'>
					<div className='food-item__block'>
						<img className='food-img' src={assets.top_food2} alt='food' />
						<div className='title title__fz-16'>Clover Salad</div>

						<div className='food-item__items'>
							<div className='food-item__items-item'>
								<div className='title title__fz-14'>Salerno, Italy</div>
							</div>

							<div className='rating-mini'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FoodItem

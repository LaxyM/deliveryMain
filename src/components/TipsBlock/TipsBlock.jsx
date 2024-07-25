
import './TipsBlock.css'
import ButtonViewAll from '../ButtonViewAll/ButtonViewAll'
import { assets } from '../../assets/assets'

const TipsBlock = () => {
	return (
		<section className='advice-tips'>
			<div className='flex-tips'>
				<div className='title-tips-32'>Our tips and advice</div>
				<ButtonViewAll />
			</div>

			<div className='container-tips'>
				<div className='advice-blocks-tips'>
					<div className='advice-blocks-content'>
						<img src={assets.tips1} alt='' />
						<div className='advice-block-tips'>
							<div className='title-tips-24'>
								Enjoy the atmosphere and unique flavors of our café.
							</div>
							<div className='title-tips-16'>
								We take pride in our cozy setting and the variety of dishes on
								our menu. Be sure to try our daily specials to discover new
								culinaryexperiences.
							</div>
						</div>
					</div>
				</div>

				<div className='advice-blocks-tips'>
					<div className='advice-blocks-content'>
						<img src={assets.tips2} alt='' />
						<div className='advice-block-tips'>
							<div className='title-tips-24'>
								Take some time for yourself and your health.
							</div>
							<div className='title-tips-16'>
								Try our fresh and healthy dishes, made from local ingredients.
								Our café always offers something delicious and nutritious for
								your body. Whether you're looking for a light snack or a full
								meal, you'll find options that cater to your dietary preferences
								and needs. Enjoy a moment of relaxation with our refreshing
								beverages, perfect for any time of the day.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TipsBlock

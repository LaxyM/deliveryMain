import React from 'react'
import ButtonViewAll from '../ButtonViewAll/ButtonViewAll'
import CarouselFoodItem from '../CarouselFoodItem/CarouselFoodItem'
import './CarouselFoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { Carousel } from 'antd'
import { Link } from 'react-router-dom'

const CarouselFoodDisplay = () => {
	const { foodList } = React.useContext(StoreContext)

	const getSortedAndFilteredItems = criterion => {
		let sortedList = []
		switch (criterion) {
			case 'rating':
				sortedList = [...foodList].sort((a, b) => b.rate - a.rate)
				break
			case 'price':
				sortedList = [...foodList].sort((a, b) => a.price - b.price)
				break
			case 'kids':
				sortedList = foodList.filter(item => item.category === 'Kids Menu')
				break
			default:
				sortedList = foodList
		}
		return sortedList.slice(0, 4)
	}

	const sections = [
		{ title: 'Top Rated Dishes', criterion: 'rating' },
		{ title: 'Best Priced Dishes', criterion: 'price' },
		{ title: 'Kids Menu', criterion: 'kids' },
	]

	return (
		<Carousel className='food-carousel' autoplay autoplaySpeed={5000}>
			{sections.map((section, index) => (
				<div key={index} className='food-display'>
					<div className='flex-tips'>
						<div className='title-tips-32'>{section.title}</div>
						<Link to='/menu'>
							<ButtonViewAll text='View All' />
						</Link>
					</div>
					<div className='container-food'>
						{getSortedAndFilteredItems(section.criterion).map(item => (
							<CarouselFoodItem
								key={item._id}
								id={item._id}
								name={item.name}
								description={item.description}
								price={item.price}
								image={item.image}
								rate={item.rate}
							/>
						))}
					</div>
				</div>
			))}
		</Carousel>
	)
}

export default CarouselFoodDisplay

import React from 'react'

import Header from '../../components/Header/Header'
import './Home.css'
import TipsBlock from '../../components/TipsBlock/TipsBlock'

const Home = () => {
	return (
		<>
			<div>
				<Header />
			</div>
			<div className='main-page'>
				<TipsBlock/>
				{/* тут будет вся страница */}
			</div>
		</>
	)
}

export default Home

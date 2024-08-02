import React, { useState} from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import MoreRestaurants from './pages/MoreRestaurants/MoreRestaurants'
import Login from './components/Login/Login'
import AdminPanel from './components/AdminPanel/AdminPanel'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import ScrollToTop from './components/ScrollToTop';

function App() {
	const [showLogin, setShowLogin] = useState(false)
	const [user, setUser] = useState(null)
	const location = useLocation()

	const isAdminRoute = location.pathname.startsWith('/admin')

	return (
		<>
			{showLogin && <Login setShowLogin={setShowLogin} setUser={setUser} />}
			<header className='main-header'>
				<div className='navbar-container'>
					{user && user.isAdmin ? null : (
						<Navbar setShowLogin={setShowLogin} user={user} setUser={setUser} />
					)}
				</div>
			</header>
			<ScrollToTop />
			<div className='app'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/more-restaurants' element={<MoreRestaurants />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/place-order' element={<PlaceOrder />} />
					<Route
						path='/admin/*'
						element={
							user && user.isAdmin ? <AdminPanel /> : <Navigate to='/' />
						}
					/>
				</Routes>
			</div>
			{!isAdminRoute && <Footer />}
		</>
	)
}

export default App

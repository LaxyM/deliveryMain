import React, { useState } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import MoreRestaurants from './pages/MoreRestaurants/MoreRestaurants'
import Login from './components/Login/Login'
import AdminPanel from './components/AdminPanel/AdminPanel'
import Menu from './pages/Menu/Menu'

function App() {
	const [showLogin, setShowLogin] = useState(false)
	const [user, setUser] = useState(null) // состояние для текущего пользователя
	const location = useLocation()

	const isAdminRoute = location.pathname.startsWith('/admin')

	return (
		<>
			{showLogin && <Login setShowLogin={setShowLogin} setUser={setUser} />}
			<header className='main-header'>
				<div className='navbar-container'>
					{user && user.isAdmin ? null : <Navbar setShowLogin={setShowLogin} />}
				</div>
			</header>
			<div className='app'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/more-restaurants' element={<MoreRestaurants />} />
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

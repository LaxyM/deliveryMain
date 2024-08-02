import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const StoreContext = createContext(null)

const StoreContextProvider = props => {
	const [cartItems, setCartItems] = useState({})
	const [foodList, setFoodList] = useState([])
	const [menuList, setMenuList] = useState([])
	const [error, setError] = useState(null)
	const [user, setUser] = useState(null) // Добавлено состояние пользователя

	const url = 'https://66a5f78923b29e17a1a1615f.mockapi.io/'
	const url2 = 'https://66a94cd0613eced4eba50bb0.mockapi.io/'
	const url3 = 'https://66acd002f009b9d5c7337a17.mockapi.io/users'

	const addToCart = itemId => {
		setCartItems(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }))
	}

	const removeFromCart = itemId => {
		setCartItems(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }))
	}

	const getTotalCartCount = () => {
		return Object.values(cartItems).reduce(
			(total, count) => total + (count > 0 ? count : 0),
			0
		)
	}

	const getTotalCartAmount = () => {
		return Object.entries(cartItems).reduce((total, [itemId, count]) => {
			const item = foodList.find(product => product._id === itemId)
			return total + (item ? item.price * count : 0)
		}, 0)
	}

	const fetchFoodList = async () => {
		try {
			const response = await axios.get(url + '/api/dishes/dishes')
			setFoodList(response.data)
		} catch (error) {
			console.error('Error fetching food list:', error)
		}
	}

	const fetchMenuList = async () => {
		try {
			const response = await axios.get(url2 + 'api/dishes/menu/dishes')
			setMenuList(response.data)
		} catch (error) {
			console.error('Error fetching menu list:', error)
		}
	}

	const loginUser = async (email, password) => {
		try {
			const response = await axios.get(
				`${url3}?email=${email}&password=${password}`
			)
			if (response.data.length > 0) {
				const user = response.data[0]
				setUser(user)
				localStorage.setItem('user', JSON.stringify(user))
				return user
			} else {
				setError('User not found')
				return null
			}
		} catch (error) {
			setError('Error logging in. Please try again.')
			console.error('Error logging in:', error)
			return null
		}
	}

	const registerUser = async (name, email, password) => {
		try {
			const response = await axios.post(url3, {
				name,
				email,
				password,
				isAdmin: false, // Assuming new users are not admins by default
			})
			return response.data
		} catch (error) {
			setError('Registration failed. Please try again.')
			console.error('Error registering user:', error)
			return null
		}
	}

	const logoutUser = () => {
		setUser(null)
		localStorage.removeItem('user')
	}

	useEffect(() => {
		async function loadData() {
			await fetchFoodList()
			await fetchMenuList()
		}
		loadData()
	}, [])

	useEffect(() => {
		const storedUser = localStorage.getItem('user')
		if (storedUser) {
			setUser(JSON.parse(storedUser))
		}
	}, [])

	const contextValue = {
		cartItems,
		setCartItems,
		addToCart,
		removeFromCart,
		getTotalCartCount,
		foodList,
		menuList,
		getTotalCartAmount,
		loginUser,
		registerUser,
		logoutUser, // Добавлена функция для выхода
		error,
		user, // Добавлена информация о пользователе
	}

	return (
		<StoreContext.Provider value={contextValue}>
			{props.children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider

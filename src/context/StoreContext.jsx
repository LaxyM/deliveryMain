import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const StoreContext = createContext(null)

const StoreContextProvider = props => {
	const [cartItems, setCartItems] = useState({})
	const url = 'https://66a5f78923b29e17a1a1615f.mockapi.io/'
	const url2 = 'https://66a94cd0613eced4eba50bb0.mockapi.io/'
	const url3 = 'https://66acd002f009b9d5c7337a17.mockapi.io/users'
	const [foodList, setFoodList] = useState([])
	const [menuList, setMenuList] = useState([])
	const [error, setError] = useState(null)

	const addToCart = itemId => {
		if (!cartItems[itemId]) {
			setCartItems(prev => ({ ...prev, [itemId]: 1 }))
		} else {
			setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
		}
	}

	const removeFromCart = itemId => {
		setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
	}

	const getTotalCartCount = () => {
		let totalCount = 0
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				totalCount += cartItems[item]
			}
		}
		return totalCount
	}

	const getTotalCartAmount = () => {
		let totalAmount = 0
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = foodList.find(product => product._id === item)
				if (itemInfo) {
					totalAmount += itemInfo.price * cartItems[item]
				}
			}
		}
		return totalAmount
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
				return response.data[0]
			} else {
				throw new Error('User not found')
			}
		} catch (error) {
			setError(error.message)
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

	useEffect(() => {
		async function loadData() {
			await fetchFoodList()
			await fetchMenuList()
		}
		loadData()
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
		error,
	}

	return (
		<StoreContext.Provider value={contextValue}>
			{props.children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider

/* eslint-disable react/prop-types */
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const StoreContext = createContext(null)

const StoreContextProvider = props => {
	const [cartItems, setCartItems] = useState({})
	const url = 'https://66a5f78923b29e17a1a1615f.mockapi.io/'
	const url2 = 'https://66a94cd0613eced4eba50bb0.mockapi.io/'
	const [foodList, setFoodList] = useState([])
	const [menuList, setMenuList] = useState([])

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
				totalAmount += itemInfo.price * cartItems[item]
			}
		}
		return totalAmount
	}



	const fetchFoodList = async () => {
		try {
			const response = await axios.get(url + '/api/dishes/dishes')
			console.log('Food data received:', response.data)
			setFoodList(response.data)
		} catch (error) {
			console.error('Error fetching food list:', error)
		}
	}

	const fetchMenuList = async () => {
		try {
			const response = await axios.get(url2 + 'api/dishes/menu/dishes')
			console.log('Menu data received:', response.data)
			setMenuList(response.data)
		} catch (error) {
			console.error('Error fetching menu list:', error)
		}
	}

	useEffect(() => {
		async function loadDate() {
			await fetchFoodList()
			await fetchMenuList()
		}
		loadDate()
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
	}

	return (
		<StoreContext.Provider value={contextValue}>
			{props.children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider

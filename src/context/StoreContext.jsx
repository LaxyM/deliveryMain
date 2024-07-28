import axios from 'axios'
import { createContext, useEffect, useState } from 'react'


export const StoreContext = createContext(null)

const StoreContextProvider = props => {
	const [cartItems, setCartItems] = useState({})
    const url = 'https://66a5f78923b29e17a1a1615f.mockapi.io/'
    const [foodList, setFoodList] = useState([])




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




    const fetchFoodList = async () => {
        const response = await axios.get(url + '/api/dishes/dishes')
        setFoodList(response.data.data)
    }





	// useEffect(() => {
	// 	console.log(cartItems)
	// })








	const contextValue = {
		cartItems,
		setCartItems,
		addToCart,
		removeFromCart,
		getTotalCartCount,
	}

	return (
		<StoreContext.Provider value={contextValue}>
			{props.children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
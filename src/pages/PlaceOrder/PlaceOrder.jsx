import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
	const { getTotalCartAmount, getCartDetails, placeOrder, clearCart } =
		useContext(StoreContext)
	const navigate = useNavigate()

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		street: '',
		city: '',
		zipCode: '',
		country: '',
		phone: '',
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const orderData = {
			...formData,
			items: getCartDetails(),
			totalAmount: getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 2),
		}

		const response = await placeOrder(orderData)

		if (response) {
			console.log('Order placed successfully')
			clearCart() // Очистка корзины после успешного заказа
			navigate('/order-confirmation')
		} else {
			console.error('Failed to place order')
		}
	}

	return (
		<form className='place-order' onSubmit={handleSubmit}>
			<div className='place-order-left'>
				<p className='title'>Information about delivery</p>
				<div className='multi-fields'>
					<input
						type='text'
						name='firstName'
						placeholder='First name'
						value={formData.firstName}
						onChange={handleChange}
					/>
					<input
						type='text'
						name='lastName'
						placeholder='Last name'
						value={formData.lastName}
						onChange={handleChange}
					/>
				</div>
				<input
					type='email'
					name='email'
					placeholder='Email address'
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='street'
					placeholder='Street'
					value={formData.street}
					onChange={handleChange}
				/>
				<div className='multi-fields'>
					<input
						type='text'
						name='city'
						placeholder='City'
						value={formData.city}
						onChange={handleChange}
					/>
				</div>
				<div className='multi-fields'>
					<input
						type='text'
						name='zipCode'
						placeholder='Zip code'
						value={formData.zipCode}
						onChange={handleChange}
					/>
					<input
						type='text'
						name='country'
						placeholder='Country'
						value={formData.country}
						onChange={handleChange}
					/>
				</div>
				<input
					type='text'
					name='phone'
					placeholder='Phone'
					value={formData.phone}
					onChange={handleChange}
				/>
			</div>
			<div className='place-order-right'>
				<div className='cart-total'>
					<h2>Cart Totals</h2>
					<div className='cart-total-details'>
						<p>Subtotal</p>
						<p>{getTotalCartAmount()}$</p>
					</div>
					<hr />
					<div className='cart-total-details'>
						<p>Delivery Fee</p>
						<p>{getTotalCartAmount() === 0 ? 0 : 2}$</p>
					</div>
					<hr />
					<div className='cart-total-details'>
						<b>Total</b>
						{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}$
					</div>
					<button type='submit'>PROCEED TO CHECKOUT</button>
				</div>
			</div>
		</form>
	)
}

export default PlaceOrder

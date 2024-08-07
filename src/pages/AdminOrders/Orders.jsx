import React, { useEffect, useState } from 'react'
import './Orders.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

const Orders = () => {
	const [orders, setOrders] = useState([])
	const url = 'https://66acd002f009b9d5c7337a17.mockapi.io/orders'

	const fetchAllOrders = async () => {
		try {
			const response = await axios.get(url)
			setOrders(response.data)
		} catch (error) {
			toast.error('Error fetching orders')
			console.error('Error fetching orders:', error)
		}
	}

	const deleteOrder = async orderId => {
		try {
			await axios.delete(`${url}/${orderId}`)
			setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId))
			toast.success('Order deleted successfully')
		} catch (error) {
			toast.error('Error deleting order')
			console.error('Error deleting order:', error)
		}
	}

	const handleRefresh = () => {
		fetchAllOrders()
	}

	useEffect(() => {
		fetchAllOrders()
	}, [])

	return (
		<div className='order-add'>
			<div className='order-header'>
				<h3>Order Page</h3>
				<button className='refresh-button' onClick={handleRefresh}>
					Refresh Orders
				</button>
			</div>
			<div className='order-list'>
				{orders.map(order => (
					<div key={order.id} className='order-item'>
						<img src={assets.parsel_icon} alt='' />
						<div>
							<p className='order-item-food'>
								{order.items.map((item, index) => (
									<span key={item.id}>
										{item.name} x {item.quantity}
										{index < order.items.length - 1 ? ', ' : ''}
									</span>
								))}
							</p>
							<p className='order-item-name'>
								{order.firstName} {order.lastName}
							</p>
							<div className='order-item-address'>
								<p>{order.street}</p>
								<p>
									{order.city}, {order.country}, {order.zipCode}
								</p>
							</div>
							<p className='order-item-phone'>{order.phone}</p>
						</div>
						<p>Items: {order.items.length}</p>
						<p>${order.totalAmount}</p>
						<div className='order-item-actions'>
							<select>
								<option value='Food Processing'>Food Processing</option>
								<option value='Out for delivery'>Out for delivery</option>
								<option value='Delivered'>Delivered</option>
							</select>
							<button
								className='delete-order-button'
								onClick={() => deleteOrder(order.id)}
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Orders

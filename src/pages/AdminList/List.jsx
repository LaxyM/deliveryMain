import React, { useState, useEffect, useContext } from 'react'
import './List.css'
import { StoreContext } from '../../context/StoreContext'
import { Pagination } from 'antd'

const List = () => {
	const { foodList, removeFood, fetchFoodList } = useContext(StoreContext)
	const [currentPage, setCurrentPage] = useState(1)
	const pageSize = 7 // Количество элементов на одной странице

	useEffect(() => {
		fetchFoodList()
	}, [])

	const handlePageChange = page => {
		setCurrentPage(page)
	}

	// Определяем индексы элементов для текущей страницы
	const startIndex = (currentPage - 1) * pageSize
	const currentPageItems = foodList.slice(startIndex, startIndex + pageSize)

	return (
		<div className='list'>
			<div className='list-header'>
				<p>All Dishes List</p>
				<button className='refresh-button' onClick={fetchFoodList}>
					Refresh
				</button>
			</div>
			<div className='list-table'>
				<div className='list-table-format title'>
					<b>Image</b>
					<b>Name</b>
					<b>Category</b>
					<b>Price</b>
					<b>Action</b>
				</div>
				{currentPageItems.map((item, index) => (
					<div key={index} className='list-table-format'>
						<img src={item.image} alt='' />
						<p>{item.name}</p>
						<p>{item.category}</p>
						<p>${item.price}</p>
						<button
							className='delete-button'
							onClick={() => removeFood(item._id)}
						>
							Delete
						</button>
					</div>
				))}
			</div>
			<Pagination
				current={currentPage}
				pageSize={pageSize}
				total={foodList.length}
				onChange={handlePageChange}
			/>
		</div>
	)
}

export default List

import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import { storage } from '../../firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import axios from 'axios'

const Add = () => {
	const [image, setImage] = useState(null)
	const [data, setData] = useState({
		name: '',
		description: '',
		price: '',
		category: 'Appetizers',
	})

	const onChangeHandler = event => {
		const name = event.target.name
		const value = event.target.value
		setData(prevData => ({ ...prevData, [name]: value }))
	}

	const uploadImageToFirebase = async image => {
		const imageRef = ref(storage, `images/${image.name}`)
		await uploadBytes(imageRef, image)
		const imageUrl = await getDownloadURL(imageRef)
		return imageUrl
	}

	const onSubmitHandler = async event => {
		event.preventDefault()
		if (!image) {
			toast.error('Please upload an image.')
			return
		}

		try {
			console.log('Uploading image to Firebase...')
			const imageUrl = await uploadImageToFirebase(image)
			console.log('Image URL:', imageUrl)

			const response = await axios.post(
				'https://66a5f78923b29e17a1a1615f.mockapi.io/api/dishes/dishes',
				{
					...data,
					price: Number(data.price),
					image: imageUrl,
				}
			)

			console.log('Server response:', response.data)

			if (response.data) {
				setData({
					name: '',
					description: '',
					price: '',
					category: 'Appetizers',
				})
				setImage(null)
				toast.success('Dish added successfully!')
			} else {
				toast.error('Failed to add the dish.')
			}
		} catch (error) {
			toast.error('Error adding the dish.')
			console.error('Error adding the dish:', error)
		}
	}

	return (
		<div className='add'>
			<form className='flex-col' onSubmit={onSubmitHandler}>
				<div className='add-img-upload flex-col'>
					<p>Upload Image</p>
					<label htmlFor='image'>
						<img
							src={image ? URL.createObjectURL(image) : assets.upload}
							alt='Upload preview'
						/>
					</label>
					<input
						onChange={e => setImage(e.target.files[0])}
						type='file'
						id='image'
						hidden
						required
					/>
				</div>
				<div className='add-product-name flex-col'>
					<p>Product name</p>
					<input
						onChange={onChangeHandler}
						value={data.name}
						type='text'
						name='name'
						placeholder='Type here'
					/>
				</div>
				<div className='add-product-description flex-col'>
					<p>Product description</p>
					<textarea
						onChange={onChangeHandler}
						value={data.description}
						name='description'
						rows='6'
						placeholder='Write content here'
					></textarea>
				</div>
				<div className='add-category-price'>
					<div className='add-category flex-col'>
						<p>Product category</p>
						<select onChange={onChangeHandler} name='category'>
							<option value='Appetizers'>Appetizers</option>
							<option value='Breakfast'>Breakfast</option>
							<option value='Salads'>Salads</option>
							<option value='Burgers'>Burgers</option>
							<option value='Pasta & Sides'>Pasta & Sides</option>
							<option value='Steak & BBQ'>Steak & BBQ</option>
							<option value='Fish & Seafoods'>Fish & Seafoods</option>
							<option value='Kids Menu'>Kids Menu</option>
							<option value='Desserts'>Desserts</option>
							<option value='Beverages'>Beverages</option>
						</select>
					</div>
					<div className='add-price flex-col'>
						<p>Product price</p>
						<input
							onChange={onChangeHandler}
							value={data.price}
							type='number'
							name='price'
							placeholder='20$'
						/>
					</div>
				</div>
				<button type='submit' className='add-btn'>
					Add
				</button>
			</form>
		</div>
	)
}

export default Add

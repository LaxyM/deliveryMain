import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({ setShowLogin, setUser }) => {
	const [currState, setCurrState] = useState('Sign Up')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const navigate = useNavigate()
	const { loginUser, registerUser, error } = useContext(StoreContext)

	const handleSubmit = async e => {
		e.preventDefault()
		setErrorMessage('') // Clear any previous error messages
		if (currState === 'Login') {
			const user = await loginUser(email, password)
			if (user) {
				setUser(user)
				localStorage.setItem('isAuthenticated', 'true')
				navigate(user.isAdmin ? '/admin' : '/')
				setShowLogin(false)
			} else {
				setErrorMessage('User not found. Please check your credentials.')
			}
		} else {
			const user = await registerUser(name, email, password)
			if (user) {
				setUser(user)
				localStorage.setItem('isAuthenticated', 'true')
				navigate('/')
				setShowLogin(false)
			} else {
				setErrorMessage('Registration failed. Please try again.')
			}
		}
	}

	return (
		<div className='login'>
			<form className='login-container' onSubmit={handleSubmit}>
				<div className='login-title'>
					<h2>{currState}</h2>
					<img
						onClick={() => setShowLogin(false)}
						src={assets.cross_icon}
						alt='Close'
					/>
				</div>
				<div className='login-inputs'>
					{currState === 'Sign Up' && (
						<input
							type='text'
							placeholder='Your name'
							value={name}
							onChange={e => setName(e.target.value)}
							required
						/>
					)}
					<input
						type='email'
						placeholder='Your email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
					<button type='submit'>
						{currState === 'Sign Up' ? 'Create account' : 'Login'}
					</button>
					{errorMessage && <p className='error'>{errorMessage}</p>}
					<div className='login-condition'>
						<input type='checkbox' required />
						<p>By continuing, I agree to the terms of use & privacy policy.</p>
					</div>
					{currState === 'Login' ? (
						<p>
							Create a new account?{' '}
							<span onClick={() => setCurrState('Sign Up')}>Click here</span>
						</p>
					) : (
						<p>
							Already have an account?{' '}
							<span onClick={() => setCurrState('Login')}>Login here</span>
						</p>
					)}
				</div>
			</form>
		</div>
	)
}

export default Login

import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth'

export default function Login() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState(undefined)

	const navigate = useNavigate()

	const { loginUser } = useContext(AuthContext)

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password }

		axios.post('/auth/login', requestBody)
			.then(response => {
				// redirect -> Events
				// navigate('/login')

				const token = response.data.authToken
				// call login user function from auth context
				loginUser(token)
				navigate('/')
			})
			.catch(err => {
				const errorDescrition = err.response.data.message
				setErrorMessage(errorDescrition)
			})
	}

	return (
		<>
		<div class='loginBox'>

			<div class='switchBox'>

			<form class='startForm' onSubmit={handleSubmit}>
			<h1 class='addressHeadline'>Login</h1>
				<input class="formInput" type="text" name="email" value={email} onChange={handleEmail} placeholder='Email' />
				
				<input class="formInput" type="password" value={password} onChange={handlePassword} placeholder='Password' />

				<button class='details-btn' type="submit">Log in</button>
			</form>

			<Link class='startSwitchBox' to='/signup'><h1>Signup</h1></Link>

			</div>
			
		</div>
		{errorMessage && <p>{errorMessage}</p>}
		</>
	)
}
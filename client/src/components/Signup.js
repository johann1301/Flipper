import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export default function Signup() {

 const [email, setEmail] = useState ('')
 const [name, setName] = useState ('')
 const [password, setPassword] = useState ('')
 const [birthday, setBirthday] = useState ('')
 const [errorMessage, setErrorMessage] = useState(undefined)

 const navigate = useNavigate()

    const handleEmail = e => setEmail(e.target.value)
	const handleName = e => setName(e.target.value)
	const handlePassword = e => setPassword(e.target.value)
    const handleBirthday = e => setBirthday(e.target.value)

    const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password, name, birthday }

		axios.post('/auth/signup', requestBody)
			.then(response => {
				// redirect -> login 
				navigate('/login')
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

		<Link class='startSwitchBox' to='/login'><h1>Login</h1></Link>

            <form class='startForm' onSubmit={handleSubmit}>

			    <h1 class='addressHeadline'>Signup </h1>

				<input class="formInput" type="text" name="email" value={email} onChange={handleEmail} placeholder='Email'/>
				
				<input class="formInput" type="password" value={password} onChange={handlePassword} placeholder='Password'/>
				
				<input class="formInput" type="text" value={name} onChange={handleName} placeholder='Name'/>

                <label class='addressHeadline'>Birthday: </label>
				<input class="formInput" type="date" value={birthday} onChange={handleBirthday} />

				<button class='details-btn' type="submit">Sign Up</button>
            </form> 
              
         </div>
		 {errorMessage && <p>{errorMessage}</p>}
		</div>
		</>
	)
}
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
		<div className='loginBox'>
			
		<div className='switchBox'>

		<Link className='startSwitchBox' to='/login'><h1>Login</h1></Link>

            <form className='startForm' onSubmit={handleSubmit}>

			    <h1 className='addressHeadline'>Signup </h1>

				<input className="formInput" type="text" name="email" value={email} onChange={handleEmail} placeholder='Email'/>
				
				<input className="formInput" type="password" value={password} onChange={handlePassword} placeholder='Password'/>
				
				<input className="formInput" type="text" value={name} onChange={handleName} placeholder='Name'/>

                <label className='addressHeadline'>Birthday: </label>
				<input className="formInput" type="date" value={birthday} onChange={handleBirthday} />

				<button className='details-btn' type="submit">Sign Up</button>
            </form> 
              
         </div>
		 {errorMessage && <p>{errorMessage}</p>}
		</div>
		</>
	)
}
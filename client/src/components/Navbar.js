import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'

export default function EventCard() {

    const {isLoggedIn, user, logoutUser} = useContext(AuthContext)


// console.log('user', user)

	return (
		<div className='navbar'>

         <Link className='logo' to={'/home'}>
         <box-icon type='solid' name='network-chart' size='lg' color='#ffffff'></box-icon>Flipper
        </Link>

        <Link className='details-link' to={'/'}>
			Home <box-icon className='icons' name='home' type='solid' color='#ffffff'  ></box-icon>
        </Link>

        <Link className='details-link' to={'/events'}>
			Search <box-icon className='icons' name='search' type='solid' color='#ffffff' ></box-icon>
        </Link>

        <Link className='details-link' to={'/flipper'}>
			Flipper <box-icon className='icons' name='wink-tongue' color='#ffffff'></box-icon>
        </Link>

        <Link className='details-link' to={'/calendar'}>
			Calendar<box-icon className='icons' name='calendar' type='solid' color='#ffffff' ></box-icon>
        </Link>

        <Link className='details-link' to={'/favorites'}>
			Favorites <box-icon className='icons' name='star' type='solid' color='#ffffff' ></box-icon>
        </Link>

        <Link className='details-link' to={'/messages'}>
			Messages<box-icon className='icons' type='solid' name='message-rounded-dots' color='#ffffff'></box-icon>
        </Link>
        
        <Link className='details-link' to={'/create'}>
			Create an Event<box-icon className='icons' type='solid' name='plus-circle' color='#ffffff'></box-icon>
        </Link>

        

        
{isLoggedIn ?(
    <>

        <button className='details-button' onClick={logoutUser}>
        Logout<box-icon className='icons' name='log-out' type='solid' color='#ffffff' ></box-icon>
        </button>   
	</>
):(
    <>
    

        <Link className='details-link' to={'/login'}>
			Login/Signup <box-icon className='icons' type='solid' name='log-in' color='#ffffff'></box-icon>
        </Link>
        </>
)}
</div>  
	)
    
}
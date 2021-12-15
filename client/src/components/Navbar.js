import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'

export default function EventCard() {

    const {isLoggedIn, user, logoutUser} = useContext(AuthContext)


// console.log('user', user)

	return (
		<div class='navbar'>

         <Link class='logo' to={'/home'}>
         <box-icon type='solid' name='network-chart' size='lg' color='#ffffff'></box-icon>Flipper
        </Link>

        <Link class='details-link' to={'/home'}>
			Home <box-icon class='icons' name='home' type='solid' color='#ffffff'  ></box-icon>
        </Link>

        <Link class='details-link' to={'/events'}>
			Search <box-icon class='icons' name='search' type='solid' color='#ffffff' ></box-icon>
        </Link>

        <Link class='details-link' to={'/flipper'}>
			Flipper <box-icon class='icons' name='wink-tongue' color='#ffffff'></box-icon>
        </Link>

        <Link class='details-link' to={'/calendar'}>
			Calendar<box-icon class='icons' name='calendar' type='solid' color='#ffffff' ></box-icon>
        </Link>

        <Link class='details-link' to={'/favorites'}>
			Favorites <box-icon class='icons' name='star' type='solid' color='#ffffff' ></box-icon>
        </Link>

        <Link class='details-link' to={'/messages'}>
			Messages<box-icon class='icons' type='solid' name='message-rounded-dots' color='#ffffff'></box-icon>
        </Link>
        
        <Link class='details-link' to={'/create'}>
			Create an Event<box-icon class='icons' type='solid' name='plus-circle' color='#ffffff'></box-icon>
        </Link>

        

        
{isLoggedIn ?(
    <>

        <button class='details-button' onClick={logoutUser}>
        Logout<box-icon class='icons' name='log-out' type='solid' color='#ffffff' ></box-icon>
        </button>   
	</>
):(
    <>
    

        <Link class='details-link' to={'/login'}>
			Login/Signup <box-icon class='icons' type='solid' name='log-in' color='#ffffff'></box-icon>
        </Link>
        </>
)}
</div>  
	)
    
}
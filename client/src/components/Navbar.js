import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'

export default function EventCard() {

    const {isLoggedIn, user} = useContext(AuthContext)


// console.log('user', user)

	return (
		<div class='navbar'>

        <Link class='details-link' to={'/home'}>
			Home
        </Link>

        <Link class='details-link' to={'/events'}>
			Search
        </Link>

        <Link class='details-link' to={'/flipper'}>
			Flipper
        </Link>

        <Link class='details-link' to={'/calendar'}>
			Calendar
        </Link>

        <Link class='details-link' to={'/favorites'}>
			Favorites
        </Link>

        <Link class='details-link' to={'/messages'}>
			Messages
        </Link>
        
    

        

        
{isLoggedIn ?(
    <>
    <Link class='details-link' to={'/create'}>
			Create an Event +
        </Link>

        <button>Logout</button>   
	</>
):(
    <>
    <Link class='details-link' to={'/signup'}>
			Signup
        </Link>

        <Link class='details-link' to={'/login'}>
			Login
        </Link>
        </>
)}
</div>  
	)
    
}
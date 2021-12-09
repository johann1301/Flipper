import React from 'react'
import { Link } from 'react-router-dom'

export default function EventCard() {
	return (
		<div class='navbar'>

        <Link class='button' to={'/home'}>
			Home
        </Link>

        <Link class='button' to={'/events'}>
			Search
        </Link>

        <Link class='button' to={'/flipper'}>
			Flipper
        </Link>

        <Link class='button' to={'/calendar'}>
			Calendar
        </Link>

        <Link class='button' to={'/favorites'}>
			Favorites
        </Link>

        <Link class='button' to={'/messages'}>
			Messages
        </Link>

        <Link class='button' to={'/create'}>
			Create an Event +
        </Link>

        

       
            
		</div>
	)
}
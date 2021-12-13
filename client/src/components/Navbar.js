import React from 'react'
import { Link } from 'react-router-dom'

export default function EventCard() {
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

        <Link class='details-link' to={'/create'}>
			Create an Event +
        </Link>

        

       
            
		</div>
	)
}
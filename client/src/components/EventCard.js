import React from 'react'
import { Link } from 'react-router-dom'

export default function EventCard(props) {
	return (
		<div>

        <Link to={`/events/${props._id}`}>
			<h1>{props.title} </h1>
        </Link>

            <h3>{props.description}</h3>
            
		</div>
	)
}
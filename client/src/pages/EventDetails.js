import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function EventDetails() {

	const [event, setEvent] = useState(null)

	const { id } = useParams()

	useEffect(() => {

		axios.get(`/api/events/${id}`)
			.then(response => {
				setEvent(response.data)
			})
			.catch(err => console.log(err))

	}, [])

	return (
		<>
			{event && (
				<>
					<h1>Project Details</h1>
					<h3>{event.title}</h3>
					<p>{event.description}</p>
					
				</>
			)}
		</>
	)
}
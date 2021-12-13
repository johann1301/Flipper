import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import EventCard from '../components/EventCard'



export default function ProjectList() {

	const [events, setEvents] = useState([])

	const getAllEvents = () => {
		// request all the events from the server
		axios.get('/api/events')
			.then(response => {
				
				setEvents(response.data)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getAllEvents()
	}, [])

	if (events.length === 0) {
		return <></>
	}
	return (
		<>
			<h1>All the Events</h1>
			<div class='flex'>
            {events.map(event => <EventCard key={event._id} {...event} />)}
            </div>
		</>
	)
}
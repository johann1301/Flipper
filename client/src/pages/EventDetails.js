import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function EventDetails() {

	const storedToken = localStorage.getItem('authToken')

	const [event, setEvent] = useState(null)

	const { id } = useParams()

	useEffect(() => {

		axios.get(`/api/events/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				setEvent(response.data)
			})
			.catch(err => console.log(err))

	}, [])

	return (
		<>
			{event && (
				<>
					
					<h1>{event.title}</h1>
					<img src={event.imageUrl} alt={event.title} width="600" height="300"></img>
					<h3>{event.date} Starting at:{event.time}</h3>
					<h3 >
                    {event.options.music.musicType} 
                    {event.options.culture.cultureType} 
                    {event.options.sport.sportType} 
                    {event.options.education.educationType}
                    {event.options.other.other}
                    </h3>
                    <h3>
                    {event.options.music.musicGenre} 
                    {event.options.culture.cultureGenre} 
                    {event.options.sport.sportGenre} 
                    {event.options.education.educationGenre}
                    </h3>
					<p>{event.description}</p>
					<h3>{event.price}€</h3>
	
      
					
				</>
			)}
		</>
	)
}
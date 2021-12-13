import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function EventCard(props) {



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


  let list = events
  .filter(event => event.address.city.toLowerCase().includes(props.searchCity.toLowerCase()))
  .filter(event => event.date >= props.searchDate )
  .filter(event => (event.category === props.searchCategory ) && props.searchCategory !== '')
  .map ( event =>{

	return (
		
  <div class='eventCard'>

  <Link to={`/events/${event._id}`}>
  
  <p class='userName'>Username comes here</p>

  <div class='inCard'>
  
  
  <img src={event.imageUrl} alt={event.title} width="250" height="130"></img>

    <div class='cardInfoBox'>

     

	 <div class='directInfo'>

	 <div>
      <p class='cardInfo'>{event.date} {event.time}PM</p>
     </div>

     <div>
      <p class='cardInfo'>
        {event.options.music.musicType} 
        {event.options.culture.cultureType} 
        {event.options.sport.sportType} 
        {event.options.education.educationType}
        {event.options.other.other}
      </p>
     </div>

	 </div>

	 <div class='directInfo'>

	 <div>
	  <p class='cardInfo'><box-icon name='map'></box-icon>{event.address.city}</p>
     </div>

	 <div>
      <p class='cardInfo'>
        {event.options.music.musicGenre} 
        {event.options.culture.cultureGenre} 
        {event.options.sport.sportGenre} 
        {event.options.education.educationGenre}
      </p>
	 </div>

	 </div>

	 </div>

    </div>

 </Link>
</div>

	)
})

return (
  <>
  {list}
  </>

)

}

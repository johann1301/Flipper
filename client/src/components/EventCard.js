import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function EventCard(props) {

  const storedToken = localStorage.getItem('authToken')

  const [events, setEvents] = useState([])

	const getAllEvents = () => {
		// request all the events from the server
		axios.get('/api/events', { headers: { Authorization: `Bearer ${storedToken}` } })
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
  .filter(event => (event.category === props.searchCategory || !props.searchCategory ))
  .filter(event => (event.options.music.musicGenre === props.searchMusicGenre || !props.searchMusicGenre ))
  .filter(event => (event.options.music.musicType === props.searchMusicType || !props.searchMusicType ))
  .filter(event => (event.options.culture.cultureGenre === props.searchCultureGenre || !props.searchCultureGenre ))
  .filter(event => (event.options.culture.cultureType === props.searchCultureType || !props.searchCultureType ))
  .filter(event => (event.options.sport.sportType === props.searchSportType || !props.searchSportType ))
  .filter(event => (event.options.education.educationGenre === props.searchEducationGenre || !props.searchEducationGenre ))
  .filter(event => (event.options.education.educationType === props.searchEducationType || !props.searchEducationType ))
  .map ( event =>{

	return (
		
  <div class='eventCard'>

  <Link class0='eventCardLink' to={`/events/${event._id}`}>
  
  <p class='userName'><box-icon type='solid' name='user-circle'></box-icon>Username comes here</p>

  <div class='inCard'>
  
  <div class='titleContainer'>
  <img class='titleImg' src={event.imageUrl} alt={event.title} width="300" height="130"></img>

  <h3 class='cardTitle'>{event.title}</h3>
</div>
    <div class='cardInfoBox'>

     

	 <div class='directInfoOne'>

	 <div>
      <p class='cardInfoOne'>{event.date} {event.time}PM</p>
     </div>

     <div>
      <p class='cardInfoTwo'>
        {event.options.music.musicType} 
        {event.options.culture.cultureType} 
        {event.options.sport.sportType} 
        {event.options.education.educationType}
        {event.options.other.other}
      </p>
     </div>

	 </div>

	 <div class='directInfoTwo'>

	 <div>
	  <p class='cardInfoThree'><box-icon name='map'></box-icon>{event.address.city}</p>
     </div>

	 <div>
      <p class='cardInfoFour'>
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
if (list.length === 0) {
  return <>
  <div class='myButtonDirection'>
    <Link class='createButton' to={`/create`}>
		Creat an event +
    </Link>
  </div>
  </>
}
return (
  <>
  {list}
  </>

)

}

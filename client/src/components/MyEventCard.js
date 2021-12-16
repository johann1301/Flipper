import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/auth'
import {  useContext } from 'react'

export default function EventCard(props) {

    const {  user } = useContext(AuthContext);

    const LoggedInOwner = user?._id 

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
  .filter(event => (event.owner === LoggedInOwner)) 
  .map ( event =>{
 
	return (
		
  <div key={event._id} className='eventCard'>

  <Link to={`/events/${event._id}`}>
  
  <p className='userName'><box-icon type='solid' name='user-circle'></box-icon>{user.name}</p>

  <div className='inCard'>
  
  <div className='titleContainer'>
  <img className='titleImg' src={event.imageUrl} alt={event.title} width="250" height="130"></img>

  <h3 className='cardTitle'>{event.title}</h3>
  </div>
    <div className='cardInfoBox'>

     

	 <div className='directInfoOne'>

	 <div>
      <p className='cardInfoOne'>{event.date} {event.time}PM</p>
     </div>

     <div>
      <p className='cardInfoTwo'>
        {event.options.music.musicType} 
        {event.options.culture.cultureType} 
        {event.options.sport.sportType} 
        {event.options.education.educationType}
        {event.options.other.other}
      </p>
     </div>

	 </div>

	 <div className='directInfoTwo'>

	 <div>
	  <p className='cardInfoThree'><box-icon name='map'></box-icon>{event.address.city}</p>
     </div>

	 <div>
      <p className='cardInfoFour'>
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
  return (
  <div className='myButtonDirection'>
    <Link className='createButton' to={`/create`}>
		Creat an event +
    </Link>
  </div>
  )
}
return (
  <>
  <div className='myList'>
  {list}
  </div>
  </>

)

}


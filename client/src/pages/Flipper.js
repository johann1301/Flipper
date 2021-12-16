import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/auth'
import {  useContext } from 'react'

export default function Flipper(props) {

    const {  user } = useContext(AuthContext);

    const LoggedInOwner = user?._id 

  const storedToken = localStorage.getItem('authToken')

  const [events, setEvents] = useState([])

	const getAllEvents = () => {
		// request all the events from the server
		axios.get('/api/events', { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				
				setEvents(response.data[Math.floor(Math.random() * response.data.length -1 )])
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
        <div className='flipper'>
        <h1>Your Activity for Today</h1>

        <button className='shuffle-btn' onClick={getAllEvents}>Shuffle <box-icon class='icons' name='shuffle' color='#ffffff' ></box-icon></button>
        

  <div key={events._id} className='eventCard'>

  <Link to={`/events/${events._id}`}>
  
  <p className='userName'><box-icon type='solid' name='user-circle'></box-icon>{user.name}</p>

  <div className='inCard'>
  
  <div className='titleContainer'>
  <img className='titleImg' src={events.imageUrl} alt={events.title} width="300" height="130"></img>

  <h3 className='cardTitle'>{events.title}</h3>
  </div>
    <div className='cardInfoBox'>

     

	 <div className='directInfoOne'>

	 <div>
      <p className='cardInfoOne'>{events.date} {events.time}PM</p>
     </div>

     <div>
      <p className='cardInfoTwo'>
        {events.options.music.musicType} 
        {events.options.culture.cultureType} 
        {events.options.sport.sportType} 
        {events.options.education.educationType}
        {events.options.other.other}
      </p>
     </div>

	 </div>

	 <div className='directInfoTwo'>

	 <div>
	  <p className='cardInfoThree'><box-icon name='map'></box-icon>{events.address.city}</p>
     </div>

	 <div>
      <p className='cardInfoFour'>
        {events.options.music.musicGenre} 
        {events.options.culture.cultureGenre} 
        {events.options.sport.sportGenre} 
        {events.options.education.educationGenre}
      </p>
	 </div>

	 </div>

	 </div>

    </div>

 </Link>
</div>

</div>
</>
	)
    }


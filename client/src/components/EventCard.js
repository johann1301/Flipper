import React from 'react'
import { Link } from 'react-router-dom'

export default function EventCard(props) {

	return (
		
<div class='eventCard'>

  <Link to={`/events/${props._id}`}>
  
  <p class='userName'>Username comes here</p>

  <div class='inCard'>
  
  
  <img src={props.imageUrl} alt={props.title} width="250" height="130"></img>

    <div class='cardInfoBox'>

     

	 <div class='directInfo'>

	 <div>
      <p class='cardInfo'>{props.date} {props.time}PM</p>
     </div>

     <div>
      <p class='cardInfo'>
        {props.options.music.musicType} 
        {props.options.culture.cultureType} 
        {props.options.sport.sportType} 
        {props.options.education.educationType}
        {props.options.other.other}
      </p>
     </div>

	 </div>

	 <div class='directInfo'>

	 <div>
	  <p class='cardInfo'><box-icon name='map'></box-icon>{props.address.city}</p>
     </div>

	 <div>
      <p class='cardInfo'>
        {props.options.music.musicGenre} 
        {props.options.culture.cultureGenre} 
        {props.options.sport.sportGenre} 
        {props.options.education.educationGenre}
      </p>
	 </div>

	 </div>

	 </div>

    </div>

 </Link>
</div>
        

            
            
		
	)
}
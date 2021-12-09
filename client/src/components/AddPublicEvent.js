import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function AddPublicEvent(props) {

	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState(0)
	const [street, setStreet] = useState('')
	const [number, setNumber] = useState('')
	const [zipcode, setZipcode] = useState(0)
	const [city, setCity] = useState('')
	const [musicGenre, setMusicGenre] = useState('')
	const [musicType, setMusicType] = useState('')
	const [cultureGenre, setCultureGenre] = useState('')
	const [cultureType, setCultureType] = useState('')
	const [sportGenre, setSportGenre] = useState('')
	const [sportType, setSportType] = useState('')
	const [educationGenre, setEducationGenre] = useState('')
	const [educationType, setEducationType] = useState('')
	const [other, setOther] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState(0)
	
	
	
	

	
	console.log(number)
	

    const handleSubmit = e => {

	  e.preventDefault()

      const requestBody = { title, date, time, address:{ street, number, zipcode, 
		city }, category: { music: { musicGenre, musicType }, culture:{ cultureGenre, cultureType }, 
		sport: { sportGenre, sportType }, education: { educationGenre, educationType }, other: { other } },
		description, price }


        axios.post('/api/create/public', requestBody)
		
	      .then(response => {

	      })

	      .catch(err => console.log(err))
 
    
}

	return (
		<div>

          <h1>Add public event</h1>

		  <form onSubmit={handleSubmit}>
            <label htmlFor='title'></label>
			<input 
			  id='title'
			  type='text'
			  value={title}
			  placeholder="Title"
			  onChange={e => setTitle(e.target.value)}
			 />

			<label htmlFor='date'></label>
			<input 
			  id='date'
			  type='text'
			  value={date}
			  placeholder="Date"
			  onChange={e => setDate(e.target.value)}
			 />

            <label htmlFor='time'>Date:</label>
			<input 
			  id='time'
			  type='number'
			  value={time}
			  placeholder="Time"
			  onChange={e => setTime(e.target.value)}
			 />

            <label htmlFor='street'>Street:</label>
			<input 
			  id='street'
			  type='text'
			  value={street}
			  placeholder="Street"
			  onChange={e => setStreet(e.target.value)}
			 />

            <label htmlFor='number'>Number:</label>
			<input 
			  id='number'
			  type='number'
			  value={number}
			  placeholder="Number"
			  onChange={e => setNumber(e.target.value)}
			 />

            <label htmlFor='zipcode'>Zipcode:</label>
			<input 
			  id='zipcode'
			  type='number'
			  value={zipcode}
			  placeholder="Zipcode"
			  onChange={e => setZipcode(e.target.value)}
			 />

            <label htmlFor='city'>City:</label>
			<input 
			  id='city'
			  type='text'
			  value={city}
			  placeholder="City"
			  onChange={e => setCity(e.target.value)}
			 />

            <label htmlFor='musicGenre'>musicGenre:</label>
			<input 
			  id='musicGenre'
			  type='text'
			  value={musicGenre}
			  placeholder="musicGenre"
			  onChange={e => setMusicGenre(e.target.value)}
			 />

            <label htmlFor='musicType'>musicType:</label>
			<input 
			  id='musicType'
			  type='text'
			  value={musicType}
			  placeholder="musicType"
			  onChange={e => setMusicType(e.target.value)}
			 />

            <label htmlFor='cultureGenre'>cultureGenre:</label>
			<input 
			  id='cultureGenre'
			  type='text'
			  value={cultureGenre}
			  placeholder="cultureGenre"
			  onChange={e => setCultureGenre(e.target.value)}
			 />

            <label htmlFor='cultureType'>cultureType:</label>
			<input 
			  id='cultureType'
			  type='text'
			  value={cultureType}
			  placeholder="cultureType"
			  onChange={e => setCultureType(e.target.value)}
			 />

            <label htmlFor='sportGenre'>sportGenre:</label>
			<input 
			  id='sportGenre'
			  type='text'
			  value={sportGenre}
			  placeholder="sportGenre"
			  onChange={e => setSportGenre(e.target.value)}
			 />

            <label htmlFor='sportType'>sportType:</label>
			<input 
			  id='sportType'
			  type='text'
			  value={sportType}
			  placeholder="sportType"
			  onChange={e => setSportType(e.target.value)}
			 />

            <label htmlFor='educationGenre'>educationGenre:</label>
			<input 
			  id='educationGenre'
			  type='text'
			  value={educationGenre}
			  placeholder="educationGenre"
			  onChange={e => setEducationGenre(e.target.value)}
			 />

            <label htmlFor='educationType'>educationType:</label>
			<input 
			  id='educationType'
			  type='text'
			  value={educationType}
			  placeholder="educationType"
			  onChange={e => setEducationType(e.target.value)}
			 />

            <label htmlFor='other'>Other:</label>
			<input 
			  id='other'
			  type='text'
			  value={other}
			  placeholder="Other"
			  onChange={e => setOther(e.target.value)}
			 />

            <label htmlFor='description'>Description:</label>
			<input 
			  id='description'
			  type='text'
			  value={description}
			  placeholder="Description"
			  onChange={e => setDescription(e.target.value)}
			 />

            <label htmlFor='price'>Price:</label>
			<input 
			  id='price'
			  type='number'
			  value={price}
			  placeholder="Price"
			  onChange={e => setPrice(e.target.value)}
			 />
			 <button type='submit'>Add Event</button>

		  </form>
        
            
		</div>
	)
}
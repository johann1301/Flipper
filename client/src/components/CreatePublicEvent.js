import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/auth'
import {  useContext } from 'react'
import { useNavigate } from 'react-router-dom'


export default function AddPublicEvent() {

	const {  user } = useContext(AuthContext);

	const owner = user?._id;

	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const [street, setStreet] = useState('')
	const [number, setNumber] = useState('')
	const [zipcode, setZipcode] = useState('')
	const [city, setCity] = useState('')
	const [category, setCategory] = useState('')
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
	const [price, setPrice] = useState('')
	const [imageUrl, setImageUrl] = useState('')

	let navigate = useNavigate();


// Clear the typed fields
	const onChangeHandeler = e => { 
        setMusicGenre('');
		setMusicType('') ;
		setCultureGenre('');
		setCultureType('');
		setSportType('');
		setEducationGenre('');
		setEducationType('');
		setOther('');
        setCategory(e.target.value)
    }
	
	
	
	const handleUpload = (file) => {
		return axios
		  .post('/api/upload', file, { headers: { Authorization: `Bearer ${storedToken}` } })
		  .then((res) => res.data)
	
		  .catch((err) => console.log(err));
	  };
	
	  const handleFileUpload = (e) => {
		// const uploadData = new FormData()
		console.log('The file to be uploaded is: ', e.target.files[0]);
	
		const uploadData = new FormData();
	
		uploadData.append('imageURL', e.target.files[0]);
	
		console.log('the data', uploadData);
	
		handleUpload(uploadData)
		  .then((response) => {
			// console.log(response);
			setImageUrl(response.secure_url);
		  })
		  .catch((err) => console.log('Error when uploading the file: ', err));
	  };

	  const storedToken = localStorage.getItem('authToken')

	

    const handleSubmit = e => {

	  e.preventDefault()

	
      const requestBody = { imageUrl, title, date, time, address:{ street, number, zipcode, 
		city }, category, options: { music: { musicGenre, musicType }, culture:{ cultureGenre, cultureType }, 
		sport: { sportGenre, sportType }, education: { educationGenre, educationType }, other: { other } },
		description, price, owner }


        axios.post('/api/create/public', requestBody, { headers: { Authorization: `Bearer ${storedToken}` } } )
		
	      .then(response => {
			navigate(`/calendar/my`)
	      })

	      .catch(err => console.log(err))
 
    
}

	return (
		<div >

          

		  <form class='form' onSubmit={handleSubmit} enctype="multipart/form-data">
		    <h1 class='createHeadline'>Public event</h1>

			<h2 class='pictreHeadline'>Title picture:</h2>

			<input
          class="formInput"
          name="imageUrl"
          type="file"
          //   value={imageUrl}

          onChange={handleFileUpload}
        />
            
			<input 
			class='formInput'
			  id='title'
			  type='text'
			  value={title}
			  placeholder="Title"
			  onChange={e => setTitle(e.target.value)}
			 />

			
			<input 
			class='formInput'
			  id='date'
			  type='date'
			  value={date}
			  placeholder="Date"
			  onChange={e => setDate(e.target.value)}
			 />

            
			<input 
			class='formInput'
			  id='time'
			  type='time'
			  value={time}
			  placeholder="Time"
			  onChange={e => setTime(e.target.value)}
			 />

			 <h2 class='addressHeadline'>Address:</h2>

          <div class='addAddress'>

            
			<input 
			class='formInput'
			  id='street'
			  type='text'
			  value={street}
			  placeholder="Street"
			  onChange={e => setStreet(e.target.value)}
			 />

            
			<input 
			class='formInputNum'
			  id='number'
			  type='number'
			  value={number}
			  placeholder="Number"
			  onChange={e => setNumber(e.target.value)}
			 />

          </div>

		  <div class='addAddress'>

            
			<input 
			class='formInputNum'
			  id='zipcode'
			  type='number'
			  value={zipcode}
			  placeholder="Zipcode"
			  onChange={e => setZipcode(e.target.value)}
			 />

			<input 
			class='formInput'
			  id='city'
			  type='text'
			  value={city}
			  placeholder="City"
			  onChange={e => setCity(e.target.value)}
			 />

          </div>

		  <h2 class='categoryHeadline'>What kind of event are you hosting?</h2>
           
		    <select class='formInput' onChange={onChangeHandeler} name="category">
		
		       <option class='selector' value="">-Category-</option>
		       <option class='selector' value="Music">Music</option>
		       <option class='selector' value="Culture">Culture</option>
		       <option class='selector' value="Sport">Sport</option>
		       <option class='selector' value="Education">Education</option>
		       <option class='selector' value="Other">Other</option>
		       
	
            </select>



			{category === 'Music' &&

			
            <div >

			<select class='formInput' onChange={e => setMusicGenre(e.target.value)} name="musicGenre">
		
		       <option class='selector' value="">-Genre-</option>
		       <option class='selector' value="Techno">Techno</option>
		       <option class='selector' value="House">House</option>
		       <option class='selector' value="Hip Hop">Hip Hop</option>
		       <option class='selector' value="Rock">Rock</option>
		       <option class='selector' value="R&B">R&B</option>
			   <option class='selector' value="Pop">Pop</option>
		       <option class='selector' value="Old school">Old School</option>
		       <option class='selector' value="Classic">Classic</option>
		       <option class='selector' value="Schlager">Schlager</option>
		       <option class='selector' value="Other">Other</option>
		       
		       
	
            </select>

			<select class='formInput' onChange={e => setMusicType(e.target.value)} name="musicGenre">
		
		        <option class='selector' value="">-Type-</option>
		        <option class='selector' value="Club">Club</option>
		        <option class='selector' value="Bar">Bar</option>
		        <option class='selector' value="Open air">Open Air</option>
		        <option class='selector' value="Festival">Festival</option>
		        <option class='selector' value="Concert">Concert</option>
		        <option class='selector' value="Other">Other</option>
		
	        </select>

            </div>
            }

			{category === 'Culture' &&
                <div>

				<select class='formInput' onChange={e => setCultureType(e.target.value)} name="musicGenre">
		
		            <option class='selector' value="">-Type-</option>
		            <option class='selector' value="Museum">Museum</option>
		            <option class='selector' value="Gallery">Gallery</option>
		            <option class='selector' value="Theater">Theater</option>
		            <option class='selector' value="Movies">Movies</option>
		            <option class='selector' value="Books">Books</option>
			        <option class='selector' value="Fashion">Fashion</option>
		            <option class='selector' value="Exhibition">Exhibition</option>
		            <option class='selector' value="Other">Other</option>
		        
                </select>


				
				<select class='formInput' onChange={e => setCultureGenre(e.target.value)} name="musicGenre">

		            <option class='selector' value="">-Genre-</option>
		            <option class='selector' value="History">History</option>
		            <option class='selector' value="Modern">Modern</option>
		            <option class='selector' value="Pop culture">Pop Culture</option>
		            <option class='selector' value="Future">Future</option>
		            <option class='selector' value="Other">Other</option>
			       
				</select>

				  
			   </div>
            }

            {category === 'Sport' &&
                <div>

				<select class='formInput' onChange={e => setSportType(e.target.value)} name="musicGenre">
		
				<option class='selector' value="">-Type-</option>
		            <option class='selector' value="Ball sport">Ball Sport</option>
		            <option class='selector' value="Cardio">Cardio</option>
		            <option class='selector' value="Yoga">Yoga</option>
		            <option class='selector' value="Weights training">Weights Training</option>
		            <option class='selector' value="Chess">Chess</option>
					<option class='selector' value="Other">Other</option>
			       
				</select>

			        
			    </div>
            }

            {category === 'Education' &&
                <div>

				<select class='formInput' onChange={e => setEducationGenre(e.target.value)} name="musicGenre">
				    
					<option class='selector' value="">-Branch-</option>
		            <option class='selector' value="Economy">Economy</option>
		            <option class='selector' value="Politics">Politics</option>
		            <option class='selector' value="Environment">Environment</option>
		            <option class='selector' value="Marketing">Marketing</option>
		            <option class='selector' value="Information technology">Information Technology</option>
					<option class='selector' value="Other">Other</option>
		            
				</select>


				<select class='formInput' onChange={e => setEducationType(e.target.value)} name="musicGenre">
				    
					<option class='selector' value="">-Type-</option>
		            <option class='selector' value="Lecture">Lecture</option>
		            <option class='selector' value="Discussion">Discussion</option>
		            <option class='selector' value="Continuing education">Continuing education</option>
		            <option class='selector' value="Bootcamp">Bootcamp</option>
		            <option class='selector' value="Open house">Open House</option>
					<option class='selector' value="Other">Other</option>
		            
			       
				</select>

            
			        
			  </div>
            }

            {category === 'Other' &&
                <div>
			        <input 
			         class='formInput'
			         id='other'
			         type='text'
			         value={other}
			         placeholder="Other"
			         onChange={e => setOther(e.target.value)}
			        />
			    </div>
            }

			<h2 class='categoryHeadline'>What is your event about?</h2>

            <textarea 
			 class='formInput' 
			 type="text" 
			 name="description" 
			 id="description" 
			 placeholder="Description" 
			 onChange={e => setDescription(e.target.value)}
			 rows="10" 
			 cols="50">
			 </textarea>
			

            
			<input 
			class='formInput'
			  id='price'
			  type='number'
			  value={price}
			  placeholder="Price"
			  onChange={e => setPrice(e.target.value)}
			 />


			 <button class='details-btn' type='submit'>Add Event</button>

		  </form>
        
		
		</div>
	)
}
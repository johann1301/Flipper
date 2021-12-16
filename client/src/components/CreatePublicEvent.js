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
		sport: { sportType }, education: { educationGenre, educationType }, other: { other } },
		description, price, owner }


        axios.post('/api/create/public', requestBody, { headers: { Authorization: `Bearer ${storedToken}` } } )
		
	      .then(response => {
			navigate(`/calendar/my`)
	      })

	      .catch(err => console.log(err))
 
    
}

	return (
		<div >

          

		  <form className='form' onSubmit={handleSubmit} encType="multipart/form-data">
		    <h1 className='createHeadline'>Public event</h1>

			<h2 className='pictreHeadline'>Title picture:</h2>

			<input
          className="formInput"
          name="imageUrl"
          type="file"
          //   value={imageUrl}

          onChange={handleFileUpload}
        />
            
			<input 
			className='formInput'
			  id='title'
			  type='text'
			  value={title}
			  placeholder="Title"
			  onChange={e => setTitle(e.target.value)}
			 />

			
			<input 
			className='formInput'
			  id='date'
			  type='date'
			  value={date}
			  placeholder="Date"
			  onChange={e => setDate(e.target.value)}
			 />

            
			<input 
			className='formInput'
			  id='time'
			  type='time'
			  value={time}
			  placeholder="Time"
			  onChange={e => setTime(e.target.value)}
			 />

			 <h2 className='addressHeadline'>Address:</h2>

          <div className='addAddress'>

            
			<input 
			className='formInput'
			  id='street'
			  type='text'
			  value={street}
			  placeholder="Street"
			  onChange={e => setStreet(e.target.value)}
			 />

            
			<input 
			className='formInputNum'
			  id='number'
			  type='number'
			  value={number}
			  placeholder="Number"
			  onChange={e => setNumber(e.target.value)}
			 />

          </div>

		  <div className='addAddress'>

            
			<input 
			className='formInputNum'
			  id='zipcode'
			  type='number'
			  value={zipcode}
			  placeholder="Zipcode"
			  onChange={e => setZipcode(e.target.value)}
			 />

			<input 
			className='formInput'
			  id='city'
			  type='text'
			  value={city}
			  placeholder="City"
			  onChange={e => setCity(e.target.value)}
			 />

          </div>

		  <h2 className='categoryHeadline'>What kind of event are you hosting?</h2>
           
		    <select className='formInput' onChange={onChangeHandeler} name="category">
		
		       <option className='selector' value="">-Category-</option>
		       <option className='selector' value="Music">Music</option>
		       <option className='selector' value="Culture">Culture</option>
		       <option className='selector' value="Sport">Sport</option>
		       <option className='selector' value="Education">Education</option>
		       <option className='selector' value="Other">Other</option>
		       
	
            </select>



			{category === 'Music' &&

			
            <div >

			<select className='formInput' onChange={e => setMusicGenre(e.target.value)} name="musicGenre">
		
		       <option className='selector' value="">-Genre-</option>
		       <option className='selector' value="Techno">Techno</option>
		       <option className='selector' value="House">House</option>
		       <option className='selector' value="Hip Hop">Hip Hop</option>
		       <option className='selector' value="Rock">Rock</option>
		       <option className='selector' value="R&B">R&B</option>
			   <option className='selector' value="Pop">Pop</option>
		       <option className='selector' value="Old school">Old School</option>
		       <option className='selector' value="Classic">Classic</option>
		       <option className='selector' value="Schlager">Schlager</option>
		       <option className='selector' value="Other">Other</option>
		       
		       
	
            </select>

			<select className='formInput' onChange={e => setMusicType(e.target.value)} name="musicGenre">
		
		        <option className='selector' value="">-Type-</option>
		        <option className='selector' value="Club">Club</option>
		        <option className='selector' value="Bar">Bar</option>
		        <option className='selector' value="Open air">Open Air</option>
		        <option className='selector' value="Festival">Festival</option>
		        <option className='selector' value="Concert">Concert</option>
		        <option className='selector' value="Other">Other</option>
		
	        </select>

            </div>
            }

			{category === 'Culture' &&
                <div>

				<select className='formInput' onChange={e => setCultureType(e.target.value)} name="musicGenre">
		
		            <option className='selector' value="">-Type-</option>
		            <option className='selector' value="Museum">Museum</option>
		            <option className='selector' value="Gallery">Gallery</option>
		            <option className='selector' value="Theater">Theater</option>
		            <option className='selector' value="Movies">Movies</option>
		            <option className='selector' value="Books">Books</option>
			        <option className='selector' value="Fashion">Fashion</option>
		            <option className='selector' value="Exhibition">Exhibition</option>
		            <option className='selector' value="Other">Other</option>
		        
                </select>


				
				<select className='formInput' onChange={e => setCultureGenre(e.target.value)} name="musicGenre">

		            <option className='selector' value="">-Genre-</option>
		            <option className='selector' value="History">History</option>
		            <option className='selector' value="Modern">Modern</option>
		            <option className='selector' value="Pop culture">Pop Culture</option>
		            <option className='selector' value="Future">Future</option>
		            <option className='selector' value="Other">Other</option>
			       
				</select>

				  
			   </div>
            }

            {category === 'Sport' &&
                <div>

				<select className='formInput' onChange={e => setSportType(e.target.value)} name="musicGenre">
		
				<option className='selector' value="">-Type-</option>
		            <option className='selector' value="Ball sport">Ball Sport</option>
		            <option className='selector' value="Cardio">Cardio</option>
		            <option className='selector' value="Yoga">Yoga</option>
		            <option className='selector' value="Weights training">Weights Training</option>
		            <option className='selector' value="Chess">Chess</option>
					<option className='selector' value="Other">Other</option>
			       
				</select>

			        
			    </div>
            }

            {category === 'Education' &&
                <div>

				<select className='formInput' onChange={e => setEducationGenre(e.target.value)} name="musicGenre">
				    
					<option className='selector' value="">-Branch-</option>
		            <option className='selector' value="Economy">Economy</option>
		            <option className='selector' value="Politics">Politics</option>
		            <option className='selector' value="Environment">Environment</option>
		            <option className='selector' value="Marketing">Marketing</option>
		            <option className='selector' value="Information technology">Information Technology</option>
					<option className='selector' value="Other">Other</option>
		            
				</select>


				<select className='formInput' onChange={e => setEducationType(e.target.value)} name="musicGenre">
				    
					<option className='selector' value="">-Type-</option>
		            <option className='selector' value="Lecture">Lecture</option>
		            <option className='selector' value="Discussion">Discussion</option>
		            <option className='selector' value="Continuing education">Continuing education</option>
		            <option className='selector' value="Bootcamp">Bootcamp</option>
		            <option className='selector' value="Open house">Open House</option>
					<option className='selector' value="Other">Other</option>
		            
			       
				</select>

            
			        
			  </div>
            }

            {category === 'Other' &&
                <div>
			        <input 
			         className='formInput'
			         id='other'
			         type='text'
			         value={other}
			         placeholder="Other"
			         onChange={e => setOther(e.target.value)}
			        />
			    </div>
            }

			<h2 className='categoryHeadline'>What is your event about?</h2>

            <textarea 
			 className='formInput' 
			 type="text" 
			 name="description" 
			 id="description" 
			 placeholder="Description" 
			 onChange={e => setDescription(e.target.value)}
			 rows="10" 
			 cols="50">
			 </textarea>
			

            
			<input 
			className='formInput'
			  id='price'
			  type='number'
			  value={price}
			  placeholder="Price"
			  onChange={e => setPrice(e.target.value)}
			 />


			 <button className='details-btn' type='submit'>Add Event</button>

		  </form>
        
		
		</div>
	)
}
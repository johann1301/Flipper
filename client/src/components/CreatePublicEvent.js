import React from 'react'
import { useState } from 'react'
import axios from 'axios'


export default function AddPublicEvent() {

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
	
	
	
	const handleUpload = (file) => {
		return axios
		  .post('/api/upload', file)
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

	

	

    const handleSubmit = e => {

	  e.preventDefault()

	//   if (category === 'music'){
	// 	setCultureGenre('')
	// 	setCultureType('') 
	// 	setSportGenre('')
	// 	setSportType('')
	// 	setEducationGenre('')
	// 	setEducationType('')
	// 	setOther('')
	//   }

	//   if (category === 'culture'){
	// 	setMusicGenre('')
	// 	setMusicType('') 
	// 	setSportGenre('')
	// 	setSportType('')
	// 	setEducationGenre('')
	// 	setEducationType('')
	// 	setOther('')
	//   }

	//   if (category === 'sport'){
	// 	setMusicGenre('')
	// 	setMusicType('') 
	// 	setCultureGenre('')
	// 	setCultureType('')
	// 	setEducationGenre('')
	// 	setEducationType('')
	// 	setOther('')
	//   }

	//   if (category === 'education'){
	// 	setMusicGenre('')
	// 	setMusicType('') 
	// 	setCultureGenre('')
	// 	setCultureType('')
	// 	setSportGenre('')
	// 	setSportType('')
	// 	setOther('')
	//   }

	//   if (category === 'other'){
	// 	setMusicGenre('')
	// 	setMusicType('') 
	// 	setCultureGenre('')
	// 	setCultureType('')
	// 	setSportGenre('')
	// 	setSportType('')
	// 	setEducationGenre('')
	// 	setEducationType('')
	//   }

	//   if (category === 'other'){
	// 	setMusicGenre('')
	// 	setMusicType('') 
	// 	setCultureGenre('')
	// 	setCultureType('')
	// 	setSportGenre('')
	// 	setSportType('')
	// 	setEducationGenre('')
	// 	setEducationType('')
	// 	setOther('')
	//   }

      const requestBody = { imageUrl, title, date, time, address:{ street, number, zipcode, 
		city }, category, options: { music: { musicGenre, musicType }, culture:{ cultureGenre, cultureType }, 
		sport: { sportGenre, sportType }, education: { educationGenre, educationType }, other: { other } },
		description, price }


        axios.post('/api/create/public', requestBody)
		
	      .then(response => {

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
           
		    <select class='formInput' onChange={e => setCategory(e.target.value)} name="category">
		
		       <option class='selector' value="">-Category-</option>
		       <option class='selector' value="music">Music</option>
		       <option class='selector' value="culture">Culture</option>
		       <option class='selector' value="sport">Sport</option>
		       <option class='selector' value="education">Education</option>
		       <option class='selector' value="other">Other</option>
		       
	
            </select>



			{category === 'music' &&

			
            <div >

			<select class='formInput' onChange={e => setMusicGenre(e.target.value)} name="musicGenre">
		
		       <option class='selector' value="">-Genre-</option>
		       <option class='selector' value="techno">Techno</option>
		       <option class='selector' value="house">House</option>
		       <option class='selector' value="hip hop">Hip Hop</option>
		       <option class='selector' value="rock">Rock</option>
		       <option class='selector' value="r&b">R&B</option>
			   <option class='selector' value="pop">Pop</option>
		       <option class='selector' value="old school">Old School</option>
		       <option class='selector' value="classic">Classic</option>
		       <option class='selector' value="schlager">Schlager</option>
		       <option class='selector' value="other">Other</option>
		       
		       
	
            </select>

			<select class='formInput' onChange={e => setMusicType(e.target.value)} name="musicGenre">
		
		        <option class='selector' value="">-Type-</option>
		        <option class='selector' value="club">Club</option>
		        <option class='selector' value="bar">Bar</option>
		        <option class='selector' value="open air">Open Air</option>
		        <option class='selector' value="festival">Festival</option>
		        <option class='selector' value="concert">Concert</option>
		        <option class='selector' value="other">Other</option>
		
	        </select>

            </div>
            }

			{category === 'culture' &&
                <div>

				<select class='formInput' onChange={e => setCultureType(e.target.value)} name="musicGenre">
		
		            <option class='selector' value="">-Type-</option>
		            <option class='selector' value="museum">Museum</option>
		            <option class='selector' value="gallery">Gallery</option>
		            <option class='selector' value="theater">Theater</option>
		            <option class='selector' value="movies">Movies</option>
		            <option class='selector' value="books">Books</option>
			        <option class='selector' value="fashion">Fashion</option>
		            <option class='selector' value="exhibition">Exhibition</option>
		            <option class='selector' value="other">Other</option>
		        
                </select>


				
				<select class='formInput' onChange={e => setCultureGenre(e.target.value)} name="musicGenre">

		            <option class='selector' value="">-Genre-</option>
		            <option class='selector' value="history">History</option>
		            <option class='selector' value="modern">Modern</option>
		            <option class='selector' value="pop culture">Pop Culture</option>
		            <option class='selector' value="future">Future</option>
		            <option class='selector' value="other">Other</option>
			       
				</select>

				  
			   </div>
            }

            {category === 'sport' &&
                <div>

				<select class='formInput' onChange={e => setSportType(e.target.value)} name="musicGenre">
		
				<option class='selector' value="">-Type-</option>
		            <option class='selector' value="ball sport">Ball Sport</option>
		            <option class='selector' value="cardio">Cardio</option>
		            <option class='selector' value="yoga">Yoga</option>
		            <option class='selector' value="weights training">Weights Training</option>
		            <option class='selector' value="chess">Chess</option>
					<option class='selector' value="other">Other</option>
			       
				</select>

			        
			    </div>
            }

            {category === 'education' &&
                <div>

				<select class='formInput' onChange={e => setEducationGenre(e.target.value)} name="musicGenre">
				    
					<option class='selector' value="">-Branch-</option>
		            <option class='selector' value="economy">Economy</option>
		            <option class='selector' value="politics">Politics</option>
		            <option class='selector' value="environment">Environment</option>
		            <option class='selector' value="marketing">Marketing</option>
		            <option class='selector' value="information technology">Information Technology</option>
					<option class='selector' value="other">Other</option>
		            
				</select>


				<select class='formInput' onChange={e => setEducationGenre(e.target.value)} name="musicGenre">
				    
					<option class='selector' value="">-Type-</option>
		            <option class='selector' value="lecture">Lecture</option>
		            <option class='selector' value="discussion">Discussion</option>
		            <option class='selector' value="continuing education">Continuing education</option>
		            <option class='selector' value="bootcamp">Bootcamp</option>
		            <option class='selector' value="open house">Open House</option>
					<option class='selector' value="other">Other</option>
		            
			       
				</select>

            
			        
			  </div>
            }

            {category === 'other' &&
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


			 <button type='submit'>Add Event</button>

		  </form>
        
		
		</div>
	)
}
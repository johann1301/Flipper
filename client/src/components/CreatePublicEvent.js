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
			  type='text'
			  value={date}
			  placeholder="Date"
			  onChange={e => setDate(e.target.value)}
			 />

            
			<input 
			class='formInput'
			  id='time'
			  type='number'
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
            <div>
			
			    <input 
			     class='formInput'
			     id='musicGenre'
			     type='text'
			     value={musicGenre}
			     placeholder="musicGenre"
			     onChange={e => setMusicGenre(e.target.value)}
			    />

            
			    <input 
			     class='formInput'
			     id='musicType'
			     type='text'
			     value={musicType}
			     placeholder="musicType"
			     onChange={e => setMusicType(e.target.value)}
			    />

            </div>
            }

			{category === 'culture' &&
                <div>
			       <input 
			         class='formInput'
			         id='cultureGenre'
			         type='text'
			         value={cultureGenre}
			         placeholder="cultureGenre"
			         onChange={e => setCultureGenre(e.target.value)}
			       />

            
			       <input 
			         class='formInput'
			         id='cultureType'
			         type='text'
			         value={cultureType}
			         placeholder="cultureType"
			         onChange={e => setCultureType(e.target.value)}
			       />
			   </div>
            }

            {category === 'sport' &&
                <div>
			        <input 
			         class='formInput'
			         id='sportGenre'
			         type='text'
			         value={sportGenre}
			         placeholder="sportGenre"
			         onChange={e => setSportGenre(e.target.value)}
			        />

            
			        <input 
			         class='formInput'
			         id='sportType'
			         type='text'
			         value={sportType}
			         placeholder="sportType"
			         onChange={e => setSportType(e.target.value)}
			        />
			    </div>
            }

            {category === 'education' &&
                <div>
			        <input 
			         class='formInput'
			         id='educationGenre'
			         type='text'
			         value={educationGenre}
			         placeholder="educationGenre"
			         onChange={e => setEducationGenre(e.target.value)}
			        />

            
			        <input 
			         class='formInput'
			         id='educationType'
			         type='text'
			         value={educationType}
			         placeholder="educationType"
			         onChange={e => setEducationType(e.target.value)}
			        />
			  </div>
            }

            {category === 'education' &&
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
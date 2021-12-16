import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditProject() {

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

	const { id } = useParams()

    const storedToken = localStorage.getItem('authToken')

	let navigate = useNavigate();

	useEffect(() => {
		axios.get(`/api/events/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				const { imageUrl, title, date, time, address:{ street, number, zipcode, 
                    city }, category, options: { music: { musicGenre, musicType }, culture:{ cultureGenre, cultureType }, 
                    sport: { sportType }, education: { educationGenre, educationType }, other: { other } },
                    description, price } = response.data
				setImageUrl(imageUrl)
                setTitle(title)
                setDate(date)
                setTime(time)
                setStreet(street)
                setNumber(number)
                setZipcode(zipcode)
                setCity(city)
                setCategory(category)
                setMusicGenre(musicGenre)
                setMusicType(musicType)
                setCultureGenre(cultureGenre)
                setCultureType(cultureType)
                setSportType(sportType)
                setEducationGenre(educationGenre)
                setEducationType(educationType)
                setOther(other)
				setDescription(description)
                setPrice(price)
			})
			.catch(err => console.log(err))
	}, [])

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

     


	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { imageUrl, title, date, time, address:{ street, number, zipcode, 
            city }, category, options: { music: { musicGenre, musicType }, culture:{ cultureGenre, cultureType }, 
            sport: { sportType }, education: { educationGenre, educationType }, other: { other } },
            description, price }

		axios.put(`/api/events/${id}`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				// this is a redirect using react router
				navigate(`/events/${id}`)
			})
	}


	return (
		<div >

          

		  <form className='form' onSubmit={handleSubmit} enctype="multipart/form-data">
		    <h1 className='createHeadline'>Edit public event</h1>

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
           
		    <select className='formInput' onChange={onChangeHandeler} name="category" value={category}>
		
		       <option className='selector' value="">-Category-</option>
		       <option className='selector' value="music">Music</option>
		       <option className='selector' value="culture">Culture</option>
		       <option className='selector' value="sport">Sport</option>
		       <option className='selector' value="education">Education</option>
		       <option className='selector' value="other">Other</option>
		       
	
            </select>



			{category === 'music' &&

			
            <div >

			<select className='formInput' onChange={e => setMusicGenre(e.target.value)} name="musicGenre" value={musicGenre}>
		
		       <option className='selector' value="">-Genre-</option>
		       <option className='selector' value="techno">Techno</option>
		       <option className='selector' value="house">House</option>
		       <option className='selector' value="hip hop">Hip Hop</option>
		       <option className='selector' value="rock">Rock</option>
		       <option className='selector' value="r&b">R&B</option>
			   <option className='selector' value="pop">Pop</option>
		       <option className='selector' value="old school">Old School</option>
		       <option className='selector' value="classic">Classic</option>
		       <option className='selector' value="schlager">Schlager</option>
		       <option className='selector' value="other">Other</option>
		       
		       
	
            </select>

			<select className='formInput' onChange={e => setMusicType(e.target.value)} name="musicType" value={musicType}>
		
		        <option className='selector' value="">-Type-</option>
		        <option className='selector' value="club">Club</option>
		        <option className='selector' value="bar">Bar</option>
		        <option className='selector' value="open air">Open Air</option>
		        <option className='selector' value="festival">Festival</option>
		        <option className='selector' value="concert">Concert</option>
		        <option className='selector' value="other">Other</option>
		
	        </select>

            </div>
            }

			{category === 'culture' &&
                <div>

				<select className='formInput' onChange={e => setCultureType(e.target.value)} name="cultureGenre" value={cultureType}>
		
		            <option className='selector' value="">-Type-</option>
		            <option className='selector' value="museum">Museum</option>
		            <option className='selector' value="gallery">Gallery</option>
		            <option className='selector' value="theater">Theater</option>
		            <option className='selector' value="movies">Movies</option>
		            <option className='selector' value="books">Books</option>
			        <option className='selector' value="fashion">Fashion</option>
		            <option className='selector' value="exhibition">Exhibition</option>
		            <option className='selector' value="other">Other</option>
		        
                </select>


				
				<select className='formInput' onChange={e => setCultureGenre(e.target.value)} name="cultureType" value={cultureGenre}>

		            <option className='selector' value="">-Genre-</option>
		            <option className='selector' value="history">History</option>
		            <option className='selector' value="modern">Modern</option>
		            <option className='selector' value="pop culture">Pop Culture</option>
		            <option className='selector' value="future">Future</option>
		            <option className='selector' value="other">Other</option>
			       
				</select>

				  
			   </div>
            }

            {category === 'sport' &&
                <div>

				<select className='formInput' onChange={e => setSportType(e.target.value)} name="sportType" value={sportType}>
		
				<option className='selector' value="">-Type-</option>
		            <option className='selector' value="ball sport">Ball Sport</option>
		            <option className='selector' value="cardio">Cardio</option>
		            <option className='selector' value="yoga">Yoga</option>
		            <option className='selector' value="weights training">Weights Training</option>
		            <option className='selector' value="chess">Chess</option>
					<option className='selector' value="other">Other</option>
			       
				</select>

			        
			    </div>
            }

            {category === 'education' &&
                <div>

				<select className='formInput' onChange={e => setEducationGenre(e.target.value)} name="educationGenre" value={educationGenre}>
				    
					<option className='selector' value="">-Branch-</option>
		            <option className='selector' value="economy">Economy</option>
		            <option className='selector' value="politics">Politics</option>
		            <option className='selector' value="environment">Environment</option>
		            <option className='selector' value="marketing">Marketing</option>
		            <option className='selector' value="information technology">Information Technology</option>
					<option className='selector' value="other">Other</option>
		            
				</select>


				<select className='formInput' onChange={e => setEducationType(e.target.value)} name="educationType" value={educationType}>
				    
					<option className='selector' value="">-Type-</option>
		            <option className='selector' value="lecture">Lecture</option>
		            <option className='selector' value="discussion">Discussion</option>
		            <option className='selector' value="continuing education">Continuing education</option>
		            <option className='selector' value="bootcamp">Bootcamp</option>
		            <option className='selector' value="open house">Open House</option>
					<option className='selector' value="other">Other</option>
		            
			       
				</select>

            
			        
			  </div>
            }

            {category === 'other' &&
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
             value={description}
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
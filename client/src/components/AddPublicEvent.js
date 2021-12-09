import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function AddPublicEvent(props) {

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	
		
	

    const handleSubmit = e => {

	  e.preventDefault()

      const requestBody = {title: title, description: description}


        axios.post('api/events', requestBody)

	      .then(response => {

		    setTitle('')

		    setDescription('')

		    props.refreshEvents()

	      })

	      .catch(err => console.log(err))
 
    
}

	return (
		<div>

          <h1>Add public event</h1>

		  <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title:</label>
			<input 
			  id='title'
			  type='text'
			  value={title}
			  onChange={e => setTitle(e.target.value)}
			 />

			<label htmlFor='description'>Description:</label>
			<input 
			  id='description'
			  type='text'
			  value={description}
			  onChange={e => setDescription(e.target.value)}
			 />
			 <button type='submit'>Add Event</button>

		  </form>
        
            
		</div>
	)
}
import React from 'react'




export default function SearchForm(props) {
     
    const refresh = event => {
        props.setSearchCategory('')
        props.setSearchCity('')
        props.setSearchDate('')

    }
	const onChangeHandeler = e => { 
        props.setSearchMusicGenre('');
		props.setSearchMusicType('') ;
		props.setSearchCultureGenre('');
		props.setSearchCultureType('');
		props.setSearchSportType('');
		props.setSearchEducationGenre('');
		props.setSearchEducationType('');
        props.setSearchCategory(e.target.value)
    }
    



	return (
		<div >

          

		  <form  className='searchForm' onSubmit={refresh} >
		    
            <h1 className='addressHeadline'>Search for Event</h1>
         
			<input 
			className='searchFormInput'
			  type='text'
			  placeholder="City"
			  onChange={e => props.setSearchCity(e.target.value)}
			 />

            <input 
			className='searchFormInput'
			  id='date'
			  type='date'
			  placeholder="Date"
			  onChange={e => props.setSearchDate(e.target.value)}
			 />

            <h2 className='categoryHeadline'>What kind of event are you looking for?</h2>
           
           <select className='searchFormInput' onChange={onChangeHandeler } name="category">
       
              <option className='selector' value="">-Category-</option>
              <option className='selector' value="Music">Music</option>
              <option className='selector' value="Culture">Culture</option>
              <option className='selector' value="Sport">Sport</option>
              <option className='selector' value="Education">Education</option>
              <option className='selector' value="Other">Other</option>
              
   
           </select>



           {props.searchCategory === 'Music' &&

           
           <div >

           <select className='searchFormInput' onChange={e => props.setSearchMusicGenre(e.target.value)} name="musicGenre">
       
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

           <select className='searchFormInput' onChange={e => props.setSearchMusicType(e.target.value)} name="musicGenre">
       
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

           {props.searchCategory === 'Culture' &&
               <div>

               <select className='searchFormInput' onChange={e => props.setSearchCultureType(e.target.value)} name="musicGenre">
       
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


               
               <select className='searchFormInput' onChange={e => props.setSearchCultureGenre(e.target.value)} name="musicGenre">

                   <option className='selector' value="">-Genre-</option>
                   <option className='selector' value="History">History</option>
                   <option className='selector' value="Modern">Modern</option>
                   <option className='selector' value="Pop culture">Pop Culture</option>
                   <option className='selector' value="Future">Future</option>
                   <option className='selector' value="Other">Other</option>
                  
               </select>

                 
              </div>
           }

           {props.searchCategory === 'Sport' &&
               <div>

               <select className='searchFormInput' onChange={e => props.setSearchSportType(e.target.value)} name="musicGenre">
       
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

           {props.searchCategory === 'Education' &&
               <div>

               <select className='searchFormInput' onChange={e => props.setSearchEducationGenre(e.target.value)} name="musicGenre">
                   
                   <option className='selector' value="">-Branch-</option>
                   <option className='selector' value="Economy">Economy</option>
                   <option className='selector' value="Politics">Politics</option>
                   <option className='selector' value="Environment">Environment</option>
                   <option className='selector' value="Marketing">Marketing</option>
                   <option className='selector' value="Information technology">Information Technology</option>
                   <option className='selector' value="Other">Other</option>
                   
               </select>


               <select className='searchFormInput' onChange={e => props.setSearchEducationType(e.target.value)} name="musicGenre">
                   
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
           <button className='details-btn' type='submit' >Reresh</button>
          
		  </form>
        
		
		</div>
	)
}
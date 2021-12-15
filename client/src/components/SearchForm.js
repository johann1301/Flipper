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

          

		  <form  class='searchForm' onSubmit={refresh} >
		    
            <h1 class='addressHeadline'>Search for Event</h1>
         
			<input 
			class='searchFormInput'
			  type='text'
			  placeholder="City"
			  onChange={e => props.setSearchCity(e.target.value)}
			 />

            <input 
			class='searchFormInput'
			  id='date'
			  type='date'
			  placeholder="Date"
			  onChange={e => props.setSearchDate(e.target.value)}
			 />

            <h2 class='categoryHeadline'>What kind of event are you looking for?</h2>
           
           <select class='searchFormInput' onChange={onChangeHandeler } name="category">
       
              <option class='selector' value="">-Category-</option>
              <option class='selector' value="Music">Music</option>
              <option class='selector' value="Culture">Culture</option>
              <option class='selector' value="Sport">Sport</option>
              <option class='selector' value="Education">Education</option>
              <option class='selector' value="Other">Other</option>
              
   
           </select>



           {props.searchCategory === 'Music' &&

           
           <div >

           <select class='searchFormInput' onChange={e => props.setSearchMusicGenre(e.target.value)} name="musicGenre">
       
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

           <select class='searchFormInput' onChange={e => props.setSearchMusicType(e.target.value)} name="musicGenre">
       
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

           {props.searchCategory === 'Culture' &&
               <div>

               <select class='searchFormInput' onChange={e => props.setSearchCultureType(e.target.value)} name="musicGenre">
       
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


               
               <select class='searchFormInput' onChange={e => props.setSearchCultureGenre(e.target.value)} name="musicGenre">

                   <option class='selector' value="">-Genre-</option>
                   <option class='selector' value="History">History</option>
                   <option class='selector' value="Modern">Modern</option>
                   <option class='selector' value="Pop culture">Pop Culture</option>
                   <option class='selector' value="Future">Future</option>
                   <option class='selector' value="Other">Other</option>
                  
               </select>

                 
              </div>
           }

           {props.searchCategory === 'Sport' &&
               <div>

               <select class='searchFormInput' onChange={e => props.setSearchSportType(e.target.value)} name="musicGenre">
       
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

           {props.searchCategory === 'Education' &&
               <div>

               <select class='searchFormInput' onChange={e => props.setSearchEducationGenre(e.target.value)} name="musicGenre">
                   
                   <option class='selector' value="">-Branch-</option>
                   <option class='selector' value="Economy">Economy</option>
                   <option class='selector' value="Politics">Politics</option>
                   <option class='selector' value="Environment">Environment</option>
                   <option class='selector' value="Marketing">Marketing</option>
                   <option class='selector' value="Information technology">Information Technology</option>
                   <option class='selector' value="Other">Other</option>
                   
               </select>


               <select class='searchFormInput' onChange={e => props.setSearchEducationType(e.target.value)} name="musicGenre">
                   
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
           <button class='details-btn' type='submit' >Reresh</button>
          
		  </form>
        
		
		</div>
	)
}
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

          

		  <form  class='form' onSubmit={refresh} >
		    <h1>Search for Event</h1>
         
			<input 
			class='formInput'
			  type='text'
			  placeholder="City"
			  onChange={e => props.setSearchCity(e.target.value)}
			 />

            <input 
			class='formInput'
			  id='date'
			  type='date'
			  placeholder="Date"
			  onChange={e => props.setSearchDate(e.target.value)}
			 />

<h2 class='categoryHeadline'>What kind of event are you looking for?</h2>
           
           <select class='formInput' onChange={onChangeHandeler } name="category">
       
              <option class='selector' value="">-Category-</option>
              <option class='selector' value="music">Music</option>
              <option class='selector' value="culture">Culture</option>
              <option class='selector' value="sport">Sport</option>
              <option class='selector' value="education">Education</option>
              <option class='selector' value="other">Other</option>
              
   
           </select>



           {props.searchCategory === 'music' &&

           
           <div >

           <select class='formInput' onChange={e => props.setSearchMusicGenre(e.target.value)} name="musicGenre">
       
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

           <select class='formInput' onChange={e => props.setSearchMusicType(e.target.value)} name="musicGenre">
       
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

           {props.searchCategory === 'culture' &&
               <div>

               <select class='formInput' onChange={e => props.setSearchCultureType(e.target.value)} name="musicGenre">
       
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


               
               <select class='formInput' onChange={e => props.setSearchCultureGenre(e.target.value)} name="musicGenre">

                   <option class='selector' value="">-Genre-</option>
                   <option class='selector' value="history">History</option>
                   <option class='selector' value="modern">Modern</option>
                   <option class='selector' value="pop culture">Pop Culture</option>
                   <option class='selector' value="future">Future</option>
                   <option class='selector' value="other">Other</option>
                  
               </select>

                 
              </div>
           }

           {props.searchCategory === 'sport' &&
               <div>

               <select class='formInput' onChange={e => props.setSearchSportType(e.target.value)} name="musicGenre">
       
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

           {props.searchCategory === 'education' &&
               <div>

               <select class='formInput' onChange={e => props.setSearchEducationGenre(e.target.value)} name="musicGenre">
                   
                   <option class='selector' value="">-Branch-</option>
                   <option class='selector' value="economy">Economy</option>
                   <option class='selector' value="politics">Politics</option>
                   <option class='selector' value="environment">Environment</option>
                   <option class='selector' value="marketing">Marketing</option>
                   <option class='selector' value="information technology">Information Technology</option>
                   <option class='selector' value="other">Other</option>
                   
               </select>


               <select class='formInput' onChange={e => props.setSearchEducationType(e.target.value)} name="musicGenre">
                   
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
           <button class='details-btn' type='submit' >Reresh</button>

		  </form>
        
		
		</div>
	)
}
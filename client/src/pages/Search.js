import React from 'react'
import EventCard from '../components/EventCard'
import SearchForm from '../components/SearchForm'
import { useState } from 'react'



export default function Search() {

	const [searchCity, setSearchCity] = useState('')
	const [searchDate, setSearchDate] = useState('')
	const [searchCategory, setSearchCategory] = useState('')
	const [searchMusicGenre, setSearchMusicGenre] = useState('')
	const [searchMusicType, setSearchMusicType] = useState('')
	const [searchCultureGenre, setSearchCultureGenre] = useState('')
	const [searchCultureType, setSearchCultureType] = useState('')
	const [searchSportType, setSearchSportType] = useState('')
	const [searchEducationGenre, setSearchEducationGenre] = useState('')
	const [searchEducationType, setSearchEducationType] = useState('')



	return (
		<>
		
			<h1>All the Events</h1>

			<div class='order'>
			<div class='flex'>

			<SearchForm class='searchForm'
			searchDate={searchDate}
			searchCity={searchCity}
			setSearchCity={setSearchCity} 
			setSearchDate={setSearchDate} 
			searchCategory={searchCategory}
			setSearchCategory={setSearchCategory}
			setSearchMusicGenre={setSearchMusicGenre}
			setSearchMusicType={setSearchMusicType}	
			setSearchCultureGenre={setSearchCultureGenre}
			setSearchCultureType={setSearchCultureType}
			setSearchSportType={setSearchSportType}
			setSearchEducationGenre={setSearchEducationGenre}
			setSearchEducationType={setSearchEducationType}
			/>
           <div class='eventCardOrder'>
            <EventCard
			searchCity={searchCity} 
			searchDate={searchDate} 
			searchCategory={searchCategory}
			searchMusicGenre={searchMusicGenre}
			searchMusicType={searchMusicType}
			searchCultureGenre={searchCultureGenre}
			searchCultureType={searchCultureType}
			searchSportType={searchSportType}
			searchEducationGenre={searchEducationGenre}
			searchEducationType={searchEducationType}
			/>
			</div>
			</div>
            

			
			</div>
		</>
	)
}
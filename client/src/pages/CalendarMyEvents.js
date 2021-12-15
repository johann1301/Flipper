import { Link } from 'react-router-dom'
import 'boxicons'
import { AuthContext } from '../context/auth'
import React, {  useContext } from 'react'
import MyEventCard from '../components/MyEventCard'


export default function CreateEvent() {

	const {  user } = useContext(AuthContext)
	

	console.log(user)

	return (
		<>
		<h1>My Events</h1>
		<div class='switchSection'>
		<div class='switchBar'>
		<Link class='switchBarLinkOff' to={'/calendar/attending'}>
           
             Attending Events 
              
           
        </Link>

        <Link class='switchBarLinkOn' to={'/calendar/my'}>

			My Events
            
            
        </Link>
		</div>
		</div>
		<MyEventCard />
		</>
	)
}
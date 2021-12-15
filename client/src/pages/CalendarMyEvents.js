import { Link } from 'react-router-dom'
import 'boxicons'

import MyEventCard from '../components/MyEventCard'




export default function CreateEvent() {


	


	return (
		<>
		<h1>My Events</h1>
		<div class='switchSection'>
		<div class='switchBar'>
		
        <Link class='switchBarLinkOn' to={'/calendar/my'}>

			My Events
            
            
        </Link>

		<Link class='switchBarLinkOff' to={'/calendar/attending'}>
           
             Attending Events 
              
           
        </Link>
		</div>
		</div>
		<MyEventCard />
		
		</>
	)
}
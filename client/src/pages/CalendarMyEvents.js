import { Link } from 'react-router-dom'


import MyEventCard from '../components/MyEventCard'




export default function CreateEvent() {


	


	return (
		<>
		<h1 color='white'>Events</h1>
		<div class='switchSection'>
		<div class='switchBar'>
		
        <Link class='switchBarLinkOff' to={'/calendar/my'}>

			My Events
            
            
        </Link>

		<Link class='switchBarLinkOn' to={'/calendar/attending'}>
           
             Attending Events 
              
           
        </Link>
		</div>
		</div>

        
		<div class='myEventCardOrder'>
		
		<MyEventCard  class='eventCardOrder'/>
		
		</div>
		
		</>
	)
}
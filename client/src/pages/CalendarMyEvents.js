import { Link } from 'react-router-dom'


import MyEventCard from '../components/MyEventCard'




export default function CreateEvent() {


	


	return (
		<>
		<h1 color='white'>Events</h1>
		<div className='switchSection'>
		<div className='switchBar'>
		
        <Link className='switchBarLinkOff' to={'/calendar/my'}>

			My Events
            
            
        </Link>

		<Link className='switchBarLinkOn' to={'/calendar/attending'}>
           
             Attending Events 
              
           
        </Link>
		</div>
		</div>

        
		<div className='myEventCardOrder'>
		
		<MyEventCard  className='eventCardOrder'/>
		
		</div>
		
		</>
	)
}
import { Link } from 'react-router-dom'



export default function CreateEvent() {

	

	return (
        <>
		<h1 color='white'>Events</h1>
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
        </>
        
	)
}
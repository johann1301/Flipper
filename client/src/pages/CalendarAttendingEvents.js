import { Link } from 'react-router-dom'
import 'boxicons'


export default function CreateEvent() {

	

	return (
        <>
		<h1>Attending Events</h1>
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
        </>
        
	)
}
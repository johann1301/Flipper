import { Link } from 'react-router-dom'



export default function CreateEvent() {

	

	return (
        <>
		<h1 color='white'>Events</h1>
        <div className='switchSection'>
		<div className='switchBar'>
		

        <Link className='switchBarLinkOn' to={'/calendar/my'}>

			My Events
            
            
        </Link>

        <Link className='switchBarLinkOff' to={'/calendar/attending'}>
           
             Attending Events 
              
           
        </Link>
		</div>
        </div>
        </>
        
	)
}
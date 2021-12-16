import { Link } from 'react-router-dom'
import 'boxicons'


export default function CreateEvent() {

	

	return (
		<div className='buttonDirection'>
		<Link className='createButton' to={'/create/public'}>
           
			  Public Event 
              <box-icon className='createIcons' name='user' type='solid' color='#ffffff' ></box-icon>
           
        </Link>

        <Link className='createButton' to={'/create/private'}>

			Private Event 
            <box-icon className='createIcons' name='lock-alt' type='solid' color='#ffffff' ></box-icon>
            
        </Link>
		</div>
	)
}
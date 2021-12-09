import { Link } from 'react-router-dom'
import 'boxicons'


export default function CreateEvent() {

	

	return (
		<div class='buttonDirection'>
		<Link class='createButton' to={'/create/public'}>
           
			  Public Event 
              <box-icon class='createIcons' name='user' type='solid' color='#ffffff' ></box-icon>
           
        </Link>

        <Link class='createButton' to={'/create/private'}>

			Private Event 
            <box-icon class='createIcons' name='lock-alt' type='solid' color='#ffffff' ></box-icon>
            
        </Link>
		</div>
	)
}
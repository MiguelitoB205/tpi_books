import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Link, Outlet} from 'react-router-dom'

function Navbar({  eventKey }) {
  const login = 'Login'
  const registrarse = 'Registrarse'
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('Se logró el Navbar'),
  );


  return (
    <div className='navbar' style={{display: 'flex'}}> 
        <div>
        <button
      type="button"
      style={{ backgroundColor: 'darkblue', 
      fontSize: '20px', color: 'aquamarine', 
      borderRadius: '45px', width:'150px', height:'50px'
       }}

      onClick={decoratedOnClick}
      >
      {login}
    </button>
        </div>
     <div>
    <button
    type="button"
    style={{ backgroundColor: 'darkblue', fontSize: '20px', 
    color: 'aquamarine' , borderRadius: '45px', width:'150px',
    height:'50px'}}
    onClick={decoratedOnClick}
    >
    {registrarse}
  </button>
        </div>
        <Outlet/>
    </div>
  );
}

export default Navbar;
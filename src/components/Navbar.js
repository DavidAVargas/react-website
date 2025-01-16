import React, {useState} from 'react'
import { link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <= 960 ) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

  return (
    <>
    <nav className='navbar'>
        <div className='navbat-container'>
            <link to='/' className='navbar-logo'>
            DAV
            </link>
            <div className='menu-icon'>
                <i className={click ? 'fas- fatimes' : 'fas fa-bars'} />

            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <link to='/services' className='nav-links' onClick={closeMoblieMenu}>
                Home
                </link>
              </li>
              <li className='nav-item'>
                <link to='/products' className='nav-links' onClick={closeMoblieMenu}>
                Products
                </link>
              </li>
              <li className='nav-item'>
                <link to='/sign-up' className='nav-links-mobile' onClick={closeMoblieMenu}>
                Sign Up
                </link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP
              </Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
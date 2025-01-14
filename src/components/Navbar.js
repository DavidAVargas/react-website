import React, {useState} from 'react'
import { link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);

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
                <link to='/' className='nav-links' onClick={closeMoblieMenu}>
                Home
                </link>
              </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo3s.png'
const Navbar = () => {
  return (
    <div>
        <header>
            <Link to="/">
           <div className='Logo'>
                <img src={logo}/>
                <span>UARD</span>
            </div>
            </Link>
            <nav>
                <ul>
                    <li>
                       <Link to="/About"> Home</Link>
                    </li>
                    <li>
                       <Link to="/About"> Home</Link>
                    </li>
                    <li>
                       <Link to="/About"> Home</Link>
                    </li>
                    <li>
                       <Link to="/About"> Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
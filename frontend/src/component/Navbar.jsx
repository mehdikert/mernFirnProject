import React from 'react'
import '../component/navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <header className='nav'>
            <div>
                <img src="https://media.giphy.com/media/TyQY0zTXX4x0c/giphy.gif" width={"150px"} alt="" />
            </div>
            <div className="navLink-container">
                <Link className="navLink" to={'/'}>Home</Link>
                <Link className="navLink" to={'/about'}>About</Link>
                <Link className="navLink" to={'/contact'}>Contact</Link>
            </div>
        </header>
    )
}

export default Navbar
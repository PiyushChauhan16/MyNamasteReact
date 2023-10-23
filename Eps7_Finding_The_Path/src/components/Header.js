import React from 'react'
import { LOGO_URL } from '../utilis/constants'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-img" src = {LOGO_URL}></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li className="list-item">
                    <Link to = "/" className='link-style header-link'>Home</Link></li>

                    <li className="list-item">
                    <Link to = "/about" className='link-style header-link'>About Us</Link></li>

                    <li className="list-item">
                    <Link to = "/contact" className='link-style header-link'>Contact Us</Link>
                    </li>
                    <li className="list-item">Cart</li>
                </ul>
            </div>
        </div>
    )
}


export default Header
import React from 'react'
import { LOGO_URL } from '../utilis/constants'
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-img" src = {LOGO_URL}></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li className="list-item">Home</li>
                    <li className="list-item">About Us</li>
                    <li className="list-item">Contact Us</li>
                    <li className="list-item">Cart</li>
                </ul>
            </div>
        </div>
    )
}


export default Header
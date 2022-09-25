import React from 'react'
import './nav.css'

const NavBar = () => {
  return (
    <nav>
        <div className="container">
            <div className="navWrapper">
                <div className="logo">
                    <img src="./images/logo.svg" alt="ema-john  " />
                </div>
                <div className="navLinks">
                    <a href="/">Order</a>
                    <a href="/">Order Review</a>
                    <a href="/">Manage Inventory</a>
                    <a href="/">Login</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
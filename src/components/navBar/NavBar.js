import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <div className="container">
            <div className="navWrapper">
                <div className="logo">
                    <img src="./images/logo.svg" alt="ema-john  " />
                </div>
                <div className="navLinks">
                    <Link to="/">Order</Link>
                    <Link to="/review">Order Review</Link>
                    <Link to="/inventory">Manage Inventory</Link>
                    <Link to="/">Login</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
import React from 'react'
import './navbar.css';
import logo from '../ulia-small-logo.png';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-title"><h2> ד"ר יוליה פרנקין </h2><img src={logo} /></div>
      
    </div>
  )
}

export default Navbar
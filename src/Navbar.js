import React, { useEffect, useState } from 'react'
import  "./nav.css"
import netflixLogo from "./nav images/netflix logo.png"
import netflixAvatar from "./nav images/netflix avatar.png"


function Navbar() {



  return (
    <div className="nav">
    <img className='nav-logo' src={netflixLogo} alt="Netflix Logo" />

    <img className='nav-avatar' src={netflixAvatar} alt="Netflix Avatar" />


    </div>
  )
}

export default Navbar

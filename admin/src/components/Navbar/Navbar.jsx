import React from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.mylogo} alt=''/>
      <img className='profile' src={assets.bhali_profile} alt=''/>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-5 h-20'>
      <div  >
        <img src={logo} className='w-40' alt="Logo Image" />
      </div>
      <div>
        <ul className='flex gap-3 font-bold  ' >
          
        <li><Link to="/aboutus" >About Us</Link></li>
          <li><Link to="/invest" >Invest</Link></li>
          <li><Link to="/loan" >Loans</Link></li>
          
        </ul>

      </div>

      
    </div>
  )
}

export default Navbar
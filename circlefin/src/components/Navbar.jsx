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
        <ul className='flex gap-10 font-bold  ' >
          
        <li className='text-gray-600 p-2 hover:text-black hover:bg-green-100 hover:rounded-md ' ><Link to="/" >Home</Link></li>
          <li className='text-gray-600 p-2 hover:text-black hover:bg-green-100 hover:rounded-md ' ><Link to="/invest" >Invest</Link></li>
          <li className='text-gray-600 p-2 hover:text-black hover:bg-green-100 hover:rounded-md ' ><Link to="/borrow" >Borrow</Link></li>
          <li className='text-gray-600 p-2 hover:text-black hover:bg-green-100 hover:rounded-md ' ><Link to="/aboutus" >About Us</Link></li>
        </ul>

      </div>

      
    </div>
  )
}

export default Navbar
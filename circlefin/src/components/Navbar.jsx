import React from 'react';
import { Link } from "react-router-dom";
// import logo from "../assets/logos/logo.svg";
import logo from "../assets/logos/logo.svg"

const Navbar = () => {
  return ( //  mt-5  fixed top-0 left-0 right-0         sticky top-5         fixed top-0 left-0 right-0
    <div className='z-20 top-0 left-0 right-0 bg-white   p-3 flex items-center justify-between'>
      <div className='ml-3'>
        <Link to="/"><img src={logo} alt="Logo" className='h-10' /></Link>
      </div>
      <div className='mr-5'>
        <ul className='flex'>
        <li>
            <Link className='p-3 mx-2 bg-lime-300 rounded-md text-gray-600 font-semibold  hover:bg-lime-500 transition duration-700' to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link className='p-3 mx-2 bg-lime-300 rounded-md text-gray-600 font-semibold  hover:bg-lime-500 transition duration-700' to="/invest">Invest</Link>
          </li>
          <li>
            <Link className='p-3 mx-2 bg-lime-300 rounded-md text-gray-600 font-semibold  hover:bg-lime-500 transition duration-700' to="/borrow">Borrow</Link>
          </li>
          <li>
            <Link className='p-3 mx-2 bg-lime-300 rounded-md text-gray-600 font-semibold  hover:bg-lime-500 transition duration-700' to="/statistics">Statistics</Link>
          </li>
         
          <li>
            <Link className='p-3 mx-2 bg-lime-300 rounded-md text-gray-600 font-semibold  hover:bg-lime-500 transition duration-700' to="/contactus">Contact Us</Link>
          </li>
          
          
          
          {/* <li>
            <Link className='p-2 mx-2 text-gray-200 rounded-md bg-lime-400 font-bold  hover:bg-lime-500 transition duration-700' to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link className='p-2 text-gray-200 rounded-md bg-lime-400 font-bold  hover:bg-lime-500 transition duration-700' to="/login">Login</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

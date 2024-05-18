import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className='z-20 mt-5 fixed top-0 left-0 right-0 bg-lime-600 p-2 mx-16 rounded-xl flex items-center justify-between'>
      <div className='ml-3'>
        <img src={logo} alt="Logo" className='h-10' />
      </div>
      <div className='mr-5'>
        <ul className='flex'>
          <li>
            <Link className='p-5 text-gray-200 font-bold hover:text-black bg-lime-500 hover:bg-lime-500 transition duration-700' to="/">Home</Link>
          </li>
          <li>
            <Link className='p-5 text-gray-200 font-bold hover:text-black hover:bg-lime-500 transition duration-700' to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link className='p-5 text-gray-200 font-bold hover:text-black hover:bg-lime-500 transition duration-700' to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link className='p-5 text-gray-200 font-bold hover:text-black hover:bg-lime-500 transition duration-700' to="/borrow">Borrow</Link>
          </li>
          <li>
            <Link className='p-2 mx-2 text-gray-200 rounded-md bg-lime-400 font-bold hover:text-black hover:bg-lime-500 transition duration-700' to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link className='p-2 text-gray-200 rounded-md bg-lime-400 font-bold hover:text-black hover:bg-lime-500 transition duration-700' to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo.svg";
import { MyContext } from '../context/context';

const Navbar = () => {
   const {investorRegistered} = useContext(MyContext);
   
 
  return (
    <div className='absolute top-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-3 flex items-center justify-between z-20 rounded-full w-11/12 max-w-6xl'>
      
      <div className='ml-5'>
        <Link to="/">
          <img src={logo} alt="Logo" className='h-12' />
        </Link>
      </div>
      <div className='mr-5'>
        <ul className='flex space-x-4'>
        {
          investorRegistered &&
          <li>
          <Link 
            className='px-4 py-2 bg-lime-500 text-white rounded-full font-semibold hover:bg-lime-600 transition duration-300' 
            to="/dashboard">
            My Dashboard
          </Link>
        </li>
        }
          <li>
            <Link 
              className='px-4 py-2 bg-lime-500 text-white rounded-full font-semibold hover:bg-lime-600 transition duration-300' 
              to="/aboutus">
              About Us
            </Link>
          </li>
          <li>
            <Link 
              className='px-4 py-2 bg-lime-500 text-white rounded-full font-semibold hover:bg-lime-600 transition duration-300' 
              to="/invest">
              Invest
            </Link>
          </li>
          <li>
            <Link 
              className='px-4 py-2 bg-lime-500 text-white rounded-full font-semibold hover:bg-lime-600 transition duration-300' 
              to="/borrow">
              Borrow
            </Link>
          </li>
          <li>
            <Link 
              className='px-4 py-2 bg-lime-500 text-white rounded-full font-semibold hover:bg-lime-600 transition duration-300' 
              to="/statistics">
              Statistics
            </Link>
          </li>
          <li>
            <Link 
              className='px-4 py-2 bg-lime-500 text-white rounded-full font-semibold hover:bg-lime-600 transition duration-300' 
              to="/contactus">
              Contact Us
            </Link>
          </li>
          {/* <li>
            <Link 
              className='px-4 py-2 bg-lime-500 text-white rounded-full font-semibold hover:bg-lime-600 transition duration-300' 
              to="/signup">
              Sign Up
            </Link>
          </li>
          <li>
            <Link 
              className='px-4 py-2 bg-lime-500 text-white rounded-full font-semibold hover:bg-lime-600 transition duration-300' 
              to="/login">
              Login
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

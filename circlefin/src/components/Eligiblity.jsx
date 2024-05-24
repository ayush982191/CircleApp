import React from 'react'
import logo from "../assets/images/congratulationsLogo.gif"

const Eligiblity = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        
    <img src={logo} className='h-[15rem]' alt="" />

    <h1 className='font-bold text-3xl mt-4'>Congratulations,</h1> <br></br>
    <h1 className='text-lime-400 text-xl font-bold'>you are now Eligible to borrow </h1>

    {/* <p className='text-lg font-bold'>Yes,It was not easy,but you did it !</p>
  <p className='font-bold'>Let's find a project together</p> <br></br> */}
  {/* <button className='border-2  border-black bg-purple-400 font-bold rounded-full h-[3rem]  w-96 mt-5'>Go To My Dashboard </button> */}
</div>
  )
}

export default Eligiblity
import React from 'react'
import image from "../assets/techImage1.jpg"
import { Link } from 'react-router-dom';

const StateCard = ({card}) => {
    const {state,nameLocal,randomNo} = card;
    console.log("card=",card)
  return (
    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
  <div className='flex justify-center'>
  <img class="w-[23vw] h-auto rounded-t-xl" src={image} alt="Image Description"/>
  </div>
  <div class="p-4 md:p-5">
    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
      {state}
    </h3>
    <p class="mt-1 text-gray-500 dark:text-neutral-400">
     {nameLocal}
    </p>
    <Link class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
    {randomNo} Opportuinities 
    </Link>
  </div>
</div>
  )
}

export default StateCard
import React from 'react'
import { merchantImageArray } from '../utils/data';
import { Link } from 'react-router-dom';
import { farmerImageArray } from '../utils/data';

const MerchantCard = ({merchant}) => {
    const{name,state,image,id,"Overall Rating": overallRating,amountReceived,"Amount Required":amountRequired,"Annual Revenue" : annualRevenue} = merchant;
    const percent = Math.floor((amountReceived/amountRequired)*100);
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
    <div className='flex justify-center'>
    <img className="w-[16rem] h-[12rem] rounded-t-xl" src={merchantImageArray[id]} alt="Image Description"/>
    </div>
    <div className="p-4 md:p-5">
      <h3 className="text-lg text-center font-bold text-gray-800 dark:text-white">{name}
      </h3>
      {/* <p className="mt-1 text-gray-500 dark:text-neutral-400">
       {name}
      </p> */}
      {/* <progress id="file" value="32" className='' max="100"> 32% </progress> */}
       <p>Amount Required : <span className='font-bold'>{amountRequired}</span></p>

      <div className="flex justify-between mb-1">
  <span className="text-base font-medium text-lime-700 dark:text-white">received</span>
  <span className="text-sm font-medium text-lime-700 dark:text-white">{percent}%</span>
</div>
<div className="w-full my-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-lime-600 h-2.5 rounded-full" style={{width:`${percent}%`}}></div>
</div>


      <div className='flex justify-evenly' >
      <button className='border-lime-400 text-sm p-2 w-25 rounded-md border-2 cursor-text '><span className=''>Overall Rating</span> <span className='text-lime-700 font-bold'>{overallRating}</span> </button>
      <Link to={`/merchant/${id}`}> <button className='p-2 mx-1 rounded-md w-20 text-white bg-lime-500 hover:bg-lime-600'>Details</button></Link>
      </div>
    </div>
  </div>
  )
}

export default MerchantCard
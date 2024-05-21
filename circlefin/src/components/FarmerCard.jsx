import React from 'react'

const FarmerCard = ({farmer}) => {
  const{Name,state,image} = farmer;
  console.log(farmer)
  return (
    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
    <div className='flex justify-center'>
    <img class="w-[15rem] h-[12rem] rounded-t-xl" src={image} alt="Image Description"/>
    </div>
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">{state}
      </h3>
      <p class="mt-1 text-gray-500 dark:text-neutral-400">
       {Name}
      </p>
      {/* <progress id="file" value="32" className='' max="100"> 32% </progress> */}
       <p>Amount Required : <span className='font-bold'>12000</span></p>

      <div class="flex justify-between mb-1">
  <span class="text-base font-medium text-lime-700 dark:text-white">received</span>
  <span class="text-sm font-medium text-lime-700 dark:text-white">45%</span>
</div>
<div class="w-full my-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-lime-600 h-2.5 rounded-full" style={{width:"45%"}}></div>
</div>


      <div className='flex justify-evenly' >
        <button className='border-lime-400 p-2 w-20 rounded-md border-2 hover:bg-lime-100'>Details</button>
        <button className='p-2 mx-1 rounded-md w-20 text-white bg-lime-500 hover:bg-lime-600'>Invest</button>
      </div>
    </div>
  </div>
  )
}

export default FarmerCard
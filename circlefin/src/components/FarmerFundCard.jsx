import React from 'react'
import { Link } from 'react-router-dom';

const FarmerFundCard = ({data}) => {
    const {id,"Fund Name" : fundName,"Target Return":targetReturn,"Risk Level":riskLevel,"Minimum Investment":minInvestment,"Investment Period":investmentPeriod} = data;                                                                      
  return (
    <div>
         <div className='flex flex-col justify-center items-center mt-20'>
        <div className=' p-8 rounded-xl border-black border-2 bg-lime-50' >
            <div className='flex'>
               <div>
            <img src="/src/images/farmland.jpg" className='w-[15rem] h-[15rem] rounded-lg' />   
                </div>
                <div>
                    <h1 className='ml-14 mt-24 font-bold text-lg'>{fundName}</h1>
                </div>
               </div>
               <h1 className=' ml-5 mt-5 text-xl'>
                Target Return: {targetReturn}
               </h1>
               <h1 className=' ml-5 mt-5 text-xl'>
                Risk level: {riskLevel}
               </h1>
               <h1 className=' ml-5 mt-5 text-xl'>
                Minimum Investment: {minInvestment}
               </h1>
               <h1 className= 'ml-5 mt-5 text-xl'>
                Investment Period: {investmentPeriod}
               </h1>
               <Link to={`/farmerfund/${id}`}><button className='border ml-20 mt-5 p-2 rounded-lg border-black bg-lime-200 hover:bg-sky-200'>DETAILS</button></Link>
         </div>
    </div>
    </div>
  )
}

export default FarmerFundCard
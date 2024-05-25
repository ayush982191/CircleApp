import React, { useState } from 'react'
import { farmerFundData } from '../utils/data'
import FarmerFundCard from './FarmerFundCard';
const InvestInFarmerFund = () => {
    const [fundData,setFundData] = useState(farmerFundData);
  return (
    <div className='flex flex-wrap justify-around'>
        {/* <h1>This is farmer fund</h1>
         */}
         {
            farmerFundData.map((data , idx)=><FarmerFundCard key={idx} data={data} />)
         }
    </div>
  )
}

export default InvestInFarmerFund
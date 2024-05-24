import React, { useState } from 'react'
import InvestInFarmers from './InvestInFarmers';
import InvestInFarmerFund from './InvestInFarmerFund';

const FarmingBusinessInvestment = () => {
    const [showBusiness,setShowBusiness] = useState("farmer");
  return (
    <div>
        <div className='flex justify-around'>
            <button onClick={()=>setShowBusiness("farmer")} className='focus:bg-green-200' >Individual</button>
            <button onClick={()=>setShowBusiness("funds")} className='focus:bg-green-200' >Funds</button>
        </div>
        {
            showBusiness == "farmer" ? <InvestInFarmers/> : <InvestInFarmerFund/>
        }
    </div>
  )
}

export default FarmingBusinessInvestment
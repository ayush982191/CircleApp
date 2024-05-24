import React from 'react'
import { useState } from 'react';
import InvestInMerchant from './InvestInMerchant';
import InvestInMerchantFund from './InvestInMerchantFund';

const MerchantBusinessInvestment = () => {
  const [showBusiness,setShowBusiness] = useState("merchant");
  const [merchantClicked,setMerchantClicked] = useState(true);
  const handleMerchantClick = ()=>{
    setShowBusiness("merchant");
    setMerchantClicked(true);
  }
  const handleFarmerClicked =() =>{
    setShowBusiness("funds");
    setMerchantClicked(false);
  }
  return (
    <div className='mt-5'>
    <div className='flex justify-center'>
        <button onClick={handleMerchantClick} className={` p-2 w-[15rem] rounded-e-none bg-gray-300 rounded-md ${merchantClicked ? "bg-yellow-300":""}`} >Individual</button>
        <button onClick={handleFarmerClicked} className={` p-2 w-[15rem] rounded-s-none bg-gray-300 rounded-md ${merchantClicked ? "":"bg-yellow-300"}`} >Funds</button>
    </div>
    {
        showBusiness === "merchant" ?  <InvestInMerchant/>  : <InvestInMerchantFund/> 
    }
</div>
  )
}

export default MerchantBusinessInvestment
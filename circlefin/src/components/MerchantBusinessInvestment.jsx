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
    <div className='flex justify-around'>
        <button onClick={handleMerchantClick} className={` p-2 rounded-md ${merchantClicked ? "bg-lime-200":""}`} >Merchant</button>
        <button onClick={handleFarmerClicked} className={` p-2 rounded-md ${merchantClicked ? "":"bg-lime-200"}`} >Funds</button>
    </div>
    {
        showBusiness === "merchant" ?  <InvestInMerchant/>  : <InvestInMerchantFund/> 
    }
</div>
  )
}

export default MerchantBusinessInvestment
import React, { useState } from 'react'
import InvestInFarmers from './InvestInFarmers';
import InvestInFarmerFund from './InvestInFarmerFund';

const FarmingBusinessInvestment = () => {
    const [showBusiness,setShowBusiness] = useState("farmer");
    const [fundsSelected,setFundSelected] = useState(false);
    const handleIndividual = () =>{
      setShowBusiness("farmer")
      setFundSelected(false);
    };
    const handelFunds = () =>{
      setShowBusiness("funds")
      setFundSelected(true)
    }
  return (
    <div>
        <div className='mt-5 flex justify-center'>
            <button onClick={handleIndividual} className={`p-2 w-[15rem] rounded-e-none bg-gray-300  rounded-md ${!fundsSelected ? "bg-yellow-400":""}  `} >Individual</button>
            <button onClick={handelFunds} className={`p-2 w-[15rem] rounded-s-none bg-gray-300  rounded-md ${fundsSelected ? "bg-yellow-400":""}  `} >Funds</button>
        </div>
        {
            showBusiness == "farmer" ? <InvestInFarmers/> : <InvestInFarmerFund/>
        }
    </div>
  )
}

export default FarmingBusinessInvestment
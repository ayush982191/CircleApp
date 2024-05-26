import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./invest.css";
import { statesArray } from '../utils/data';
import StateCard from '../components/StateCard';
import ShowCarousel from '../components/ShowCarousel';
import { farmerFilter } from '../utils/data';
import InvestInMerchant from '../components/InvestInMerchant';
import InvestInFarmers from '../components/InvestInFarmers';
import FarmingBusinessInvestment from '../components/FarmingBusinessInvestment';
import MerchantBusinessInvestment from '../components/MerchantBusinessInvestment';
const Invest = () => {
  const [investmentDomain,setInvestmentDomain] = useState("farmer");
  const [farmerSelected,setFarmerSelected] = useState(true);

  const handleFarmer = () =>{
    setInvestmentDomain("farmer")
    setFarmerSelected(true);
  }
  const handleMerchant = () =>{
    setInvestmentDomain("merchant")
    setFarmerSelected(false)
  }

  

 

  return (
    <>
    <div className='mt-32'>
      <h1 className='text-4xl font-bold text-center'>Choose Your Investment Type</h1>
    </div>
    <div className='flex justify-center mt-10'>
  <button onClick={handleFarmer } className={`rounded-e-none ${farmerSelected ? "bg-lime-500":""} w-[40vw] text-2xl bg-gray-300    p-3 rounded-md   font-bold border-black`}>
    Farmer
  </button>
  <button onClick={handleMerchant} className={` rounded-s-none ${!farmerSelected?"bg-lime-500":""} w-[40vw] text-2xl bg-gray-300   p-3 rounded-md   font-bold border-black`}>
    Merchant
  </button>
</div>

    <div className="">
      {
        investmentDomain === "merchant" ? <div>
           {/* <InvestInMerchant/> */}
           <MerchantBusinessInvestment/>
         
        </div> : <div>
         {/* <InvestInFarmers/> */}
         <FarmingBusinessInvestment/>

        </div>
      }
    </div>

    {/* <ShowCarousel filters={farmerFilter} /> */}
    </>
  );
}

export default Invest;
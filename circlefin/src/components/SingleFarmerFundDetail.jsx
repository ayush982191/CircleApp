import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { farmerFundData } from '../utils/data';
import { Link } from 'react-router-dom';

const SingleFarmerFundDetail = () => {
  const { id } = useParams();
  const farmerFund = farmerFundData.find((fund) => fund.id == id);
  const {
    "Fund Name": fundName,
    "Target Return": targetReturns,
    image,
    "Risk Level": riskLevel,
    "Minimum Investment": minimumInvestment,
    "Investment Period": investmentPeriod,
    "Detailed Description": detailedDesc,
  } = farmerFund;
  const {
    "Initial Labor Costs": initialLabourCost,
    "Investment Focus" : investmentFocus,
    Fertilizers,
    Seeds,
    "Fund Size": fundSize,
    "Why Invest": whyInvest,
  } = detailedDesc;
  const [value, setValue] = useState(1000);

  return (
    <div className="container mx-auto mt-32 px-4">
      <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-shrink-0">
          <img src={image} className="w-full lg:w-[30rem] h-auto lg:h-[20rem]" alt="" />
          <div className="mt-6 lg:mt-10">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                value={value}
                placeholder="&nbsp; Enter Amount"
                className="w-full lg:w-[20rem] h-[2.5rem] rounded-md border-gray-300"
                onChange={(e) => setValue(e.target.value)}
              />
              <Link to="/investorApplication">
                <button
                  type="submit"
                  className="bg-lime-200 p-2 rounded-md w-full lg:w-[8rem] hover:bg-lime-400"
                >
                  Invest Now
                </button>
              </Link>
            </div>
            <div className="mt-6 lg:mt-10 flex justify-start gap-4 lg:gap-20">
              {[10000, 15000, 20000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setValue(amount)}
                  className="bg-lime-200 p-1 rounded-md w-full lg:w-[7rem] hover:bg-lime-300"
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30rem]">
          <h1 className="text-xl font-bold mb-4">Fund Details</h1>
          <ul className="flex flex-col gap-2">
            <li><span className="mr-3 font-semibold text-lime-700">Fund Name:</span> <span className="font-semibold">{fundName}</span></li>
            <li><span className="mr-3 font-semibold text-lime-700">Fund Size:</span> <span className="font-semibold">{fundSize}</span></li>
            <li><span className="mr-3 font-semibold text-lime-700">Target Return:</span> <span className="font-semibold">{targetReturns}</span></li>
            <li><span className="mr-3 font-semibold text-lime-700">Risk Level:</span> <span className="font-semibold">{riskLevel}</span></li>
            <li><span className="mr-3 font-semibold text-lime-700">Minimum Investment:</span> <span className="font-semibold">{minimumInvestment}</span></li>
            <li><span className="mr-3 font-semibold text-lime-700">Investment Period:</span> <span className="font-semibold">{investmentPeriod}</span></li>
          </ul>
          <div className="mt-6 lg:mt-10">
            <h1 className="text-xl font-bold mb-4">Investment Focus</h1>
            <div className="flex flex-col space-y-2">
              {/* <div className="flex">
                <span className="mr-3 font-semibold text-lime-700 min-w-[150px]">Seeds:</span>
                <span className="font-semibold">{Seeds}</span>
              </div>
              <div className="flex">
                <span className="mr-3 font-semibold text-lime-700 min-w-[150px]">Fertilizers:</span>
                <span className="font-semibold">{Fertilizers}</span>
              </div>
              <div className="flex">
                <span className="mr-3 font-semibold text-lime-700 min-w-[150px]">Initial Labor Costs:</span>
                <span className="font-semibold">{initialLabourCost}</span>
              </div> */}
              {
                Object.keys(investmentFocus).map((item,idx)=>{
                  // console.log(investmentFocus[item])
                  return <div key={idx} className="flex">
                  <span className="mr-3 font-semibold text-lime-700 min-w-[150px]">{item}</span>
                  <span className="font-semibold">{investmentFocus[item]}</span>
                </div>
})
              }
               
            </div>
            <h1 className="text-xl font-bold mt-10">Detailed Description</h1>
            <p className="mt-4">
              <span className="mr-3 font-semibold text-lime-700">Objective:</span>
              <span className="font-semibold">The Pre-Harvest Growth Fund is designed to assist farmers during the growth phase of their crops. This phase is critical for ensuring healthy crop development and maximizing yields.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFarmerFundDetail;

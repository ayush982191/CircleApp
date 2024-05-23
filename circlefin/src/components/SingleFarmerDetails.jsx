import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { farmerProfiles } from '../utils/data';

const SingleFarmerDetails = () => {
  const { id } = useParams();
  const [investedAmount, setInvestedAmount] = useState("");

  const randomNumber = Math.floor(Math.random() * (100 - 75 + 1)) + 75;
  const farmer = farmerProfiles.find((singleFarmer) => singleFarmer.id == id);
  const { name, creditScore,amountRecived, Experience, crops, OverallRating, financialHealth, Tenure, State, image, "Amount-Required": amountRequired, "Risk Factor": riskFactor } = farmer;
  const percent = Math.floor((amountRecived/amountRequired)*100);

  const handleChange = (e) => {
    setInvestedAmount(e.target.value);
  }

  const handleButtonClick = (amount) => {
    setInvestedAmount(amount);
  }

  useEffect(() => {
    // This effect runs when investedAmount changes
  }, [investedAmount]);

  return (
    <div className='mt-32'>
      <div className="mx-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={image} alt="" className="w-[30rem] h-[30rem]" />
        </div>
        <div>
          <h1 className="text-4xl my-4 font-bold text-lime-700">{name}</h1>
          <p className="font-bold">{name} requires credit to buy farming inputs for cultivating the crops</p>
          <div className="my-2">
            <p>
              <span className="font-bold">Overall rating </span>
              <span className="font-bold text-lime-700"> {OverallRating}</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><span className='font-bold'>State:</span> <span className="text-2xl text-lime-700 font-bold">{State}</span></p>
            </div>
            <div>
              <p><span className='font-bold'>Country:</span> <span className="text-2xl text-lime-700 font-bold">India</span></p>
            </div>
            <div>
              <p><span className='font-bold'>Loan Amount: </span><span className="font-bold text-lime-700">${amountRequired}</span></p>
            </div>
            <div>
              <p>
                <span className="font-bold text-lime-700">{Tenure} months</span> <span className='font-bold'>of livelihood</span>
              </p>
            </div>
            <div className="flex gap-4">
              <p className='font-bold'>Returns:</p>
              <p className="font-bold text-lime-700">6% p.a.</p>
            </div>
            <div className="flex gap-4">
              <p className='font-bold'>Tenure:</p>
              <p className="font-bold text-lime-700">{Tenure} months</p>
            </div>
            <div className="flex gap-4">
              <p className='font-bold'>Farming Experience:</p>
              <p className="font-bold text-lime-700">{Experience}</p>
            </div>
            <div className="flex gap-4">
              <p className='font-bold'>Credit Score:</p>
              <p className="font-bold text-lime-700">{creditScore}</p>
            </div>
          </div>
          <div className='my-5 flex gap-5'>
            <h1 className='font-bold'>Financial Health:</h1>
            <p className='text-lime-700'>{financialHealth}</p>
          </div>
          <div className='my-5 flex gap-5'>
            <h1 className='font-bold'>Risk Factor:</h1>
            <p className='text-lime-700'>{riskFactor}</p>
          </div>
        </div>
      </div>
      <div className='mt-10 flex items-center justify-evenly'>
        <div>
          <div className='w-[35rem]'>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black dark:text-white">Funding Progress</span>
              <span className="text-sm font-medium text-lime-700 dark:text-white">{percent}% Collected</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-lime-600 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
            </div>
          </div>
          <div className='mt-10'>
            <div action="" className='flex gap-4' >
              <input type="text" onChange={handleChange} value={investedAmount} placeholder='&nbsp; Enter Amount' className='w-[20rem] h-[2.5rem] rounded-md' />
              <Link to="/investorApplication"><button type='submit' className='bg-lime-200 p-2 rounded-md w-[8rem] hover:bg-lime-400'>Invest Now</button></Link>
            </div>
            <div className='mt-10 flex justify-start gap-20'>
              <button className='bg-lime-200 p-1 rounded-md w-[7rem] hover:bg-lime-300' onClick={() => handleButtonClick(10000)}>10000</button>
              <button className='bg-lime-200 p-1 rounded-md w-[7rem] hover:bg-lime-300' onClick={() => handleButtonClick(15000)}>15000</button>
              <button className='bg-lime-200 p-1 rounded-md w-[7rem] hover:bg-lime-300' onClick={() => handleButtonClick(20000)}>20000</button>
            </div>
          </div>
        </div>
        <div className='w-[40vw]'>
          <h1 className='font-bold'>About {name}</h1>
          <p className='space-x-1'>{name} a resident of {State}, comes from a family deeply rooted in farming for the past seven years. While agriculture has been their mainstay, {name} envisions expanding their operations. To achieve this, he seeks a loan to invest in crucial farming inputs like irrigation systems, pesticides, and other necessities. By scaling up his cultivation, {name} aims to significantly boost her family's income. Your investment in {name} not only supports her aspirations but also enhances agricultural productivity in his community</p>
        </div>
      </div>
    </div>
  )
}

export default SingleFarmerDetails;

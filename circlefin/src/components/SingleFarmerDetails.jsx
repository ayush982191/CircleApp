import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { farmerProfiles } from '../utils/data';
import { farmerImageArray } from '../utils/data';

const SingleFarmerDetails = () => {
  const { id } = useParams();
  const [investedAmount, setInvestedAmount] = useState("");

  const farmer = farmerProfiles.find((singleFarmer) => singleFarmer.id == id);
  // console.log("farmer =",farmer)
  const {
    name,
    location,
    primaryCrops,
    farmingExperience,
    dataSets,
    farmPractices,
    validations,
    stageOfFarming,
    cropHealthReport,
    technicalAssessment,
    "Amount-Required": amountRequired,
    amountRecived: amountReceived,
    Tenure
  } = farmer;
  const percent = Math.floor((amountReceived / amountRequired) * 100);

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
          <img src={farmerImageArray[id]} alt={name} className="w-[30rem] h-[30rem]" />
          <div className='mt-10'>
            <div className='flex gap-4'>
              <input type="text" onChange={handleChange} value={investedAmount} placeholder='&nbsp; Enter Amount' className='w-[20rem] h-[2.5rem] rounded-md' />
              <Link to="/investorApplication"><button type='submit' className='bg-lime-200 p-2 rounded-md w-[8rem] hover:bg-lime-400'>Invest Now</button></Link>
            </div>
            <div className='mt-10 flex justify-start gap-20'>
              <button className='bg-lime-200 p-1 rounded-md w-[7rem] hover:bg-lime-300' onClick={() => handleButtonClick(10000)}>10000</button>
              <button className='bg-lime-200 p-1 rounded-md w-[7rem] hover:bg-lime-300' onClick={() => handleButtonClick(15000)}>15000</button>
              <button className='bg-lime-200 p-1 rounded-md w-[7rem] hover:bg-lime-300' onClick={() => handleButtonClick(20000)}>20000</button>
            </div>
          </div>
          <div>
          <div className='mt-10 w-[35rem]'>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-black dark:text-white">Funding Progress</span>
              <span className="text-sm font-medium text-lime-700 dark:text-white">{percent}% Collected</span>
            </div>
            <div className=" w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-lime-600 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
            </div>
          </div>
          
        </div>
        </div>
        <div className="">
          <h1 className="text-4xl my-4 font-bold text-lime-700">{name}</h1>
          <p className="font-bold">{name} requires credit to buy farming inputs for cultivating the crops.</p>
          <div className="my-2">
            <p>
              <span className="font-bold">Overall rating: </span>
              <span className="font-bold text-lime-700">{farmer.overallRating}</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><span className='font-bold'>Region:</span> <span className="text-2xl text-lime-700 font-bold">{location.region}</span></p>
            </div>
            <div>
              <p><span className='font-bold'>Country:</span> <span className="text-2xl text-lime-700 font-bold">India</span></p>
            </div>
            <div>
              <p><span className='font-bold'>Loan Amount: </span><span className="font-bold text-lime-700">₹{amountRequired}</span></p>
            </div>
            <div>
              <p><span className="font-bold">Received Amount: </span><span className="font-bold text-lime-700">₹{amountReceived}</span></p>
            </div>
            <div>
              <p><span className='font-bold'>Tenure: </span><span className="font-bold text-lime-700">{Tenure} years</span></p>
            </div>
            <div>
              <p>
                <span className="font-bold text-lime-700">{location.farmSize}</span> <span className='font-bold'>farm size</span>
              </p>
            </div>
            <div className="flex gap-4">
              <p className='font-bold'>Returns:</p>
              <p className="font-bold text-lime-700">6% p.a.</p>
            </div>
            <div className="flex gap-4">
              <p className='font-bold'>Primary Crops:</p>
              <p className="font-bold text-lime-700">{primaryCrops.join(", ")}</p>
            </div>
            <div className="flex gap-4">
              <p className='font-bold'>Farming Experience:</p>
              <p className="font-bold text-lime-700">{farmingExperience}</p>
            </div>
            <div className="flex gap-4">
              <p className='font-bold'>Credit Score:</p>
              <p className="font-bold text-lime-700">{dataSets.bureauData.creditScore}</p>
            </div>
            <div>
              <p><span className='font-bold'>Stage of Farming: </span><span className="font-bold text-lime-700">{stageOfFarming}</span></p>
            </div>
            <div>
              <p><span className='font-bold'>Crop Health: </span><span className="font-bold text-lime-700">{cropHealthReport}</span></p>
            </div>
            <div className='my-5'>
            <h1 className='font-bold'>Technical Assessment:</h1>
            <p><span className='font-bold text-lime-700'>Soil Moisture Levels: </span>{technicalAssessment.soilMoistureLevels}</p>
            <p><span className='font-bold text-lime-700'>Nutrient Levels: </span>{technicalAssessment.nutrientLevels}</p>
            <p><span className='font-bold text-lime-700'>Pest/Disease Activity: </span>{technicalAssessment.pestDiseaseActivity}</p>
          </div>
          <div className='my-5'>
            <h1 className='font-bold'>Farm Practices:</h1>
            <p><span className='font-bold text-lime-700'>Precision Techniques: </span>{farmPractices.precisionTechniques}</p>
          </div>
          <div className='my-5'>
            <h1 className='font-bold'>Banking Data:</h1>
            <p><span className='font-bold text-lime-700'>Account Activity: </span>{dataSets.bankingData.accountActivity}</p>
            <p><span className='font-bold text-lime-700'>Transaction History: </span>{dataSets.bankingData.transactionHistory}</p>
            <p><span className='font-bold text-lime-700'>Loan Repayment Records: </span>{dataSets.bankingData.loanRepaymentRecords}</p>
          </div>
          
          <div className='my-5'>
            <h1 className='font-bold'>Bureau Data:</h1>
            <p><span className='font-bold text-lime-700'>Credit History: </span>{dataSets.bureauData.creditHistory}</p>
            <p><span className='font-bold text-lime-700'>Outstanding Debts: </span>{dataSets.bureauData.outstandingDebts}</p>
            <p><span className='font-bold text-lime-700'>Repayment Behavior: </span>{dataSets.bureauData.repaymentBehavior}</p>
          </div>
          </div>
         {/* <div className='flex gap-4'> */}
        
         
         {/* </div> */}
          
        </div>
      </div>
      <div className=' mt-10 flex items-center justify-evenly'>
        
        <div className='w-[40vw]'>
          <h1 className='font-bold'>About {name}</h1>
          <p className='space-x-1'>{name}, a resident of {location.region}, comes from a family deeply rooted in farming for the past {farmingExperience}. While agriculture has been their mainstay, {name} envisions expanding their operations. To achieve this, he seeks a loan to invest in crucial farming inputs like irrigation systems, pesticides, and other necessities. By scaling up his cultivation, {name} aims to significantly boost his family's income. Your investment in {name} not only supports his aspirations but also enhances agricultural productivity in his community.</p>
        </div>
        <div>
        <div className='my-5'>
            <h1 className='font-bold'>Validations:</h1>
            <p><span className='font-bold text-lime-700'>Land Parcel: </span>{validations.landParcel}</p>
            <p><span className='font-bold text-lime-700'>Borrower: </span>{validations.borrower}</p>
          </div>
        
          <div className='my-5'>
            <h1 className='font-bold'>Utility and Telecom Data:</h1>
            <p><span className='font-bold text-lime-700'>Mobile Usage: </span>{dataSets.utilityAndTelecomData.mobileUsage}</p>
            <p><span className='font-bold text-lime-700'>Payment Patterns: </span>{dataSets.utilityAndTelecomData.paymentPatterns}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleFarmerDetails;


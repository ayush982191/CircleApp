import React, { useEffect } from 'react'
import { useState } from 'react';
import OtpBox from '../components/OtpBox';
import { Link, useNavigate } from 'react-router-dom';
// import OtpBox from '../components/OtpBox';

const InvestorApplicationForm = () => {
  const navigate = useNavigate();
  const [showOptBox,setShowOtpBox] = useState(false);
  const [currentPage,setcurrentPage] = useState(0)
  const [investorFormData, setInvestorFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    dob: '',
    riskTolerance: '',
    minInvestment: '',
    maxInvestment: '',
    loanDuration: '',
    sectorPreference: 'no',
    specifiedSector: '',
    investMoreThan10L: 'no',
    netWorthCertificate: null,
    consentDataUse: false,
    declarationUnderstanding: false,
    grievanceRedressal: false,
    signature: '',
    date: ''
  });

  useEffect(() => {
    const storedFormData = sessionStorage.getItem('formData');
    // console.log(storedFormData)
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
      setInvestorFormData((prevData) => ({
        ...prevData,
        fullName: parsedFormData.name,
        email: parsedFormData.email
      }));
    }else{
      navigate("/signin/investor")
    }
  }, []); 

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const inputValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setInvestorFormData({
      ...investorFormData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(investorFormData);
    navigate("/formsubmitted");
  };

  
    const nextStep = () => {
      setcurrentPage((prevStep) => Math.min(prevStep + 1, 3));
    };
  
    const prevStep = () => {
      setcurrentPage((prevStep) => Math.max(prevStep - 1, 0));
    };
    const renderCircles = () => {
      const circles = [];
      const totalSteps = 3; // Change this if you have more steps
      for (let i = 2; i <= totalSteps; i++) {
        circles.push(
          <div
            key={i}
            className={`w-4 h-4 flex justify-center text-white font-bold rounded-full absolute top-1/2 transform -translate-y-1/2 ${
              i <= currentPage+1 ? 'bg-lime-700' : 'bg-lime-200'
            }`}
            style={{ left: `${(i - 1) * (100 / (totalSteps - 1))}%` }}
          >&#10003;</div>
        );
      }
      return circles;
    };
  
  
    const progressPercentage = (currentPage / 2) * 100;
  return (
    <>
    <div>
      {/* <OtpBox/> */}
      <div className="mt-32 flex justify-center ">
    <form onSubmit={handleSubmit} className="border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]">
      <h1 className="text-4xl text-center font-bold mb-5 bg-lime-700 text-gray-50 p-5">Investor Application Form</h1>
      <div className="relative pt-1 mx-10">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-lime-700">
                    Step {currentPage+1} of 3
                  </span>
                </div>
              </div>
              <div className="relative h-2 mb-4 text-xs flex rounded bg-lime-200">
                <div
                  style={{ width: `${progressPercentage}%` }}
                  className="absolute left-0 h-full shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lime-700"
                ></div>
                {renderCircles()}
              </div>
             <div className='flex justify-end' style={{ width: `${Math.floor((currentPage / 2) * 100)+5}%`  }}>
             <h2
                className={`text-sm font-semibold mb-3  w-20 ${currentPage !=3 ? "ml-[4rem]":""}`}
                
              >
                {currentPage === 0 && 'Personal Information'}
                {currentPage === 1 && 'Investment Details'}
                {currentPage === 2 && 'Consent and Declarations'}
              </h2>
             </div>
            </div>

          {/* Render circles */}
         

          {currentPage === 0 && (

<> 
  {/* <h2 className={`text-sm font-semibold mb-3 flex justify-end bg-red-500 w-[${Math.floor((currentPage/3)*100)}%]`}>Personal Information</h2> */}

  
 
      <div className="mb-5">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={investorFormData.fullName}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={investorFormData.email}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
        />
      </div>


      {/* <div className="mb-5">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          
         
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
        />
      </div> */}


      
  <div className="mb-5">
    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
      Contact Number:<span className='text-red-500' >*</span>
    </label>
    <div className="flex items-center sm:col-span-4">
      <input
        type="text"
        id="contactNumber"
        name="contactNumber"
        value={investorFormData.phoneNumber}
        onChange={handleInputChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
        placeholder="Phone Number"
         
      /> 
      <button type="button" onClick={()=>setShowOtpBox(!showOptBox)} className="ml-2 bg-lime-600 text-white p-2 rounded-lg">
        Verify
      </button> 
    </div>
  </div>

  <div>
  { showOptBox && <OtpBox type={"Mobile"} /> }
  </div>

      <div className="mb-5">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          value={investorFormData.address}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
        ></textarea>
      </div>
       
    
</>
)}
          {currentPage === 1 && (
<> 
{/* <h2 className={`text-sm font-semibold mb-3 flex justify-end bg-red-500 w-[${Math.floor((currentPage/3)*100)}%]`}>Additional Information</h2> */}

   
  <div className="mb-5">
        <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700">
          How comfortable are you with risk? (low, medium, high)<span className='text-red-500' >*</span>
        </label>
        <select
          id="riskTolerance"
          name="riskTolerance"
          value={investorFormData.riskTolerance}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
        >
          <option value="">Select an option</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="minInvestment" className="block text-sm font-medium text-gray-700">
          Minimum amount you are willing to lend: ₹<span className='text-red-500' >*</span>
        </label>
        <input
          type="number"
          id="minInvestment"
          name="minInvestment"
          value={investorFormData.minInvestment}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="maxInvestment" className="block text-sm font-medium text-gray-700">
          Maximum amount you are willing to lend: ₹<span className='text-red-500' >*</span>
        </label>
        <input
          type="number"
          id="maxInvestment"
          name="maxInvestment"
          value={investorFormData.maxInvestment}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="loanDuration" className="block text-sm font-medium text-gray-700">
          Preferred loan duration<span className='text-red-500' >*</span>
        </label>
        <select
          id="loanDuration"
          name="loanDuration"
          value={investorFormData.loanDuration}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
        >
          <option value="">Select an option</option>
          <option value="short-term">Short-term (under 1 year)</option>
          <option value="medium-term">Medium-term (1-3 years)</option>
          <option value="long-term">Long-term (over 3 years)</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="sectorPreference" className="block text-sm font-medium text-gray-700">
          Do you have any preferences for the sectors you would like to invest in? (Optional)
        </label>
        <select
          id="sectorPreference"
          name="sectorPreference"
          value={investorFormData.sectorPreference}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      {investorFormData.sectorPreference === 'yes' && (
        <div className="mb-5">
          <label htmlFor="specifiedSector" className="block text-sm font-medium text-gray-700">
            If yes, please specify:
          </label>
          <input
            type="text"
            id="specifiedSector"
            name="specifiedSector"
            value={investorFormData.specifiedSector}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
      )}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700">
          Are you planning to invest more than $10,00,000 across P2P platforms?<span className='text-red-500' >*</span>
        </label>
        <div>
          <label className="inline-flex items-center mt-1">
            <input
              type="radio"
              name="investMoreThan10L"
              value="yes"
              checked={investorFormData.investMoreThan10L === 'yes'}
              onChange={handleInputChange}
              className="form-radio"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center mt-1 ml-4">
            <input
              type="radio"
              name="investMoreThan10L"
              value="no"
              checked={investorFormData.investMoreThan10L === 'no'}
              onChange={handleInputChange}
              className="form-radio"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>
      {investorFormData.investMoreThan10L === 'yes' && (
        <div className="mb-5">
          <label htmlFor="netWorthCertificate" className="block text-sm font-medium text-gray-700">
            Please upload a certificate from a practicing Chartered Accountant certifying a minimum net worth of $50,00,000.
          </label>
          <input
            type="file"
            id="netWorthCertificate"
            name="netWorthCertificate"
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border-gray-300 rounded-md"
          />
        </div>
      )} 
</>
)}
 {
  currentPage === 2 && (
    <div>
      {/* <h2 className={`text-sm font-semibold mb-3 flex justify-end bg-red-500 w-[${Math.floor((currentPage/3)*100)}%]`}>Consent and Declarations</h2> */}

       <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700">
          I hereby give explicit consent to use my data for the purpose of matching with suitable borrowers in compliance with data protection laws.
        </label>
        <div>
          <label className="inline-flex items-center mt-1">
            <input
              type="checkbox"
              name="consentDataUse"
              checked={investorFormData.consentDataUse}
              onChange={handleInputChange}
              className="form-checkbox"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center mt-1 ml-4">
            <input
              type="checkbox"
              name="consentDataUse"
              checked={!investorFormData.consentDataUse}
              onChange={() =>
                setInvestorFormData({ ...investorFormData, consentDataUse: !investorFormData.consentDataUse })
              }
              className="form-checkbox"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700">
          I declare that I understand the terms of the platform, the risks involved, and my rights and responsibilities as an investor.
        </label>
        <div>
          <label className="inline-flex items-center mt-1">
            <input
              type="checkbox"
              name="declarationUnderstanding"
              checked={investorFormData.declarationUnderstanding}
              onChange={handleInputChange}
              className="form-checkbox"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center mt-1 ml-4">
            <input
              type="checkbox"
              name="declarationUnderstanding"
              checked={!investorFormData.declarationUnderstanding}
              onChange={() =>
                setInvestorFormData({ ...investorFormData, declarationUnderstanding: !investorFormData.declarationUnderstanding })
              }
              className="form-checkbox"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700">
          I acknowledge that I have been informed about the grievance redressal mechanism and understand how to report any issues or complaints.
        </label>
        <div>
          <label className="inline-flex items-center mt-1">
            <input
              type="checkbox"
              name="grievanceRedressal"
              checked={investorFormData.grievanceRedressal}
              onChange={handleInputChange}
              className="form-checkbox"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center mt-1 ml-4">
            <input
              type="checkbox"
              name="grievanceRedressal"
              checked={!investorFormData.grievanceRedressal}
              onChange={() =>
                setInvestorFormData({ ...investorFormData, grievanceRedressal: !investorFormData.grievanceRedressal })
              }
              className="form-checkbox"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      <h2>Signature</h2>
      <div className="mb-5">
        <label htmlFor="signature" className="block text-sm font-medium text-gray-700">
          Investor’s Signature
        </label>
        <input
          type="text"
          id="signature"
          name="signature"
          value={investorFormData.signature}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={investorFormData.date}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border-gray-300 rounded-md"
        />
      </div >
      <div className='flex justify-center'>
      <button type="submit" className="mt-3 p-2 bg-lime-500 text-white rounded-md">
        Submit
      </button>
      </div>
    </div>
  )
 }

 

 

 





 

          <div className="mb-5 flex justify-between">
            {currentPage > 0 && (
              <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 p-2 rounded-lg">
                Previous
              </button>
            )}
            {currentPage < 2 && (
              <button type="button" onClick={nextStep} className="bg-lime-600 text-white p-2 rounded-lg">
                Next
              </button>
            )}
            {/* {currentPage === 3 && (
              <button onClick={handleSubmit} className="bg-lime-500 text-white p-2 rounded-lg">
                Submit Form
              </button>
            )} */}
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default InvestorApplicationForm
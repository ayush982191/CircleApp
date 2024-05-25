import React , {useState} from 'react'
import OtpBox from '../components/OtpBox';
import digilocker from "../assets/images/digilocker.png"
import { useNavigate } from 'react-router-dom';

const MerchantApplicationForm = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [showAadharOtpBox,setShowAadharOtpBox] = useState(false)
  const [showPanOtpBox,setShowPanOtpBox] = useState(false)
  const progressPercentage =  (currentPage  / 5) * 100;
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    businessType: '',
    businessSubcategory: '',
    businessAddress: '',
    contactNumber: '',
    emailAddress: '',
    panNumber: '',
    aadhaarNumber: '',
    gstin: '',
    accountAggregatorConsent: false,
    yearsInBusiness: '',
    annualRevenue: '',
    primaryCommoditiesTraded: '',
    averageMonthlyTransactions: '',
    existingLoans: '',
    currentOutstandingLoanAmount: '',
    monthlyEMI: '',
    goodsAndSalesTaxConsent: false,
    ondcTransactionDataConsent: false,
    requestedLoanAmount: '',
    loanPurpose: '',
    repaymentPeriodPreference: '',
    aadhaarVerificationConsent: false
  });
  // console.log("current page="+currentPage)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(currentPage==)
    navigate("/formsubmitted")
    // console.log(formData);
    // Add submission logic here

  };

  const renderCircles = () => {
    const circles = [];
    const totalSteps = 6; // Change this if you have more steps
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


  return (
    <div className="flex justify-center mt-5">
    <form onSubmit={handleSubmit} className="border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]">
      <h1 className="text-4xl text-center font-bold mb-5 bg-lime-700 text-gray-50 p-5">Agri Merchant Loan Application Form</h1>
      <div className="relative pt-1 mx-10">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-lime-700">
                    Step {currentPage} of 5
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
             <div className='flex justify-end  ' style={{ width: `${Math.floor((currentPage / 6) * 100)+5}%`  }}>
             <h2
                className={`text-sm font-semibold mb-3 text-center  w-20 ${currentPage !=6 ? "ml-[4rem]":""}`}
                
              >
                {currentPage === 0 && 'Personal and Business Information'}
                {currentPage === 1 && 'Business Details'}
                {currentPage === 2 && 'Financial Information'}
                {currentPage === 3 && 'Loan Details'}
                {currentPage === 4 && 'Aadhar Info'}
                {currentPage === 5 && 'Decleration'}
                {/* {currentPage === 7 && 'Repayment Bank Details'}
                {currentPage === 8 && 'Income Details'} */}
              </h2>
             </div>
            </div>
      {/* Section 1: Personal and Business Information */}
      {currentPage === 0 && (
<div>
  {/* <h2 className="text-xl font-semibold mb-3">Personal and Business Information</h2> */}
  
  
  
  
  <div className="mb-4">
    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name:<span className='text-red-500' >*</span></label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>






  <div className="mb-4">
    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name:<span className='text-red-500' >*</span></label>
    <input
      type="text"
      id="businessName"
      name="businessName"
      value={formData.businessName}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">Type of Business:<span className='text-red-500' >*</span></label>
    <select
      id="businessType"
      name="businessType"
      value={formData.businessType}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    >
      <option value="">Select Business Type</option>
      <option value="Cash Crop Trader">Cash Crop Trader</option>
      <option value="Non-Perishable Agri Food Crops Trader">Non-Perishable Agri Food Crops Trader</option>
      <option value="Spices Trader">Spices Trader</option>
      <option value="Dry Fruits Trader">Dry Fruits Trader</option>
      <option value="Online Agricultural Seller">Online Agricultural Seller</option>
    </select>
  </div>
  {/* Add dropdown for Subcategory based on selected business type */}
  {formData.businessType && (
    <div className="mb-4">
      <label htmlFor="businessSubcategory" className="block text-sm font-medium text-gray-700">Subcategory</label>
      <select
        id="businessSubcategory"
        name="businessSubcategory"
        value={formData.businessSubcategory}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
      >
        {/* Add options dynamically based on selected business type */}
        {/* You can implement this logic based on your dropdown options */}
        {/* Example options for Cash Crop Trader */}
        {formData.businessType === "Cash Crop Trader" && (
          <>
            <option value="">Select Subcategory</option>
            <option value="Cotton">Cotton</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Jute">Jute</option>
            <option value="Tobacco">Tobacco</option>
            <option value="Others">Others</option>
          </>
        )}
        {/* Add options for other business types similarly */}
      </select>
    </div>
  )}
  <div className="mb-4">
    <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700">Business Address:<span className='text-red-500' >*</span></label>
    <input
      type="text"
      id="businessAddress"
      name="businessAddress"
      value={formData.businessAddress}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number:<span className='text-red-500' >*</span></label>
    <input
      type="text"
      id="contactNumber"
      name="contactNumber"
      value={formData.contactNumber}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address:<span className='text-red-500' >*</span></label>
    <input
      type="email"
      id="emailAddress"
      name="emailAddress"
      value={formData.emailAddress}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
 {/* <div className="mb-5">
    <label
     htmlFor="aadharNumber"
      className="block text-sm font-medium text-gray-700 sm:mb-0">
      Aadhar Number:<span className='text-red-500' >*</span>
    </label>
    <div className="flex items-center sm:col-span-4">
      <input
        type="text"
        id="aadharNumber"
        name="aadhaarNumber"
        value={formData.aadhaarNumber}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
        placeholder="Aadhar Number"
        required
      />
      <button type="button" onClick={()=>setShowAadharOtpBox(!showAadharOtpBox)} className="ml-2 bg-lime-600 text-white p-2 rounded-lg">
        Verify
      </button>
    </div>
  </div>
  {showAadharOtpBox && <OtpBox type={"Aadhar"}  />} */}
  {/* <div className="mb-5">
    <label htmlFor="pancardNumber"
     className="block text-sm font-medium text-gray-700 sm:mb-0">
      Pancard Number:<span className='text-red-500' >*</span>
    </label>
    <div className="flex items-center sm:col-span-4">
      <input
        type="text"
        id="pancardNumber"
        name="panNumber"
        value={formData.panNumber}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
        placeholder="pancard Number"
        required
      />
      <button type="button" onClick={()=>setShowPanOtpBox(!showPanOtpBox)} className="ml-2 bg-lime-600 text-white p-2 rounded-lg">
        Verify
      </button>
    </div>
  </div>
  {showPanOtpBox && <OtpBox type={"Pancard"}  />} */}
  <div className="mb-4">
    <label htmlFor="gstin" className="block text-sm font-medium text-gray-700">GSTIN:<span className='text-red-500' >*</span></label>
    <input
      type="text"
      id="gstin"
      name="gstin"
      value={formData.gstin}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="accountAggregatorConsent" className="flex items-center">
      <input
        type="checkbox"
        id="accountAggregatorConsent"
        name="accountAggregatorConsent"
        checked={formData.accountAggregatorConsent}
        onChange={handleChange}
        className="mr-2"
      />
      <span className="text-sm font-medium text-gray-700">I consent to share my banking and GST data via the account aggregator</span>
    </label>
  </div>
</div>
)}

      {/* Section 2: Business Details */}
      {currentPage === 1 && (
<div>
  {/* <h2 className="text-xl font-semibold mb-3">Business Details</h2> */}
  <div className="mb-4">
    <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-gray-700">Years in Business:<span className='text-red-500' >*</span></label>
    <input
      type="text"
      id="yearsInBusiness"
      name="yearsInBusiness"
      value={formData.yearsInBusiness}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700">Annual Revenue:<span className='text-red-500' >*</span></label>
    <input
      type="text"
      id="annualRevenue"
      name="annualRevenue"
      value={formData.annualRevenue}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="primaryCommoditiesTraded" className="block text-sm font-medium text-gray-700">Primary Commodities Traded:<span className='text-red-500' >*</span></label>
    <input
      type="text"
      id="primaryCommoditiesTraded"
      name="primaryCommoditiesTraded"
      value={formData.primaryCommoditiesTraded}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="averageMonthlyTransactions" className="block text-sm font-medium text-gray-700">Average Monthly Transactions:<span className='text-red-500' >*</span></label>
    <input
      type="text"
      id="averageMonthlyTransactions"
      name="averageMonthlyTransactions"
      value={formData.averageMonthlyTransactions}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
</div>
)}
      {/* Section 3: Financial Information */}
      {currentPage === 2 && (
<div>
  {/* <h2 className="text-xl font-semibold mb-3">Financial Information</h2> */}
  <div className="mb-4">
    <label htmlFor="existingLoans" className="block text-sm font-medium text-gray-700">Existing Loans (if any)</label>
    <input
      type="text"
      id="existingLoans"
      name="existingLoans"
      value={formData.existingLoans}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="currentOutstandingLoanAmount" className="block text-sm font-medium text-gray-700">Current Outstanding Loan Amount</label>
    <input
      type="text"
      id="currentOutstandingLoanAmount"
      name="currentOutstandingLoanAmount"
      value={formData.currentOutstandingLoanAmount}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="monthlyEMI" className="block text-sm font-medium text-gray-700">Monthly EMI</label>
    <input
      type="text"
      id="monthlyEMI"
      name="monthlyEMI"
      value={formData.monthlyEMI}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="goodsAndSalesTaxData" className="block text-sm font-medium text-gray-700">Goods and Sales Tax Data</label>
    <input
      type="checkbox"
      id="goodsAndSalesTaxData"
      name="goodsAndSalesTaxData"
      checked={formData.goodsAndSalesTaxData}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="ondcTransactionData" className="block text-sm font-medium text-gray-700">ONDC Transaction Data</label>
    <input
      type="checkbox"
      id="ondcTransactionData"
      name="ondcTransactionData"
      checked={formData.ondcTransactionData}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
</div>
)}

      {/* Section 4: Loan Requirement */}
      {currentPage === 3 && (
<div>
  {/* <h2 className="text-xl font-semibold mb-3">Loan Requirement</h2> */}
  <div className="mb-4">
    <label htmlFor="requestedLoanAmount" className="block text-sm font-medium text-gray-700">Requested Loan Amount</label>
    <input
      type="text"
      id="requestedLoanAmount"
      name="requestedLoanAmount"
      value={formData.requestedLoanAmount}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="purposeOfLoan" className="block text-sm font-medium text-gray-700">Purpose of Loan</label>
    <select
      id="purposeOfLoan"
      name="purposeOfLoan"
      value={formData.purposeOfLoan}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    >
      <option value="">Select Purpose</option>
      <option value="Purchase of Inventory">Purchase of Inventory</option>
      <option value="Expanding Storage Facilities">Expanding Storage Facilities</option>
      <option value="Working Capital">Working Capital</option>
      <option value="Transport Costs">Transport Costs</option>
      <option value="Marketing and Advertising">Marketing and Advertising</option>
      <option value="Debt Consolidation">Debt Consolidation</option>
      <option value="Technology Upgrades">Technology Upgrades</option>
      <option value="Seasonal Purchases">Seasonal Purchases</option>
      <option value="Procurement from Farmers">Procurement from Farmers</option>
      <option value="Online Sales Platform Development">Online Sales Platform Development</option>
      <option value="Emergency Funds">Emergency Funds</option>
      <option value="Other">Other</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="repaymentPeriodPreference" className="block text-sm font-medium text-gray-700">Repayment Period Preference</label>
    <input
      type="text"
      id="repaymentPeriodPreference"
      name="repaymentPeriodPreference"
      value={formData.repaymentPeriodPreference}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    />
  </div>
</div>
)}

      {/* Section 5: Aadhaar Verification */}
      {currentPage === 4 && (
<div>
  {/* <h2 className="text-xl font-semibold mb-3">Aadhaar Verification</h2> */}
  <div className="mb-4 flex justify-around items-center">
    <div>
    <label htmlFor="aadhaarVerification" className="block font-medium text-gray-700">Aadhaar Verification via DigiLocker</label>
    {/* <label htmlFor="" className='block text-sm font-medium text-gray-700'>Enter Your Aadhar Details</label>  */}
    <br />
    <input type="text" className='mt-1 p-2 w-full border-gray-300 rounded-md ' placeholder='Aadhar Number' />
    <br />
    <input type="text" className='mt-1 p-2 w-full border-gray-300 rounded-md' placeholder='6 digit security PIN*' />
   
   <div className='mt-2'>
   <input
      type="checkbox"
      id="aadhaarVerification"
      name="aadhaarVerification"
      checked={formData.aadhaarVerification}
      onChange={handleChange}
      className="mt-1 p-2"
    />
    <span className="ml-2">I consent to verify my Aadhaar information via DigiLocker</span>
      
   </div>
   <br />
   <div className='flex justify-end'>
   <button type='button' className='text-white bg-lime-600  hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5'>verify</button>
   </div>
    
    </div>
    <div>
      <img src={digilocker} className='w-[10rem]' alt="" />

    </div>
  </div>
  <h1 className='text-3xl text-center' >OR</h1>
  <div>
  <div className="mb-5">
    <label
     htmlFor="aadharNumber"
      className="block text-sm font-medium text-gray-700 sm:mb-0">
      Aadhar Number:<span className='text-red-500' >*</span>
    </label>
    <div className="flex items-center sm:col-span-4">
      <input
        type="text"
        id="aadharNumber"
        name="aadhaarNumber"
        value={formData.aadhaarNumber}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
        placeholder="Aadhar Number"
        required
      />
      <button type="button" onClick={()=>setShowAadharOtpBox(!showAadharOtpBox)} className="ml-2 bg-lime-600 text-white p-2 rounded-lg">
        Verify
      </button>
    </div>
  </div>
  {showAadharOtpBox && <OtpBox type={"Aadhar"}  />}
  <div className="mb-5">
    <label htmlFor="pancardNumber"
     className="block text-sm font-medium text-gray-700 sm:mb-0">
      Pancard Number:<span className='text-red-500' >*</span>
    </label>
    <div className="flex items-center sm:col-span-4">
      <input
        type="text"
        id="pancardNumber"
        name="panNumber"
        value={formData.panNumber}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
        placeholder="pancard Number"
        required
      />
      <button type="button" onClick={()=>setShowPanOtpBox(!showPanOtpBox)} className="ml-2 bg-lime-600 text-white p-2 rounded-lg">
        Verify
      </button>
    </div>
  </div>
  {showPanOtpBox && <OtpBox type={"Pancard"}  />}
  </div>
</div>
)}


      {/* Section 6: Declaration and Consent */}
      {currentPage === 5 && (
<div>
  <h2 className="text-xl font-semibold mb-3">Declaration and Consent</h2>
  <p className="mb-4">I hereby declare that the information provided above is accurate and complete to the best of my knowledge. I understand that any false information may result in the rejection of my application.</p>
  <div className="mb-4">
    <label htmlFor="declarationConsent" className="block text-sm font-medium text-gray-700">Declaration and Consent</label>
    <input
      type="checkbox"
      id="declarationConsent"
      name="declarationConsent"
      checked={formData.declarationConsent}
      onChange={handleChange}
      className="mt-1 p-2"
    />
    <span className="ml-2">I agree to the declaration and consent statement</span>
  </div>
  <div className='flex justify-center' >
  <button type="submit" className="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5">Submit</button>
  </div>
  
</div>
)}


      {/* Navigation Buttons */}
      <div className="flex justify-between">
        {currentPage !== 0 && (
          <button type="button" className="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={prevPage}>Previous</button>
        )}
        {currentPage < 5 ? (
          <button type="button" className="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={nextPage}>Next</button>
        ) : (
         ""
        )}
      </div>
    </form>
  </div>
  )
}

export default MerchantApplicationForm
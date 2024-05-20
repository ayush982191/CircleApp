import React from 'react'
import { useState } from 'react';
import OtpBox from '../components/OtpBox';

const FarmerApplicationForm = () => {
    const [currentPage, setcurrentPage] = useState(1);
    const [showOptBox,setShowOtpBox] = useState(false);
    const [showAadharOtpBox,setShowAadharOtpBox] = useState(false);
    const [showPanOtpBox,setShowPanOtpBox]= useState(false)
    const [farmerFormData, setfarmerFormData] = useState({
        fullName: '',
        dob: '',
        gender: 'male',
        contactNumber: '',
        email: '',
        residentialAddress: '',
        aadharNumber: '',
        panCardNumber : '',
        landStatus: 'Owner',
        fpoAffiliation: 'none',
        numberOfDependents: '',
        farmingExperience: '',
        totalFarmingArea: '',
        farmlandLocation: '',
        soilType: '',
        waterSource: '',
        primaryCrops: [],
        cropRotation: 'Yes',
        farmingTechnology: [],
        livestockTypes: [],
        annualIncome: '',
        otherIncome: '',
        monthlyEMI: '',
        loanAmount: '',
        khasraKhatauni: null,
        declaration: false
    });





    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox') {
        if (name === 'primaryCrops' || name === 'farmingTechnology' || name === 'livestockTypes') {
          const newValue = checked
            ? [...farmerFormData[name], value] // Add the value if checked
            : farmerFormData[name].filter((item) => item !== value); // Remove the value if unchecked
          setfarmerFormData({
            ...farmerFormData,
            [name]: newValue,
          });
        } else {
          setfarmerFormData({
            ...farmerFormData,
            [name]: checked,
          });
        }
      } else if (type === 'file') {
        setfarmerFormData({
          ...farmerFormData,
          [name]: e.target.files[0],
        });
      } else {
        setfarmerFormData({
          ...farmerFormData,
          [name]: value,
        });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log(farmerFormData);
    };
  
    const nextStep = () => {
      setcurrentPage((prevStep) => Math.min(prevStep + 1, 4));
    };
  
    const prevStep = () => {
      setcurrentPage((prevStep) => Math.max(prevStep - 1, 1));
    };
  
    const progressPercentage = (currentPage / 4) * 100;
  return (
    <>
    <div>
      {/* <OtpBox/> */}
      <div className="flex justify-center mt-5">
    <form onSubmit={handleSubmit} className="border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]">
      <h1 className="text-4xl text-center font-bold mb-5 bg-lime-700 text-gray-50 p-5">Farmer Loan Application Form</h1>
      <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-lime-700">Step {currentPage} of 4</span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-lime-200">
              <div
                style={{ width: `${progressPercentage}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lime-700"
              ></div>
            </div>
          </div>

          {currentPage === 1 && (
<>




  <div className="mb-4">
    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
      Full Name:<span className='text-red-500' >*</span>
    </label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      value={farmerFormData.fullName}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
      placeholder="Full Name"
       
    />
  </div>






  <div className="mb-5">
    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
      Date of Birth:<span className='text-red-500' >*</span>
    </label>
    <input
      type="date"
      id="dob"
      name="dob"
      value={farmerFormData.dob}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
       
    />
  </div>



  <div className="mb-5">
    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
      Gender:<span className='text-red-500' >*</span>
    </label>
    <select
      id="gender"
      name="gender"
      value={farmerFormData.gender}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div className="mb-5">
    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
      Contact Number:<span className='text-red-500' >*</span>
    </label>
    <div className="flex items-center sm:col-span-4">
      <input
        type="text"
        id="contactNumber"
        name="contactNumber"
        value={farmerFormData.contactNumber}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
        placeholder="Contact Number"
         
      />
      <button type="button" onClick={()=>setShowOtpBox(!showOptBox)} className="ml-2 bg-green-600 text-white p-2 rounded-lg">
        Verify
      </button> 
    </div>
  </div>
  <div>
  { showOptBox && <OtpBox type={"Mobile"} /> }
  </div>









  <div className="mb-5">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mb-0">
      Email Address:<span className='text-red-500' >*</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={farmerFormData.email}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
      placeholder="Email Address"
       
    />
  </div>



  <div className="mb-5">
    <label
      htmlFor="residentialAddress"
      className="block text-sm font-medium text-gray-700 sm:mb-0"
    >
      Residential Address:<span className='text-red-500' >*</span>
    </label>
    <input
      type="text"
      id="residentialAddress"
      name="residentialAddress"
      value={farmerFormData.residentialAddress}
      onChange={handleChange}
      className="mt-1 p-2 w-full border-gray-300 rounded-md"
      placeholder="Residential Address"
       
    />
  </div>
 
</>
)}
          {currentPage === 2 && (
<> 
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
        name="aadharNumber"
        value={farmerFormData.aadharNumber}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
        placeholder="Aadhar Number"
         
      />
      <button type="button" onClick={()=>setShowAadharOtpBox(!showAadharOtpBox)} className="ml-2 bg-green-600 text-white p-2 rounded-lg">
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
        name="pancardNumber"
        value={farmerFormData.panCardNumber}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
        placeholder="pancard Number"
         
      />
      <button type="button" onClick={()=>setShowPanOtpBox(!showPanOtpBox)} className="ml-2 bg-green-600 text-white p-2 rounded-lg">
        Verify
      </button>
    </div>
  </div>
  {showPanOtpBox && <OtpBox type={"Pancard"}  />}
</>
)}


{currentPage === 3 && (
<>
       <div className="mb-5  ">
                      <label htmlFor="landStatus" className="block text-sm font-medium text-gray-700 sm:mb-0">Land Status:<span className='text-red-500' >*</span></label>
                      <select id="landStatus" name="landStatus" value={farmerFormData.landStatus} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md">
                          <option value="Owner">Owner</option>
                          <option value="Tenant">Tenant</option>
                      </select>
                  </div>



                  
    <div className="mb-5">
      <label htmlFor="fpoAffiliation" className="block text-sm font-medium text-gray-700 sm:mb-0">FPO Affiliation:<span className='text-red-500' >*</span></label>
      <select id="fpoAffiliation" name="fpoAffiliation" value={farmerFormData.fpoAffiliation} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md">
        <option value="FPO Name 1">FPO Name 1</option>
        <option value="FPO Name 2">FPO Name 2</option>
        <option value="FPO Name 3">FPO Name 3</option>
        <option value="none">None</option>
      </select>
    </div>

    <div className="mb-5">
      <label htmlFor="numberOfDependents" className="block text-sm font-medium text-gray-700 sm:mb-0">Number of Dependents:<span className='text-red-500' >*</span></label>
      <input type="number" id="numberOfDependents" name="numberOfDependents" value={farmerFormData.numberOfDependents} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Number of Dependents"   />
    </div>

    <div className="mb-5">
      <label htmlFor="farmingExperience" className="block text-sm font-medium text-gray-700 sm:mb-0">Year of Farming Experience:<span className='text-red-500' >*</span></label>
      <input type="number" id="farmingExperience" name="farmingExperience" value={farmerFormData.farmingExperience} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Years of Farming Experience"   />
    </div>

    <div className="mb-5">
      <label htmlFor="totalFarmingArea" className="block text-sm font-medium text-gray-700 sm:mb-0">Total Farming Area:<span className='text-red-500' >*</span></label>
      <input type="text" id="totalFarmingArea" name="totalFarmingArea" value={farmerFormData.totalFarmingArea} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Total Farming Area"   />
    </div>

    <div className="mb-5">
      <label htmlFor="farmlandLocation" className="block text-sm font-medium text-gray-700 sm:mb-0">Location of Farmland:<span className='text-red-500' >*</span></label>
      <input type="text" id="farmlandLocation" name="farmlandLocation" value={farmerFormData.farmlandLocation} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Location of Farmland"   />
    </div>

    <div className="mb-5">
      <label htmlFor="soilType" className="block text-sm font-medium text-gray-700 sm:mb-0">Soil Type:<span className='text-red-500' >*</span></label>
      <input type="text" id="soilType" name="soilType" value={farmerFormData.soilType} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Soil Type"   />
    </div>

    <div className="mb-5">
      <label htmlFor="waterSource" className="block text-sm font-medium text-gray-700 sm:mb-0">Water Source:<span className='text-red-500' >*</span></label>
      <input type="text" id="waterSource" name="waterSource" value={farmerFormData.waterSource} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Water Source"   />
    </div>

    <div className="mb-5">
      <label htmlFor="primaryCrops" className="block text-sm font-medium text-gray-700 sm:mb-0">Primary Crops Grown:<span className='text-red-500' >*</span></label>
      <div className="block w-60">
        <label className="block">
          <input type="checkbox" name="primaryCrops" value="Wheat" checked={farmerFormData.primaryCrops.includes('Wheat')} onChange={handleChange} /> Wheat
        </label>
        <label className="block">
          <input type="checkbox" name="primaryCrops" value="Rice" checked={farmerFormData.primaryCrops.includes('Rice')} onChange={handleChange} /> Rice
        </label>
        <label className="block">
          <input type="checkbox" name="primaryCrops" value="Maize" checked={farmerFormData.primaryCrops.includes('Maize')} onChange={handleChange} /> Maize
        </label>
      </div>
    </div>

    <div className="mb-5">
      <label htmlFor="cropRotation" className="block text-sm font-medium text-gray-700 sm:mb-0">Crop Rotation Practices:<span className='text-red-500' >*</span></label>
      <select id="cropRotation" name="cropRotation" value={farmerFormData.cropRotation} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    <div className="mb-5">
      <label htmlFor="farmingTechnology" className="block text-sm font-medium text-gray-700 sm:mb-0">Use of Farming Technology:<span className='text-red-500' >*</span></label>
      <div className="block w-60">
        <label className="block">
          <input type="checkbox" name="farmingTechnology" value="drone" checked={farmerFormData.farmingTechnology.includes('drone')} onChange={handleChange} /> Drone
        </label>
        <label className="block">
          <input type="checkbox" name="farmingTechnology" value="IOT Device" checked={farmerFormData.farmingTechnology.includes('IOT Device')} onChange={handleChange} /> IOT Device
        </label>
        <label className="block">
          <input type="checkbox" name="farmingTechnology" value="Drip Irrigation" checked={farmerFormData.farmingTechnology.includes('Drip Irrigation')} onChange={handleChange} /> Drip Irrigation
        </label>
      </div>
    </div>

    <div className="mb-5">
      <label htmlFor="livestockTypes" className="block text-sm font-medium text-gray-700 sm:mb-0">Livestock Types:<span className='text-red-500' >*</span></label>
      <div className="block w-60">
        <label className="block">
          <input type="checkbox" name="livestockTypes" value="Goat" checked={farmerFormData.livestockTypes.includes('Goat')} onChange={handleChange} /> Goat
        </label>
        <label className="block">
          <input type="checkbox" name="livestockTypes" value="Pig" checked={farmerFormData.livestockTypes.includes('Pig')} onChange={handleChange} /> Pig
        </label>
        <label className="block">
          <input type="checkbox" name="livestockTypes" value="Horse" checked={farmerFormData.livestockTypes.includes('Horse')} onChange={handleChange} /> Horse
        </label>
      </div>
    </div>
    </>

)}


{currentPage === 4 && (
            <>
              {/* Page 3 fields */}
              

    <div className="mb-5">
      <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700 sm:mb-0">Annual Income from Farming:<span className='text-red-500' >*</span></label>
      <input type="number" id="annualIncome" name="annualIncome" value={farmerFormData.annualIncome} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Annual Income"   />
    </div>

    <div className="mb-5">
      <label htmlFor="otherIncome" className="block text-sm font-medium text-gray-700 sm:mb-0">Other Income:<span className='text-red-500' >*</span></label>
      <input type="number" id="otherIncome" name="otherIncome" value={farmerFormData.otherIncome} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Other Income"   />
    </div>

    <div className="mb-5">
      <label htmlFor="monthlyEMI" className="block text-sm font-medium text-gray-700 sm:mb-0">Existing Monthly EMI:<span className='text-red-500' >*</span></label>
      <input type="number" id="monthlyEMI" name="monthlyEMI" value={farmerFormData.monthlyEMI} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Monthly EMI"   />
    </div>

    <div className="mb-5">
      <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 sm:mb-0">Loan Amount  :<span className='text-red-500' >*</span></label>
      <input type="number" id="loanAmount" name="loanAmount" value={farmerFormData.loanAmount} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" placeholder="Loan Amount"   />
    </div>

    <div className="mb-5">
      <label htmlFor="khasraKhatauni" className="block text-sm font-medium text-gray-700 sm:mb-0">Khasra Khatauni:<span className='text-red-500' >*</span></label>
      <input type="file" id="khasraKhatauni" name="khasraKhatauni" onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md"   />
    </div>

    <div className="mb-5  flex ">
      
      <input type="checkbox" id="declaration" name="declaration" checked={farmerFormData.declaration} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block"   />
      <label htmlFor="declaration" className="block text-sm font-medium text-gray-700 sm:mb-0">I declare the above information is correct:</label>
    </div>
    <div className='flex justify-center'>
    <button onSubmit={handleSubmit} className='ml-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600' >Submit From</button>
    </div>


            </>
          )}

          <div className="mb-5 flex justify-between">
            {currentPage > 1 && (
              <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 p-2 rounded-lg">
                Previous
              </button>
            )}
            {currentPage < 4 && (
              <button type="button" onClick={nextStep} className="bg-green-600 text-white p-2 rounded-lg">
                Next
              </button>
            )}
            {/* {currentPage === 3 && (
              <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded-lg">
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

export default FarmerApplicationForm
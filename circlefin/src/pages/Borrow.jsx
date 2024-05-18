import React, { useState } from 'react';

const ShowFarmerApplicationForm = ({ farmerFormData , setfarmerFormData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
        if (name === 'primaryCrops' || name === 'farmingTechnology' || name === 'livestockTypes') {
            const newValue = checked
                ? [...farmerFormData[name], value] // Add the value if checked
                : farmerFormData[name].filter(item => item !== value); // Remove the value if unchecked
            setfarmerFormData({
                ...farmerFormData,
                [name]: newValue
            });
        } else {
            setfarmerFormData({
                ...farmerFormData,
                [name]: checked
            });
        }
    } else if (type === 'file') {
        setfarmerFormData({
            ...farmerFormData,
            [name]: e.target.files[0]
        });
    } else {
        setfarmerFormData({
            ...farmerFormData,
            [name]: value
        });
    }
};


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(farmerFormData);
    };
    return <>
        <div>
            <div className='flex justify-center mt-5     '>

                <form action="" className='border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]'>
                    <h1 className='text-4xl text-center font-bold mb-5 bg-lime-700 text-gray-50 p-5 '>Farmer Application Form</h1>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12 ">
                        <label htmlFor="fullName" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 ">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" value={farmerFormData.fullName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Full Name" required />
                    </div>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
                        <label htmlFor="dob" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4  ">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" value={farmerFormData.dob} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 sm:col-span-4 p-2.5" required />
                    </div>
                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12 ">
                        <label htmlFor="gender" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4  ">Gender:</label>
                        <select id="gender" name="gender" value={farmerFormData.gender} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12 ">
                        <label htmlFor="contactNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Contact Number:</label>
                        <div className="flex items-center sm:col-span-4">
                            <input type="text" id="contactNumber" name="contactNumber" value={farmerFormData.contactNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5" placeholder="Contact Number" required />
                            <button type="button" className="ml-2 bg-green-600 text-white p-2 rounded-lg">Verify</button>
                        </div>
                    </div>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12  ">
                        <label htmlFor="email" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0 sm:w-32">Email Address:</label>
                        <input type="email" id="email" name="email" value={farmerFormData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5" placeholder="Email Address" required />
                    </div>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12 ">
                        <label htmlFor="residentialAddress" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Residential Address:</label>
                        <input type="text" id="residentialAddress" name="residentialAddress" value={farmerFormData.residentialAddress} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Residential Address" required />
                    </div>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
                        <label htmlFor="aadharNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 ">Aadhar Number:</label>
                        <div className="flex items-center sm:col-span-4">
                        <input type="text" id="aadharNumber" name="aadharNumber" value={farmerFormData.aadharNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-60 p-2.5" placeholder="Aadhar Number" required />
                        <button type="button" className="ml-2 bg-green-600 text-white p-2 rounded-lg">Verify</button>
                    </div>
                    </div>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12  ">
                        <label htmlFor="landStatus" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Land Status:</label>
                        <select id="landStatus" name="landStatus" value={farmerFormData.landStatus} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5">
                            <option value="Owner">Owner</option>
                            <option value="Tenant">Tenant</option>
                        </select>
                    </div>



                    
      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="fpoAffiliation" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">FPO Affiliation:</label>
        <select id="fpoAffiliation" name="fpoAffiliation" value={farmerFormData.fpoAffiliation} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5">
          <option value="FPO Name 1">FPO Name 1</option>
          <option value="FPO Name 2">FPO Name 2</option>
          <option value="FPO Name 3">FPO Name 3</option>
          <option value="none">None</option>
        </select>
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="numberOfDependents" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Number of Dependents:</label>
        <input type="number" id="numberOfDependents" name="numberOfDependents" value={farmerFormData.numberOfDependents} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Number of Dependents" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="farmingExperience" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Year of Farming Experience:</label>
        <input type="number" id="farmingExperience" name="farmingExperience" value={farmerFormData.farmingExperience} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Years of Farming Experience" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="totalFarmingArea" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Total Farming Area:</label>
        <input type="text" id="totalFarmingArea" name="totalFarmingArea" value={farmerFormData.totalFarmingArea} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Total Farming Area" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="farmlandLocation" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Location of Farmland:</label>
        <input type="text" id="farmlandLocation" name="farmlandLocation" value={farmerFormData.farmlandLocation} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Location of Farmland" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="soilType" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Soil Type:</label>
        <input type="text" id="soilType" name="soilType" value={farmerFormData.soilType} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Soil Type" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="waterSource" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Water Source:</label>
        <input type="text" id="waterSource" name="waterSource" value={farmerFormData.waterSource} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Water Source" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="primaryCrops" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Primary Crops Grown:</label>
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

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="cropRotation" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Crop Rotation Practices:</label>
        <select id="cropRotation" name="cropRotation" value={farmerFormData.cropRotation} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="farmingTechnology" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Use of Farming Technology:</label>
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

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="livestockTypes" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Livestock Types:</label>
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
      

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="annualIncome" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Annual Income from Farming:</label>
        <input type="number" id="annualIncome" name="annualIncome" value={farmerFormData.annualIncome} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Annual Income" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="otherIncome" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Other Income:</label>
        <input type="number" id="otherIncome" name="otherIncome" value={farmerFormData.otherIncome} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Other Income" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="monthlyEMI" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Existing Monthly EMI:</label>
        <input type="number" id="monthlyEMI" name="monthlyEMI" value={farmerFormData.monthlyEMI} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Monthly EMI" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="loanAmount" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Loan Amount Required:</label>
        <input type="number" id="loanAmount" name="loanAmount" value={farmerFormData.loanAmount} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Loan Amount" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="khasraKhatauni" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Khasra Khatauni:</label>
        <input type="file" id="khasraKhatauni" name="khasraKhatauni" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" required />
      </div>

      <div className="mb-5  flex ">
        
        <input type="checkbox" id="declaration" name="declaration" checked={farmerFormData.declaration} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" required />
        <label htmlFor="declaration" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">I declare the above information is correct:</label>
      </div>
      <div className='flex justify-center'>
      <button onSubmit={handleSubmit} className='ml-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600' >Submit From</button>
      </div>


                </form>
            </div>
        </div>

    </>
}

const ShowMerchantApplicationForm = ({merchantFormData,setMerchantFormData}) => {const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  if (type === 'checkbox') {
    setMerchantFormData({
      ...merchantFormData,
      [name]: checked
    });
  } else if (type === 'file') {
    setMerchantFormData({
      ...merchantFormData,
      [name]: e.target.files[0]
    });
  } else {
    setMerchantFormData({
      ...merchantFormData,
      [name]: value
    });
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission here
  console.log(merchantFormData);
};

return (
  <div className='flex justify-center mt-5'>
    <form onSubmit={handleSubmit} className='border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]'>
      <h1 className='text-4xl text-center font-bold mb-5 bg-lime-700 text-gray-50 p-5'>Agri Merchant Loan Application Form</h1>

      {/* Section 1: Personal and Business Information */}
      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="fullName" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={merchantFormData.fullName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Full Name" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="businessName" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Business Name:</label>
        <input type="text" id="businessName" name="businessName" value={merchantFormData.businessName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Business Name" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="typeOfBusiness" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Type of Business:</label>
        <div className="sm:col-span-4">
          <select id="typeOfBusiness" name="typeOfBusiness" value={merchantFormData.typeOfBusiness} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option value="">Select Type of Business</option>
            <option value="Cash Crop Trader">Cash Crop Trader</option>
            <option value="Non-Perishable Agri Food Crops Trader">Non-Perishable Agri Food Crops Trader</option>
            <option value="Spices Trader">Spices Trader</option>
            <option value="Dry Fruits Trader">Dry Fruits Trader</option>
            <option value="Online Agricultural Seller">Online Agricultural Seller</option>
          </select>
          {merchantFormData.typeOfBusiness === 'Cash Crop Trader' && (
            <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
              <option value="">Select Subcategory</option>
              <option value="Cotton">Cotton</option>
              <option value="Sugarcane">Sugarcane</option>
              <option value="Jute">Jute</option>
              <option value="Tobacco">Tobacco</option>
              <option value="Others">Others</option>
            </select>
          )}
          {merchantFormData.typeOfBusiness === 'Non-Perishable Agri Food Crops Trader' && (
            <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
              <option value="">Select Subcategory</option>
              <option value="Food Grains">Food Grains</option>
              <option value="Lentils">Lentils</option>
              <option value="Pulses">Pulses</option>
              <option value="Others">Others</option>
            </select>
          )}
          {merchantFormData.typeOfBusiness === 'Spices Trader' && (
            <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
              <option value="">Select Subcategory</option>
              <option value="Pepper">Pepper</option>
              <option value="Turmeric">Turmeric</option>
              <option value="Cardamom">Cardamom</option>
              <option value="Cumin">Cumin</option>
              <option value="Others">Others</option>
            </select>
          )}
          {merchantFormData.typeOfBusiness === 'Dry Fruits Trader' && (
            <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
              <option value="">Select Subcategory</option>
              <option value="Almonds">Almonds</option>
              <option value="Cashews">Cashews</option>
              <option value="Walnuts">Walnuts</option>
              <option value="Raisins">Raisins</option>
              <option value="Others">Others</option>
            </select>
          )}
          {merchantFormData.typeOfBusiness === 'Online Agricultural Seller' && (
            <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
              <option value="">Select Subcategory</option>
              <option value="Seeds">Seeds</option>
              <option value="Fertilizers">Fertilizers</option>
              <option value="Others">Others</option>
            </select>
          )}
        </div>
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="businessAddress" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Business Address:</label>
        <input type="text" id="businessAddress" name="businessAddress" value={merchantFormData.businessAddress} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Business Address" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="contactNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Contact Number:</label>
        <input type="text" id="contactNumber" name="contactNumber" value={merchantFormData.contactNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Contact Number" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="email" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Email Address:</label>
        <input type="email" id="email" name="email" value={merchantFormData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Email Address" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="panNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">PAN Number:</label>
        <input type="text" id="panNumber" name="panNumber" value={merchantFormData.panNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="PAN Number" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="aadhaarNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Aadhaar Number:</label>
        <input type="text" id="aadhaarNumber" name="aadhaarNumber" value={merchantFormData.aadhaarNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Aadhaar Number" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="gstin" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">GSTIN:</label>
        <input type="text" id="gstin" name="gstin" value={merchantFormData.gstin} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="GSTIN" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Account Aggregator Consent:</label>
        <div className="sm:col-span-4">
          <input type="checkbox" id="accountAggregatorConsent" name="accountAggregatorConsent" checked={merchantFormData.accountAggregatorConsent} onChange={handleChange} />
          <label htmlFor="accountAggregatorConsent" className="ml-2">I consent to share my banking and GST data via the account aggregator</label>
        </div>
      </div>

      {/* Section 2: Business Details */}
      <h2 className="text-2xl font-bold mb-5">Section 2: Business Details</h2>
      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="yearsInBusiness" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Years in Business:</label>
        <input type="text" id="yearsInBusiness" name="yearsInBusiness" value={merchantFormData.yearsInBusiness} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Years in Business" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="annualRevenue" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Annual Revenue:</label>
        <input type="text" id="annualRevenue" name="annualRevenue" value={merchantFormData.annualRevenue} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Annual Revenue" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="primaryCommoditiesTraded" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Primary Commodities Traded:</label>
        <input type="text" id="primaryCommoditiesTraded" name="primaryCommoditiesTraded" value={merchantFormData.primaryCommoditiesTraded} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Primary Commodities Traded" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="averageMonthlyTransactions" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Average Monthly Transactions:</label>
        <input type="text" id="averageMonthlyTransactions" name="averageMonthlyTransactions" value={merchantFormData.averageMonthlyTransactions} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Average Monthly Transactions" required />
      </div>

      {/* Section 3: Financial Information */}
      <h2 className="text-2xl font-bold mb-5">Section 3: Financial Information</h2>
      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="existingLoans" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Existing Loans (if any):</label>
        <input type="text" id="existingLoans" name="existingLoans" value={merchantFormData.existingLoans} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Existing Loans" />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="currentOutstandingLoanAmount" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Current Outstanding Loan Amount:</label>
        <input type="text" id="currentOutstandingLoanAmount" name="currentOutstandingLoanAmount" value={merchantFormData.currentOutstandingLoanAmount} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Current Outstanding Loan Amount" />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="monthlyEMI" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Monthly EMI:</label>
        <input type="text" id="monthlyEMI" name="monthlyEMI" value={merchantFormData.monthlyEMI} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Monthly EMI" />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Goods and Sales Tax Data:</label>
        <div className="sm:col-span-4">
          <input type="checkbox" id="gstDataConsent" name="gstDataConsent" checked={merchantFormData.gstDataConsent} onChange={handleChange} />
          <label htmlFor="gstDataConsent" className="ml-2">Consent to share via account aggregator</label>
        </div>
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">ONDC Transaction Data:</label>
        <div className="sm:col-span-4">
          <input type="checkbox" id="ondcDataConsent" name="ondcDataConsent" checked={merchantFormData.ondcDataConsent} onChange={handleChange} />
          <label htmlFor="ondcDataConsent" className="ml-2">Consent to share via ONDC API</label>
        </div>
      </div>

      {/* Section 4: Loan Requirement */}
      <h2 className="text-2xl font-bold mb-5">Section 4: Loan Requirement</h2>
      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="requestedLoanAmount" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Requested Loan Amount:</label>
        <input type="text" id="requestedLoanAmount" name="requestedLoanAmount" value={merchantFormData.requestedLoanAmount} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Requested Loan Amount" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="purposeOfLoan" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Purpose of Loan:</label>
        <select id="purposeOfLoan" name="purposeOfLoan" value={merchantFormData.purposeOfLoan} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5">
          <option value="">Select Purpose of Loan</option>
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

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="repaymentPeriodPreference" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Repayment Period Preference:</label>
        <input type="text" id="repaymentPeriodPreference" name="repaymentPeriodPreference" value={merchantFormData.repaymentPeriodPreference} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Repayment Period Preference" required />
      </div>

      {/* Section 5: Supporting Documents */}
      <h2 className="text-2xl font-bold mb-5">Section 5: Supporting Documents</h2>
      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="proofOfIdentity" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Proof of Identity:</label>
        <input type="file" id="proofOfIdentity" name="proofOfIdentity" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="proofOfAddress" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Proof of Address:</label>
        <input type="file" id="proofOfAddress" name="proofOfAddress" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" required />
      </div>

      {/* Section 6: Declaration and Consent */}
      <h2 className="text-2xl font-bold mb-5">Section 6: Declaration and Consent</h2>
      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <p className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-8">
          I hereby declare that the information provided above is accurate and complete to the best of my knowledge. I understand that any false information may result in the rejection of my application.
        </p>
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="signature" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Signature:</label>
        <input type="text" id="signature" name="signature" value={merchantFormData.signature} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Signature" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="date" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Date:</label>
        <input type="date" id="date" name="date" value={merchantFormData.date} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" required />
      </div>

      <div className="flex justify-center">
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
      </div>
    </form>
  </div>
);
};
  
  
 

const Borrow = () => {
    const [user, setUser] = useState("");
    const [farmerFormData, setfarmerFormData] = useState({
        fullName: '',
        dob: '',
        gender: 'male',
        contactNumber: '',
        email: '',
        residentialAddress: '',
        aadharNumber: '',
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

    const [merchantFormData, setMerchantFormData] = useState({
      fullName: '',
      businessName: '',
      typeOfBusiness: '',
      subCategory: '',
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
      monthlyEmi: '',
      goodsAndSalesTaxData: false,
      ondcTransactionData: false,
      requestedLoanAmount: '',
      purposeOfLoan: '',
      repaymentPeriodPreference: '',
      proofOfIdentity: null,
      proofOfAddress: null,
    });
 

    const showForm = (person) => {
        setUser(person);
    }
    const handleSubmit = () => { };

    return ( 

        <>
            <div className='mt-20'>
                {
                    user === "" ? <h1 className='font-bold text-5xl'>Loan Application For</h1> : null
                }
                <div className='flex justify-around mt-10 mb-10'>
                    <button
                        className='font-bold text-3xl px-4 py-2 focus:border-b-4 focus:border-black'
                        onClick={() => showForm("farmer")}
                    >
                        Farmer
                    </button>
                    <button
                        className='font-bold text-3xl px-4 py-2 focus:border-b-4 focus:border-black'
                        onClick={() => showForm("merchant")}
                    >
                        Merchant
                    </button>
                </div>
                <hr className='border-b border-black' />
            </div>
            <div>
                {
                    user === "merchant" ?
                    <ShowMerchantApplicationForm merchantFormData={merchantFormData} setMerchantFormData={setMerchantFormData}  /> 
                         : <ShowFarmerApplicationForm farmerFormData={farmerFormData} setfarmerFormData={setfarmerFormData} />
                      
                }
            </div>
        </>
    );
}

export default Borrow;

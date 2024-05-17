import React, { useState } from 'react';

const ShowFarmerApplicationForm = ({ formData , setFormData }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
        if (name === 'primaryCrops' || name === 'farmingTechnology' || name === 'livestockTypes') {
            const newValue = checked
                ? [...formData[name], value] // Add the value if checked
                : formData[name].filter(item => item !== value); // Remove the value if unchecked
            setFormData({
                ...formData,
                [name]: newValue
            });
        } else {
            setFormData({
                ...formData,
                [name]: checked
            });
        }
    } else if (type === 'file') {
        setFormData({
            ...formData,
            [name]: e.target.files[0]
        });
    } else {
        setFormData({
            ...formData,
            [name]: value
        });
    }
};


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };
    return <>
        <div>
            <div className='flex justify-center mt-5     '>

                <form action="" className='border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]'>
                    <h1 className='text-4xl text-center font-bold mb-5 bg-green-600 text-gray-50 p-5 '>Farmer Application Form</h1>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12 ">
                        <label htmlFor="fullName" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 ">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Full Name" required />
                    </div>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
                        <label htmlFor="dob" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4  ">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 sm:col-span-4 p-2.5" required />
                    </div>
                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12 ">
                        <label htmlFor="gender" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4  ">Gender:</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12 ">
                        <label htmlFor="contactNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Contact Number:</label>
                        <div className="flex items-center sm:col-span-4">
                            <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5" placeholder="Contact Number" required />
                            <button type="button" className="ml-2 bg-green-600 text-white p-2 rounded-lg">Verify</button>
                        </div>
                    </div>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12  ">
                        <label htmlFor="email" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0 sm:w-32">Email Address:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5" placeholder="Email Address" required />
                    </div>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12 ">
                        <label htmlFor="residentialAddress" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Residential Address:</label>
                        <input type="text" id="residentialAddress" name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Residential Address" required />
                    </div>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
                        <label htmlFor="aadharNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 ">Aadhar Number:</label>
                        <div className="flex items-center sm:col-span-4">
                        <input type="text" id="aadharNumber" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-60 p-2.5" placeholder="Aadhar Number" required />
                        <button type="button" className="ml-2 bg-green-600 text-white p-2 rounded-lg">Verify</button>
                    </div>
                    </div>

                    <div className="mb-5 p-2 sm:grid sm:grid-cols-12  ">
                        <label htmlFor="landStatus" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Land Status:</label>
                        <select id="landStatus" name="landStatus" value={formData.landStatus} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5">
                            <option value="Owner">Owner</option>
                            <option value="Tenant">Tenant</option>
                        </select>
                    </div>



                    
      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="fpoAffiliation" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">FPO Affiliation:</label>
        <select id="fpoAffiliation" name="fpoAffiliation" value={formData.fpoAffiliation} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5">
          <option value="FPO Name 1">FPO Name 1</option>
          <option value="FPO Name 2">FPO Name 2</option>
          <option value="FPO Name 3">FPO Name 3</option>
          <option value="none">None</option>
        </select>
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="numberOfDependents" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Number of Dependents:</label>
        <input type="number" id="numberOfDependents" name="numberOfDependents" value={formData.numberOfDependents} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Number of Dependents" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="farmingExperience" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Year of Farming Experience:</label>
        <input type="number" id="farmingExperience" name="farmingExperience" value={formData.farmingExperience} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Years of Farming Experience" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="totalFarmingArea" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Total Farming Area:</label>
        <input type="text" id="totalFarmingArea" name="totalFarmingArea" value={formData.totalFarmingArea} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Total Farming Area" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="farmlandLocation" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Location of Farmland:</label>
        <input type="text" id="farmlandLocation" name="farmlandLocation" value={formData.farmlandLocation} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Location of Farmland" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="soilType" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Soil Type:</label>
        <input type="text" id="soilType" name="soilType" value={formData.soilType} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Soil Type" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="waterSource" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Water Source:</label>
        <input type="text" id="waterSource" name="waterSource" value={formData.waterSource} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Water Source" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="primaryCrops" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Primary Crops Grown:</label>
        <div className="block w-60">
          <label className="block">
            <input type="checkbox" name="primaryCrops" value="Wheat" checked={formData.primaryCrops.includes('Wheat')} onChange={handleChange} /> Wheat
          </label>
          <label className="block">
            <input type="checkbox" name="primaryCrops" value="Rice" checked={formData.primaryCrops.includes('Rice')} onChange={handleChange} /> Rice
          </label>
          <label className="block">
            <input type="checkbox" name="primaryCrops" value="Maize" checked={formData.primaryCrops.includes('Maize')} onChange={handleChange} /> Maize
          </label>
        </div>
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="cropRotation" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Crop Rotation Practices:</label>
        <select id="cropRotation" name="cropRotation" value={formData.cropRotation} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="farmingTechnology" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Use of Farming Technology:</label>
        <div className="block w-60">
          <label className="block">
            <input type="checkbox" name="farmingTechnology" value="drone" checked={formData.farmingTechnology.includes('drone')} onChange={handleChange} /> Drone
          </label>
          <label className="block">
            <input type="checkbox" name="farmingTechnology" value="IOT Device" checked={formData.farmingTechnology.includes('IOT Device')} onChange={handleChange} /> IOT Device
          </label>
          <label className="block">
            <input type="checkbox" name="farmingTechnology" value="Drip Irrigation" checked={formData.farmingTechnology.includes('Drip Irrigation')} onChange={handleChange} /> Drip Irrigation
          </label>
        </div>
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="livestockTypes" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Livestock Types:</label>
        <div className="block w-60">
          <label className="block">
            <input type="checkbox" name="livestockTypes" value="Goat" checked={formData.livestockTypes.includes('Goat')} onChange={handleChange} /> Goat
          </label>
          <label className="block">
            <input type="checkbox" name="livestockTypes" value="Pig" checked={formData.livestockTypes.includes('Pig')} onChange={handleChange} /> Pig
          </label>
          <label className="block">
            <input type="checkbox" name="livestockTypes" value="Horse" checked={formData.livestockTypes.includes('Horse')} onChange={handleChange} /> Horse
          </label>
        </div>
      </div>
      

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="annualIncome" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Annual Income from Farming:</label>
        <input type="number" id="annualIncome" name="annualIncome" value={formData.annualIncome} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Annual Income" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="otherIncome" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Other Income:</label>
        <input type="number" id="otherIncome" name="otherIncome" value={formData.otherIncome} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Other Income" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="monthlyEMI" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Existing Monthly EMI:</label>
        <input type="number" id="monthlyEMI" name="monthlyEMI" value={formData.monthlyEMI} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Monthly EMI" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="loanAmount" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Loan Amount Required:</label>
        <input type="number" id="loanAmount" name="loanAmount" value={formData.loanAmount} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="Loan Amount" required />
      </div>

      <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
        <label htmlFor="khasraKhatauni" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">Khasra Khatauni:</label>
        <input type="file" id="khasraKhatauni" name="khasraKhatauni" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" required />
      </div>

      <div className="mb-5  flex ">
        
        <input type="checkbox" id="declaration" name="declaration" checked={formData.declaration} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" required />
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

const ShowMerchantApplicationForm = ({formData,setFormData}) => {
  
return <>
     <h1>MErchang</h1>

</>
}

const Borrow = () => {
    const [user, setUser] = useState("");
    const [formData, setFormData] = useState({
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

    const [merchantData, setMerchantData] = useState({

    });
    const [farmerData,setFarmerData] = useState({
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
    })

    const showForm = (person) => {
        setUser(person);
    }
    const handleSubmit = () => { };

    return ( 

        <>
            <div className='mt-5'>
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
                    <ShowMerchantApplicationForm formData={formData} setFormData={setFormData}  /> 
                         : <ShowFarmerApplicationForm formData={formData} setFormData={setFormData} />
                      
                }
            </div>
        </>
    );
}

export default Borrow;

import React, { useState } from 'react';

// const ShowFarmerApplicationForm = ({ farmerFormData , setfarmerFormData }) =>{
//    const [currentStep, setCurrentStep] = useState(1);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       if (name === 'primaryCrops' || name === 'farmingTechnology' || name === 'livestockTypes') {
//         const newValue = checked
//           ? [...farmerFormData[name], value] // Add the value if checked
//           : farmerFormData[name].filter(item => item !== value); // Remove the value if unchecked
//         setfarmerFormData({
//           ...farmerFormData,
//           [name]: newValue
//         });
//       } else {
//         setfarmerFormData({
//           ...farmerFormData,
//           [name]: checked
//         });
//       }
//     } else if (type === 'file') {
//       setfarmerFormData({
//         ...farmerFormData,
//         [name]: e.target.files[0]
//       });
//     } else {
//       setfarmerFormData({
//         ...farmerFormData,
//         [name]: value
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log(farmerFormData);
//   };

//   const nextStep = () => {
//     setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
//   };

//   const prevStep = () => {
//     setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
//   };

//   const progressPercentage = (currentStep / 3) * 100;

//   return (
//     <>
//       <div>
//         <div className="flex justify-center mt-5">
//           <form className="border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]">
//             <h1 className="text-4xl text-center font-bold mb-5 bg-lime-700 text-gray-50 p-5">
//               Farmer Application Form
//             </h1>

//             <div className="relative pt-1">
//               <div className="flex mb-2 items-center justify-between">
//                 <div className="text-right">
//                   <span className="text-xs font-semibold inline-block text-lime-700">
//                     Step {currentStep} of 3
//                   </span>
//                 </div>
//               </div>
//               <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-lime-200">
//                 <div
//                   style={{ width: `${progressPercentage}%` }}
//                   className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lime-700"
//                 ></div>
//               </div>
//             </div>

//             {currentStep === 1 && (
//               <>
//                 <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//                   <label htmlFor="fullName" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">
//                     Full Name:
//                   </label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     value={farmerFormData.fullName}
//                     onChange={handleChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5"
//                     placeholder="Full Name"
//                     required
//                   />
//                 </div>
//                 <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//                   <label htmlFor="dob" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">
//                     Date of Birth:
//                   </label>
//                   <input
//                     type="date"
//                     id="dob"
//                     name="dob"
//                     value={farmerFormData.dob}
//                     onChange={handleChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 sm:col-span-4 p-2.5"
//                     required
//                   />
//                 </div>
//                 <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//                   <label htmlFor="gender" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">
//                     Gender:
//                   </label>
//                   <select
//                     id="gender"
//                     name="gender"
//                     value={farmerFormData.gender}
//                     onChange={handleChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5"
//                   >
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//                 <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//                   <label htmlFor="contactNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">
//                     Contact Number:
//                   </label>
//                   <div className="flex items-center sm:col-span-4">
//                     <input
//                       type="text"
//                       id="contactNumber"
//                       name="contactNumber"
//                       value={farmerFormData.contactNumber}
//                       onChange={handleChange}
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5"
//                       placeholder="Contact Number"
//                       required
//                     />
//                     <button type="button" className="ml-2 bg-green-600 text-white p-2 rounded-lg">
//                       Verify
//                     </button>
//                   </div>
//                 </div>
//                 <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//                   <label htmlFor="email" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">
//                     Email Address:
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={farmerFormData.email}
//                     onChange={handleChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5"
//                     placeholder="Email Address"
//                     required
//                   />
//                 </div>
//                 <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//                   <label
//                     htmlFor="residentialAddress"
//                     className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0"
//                   >
//                     Residential Address:
//                   </label>
//                   <input
//                     type="text"
//                     id="residentialAddress"
//                     name="residentialAddress"
//                     value={farmerFormData.residentialAddress}
//                     onChange={handleChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
//                     placeholder="Residential Address"
//                     required
//                   />
//                 </div>
//                 <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//                   <label htmlFor="aadharNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">
//                     Aadhar Number:
//                   </label>
//                   <div className="flex items-center sm:col-span-4">
//                     <input
//                       type="text"
//                       id="aadharNumber"
//                       name="aadharNumber"
//                       value={farmerFormData.aadharNumber}
//                       onChange={handleChange}
//                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-60 p-2.5"
//                       placeholder="Aadhar Number"
//                       required
//                     />
//                     <button type="button" className="ml-2 bg-green-600 text-white p-2 rounded-lg">
//                       Verify
//                     </button>
//                   </div>
//                 </div>
//               </>
//             )}

//             {currentStep === 2 && (
//               <>
//                 <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//                   <label htmlFor="landStatus" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">
//                     Land Status:
//                   </label>
//                   <select
//                     id="landStatus"
//                     name="landStatus"
//                     value={farmerFormData.landStatus}
//                     onChange={handleChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
//                   >
//                     <option value="Owner">Owner</option>
//                     <option value="Tenant">Tenant</option>
//                   </select>
//                 </div>
//                 <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//                   <label
//                     htmlFor="fpoAffiliation"
//                     className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0"
//                   >
//                     FPO Affiliation:
//                   </label>
//                   <select
//                     id="fpoAffiliation"
//                     name="fpoAffiliation"
//                     value={farmerFormData.fpoAffiliation}
//                     onChange={handleChange}
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
//                   >
//                     <option value="FPO Name 1">FPO Name 1</option>
//                     <option value="FPO Name 2">FPO Name 2</option>
//                     <option value="FPO Name 3">FPO Name 3</option>
//                     <option value="none">None</option>
//                   </select>
//                 </div>
//                 {/* Continue with the fields for step 2 */}
//               </>
//             )}

//             {currentStep === 3 && (
//               <>
//                 {/* Add fields for step 3 */}
//               </>
//             )}

//             <div className="mb-5 flex justify-between">
//               {currentStep > 1 && (
//                 <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 p-2 rounded-lg">
//                   Previous
//                 </button>
//               )}
//               {currentStep < 3 && (
//                 <button type="button" onClick={nextStep} className="bg-green-600 text-white p-2 rounded-lg">
//                   Next
//                 </button>
//               )}
//               {currentStep === 3 && (
//                 <button onSubmit={handleSubmit} className="bg-green-500 text-white p-2 rounded-lg">
//                   Submit Form
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

 
// const ShowMerchantApplicationForm = ({merchantFormData,setMerchantFormData}) => {const handleChange = (e) => {
//   const { name, value, type, checked } = e.target;
//   if (type === 'checkbox') {
//     setMerchantFormData({
//       ...merchantFormData,
//       [name]: checked
//     });
//   } else if (type === 'file') {
//     setMerchantFormData({
//       ...merchantFormData,
//       [name]: e.target.files[0]
//     });
//   } else {
//     setMerchantFormData({
//       ...merchantFormData,
//       [name]: value
//     });
//   }
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // Handle form submission here
//   console.log(merchantFormData);
// };

// return (
//   <div className='flex justify-center mt-5'>
//     <form onSubmit={handleSubmit} className='border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]'>
//       <h1 className='text-4xl text-center font-bold mb-5 bg-lime-700 text-gray-50 p-5'>Agri Merchant Loan Application Form</h1>

//       {/* Section 1: Personal and Business Information */}
//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="fullName" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Full Name:</label>
//         <input type="text" id="fullName" name="fullName" value={merchantFormData.fullName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Full Name" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="businessName" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Business Name:</label>
//         <input type="text" id="businessName" name="businessName" value={merchantFormData.businessName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Business Name" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="typeOfBusiness" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Type of Business:</label>
//         <div className="sm:col-span-4">
//           <select id="typeOfBusiness" name="typeOfBusiness" value={merchantFormData.typeOfBusiness} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
//             <option value="">Select Type of Business</option>
//             <option value="Cash Crop Trader">Cash Crop Trader</option>
//             <option value="Non-Perishable Agri Food Crops Trader">Non-Perishable Agri Food Crops Trader</option>
//             <option value="Spices Trader">Spices Trader</option>
//             <option value="Dry Fruits Trader">Dry Fruits Trader</option>
//             <option value="Online Agricultural Seller">Online Agricultural Seller</option>
//           </select>
//           {merchantFormData.typeOfBusiness === 'Cash Crop Trader' && (
//             <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
//               <option value="">Select Subcategory</option>
//               <option value="Cotton">Cotton</option>
//               <option value="Sugarcane">Sugarcane</option>
//               <option value="Jute">Jute</option>
//               <option value="Tobacco">Tobacco</option>
//               <option value="Others">Others</option>
//             </select>
//           )}
//           {merchantFormData.typeOfBusiness === 'Non-Perishable Agri Food Crops Trader' && (
//             <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
//               <option value="">Select Subcategory</option>
//               <option value="Food Grains">Food Grains</option>
//               <option value="Lentils">Lentils</option>
//               <option value="Pulses">Pulses</option>
//               <option value="Others">Others</option>
//             </select>
//           )}
//           {merchantFormData.typeOfBusiness === 'Spices Trader' && (
//             <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
//               <option value="">Select Subcategory</option>
//               <option value="Pepper">Pepper</option>
//               <option value="Turmeric">Turmeric</option>
//               <option value="Cardamom">Cardamom</option>
//               <option value="Cumin">Cumin</option>
//               <option value="Others">Others</option>
//             </select>
//           )}
//           {merchantFormData.typeOfBusiness === 'Dry Fruits Trader' && (
//             <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
//               <option value="">Select Subcategory</option>
//               <option value="Almonds">Almonds</option>
//               <option value="Cashews">Cashews</option>
//               <option value="Walnuts">Walnuts</option>
//               <option value="Raisins">Raisins</option>
//               <option value="Others">Others</option>
//             </select>
//           )}
//           {merchantFormData.typeOfBusiness === 'Online Agricultural Seller' && (
//             <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
//               <option value="">Select Subcategory</option>
//               <option value="Seeds">Seeds</option>
//               <option value="Fertilizers">Fertilizers</option>
//               <option value="Others">Others</option>
//             </select>
//           )}
//         </div>
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="businessAddress" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Business Address:</label>
//         <input type="text" id="businessAddress" name="businessAddress" value={merchantFormData.businessAddress} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Business Address" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="contactNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Contact Number:</label>
//         <input type="text" id="contactNumber" name="contactNumber" value={merchantFormData.contactNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Contact Number" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="email" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Email Address:</label>
//         <input type="email" id="email" name="email" value={merchantFormData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Email Address" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="panNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">PAN Number:</label>
//         <input type="text" id="panNumber" name="panNumber" value={merchantFormData.panNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="PAN Number" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="aadhaarNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Aadhaar Number:</label>
//         <input type="text" id="aadhaarNumber" name="aadhaarNumber" value={merchantFormData.aadhaarNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Aadhaar Number" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="gstin" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">GSTIN:</label>
//         <input type="text" id="gstin" name="gstin" value={merchantFormData.gstin} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="GSTIN" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Account Aggregator Consent:</label>
//         <div className="sm:col-span-4">
//           <input type="checkbox" id="accountAggregatorConsent" name="accountAggregatorConsent" checked={merchantFormData.accountAggregatorConsent} onChange={handleChange} />
//           <label htmlFor="accountAggregatorConsent" className="ml-2">I consent to share my banking and GST data via the account aggregator</label>
//         </div>
//       </div>

//       {/* Section 2: Business Details */}
//       <h2 className="text-2xl font-bold mb-5">Section 2: Business Details</h2>
//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="yearsInBusiness" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Years in Business:</label>
//         <input type="text" id="yearsInBusiness" name="yearsInBusiness" value={merchantFormData.yearsInBusiness} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Years in Business" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="annualRevenue" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Annual Revenue:</label>
//         <input type="text" id="annualRevenue" name="annualRevenue" value={merchantFormData.annualRevenue} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Annual Revenue" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="primaryCommoditiesTraded" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Primary Commodities Traded:</label>
//         <input type="text" id="primaryCommoditiesTraded" name="primaryCommoditiesTraded" value={merchantFormData.primaryCommoditiesTraded} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Primary Commodities Traded" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="averageMonthlyTransactions" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Average Monthly Transactions:</label>
//         <input type="text" id="averageMonthlyTransactions" name="averageMonthlyTransactions" value={merchantFormData.averageMonthlyTransactions} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Average Monthly Transactions" required />
//       </div>

//       {/* Section 3: Financial Information */}
//       <h2 className="text-2xl font-bold mb-5">Section 3: Financial Information</h2>
//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="existingLoans" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Existing Loans (if any):</label>
//         <input type="text" id="existingLoans" name="existingLoans" value={merchantFormData.existingLoans} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Existing Loans" />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="currentOutstandingLoanAmount" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Current Outstanding Loan Amount:</label>
//         <input type="text" id="currentOutstandingLoanAmount" name="currentOutstandingLoanAmount" value={merchantFormData.currentOutstandingLoanAmount} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Current Outstanding Loan Amount" />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="monthlyEMI" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Monthly EMI:</label>
//         <input type="text" id="monthlyEMI" name="monthlyEMI" value={merchantFormData.monthlyEMI} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Monthly EMI" />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Goods and Sales Tax Data:</label>
//         <div className="sm:col-span-4">
//           <input type="checkbox" id="gstDataConsent" name="gstDataConsent" checked={merchantFormData.gstDataConsent} onChange={handleChange} />
//           <label htmlFor="gstDataConsent" className="ml-2">Consent to share via account aggregator</label>
//         </div>
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">ONDC Transaction Data:</label>
//         <div className="sm:col-span-4">
//           <input type="checkbox" id="ondcDataConsent" name="ondcDataConsent" checked={merchantFormData.ondcDataConsent} onChange={handleChange} />
//           <label htmlFor="ondcDataConsent" className="ml-2">Consent to share via ONDC API</label>
//         </div>
//       </div>

//       {/* Section 4: Loan Requirement */}
//       <h2 className="text-2xl font-bold mb-5">Section 4: Loan Requirement</h2>
//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="requestedLoanAmount" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Requested Loan Amount:</label>
//         <input type="text" id="requestedLoanAmount" name="requestedLoanAmount" value={merchantFormData.requestedLoanAmount} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Requested Loan Amount" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="purposeOfLoan" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Purpose of Loan:</label>
//         <select id="purposeOfLoan" name="purposeOfLoan" value={merchantFormData.purposeOfLoan} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5">
//           <option value="">Select Purpose of Loan</option>
//           <option value="Purchase of Inventory">Purchase of Inventory</option>
//           <option value="Expanding Storage Facilities">Expanding Storage Facilities</option>
//           <option value="Working Capital">Working Capital</option>
//           <option value="Transport Costs">Transport Costs</option>
//           <option value="Marketing and Advertising">Marketing and Advertising</option>
//           <option value="Debt Consolidation">Debt Consolidation</option>
//           <option value="Technology Upgrades">Technology Upgrades</option>
//           <option value="Seasonal Purchases">Seasonal Purchases</option>
//           <option value="Procurement from Farmers">Procurement from Farmers</option>
//           <option value="Online Sales Platform Development">Online Sales Platform Development</option>
//           <option value="Emergency Funds">Emergency Funds</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="repaymentPeriodPreference" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Repayment Period Preference:</label>
//         <input type="text" id="repaymentPeriodPreference" name="repaymentPeriodPreference" value={merchantFormData.repaymentPeriodPreference} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Repayment Period Preference" required />
//       </div>

//       {/* Section 5: Supporting Documents */}
//       <h2 className="text-2xl font-bold mb-5">Section 5: Supporting Documents</h2>
//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="proofOfIdentity" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Proof of Identity:</label>
//         <input type="file" id="proofOfIdentity" name="proofOfIdentity" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="proofOfAddress" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Proof of Address:</label>
//         <input type="file" id="proofOfAddress" name="proofOfAddress" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" required />
//       </div>

//       {/* Section 6: Declaration and Consent */}
//       <h2 className="text-2xl font-bold mb-5">Section 6: Declaration and Consent</h2>
//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <p className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-8">
//           I hereby declare that the information provided above is accurate and complete to the best of my knowledge. I understand that any false information may result in the rejection of my application.
//         </p>
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="signature" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Signature:</label>
//         <input type="text" id="signature" name="signature" value={merchantFormData.signature} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Signature" required />
//       </div>

//       <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//         <label htmlFor="date" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Date:</label>
//         <input type="date" id="date" name="date" value={merchantFormData.date} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" required />
//       </div>

//       <div className="flex justify-center">
//         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
//       </div>
//     </form>
//   </div>
// );
// };
 



// const ShowMerchantApplicationForm = ({ merchantFormData, setMerchantFormData }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setMerchantFormData({
//         ...merchantFormData,
//         [name]: checked
//       });
//     } else if (type === 'file') {
//       setMerchantFormData({
//         ...merchantFormData,
//         [name]: e.target.files[0]
//       });
//     } else {
//       setMerchantFormData({
//         ...merchantFormData,
//         [name]: value
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(merchantFormData);
//   };

//   const nextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className='flex justify-center mt-5'>
//       <form onSubmit={handleSubmit} className='border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]'>
//         <h1 className='text-4xl text-center font-bold mb-5 bg-lime-700 text-gray-50 p-5'>Agri Merchant Loan Application Form</h1>
//         {currentPage === 1 && (
//           <div>
//             <h2 className="text-2xl font-bold mb-5">Section 1: Personal and Business Information</h2>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="fullName" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Full Name:</label>
//               <input type="text" id="fullName" name="fullName" value={merchantFormData.fullName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Full Name" required />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="businessName" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Business Name:</label>
//               <input type="text" id="businessName" name="businessName" value={merchantFormData.businessName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Business Name" required />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="typeOfBusiness" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Type of Business:</label>
//               <div className="sm:col-span-4">
//                 <select id="typeOfBusiness" name="typeOfBusiness" value={merchantFormData.typeOfBusiness} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
//                   <option value="">Select Type of Business</option>
//                   <option value="Cash Crop Trader">Cash Crop Trader</option>
//                   <option value="Non-Perishable Agri Food Crops Trader">Non-Perishable Agri Food Crops Trader</option>
//                   <option value="Spices Trader">Spices Trader</option>
//                   <option value="Dry Fruits Trader">Dry Fruits Trader</option>
//                   <option value="Online Agricultural Seller">Online Agricultural Seller</option>
//                 </select>
//                 {merchantFormData.typeOfBusiness === 'Cash Crop Trader' && (
//                   <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
//                     <option value="">Select Subcategory</option>
//                     <option value="Cotton">Cotton</option>
//                     <option value="Sugarcane">Sugarcane</option>
//                     <option value="Jute">Jute</option>
//                     <option value="Tobacco">Tobacco</option>
//                     <option value="Others">Others</option>
//                   </select>
//                 )}
//                 {merchantFormData.typeOfBusiness === 'Non-Perishable Agri Food Crops Trader' && (
//                   <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
//                     <option value="">Select Subcategory</option>
//                     <option value="Food Grains">Food Grains</option>
//                     <option value="Lentils">Lentils</option>
//                     <option value="Pulses">Pulses</option>
//                     <option value="Others">Others</option>
//                   </select>
//                 )}
//                 {merchantFormData.typeOfBusiness === 'Spices Trader' && (
//                   <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
//                     <option value="">Select Subcategory</option>
//                     <option value="Pepper">Pepper</option>
//                     <option value="Turmeric">Turmeric</option>
//                     <option value="Cardamom">Cardamom</option>
//                     <option value="Cumin">Cumin</option>
//                     <option value="Others">Others</option>
//                   </select>
//                 )}
//                 {merchantFormData.typeOfBusiness === 'Dry Fruits Trader' && (
//                   <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
//                     <option value="">Select Subcategory</option>
//                     <option value="Almonds">Almonds</option>
//                     <option value="Cashews">Cashews</option>
//                     <option value="Walnuts">Walnuts</option>
//                     <option value="Raisins">Raisins</option>
//                     <option value="Others">Others</option>
//                   </select>
//                 )}
//                 {merchantFormData.typeOfBusiness === 'Online Agricultural Seller' && (
//                   <select id="subcategory" name="subcategory" value={merchantFormData.subcategory} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-2 p-2.5">
//                     <option value="">Select Subcategory</option>
//                     <option value="Seeds">Seeds</option>
//                     <option value="Fertilizers">Fertilizers</option>
//                     <option value="Others">Others</option>
//                   </select>
//                 )}
//               </div>
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="businessAddress" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Business Address:</label>
//               <input type="text" id="businessAddress" name="businessAddress" value={merchantFormData.businessAddress} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Business Address" required />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="contactNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Contact Number:</label>
//               <input type="text" id="contactNumber" name="contactNumber" value={merchantFormData.contactNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Contact Number" required />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="emailAddress" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Email Address:</label>
//               <input type="email" id="emailAddress" name="emailAddress" value={merchantFormData.emailAddress} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Email Address" required />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="panNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">PAN Number:</label>
//               <input type="text" id="panNumber" name="panNumber" value={merchantFormData.panNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="PAN Number" required />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="aadhaarNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Aadhaar Number:</label>
//               <input type="text" id="aadhaarNumber" name="aadhaarNumber" value={merchantFormData.aadhaarNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Aadhaar Number" required />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="gstin" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">GSTIN:</label>
//               <input type="text" id="gstin" name="gstin" value={merchantFormData.gstin} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="GSTIN" required />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="accountAggregatorConsent" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Account Aggregator Consent:</label>
//               <input type="checkbox" id="accountAggregatorConsent" name="accountAggregatorConsent" checked={merchantFormData.accountAggregatorConsent} onChange={handleChange} className="mt-1 sm:col-span-4" />
//               <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">I consent to share my banking and GST data via the account aggregator</span>
//             </div>
//             <div className="flex justify-between">
//               <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={nextPage}>Next</button>
//             </div>
//           </div>
//         )}
//         {currentPage === 2 && (
//           <div>
//             <h2 className="text-2xl font-bold mb-5">Section 2: Business Details</h2>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="yearsInBusiness" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Years in Business:</label>
//               <input type="number" id="yearsInBusiness" name="yearsInBusiness" value={merchantFormData.yearsInBusiness} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Years in Business" required />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="annualRevenue" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Annual Revenue:</label>
//               <input type="number" id="annualRevenue" name="annualRevenue" value={merchantFormData.annualRevenue} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Annual Revenue" required />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="primaryCommoditiesTraded" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Primary Commodities Traded:</label>
//               <input type="text" id="primaryCommoditiesTraded" name="primaryCommoditiesTraded" value={merchantFormData.primaryCommoditiesTraded} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Primary Commodities Traded" required />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="averageMonthlyTransactions" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Average Monthly Transactions:</label>
//               <input type="number" id="averageMonthlyTransactions" name="averageMonthlyTransactions" value={merchantFormData.averageMonthlyTransactions} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Average Monthly Transactions" required />
//             </div>
//             <h2 className="text-2xl font-bold mb-5">Section 3: Financial Information</h2>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="existingLoans" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Existing Loans (if any):</label>
//               <input type="text" id="existingLoans" name="existingLoans" value={merchantFormData.existingLoans} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Existing Loans" />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="currentOutstandingLoanAmount" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Current Outstanding Loan Amount:</label>
//               <input type="number" id="currentOutstandingLoanAmount" name="currentOutstandingLoanAmount" value={merchantFormData.currentOutstandingLoanAmount} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Current Outstanding Loan Amount" />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="monthlyEMI" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Monthly EMI:</label>
//               <input type="number" id="monthlyEMI" name="monthlyEMI" value={merchantFormData.monthlyEMI} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Monthly EMI" />
//             </div>
//             <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
//               <label htmlFor="goodsAndSalesTaxData" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Goods and Sales Tax Data:</label>
//               <input type="checkbox" id="goodsAndSalesTaxData" name="goodsAndSalesTaxData" checked={merchantFormData.goodsAndSalesTaxData} onChange={handleChange} className="mt-1 sm:col-span-4" />
// <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Consent to share via account aggregator</span>
// </div>
// <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
// <label htmlFor="onDCTransactionData" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">ONDC Transaction Data:</label>
// <input type="checkbox" id="onDCTransactionData" name="onDCTransactionData" checked={merchantFormData.onDCTransactionData} onChange={handleChange} className="mt-1 sm:col-span-4" />
// <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Consent to share via ONDC API</span>
// </div>
// <div className="flex justify-between">
// <button type="button" className="text-gray-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={prevPage}>Previous</button>
// <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={nextPage}>Next</button>
// </div>
// </div>
// )}
// {currentPage === 3 && (
// <div>
// <h2 className="text-2xl font-bold mb-5">Section 4: Loan Requirement</h2>
// <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
// <label htmlFor="requestedLoanAmount" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Requested Loan Amount:</label>
// <input type="number" id="requestedLoanAmount" name="requestedLoanAmount" value={merchantFormData.requestedLoanAmount} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Requested Loan Amount" required />
// </div>
// <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
// <label htmlFor="purposeOfLoan" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Purpose of Loan:</label>
// <select id="purposeOfLoan" name="purposeOfLoan" value={merchantFormData.purposeOfLoan} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5">
// <option value="">Select Purpose of Loan</option>
// <option value="Purchase of Inventory">Purchase of Inventory</option>
// <option value="Expanding Storage Facilities">Expanding Storage Facilities</option>
// <option value="Working Capital">Working Capital</option>
// <option value="Transport Costs">Transport Costs</option>
// <option value="Marketing and Advertising">Marketing and Advertising</option>
// <option value="Debt Consolidation">Debt Consolidation</option>
// <option value="Technology Upgrades">Technology Upgrades</option>
// <option value="Seasonal Purchases">Seasonal Purchases</option>
// <option value="Procurement from Farmers">Procurement from Farmers</option>
// <option value="Online Sales Platform Development">Online Sales Platform Development</option>
// <option value="Emergency Funds">Emergency Funds</option>
// <option value="Other">Other</option>
// </select>
// </div>
// <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
// <label htmlFor="repaymentPeriodPreference" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Repayment Period Preference:</label>
// <input type="text" id="repaymentPeriodPreference" name="repaymentPeriodPreference" value={merchantFormData.repaymentPeriodPreference} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5" placeholder="Repayment Period Preference" required />
// </div>
// <h2 className="text-2xl font-bold mb-5">Section 5: Aadhaar Verification</h2>
// <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
// <label htmlFor="aadhaarVerification" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">Aadhaar Verification via DigiLocker:</label>
// <input type="checkbox" id="aadhaarVerification" name="aadhaarVerification" checked={merchantFormData.aadhaarVerification} onChange={handleChange} className="mt-1 sm:col-span-4" />
// <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">I consent to verify my Aadhaar information via DigiLocker</span>
// </div>
// <h2 className="text-2xl font-bold mb-5">Section 6: Declaration and Consent</h2>
// <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
// <p className="text-sm text-gray-600 dark:text-gray-400 sm:col-span-12">I hereby declare that the information provided above is accurate and complete to the best of my knowledge. I understand that any false information may result in the rejection of my application.</p>
// </div>
// <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
// <input type="checkbox" id="declarationConsent" name="declarationConsent" checked={merchantFormData.declarationConsent} onChange={handleChange} className="mt-1 sm:col-span-4" />
// <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">I agree to the declaration and consent statement</span>
// </div>
// <div className="flex justify-between">
// <button type="button" className="text-gray-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={prevPage}>Previous</button>
// <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Submit</button>
// </div>
// </div>
// )}
// </form>
// </div>
//   )
// }
// some improvement  above one

 
// const ShowMerchantApplicationForm = ({ merchantFormData, setMerchantFormData }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalSections = 3; // Updated total sections

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setMerchantFormData({
//         ...merchantFormData,
//         [name]: checked
//       });
//     } else if (type === 'file') {
//       setMerchantFormData({
//         ...merchantFormData,
//         [name]: e.target.files[0]
//       });
//     } else {
//       setMerchantFormData({
//         ...merchantFormData,
//         [name]: value
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(merchantFormData);
//   };

//   const nextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   const progressPercentage = (currentPage / totalSections) * 100;

//   return (
//     <div className='flex justify-center mt-5'>
//       <form onSubmit={handleSubmit} className='border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]'>
//         <h1 className='text-4xl text-center font-bold mb-5 bg-lime-700 text-gray-50 p-5'>Agri Merchant Loan Application Form</h1>
//         {/* Progress Bar */}
//         <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
//           <div style={{ width: `${progressPercentage}%` }} className="bg-blue-700 text-xs leading-none py-1 text-center text-white" />
//         </div>
//         {/* Section 1: Personal and Business Information */}
//         {currentPage === 1 && (
//   <div>
//     <h2 className="text-xl font-semibold mb-3">Personal and Business Information</h2>
//     <div className="mb-4">
//       <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
//       <input
//         type="text"
//         id="fullName"
//         name="fullName"
//         value={merchantFormData.fullName}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
//       <input
//         type="text"
//         id="businessName"
//         name="businessName"
//         value={merchantFormData.businessName}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">Type of Business</label>
//       {/* Add dropdown for Type of Business */}
//       <select
//         id="businessType"
//         name="businessType"
//         value={merchantFormData.businessType}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       >
//         <option value="">Select Business Type</option>
//         <optgroup label="Cash Crop Trader">
//           <option value="Cotton">Cotton</option>
//           <option value="Sugarcane">Sugarcane</option>
//           <option value="Jute">Jute</option>
//           <option value="Tobacco">Tobacco</option>
//           <option value="Others">Others</option>
//         </optgroup>
//         <optgroup label="Non-Perishable Agri Food Crops Trader">
//           <option value="Food Grains">Food Grains</option>
//           <option value="Lentils">Lentils</option>
//           <option value="Pulses">Pulses</option>
//           <option value="Others">Others</option>
//         </optgroup>
//         <optgroup label="Spices Trader">
//           <option value="Pepper">Pepper</option>
//           <option value="Turmeric">Turmeric</option>
//           <option value="Cardamom">Cardamom</option>
//           <option value="Cumin">Cumin</option>
//           <option value="Others">Others</option>
//         </optgroup>
//         <optgroup label="Dry Fruits Trader">
//           <option value="Almonds">Almonds</option>
//           <option value="Cashews">Cashews</option>
//           <option value="Walnuts">Walnuts</option>
//           <option value="Raisins">Raisins</option>
//           <option value="Others">Others</option>
//         </optgroup>
//         <optgroup label="Online Agricultural Seller">
//           <option value="Seeds">Seeds</option>
//           <option value="Fertilizers">Fertilizers</option>
//           <option value="Others">Others</option>
//         </optgroup>
//       </select>
//     </div>
//     <div className="mb-4">
//       <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700">Business Address</label>
//       <input
//         type="text"
//         id="businessAddress"
//         name="businessAddress"
//         value={merchantFormData.businessAddress}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
//       <input
//         type="text"
//         id="contactNumber"
//         name="contactNumber"
//         value={merchantFormData.contactNumber}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address</label>
//       <input
//         type="email"
//         id="emailAddress"
//         name="emailAddress"
//         value={merchantFormData.emailAddress}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700">PAN Number</label>
//       <input
//         type="text"
//         id="panNumber"
//         name="panNumber"
//         value={merchantFormData.panNumber}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-gray-700">Aadhaar Number</label>
//       <input
//         type="text"
//         id="aadhaarNumber"
//         name="aadhaarNumber"
//         value={merchantFormData.aadhaarNumber}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="gstin" className="block text-sm font-medium text-gray-700">GSTIN</label>
//       <input
//         type="text"
//         id="gstin"
//         name="gstin"
//         value={merchantFormData.gstin}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="accountAggregatorConsent" className="flex items-center">
//         <input
//           type="checkbox"
//           id="accountAggregatorConsent"
//           name="accountAggregatorConsent"
//           checked={merchantFormData.accountAggregatorConsent}
//           onChange={handleChange}
//           className="mr-2"
//         />
//         <span className="text-sm text-gray-700">I consent to share my banking and GST data via the account aggregator</span>
//       </label>
//     </div>
//   </div>
// )}
//         {/* Section 2: Business Details */}
//         {currentPage === 2 && (
//   <div>
//     <h2 className="text-xl font-semibold mb-3">Business Details</h2>
//     <div className="mb-4">
//       <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-gray-700">Years in Business</label>
//       <input
//         type="number"
//         id="yearsInBusiness"
//         name="yearsInBusiness"
//         value={merchantFormData.yearsInBusiness}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700">Annual Revenue</label>
//       <input
//         type="text"
//         id="annualRevenue"
//         name="annualRevenue"
//         value={merchantFormData.annualRevenue}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="primaryCommodities" className="block text-sm font-medium text-gray-700">Primary Commodities Traded</label>
//       <input
//         type="text"
//         id="primaryCommodities"
//         name="primaryCommodities"
//         value={merchantFormData.primaryCommodities}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="averageMonthlyTransactions" className="block text-sm font-medium text-gray-700">Average Monthly Transactions</label>
//       <input
//         type="number"
//         id="averageMonthlyTransactions"
//         name="averageMonthlyTransactions"
//         value={merchantFormData.averageMonthlyTransactions}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//   </div>
// )}

//         {/* Section 3: Financial Information */}
//         {currentPage === 3 && (
//   <div>
//     <h2 className="text-xl font-semibold mb-3">Financial Information</h2>
//     <div className="mb-4">
//       <label htmlFor="existingLoans" className="block text-sm font-medium text-gray-700">Existing Loans (if any)</label>
//       <input
//         type="text"
//         id="existingLoans"
//         name="existingLoans"
//         value={merchantFormData.existingLoans}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="currentOutstandingLoanAmount" className="block text-sm font-medium text-gray-700">Current Outstanding Loan Amount</label>
//       <input
//         type="text"
//         id="currentOutstandingLoanAmount"
//         name="currentOutstandingLoanAmount"
//         value={merchantFormData.currentOutstandingLoanAmount}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="monthlyEMI" className="block text-sm font-medium text-gray-700">Monthly EMI</label>
//       <input
//         type="text"
//         id="monthlyEMI"
//         name="monthlyEMI"
//         value={merchantFormData.monthlyEMI}
//         onChange={handleChange}
//         className="mt-1 p-2 w-full border-gray-300 rounded-md"
//       />
//     </div>
//     <div className="mb-4">
//       <label htmlFor="goodsAndSalesTaxConsent" className="block text-sm font-medium text-gray-700">Goods and Sales Tax Data</label>
//       <input
//         type="checkbox"
//         id="goodsAndSalesTaxConsent"
//         name="goodsAndSalesTaxConsent"
//         checked={merchantFormData.goodsAndSalesTaxConsent}
//         onChange={handleChange}
//         className="mt-1 p-2"
//       />
//       <span className="ml-2 text-sm text-gray-600">Consent to share via account aggregator</span>
//     </div>
//     <div className="mb-4">
//       <label htmlFor="ondcTransactionDataConsent" className="block text-sm font-medium text-gray-700">ONDC Transaction Data</label>
//       <input
//         type="checkbox"
//         id="ondcTransactionDataConsent"
//         name="ondcTransactionDataConsent"
//         checked={merchantFormData.ondcTransactionDataConsent}
//         onChange={handleChange}
//         className="mt-1 p-2"
//       />
//       <span className="ml-2 text-sm text-gray-600">Consent to share via ONDC API</span>
//     </div>
//   </div>
// )}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between">
//           {currentPage !== 1 && (
//             <button type="button" className="text-gray-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={prevPage}>Previous</button>
//           )}
//           {currentPage !== totalSections ? (
//             <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={nextPage}>Next</button>
//           ) : (
//             <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Submit</button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };
 
const ShowFarmerApplicationForm = ({ farmerFormData, setfarmerFormData }) => {
  const [currentStep, setCurrentStep] = useState(1);

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
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const progressPercentage = (currentStep / 3) * 100;

  return (
    <>
      <div>
        <div className="flex justify-center mt-5">
          <form className="border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]">
            <h1 className="text-4xl text-center font-bold mb-5 bg-lime-700 text-gray-50 p-5">Farmer Application Form</h1>

            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-lime-700">Step {currentStep} of 3</span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-lime-200">
                <div
                  style={{ width: `${progressPercentage}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lime-700"
                ></div>
              </div>
            </div>

            {currentStep === 1 && (
  <>
    <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
      <label htmlFor="fullName" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">
        Full Name:
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={farmerFormData.fullName}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:col-span-4 p-2.5"
        placeholder="Full Name"
        required
      />
    </div>
    <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
      <label htmlFor="dob" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">
        Date of Birth:
      </label>
      <input
        type="date"
        id="dob"
        name="dob"
        value={farmerFormData.dob}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 sm:col-span-4 p-2.5"
        required
      />
    </div>
    <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
      <label htmlFor="gender" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">
        Gender:
      </label>
      <select
        id="gender"
        name="gender"
        value={farmerFormData.gender}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5"
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
      <label htmlFor="contactNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">
        Contact Number:
      </label>
      <div className="flex items-center sm:col-span-4">
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={farmerFormData.contactNumber}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5"
          placeholder="Contact Number"
          required
        />
        <button type="button" className="ml-2 bg-green-600 text-white p-2 rounded-lg">
          Verify
        </button>
      </div>
    </div>
    <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
      <label htmlFor="email" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0">
        Email Address:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={farmerFormData.email}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-60 p-2.5"
        placeholder="Email Address"
        required
      />
    </div>
    <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
      <label
        htmlFor="residentialAddress"
        className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4 sm:mb-0"
      >
        Residential Address:
      </label>
      <input
        type="text"
        id="residentialAddress"
        name="residentialAddress"
        value={farmerFormData.residentialAddress}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
        placeholder="Residential Address"
        required
      />
    </div>
    <div className="mb-5 p-2 sm:grid sm:grid-cols-12">
      <label htmlFor="aadharNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:col-span-4">
        Aadhar Number:
      </label>
      <div className="flex items-center sm:col-span-4">
        <input
          type="text"
          id="aadharNumber"
          name="aadharNumber"
          value={farmerFormData.aadharNumber}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-60 p-2.5"
          placeholder="Aadhar Number"
          required
        />
        <button type="button" className="ml-2 bg-green-600 text-white p-2 rounded-lg">
          Verify
        </button>
      </div>
    </div>
  </>
)}


{currentStep === 2 && (
  <>
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
      </>
  
)}


            {currentStep === 3 && (
              <>
                {/* Page 3 fields */}
                

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


              </>
            )}

            <div className="mb-5 flex justify-between">
              {currentStep > 1 && (
                <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 p-2 rounded-lg">
                  Previous
                </button>
              )}
              {currentStep < 3 && (
                <button type="button" onClick={nextStep} className="bg-green-600 text-white p-2 rounded-lg">
                  Next
                </button>
              )}
              {/* {currentStep === 3 && (
                <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded-lg">
                  Submit Form
                </button>
              )} */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
 

const ShowMerchantApplicationForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const progressPercentage = (currentPage / 6) * 100;
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
    console.log(formData);
    // Add submission logic here
  };

  return (
    <div className="flex justify-center mt-5">
      <form onSubmit={handleSubmit} className="border-2 p-5 border-gray-200 rounded-md sm:w-[80vw]">
        <h1 className="text-4xl text-center font-bold mb-5 bg-lime-700 text-gray-50 p-5">Agri Merchant Loan Application Form</h1>
        <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-lime-700">Step {currentPage} of 6</span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-lime-200">
                <div
                  style={{ width: `${progressPercentage}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lime-700"
                ></div>
              </div>
            </div>
        {/* Section 1: Personal and Business Information */}
        {currentPage === 1 && (
  <div>
    <h2 className="text-xl font-semibold mb-3">Personal and Business Information</h2>
    <div className="mb-4">
      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
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
      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
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
      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">Type of Business</label>
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
      <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700">Business Address</label>
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
      <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
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
      <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address</label>
      <input
        type="email"
        id="emailAddress"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700">PAN Number</label>
      <input
        type="text"
        id="panNumber"
        name="panNumber"
        value={formData.panNumber}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-gray-700">Aadhaar Number</label>
      <input
        type="text"
        id="aadhaarNumber"
        name="aadhaarNumber"
        value={formData.aadhaarNumber}
        onChange={handleChange}
        className="mt-1 p-2 w-full border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="gstin" className="block text-sm font-medium text-gray-700">GSTIN</label>
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
        {currentPage === 2 && (
  <div>
    <h2 className="text-xl font-semibold mb-3">Business Details</h2>
    <div className="mb-4">
      <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-gray-700">Years in Business</label>
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
      <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700">Annual Revenue</label>
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
      <label htmlFor="primaryCommoditiesTraded" className="block text-sm font-medium text-gray-700">Primary Commodities Traded</label>
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
      <label htmlFor="averageMonthlyTransactions" className="block text-sm font-medium text-gray-700">Average Monthly Transactions</label>
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
        {currentPage === 3 && (
  <div>
    <h2 className="text-xl font-semibold mb-3">Financial Information</h2>
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
        {currentPage === 4 && (
  <div>
    <h2 className="text-xl font-semibold mb-3">Loan Requirement</h2>
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
        {currentPage === 5 && (
  <div>
    <h2 className="text-xl font-semibold mb-3">Aadhaar Verification</h2>
    <div className="mb-4">
      <label htmlFor="aadhaarVerification" className="block text-sm font-medium text-gray-700">Aadhaar Verification via DigiLocker</label>
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
  </div>
)}


        {/* Section 6: Declaration and Consent */}
        {currentPage === 6 && (
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
  </div>
)}


        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {currentPage !== 1 && (
            <button type="button" className="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={prevPage}>Previous</button>
          )}
          {currentPage !== 6 ? (
            <button type="button" className="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={nextPage}>Next</button>
          ) : (
            <button type="submit" className="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Submit</button>
          )}
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

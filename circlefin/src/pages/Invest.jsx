import React,{useState} from 'react'

const Invest = () => {
  const [investerFormDate, setInvesterFormDate] = useState({
    name: '',
    mobile: '',
    pan: '',
    age: '',
    gender: 'male',
    annualIncome: '',
    politicallyExposed: 'no',
    accountNumber: '',
    iifcNumber: '',
    returnsPreference: 'monthly'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvesterFormDate({
      ...investerFormDate,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(investerFormDate);
  };
  return (
    <div>
       <div className='flex justify-center mt-5     '>
          <form action="" className='border-2 p-5 border-gray-200 rounded-md'>
            <h1 className='font-bold text-4xl p-5 rounded-md text-white bg-blue-600'>P2P Investor Application Form</h1>
          <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Name:</label>
          <input type="text" id="name" name="name" value={investerFormDate.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
        </div>

        <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
          <label htmlFor="mobile" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Mobile Number:</label>
          <input type="number" id="mobile" name="mobile" value={investerFormDate.mobile} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile" required />
        </div>

        <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
          <label htmlFor="panNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">PAN Number:</label>
          <input type="text" id="panNumber" name="panNumber" value={investerFormDate.panNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PAN Number" required />
        </div>

        <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
          <label htmlFor="age" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Age:</label>
          <input type="number" id="age" name="age" value={investerFormDate.age} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age" required />
        </div>

        <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
          <label htmlFor="gender" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Gender:</label>
          <select id="gender" name="gender" value={investerFormDate.gender} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
          <label htmlFor="annualIncome" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Annual Income:</label>
          <input type="number" id="annualIncome" name="annualIncome" value={investerFormDate.annualIncome} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Annual Income" required />
        </div>

       
 

         
        <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
          <label className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Politically Exposed:</label>
          <div className="flex items-center">
            <label className="inline-flex items-center mr-4">
              <input type="radio" name="politicallyExposed" value="yes" checked={investerFormDate.politicallyExposed === 'yes'} onChange={handleChange} className="form-radio text-blue-500 border-gray-300" />
              <span className="ml-2 text-gray-700 dark:text-white">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="politicallyExposed" value="no" checked={investerFormDate.politicallyExposed === 'no'} onChange={handleChange} className="form-radio text-blue-500 border-gray-300" />
              <span className="ml-2 text-gray-700 dark:text-white">No</span>
            </label>
          </div>
        </div>

        <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
          <label htmlFor="accountNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Account Number:</label>
          <input type="text" id="accountNumber" name="accountNumber" value={investerFormDate.accountNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Account Number" required />
        </div>

        <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
          <label htmlFor="iifcNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">IIFC Number:</label>
          <input type="text" id="iifcNumber" name="iifcNumber" value={investerFormDate.iifcNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="IIFC Number" required />
        </div>

        <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
          <label htmlFor="returnsPreference" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Returns Preference:</label>
          <select id="returnsPreference" name="returnsPreference" value={investerFormDate.returnsPreference} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option value="">Select Returns Preference</option>
            <option value="monthly">Monthly</option>
            <option value="lumpsum">Lumpsum</option>
          </select>
        </div>
        <div className='flex justify-center' >
        <button type="button" onSubmit={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

        </div>
          </form>
        </div>
    </div>
  )
}

export default Invest
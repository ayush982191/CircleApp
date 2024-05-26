import React from 'react'

const Dashboard = () => {
    return (
        <div className='mt-32'>
            <div className='flex justify-around'>
                <div>
                    <h1 className='text-3xl font-semibold'>Welcome back Sushil</h1>
                    <p>Here is your account Overview</p>
                </div>
                <div className='flex gap-5 items-center'>
                    <button className='bg-lime-300 p-2 font-semibold rounded-md hover:bg-lime-400' >Add Funds</button>
                    {/* <button className='bg-lime-300 p-2 font-semibold rounded-md hover:bg-lime-400' >Withdraw Funds</button> */}
                </div>
            </div>

            <div className='flex justify-around mt-20'>
                <div className='bg-lime-100 shadow-md rounded-xl p-5'>
                    <p>Total Number of Investment</p>
                    <p className='font-bold'>6</p>
                </div>
                <div className='bg-lime-100 shadow-md rounded-xl p-5'>
                    <p>Annualized Return on Portfolio Level</p>
                    <p className='font-bold text-lime-600'>10.08%</p>
                </div>
                <div className='bg-lime-100 shadow-md rounded-xl p-5'>
                    <p>Account Value (Balance)</p>
                    <p className='font-bold'> ₹113,000</p>
                </div>
                <div className='bg-lime-100 shadow-md rounded-xl p-5'>
                    <p>Total Repayments</p>
                    <p className='font-bold'>₹152,000</p>
                </div>
            </div>
            
            {/* <div className='mt-20 flex justify-around'>
                <div className='bg-lime-100 shadow-md'>
                    <h1 className='my-2 ml-2 font-bold text-2xl'>Portfolio</h1>
                    <hr />
                    <div className='flex flex-col justify-between h-60'>
                        <div className='mt-5 flex justify-around'>
                            <h3 className='text-center font-semibold'>Individual</h3>
                            <h3 className='text-center font-semibold'>Funds</h3>
                        </div>
                        <div className='my-3 flex'>
                            <div className='ml-5 flex justify-between items-center w-72'>
                                <div className='bg-red-200 rounded-full p-3 flex items-center justify-center h-7 w-7'>
                                    <h1 className='text-center font-bold'>A1</h1>
                                </div>
                                <div className='w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                                    <div className='bg-red-300 h-2.5 rounded-full' style={{ width: '80%' }}></div>
                                </div>
                                <p className='font-semibold'>80%</p>
                            </div>
                            <div className='flex justify-evenly items-center w-72'>
                                <div className='bg-violet-200 rounded-full p-3 flex items-center justify-center h-7 w-7'>
                                    <h1 className='text-center font-bold'>B1</h1>
                                </div>
                                <div className='w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                                    <div className='bg-violet-300 h-2.5 rounded-full' style={{ width: '90%' }}></div>
                                </div>
                                <p className='font-semibold'>90%</p>
                            </div>
                        </div>
                        <div className='my-3 flex'>
                            <div className='ml-5 flex justify-between items-center w-72'>
                                <div className='bg-yellow-200 rounded-full p-3 flex items-center justify-center h-7 w-7'>
                                    <h1 className='text-center font-bold'>A2</h1>
                                </div>
                                <div className='w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                                    <div className='bg-yellow-300 h-2.5 rounded-full' style={{ width: '60%' }}></div>
                                </div>
                                <p className='font-semibold'>60%</p>
                            </div>
                           
                        </div>
                        <div className='my-3 flex'>
                            <div className='ml-5 flex justify-between items-center w-72'>
                                <div className='bg-lime-200 rounded-full p-3 flex items-center justify-center h-7 w-7'>
                                    <h1 className='text-center font-bold'>A3</h1>
                                </div>
                                <div className='w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                                    <div className='bg-lime-300 h-2.5 rounded-full' style={{ width: '70%' }}></div>
                                </div>
                                <p className='font-semibold'>70%</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className='bg-lime-100 shadow-md'>
                    <h1 className='my-2 ml-2 font-bold text-2xl'>Account Summary</h1>
                    <hr />
                    <div className='flex flex-col justify-between h-60 w-96'>
                        <div className='flex my-2 mx-10 justify-between'>
                            <h1>Account Cash</h1>
                            <p className='text-lime-700'>₹2,34,000</p>
                        </div>
                        <div className='flex my-4 mx-10 justify-between'>
                            <h1>Pending</h1>
                            <p className='text-lime-700'>₹33,000</p>
                        </div>
                        <div className='flex my-4 mx-10 justify-between'>
                            <h1>Invested</h1>
                            <p className='text-lime-700'>₹70,000</p>
                        </div>
                        <div className='flex my-4 mx-10 justify-between'>
                            <h1>Account Value</h1>
                            <p className='text-lime-700'>₹12,000</p>
                        </div>
                    </div>
                </div>
            </div> */}






<div class="mt-20 mx-16 shadow-md">
    <h1 class="text-3xl font-bold mb-5 text-center text-lime-600">Loan Details</h1>
    <div class="overflow-x-auto bg-white rounded-lg">
        <table class="min-w-full bg-gray-100">
            <thead>
                <tr class="bg-lime-500 text-white">
                    <th class="py-3 px-4 border-b-2 border-gray-200">Loan ID</th>
                    <th class="py-3 px-4 border-b-2 border-gray-200">Borrower Name</th>
                    <th class="py-3 px-4 border-b-2 border-gray-200">Loan Amount (₹)</th>
                    <th class="py-3 px-4 border-b-2 border-gray-200">Interest Rate (%)</th>
                    <th class="py-3 px-4 border-b-2 border-gray-200">Start Date</th>
                    <th class="py-3 px-4 border-b-2 border-gray-200">End Date</th>
                    <th class="py-3 px-4 border-b-2 border-gray-200">Total Return (₹)</th>
                    <th class="py-3 px-4 border-b-2 border-gray-200">Remaining Payment (₹)</th>
                    <th class="py-3 px-4 border-b-2 border-gray-200">Default Chance (%)</th>
                    <th class="py-3 px-4 border-b-2 border-gray-200">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover:bg-lime-100">
                    <td class="py-3 px-4 border-b">1</td>
                    <td class="py-3 px-4 border-b">Ramesh Singh</td>
                    <td class="py-3 px-4 border-b">50,000</td>
                    <td class="py-3 px-4 border-b">7.5</td>
                    <td class="py-3 px-4 border-b">Jan 2023</td>
                    <td class="py-3 px-4 border-b">Dec 2024</td>
                    <td class="py-3 px-4 border-b">7,500</td>
                    <td class="py-3 px-4 border-b">30,000</td>
                    <td class="py-3 px-4 border-b">10</td>
                    <td class="py-3 px-4 border-b text-green-500">Active</td>
                </tr>
                <tr class="hover:bg-lime-100">
                    <td class="py-3 px-4 border-b">2</td>
                    <td class="py-3 px-4 border-b">Sita Devi</td>
                    <td class="py-3 px-4 border-b">70,000</td>
                    <td class="py-3 px-4 border-b">8</td>
                    <td class="py-3 px-4 border-b">Feb 2022</td>
                    <td class="py-3 px-4 border-b">Jan 2024</td>
                    <td class="py-3 px-4 border-b">14,000</td>
                    <td class="py-3 px-4 border-b">20,000</td>
                    <td class="py-3 px-4 border-b">5</td>
                    <td class="py-3 px-4 border-b text-green-500">Active</td>
                </tr>
                <tr class="hover:bg-lime-100">
                    <td class="py-3 px-4 border-b">3</td>
                    <td class="py-3 px-4 border-b">Anil Kumar</td>
                    <td class="py-3 px-4 border-b">30,000</td>
                    <td class="py-3 px-4 border-b">7</td>
                    <td class="py-3 px-4 border-b">Mar 2023</td>
                    <td class="py-3 px-4 border-b">Feb 2025</td>
                    <td class="py-3 px-4 border-b">3,500</td>
                    <td class="py-3 px-4 border-b">25,000</td>
                    <td class="py-3 px-4 border-b">15</td>
                    <td class="py-3 px-4 border-b text-green-500">Active</td>
                </tr>
                <tr class="hover:bg-lime-100">
                    <td class="py-3 px-4 border-b">4</td>
                    <td class="py-3 px-4 border-b">Kavita Yadav</td>
                    <td class="py-3 px-4 border-b">80,000</td>
                    <td class="py-3 px-4 border-b">8.5</td>
                    <td class="py-3 px-4 border-b">Apr 2022</td>
                    <td class="py-3 px-4 border-b">Mar 2024</td>
                    <td class="py-3 px-4 border-b">17,000</td>
                    <td class="py-3 px-4 border-b">10,000</td>
                    <td class="py-3 px-4 border-b">2</td>
                    <td class="py-3 px-4 border-b text-green-500">Active</td>
                </tr>
                <tr class="hover:bg-lime-100">
                    <td class="py-3 px-4 border-b">5</td>
                    <td class="py-3 px-4 border-b">Mahesh Patel</td>
                    <td class="py-3 px-4 border-b">35,000</td>
                    <td class="py-3 px-4 border-b">7.8</td>
                    <td class="py-3 px-4 border-b">May 2023</td>
                    <td class="py-3 px-4 border-b">Apr 2025</td>
                    <td class="py-3 px-4 border-b">6,300</td>
                    <td class="py-3 px-4 border-b">28,000</td>
                    <td class="py-3 px-4 border-b">12</td>
                    <td class="py-3 px-4 border-b text-green-500">Active</td>
                </tr>
                <tr class="hover:bg-lime-100">
                    <td class="py-3 px-4 border-b">6</td>
                    <td class="py-3 px-4 border-b">Radha Sharma</td>
                    <td class="py-3 px-4 border-b">60,000</td>
                    <td class="py-3 px-4 border-b">8</td>
                    <td class="py-3 px-4 border-b">Jun 2022</td>
                    <td class="py-3 px-4 border-b">May 2024</td>
                    <td class="py-3 px-4 border-b">12,000</td>
                    <td class="py-3 px-4 border-b">0</td>
                    <td class="py-3 px-4 border-b">0</td>
                    <td class="py-3 px-4 border-b text-red-500">Defaulted</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>





<div className="mt-20 p-6 shadow-lg rounded-xl flex flex- justify-around items-start">
  {/* Loan Status Breakdown */}
  <div className="  min-h-40 mb-10 sm:mb-0 bg-gray-50 p-4 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">Loan Status Breakdown</h1>
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lime-700">Active Loans:</span>
        <span className="font-semibold text-gray-700">5</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lime-700">Defaulted Loans:</span>
        <span className="font-semibold text-gray-700">1</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lime-700">Fully Repaid Loans:</span>
        <span className="font-semibold text-gray-700">0</span>
      </div>
    </div>
  </div>

  {/* Returns Breakdown */}
  <div className="   min-h-44 mb-10 sm:mb-0 bg-gray-50 p-4 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">Returns Breakdown</h1>
    <div className="flex flex-col gap-3">
      <div className="flex gap-5  items-center">
        <span className="font-semibold text-lime-700">Total Expected Returns:</span>
        <span className="font-semibold text-gray-700">₹60,300</span>
      </div>
      <div className="flex gap-5 justify-between items-center">
        <span className="font-semibold text-lime-700">Total Received Returns:</span>
        <span className="font-semibold text-gray-700">₹1,20,000</span>
      </div>
    </div>
  </div>

  {/* Default Analysis */}
  <div className="   min-h-40 bg-gray-50 p-4 rounded-lg shadow-md">
    <h1 className="text-2xl text-center font-bold mb-4 text-gray-800">Default Analysis</h1>
    <div className="flex flex-col gap-3">
      <div className="flex gap-5  items-center">
        <span className="font-semibold text-lime-700">Average Default Chance:</span>
        <span className="font-semibold text-gray-700">7.3%</span>
      </div>
      <div className="flex gap-5 justify-between items-center">
        <span className="font-semibold text-lime-700">Highest Default Chance:</span>
        <span className="font-semibold text-gray-700">15% (Anil Kumar)</span>
      </div>
      <div className="flex gap-5 justify-between items-center">
        <span className="font-semibold text-lime-700">Lowest Default Chance:</span>
        <span className="font-semibold text-gray-700">2% (Kavita Yadav)</span>
      </div>
    </div>
  </div>
</div>

<div className="w-full mx-10 sm:w-auto mt-10 p-6 shadow-lg rounded-xl bg-white">
  <h1 className="text-2xl font-bold mb-4 text-gray-800">Recommendations</h1>
  <div className="flex flex-col gap-3">
    <div className="flex gap-3 items-start">
      <span className="font-semibold text-lime-700">Monitor High-Risk Loans:</span>
      <span className="text-gray-700">Pay close attention to loans with higher default chances (e.g., Anil Kumar's loan with a 15% chance of default).</span>
    </div>
    <div className="flex gap-3 items-start">
      <span className="font-semibold text-lime-700">Diversify Investments:</span>
      <span className="text-gray-700">Consider diversifying future investments to lower overall portfolio risk.</span>
    </div>
    <div className="flex gap-3 items-start">
      <span className="font-semibold text-lime-700">Structured Document:</span>
      <span className="text-gray-700">This structured document provides a comprehensive overview of the loan investments, allowing the investor to quickly assess the status and performance of each loan.</span>
    </div>
  </div>
</div>

        </div>
    )
}

export default Dashboard

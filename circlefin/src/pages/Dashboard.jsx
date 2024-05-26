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
                    <button className='bg-lime-300 p-2 font-semibold rounded-md hover:bg-lime-400 ' >Add Funds</button>
                    <button className='bg-lime-300 p-2 font-semibold rounded-md hover:bg-lime-400 ' >Withdraw Funds</button>
                </div>
            </div>

            <div className='flex justify-around mt-20' >
                <div className='bg-lime-100 shadow-md rounded-xl p-5'>
                    <p>Annualized Returns</p>
                    <p className='font-bold'>2.55%</p>
                </div>
                <div className='bg-lime-100 shadow-md rounded-xl p-5'>
                    <p>Account Value</p>
                    <p className='font-bold text-lime-600'>₹6,00,000</p>
                </div>
                <div className='bg-lime-100 shadow-md rounded-xl p-5'>
                    <p>Investments</p>
                    <p className='font-bold'>3</p>
                </div>
                <div className='bg-lime-100 shadow-md rounded-xl p-5'>
                    <p>Total Payments</p>
                    <p className='font-bold'>₹1,243,67</p>
                </div>
            </div>
{/* ------------------------------------------------------------ */}
            <div className='mt-20 flex justify-around'>

                <div className='bg-lime-100 shadow-md ' >
                    <h1 className='my-2 ml-2 font-bold text-2xl  ' >Portfolio</h1>
                    <hr />
                                    {/* ------------------------------- */}
                    <div className=' flex flex-col justify-between h-60 '>
                        <div className='mt-5 flex justify-around'>
                            <h3 className='text-center font-semibold' >Individual</h3>
                            <h3 className='text-center font-semibold' >Funds</h3>
                        </div>
                        <div className='my-3 flex'>
                            <div className='ml-5 flex justify-between items-center w-72'>
                                <div className='bg-red-200 rounded-full p-3 flex items-center justify-center h-7 w-7'>
                                    <h1 className='text-center font-bold'>A1</h1>
                                </div>
                                <div class="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div class="bg-red-300 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                                </div>
                                <p className='font-semibold'>80%</p>
                            </div>

                            <div className='flex justify-evenly items-center w-72'>
                                <div className='bg-violet-200 rounded-full p-3 flex items-center justify-center h-7 w-7'>
                                    <h1 className='text-center font-bold'>B1</h1>
                                </div>
                                <div class="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div class="bg-violet-300 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                                </div>
                                <p className='font-semibold'>90%</p>
                            </div>
                        </div>
                        <div className='my-3 flex'>
                            <div className='ml-5 flex justify-between items-center w-72'>
                                <div className='bg-yellow-200 rounded-full p-3 flex items-center justify-center h-7 w-7'>
                                    <h1 className='text-center font-bold'>A3</h1>
                                </div>
                                <div class="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div class="bg-yellow-300 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                                </div>
                                <p className='font-semibold'>60%</p>
                            </div>

                            <div className='flex justify-evenly items-center w-72'>
                                <div className='bg-blue-200 rounded-full p-3 flex items-center justify-center h-7 w-7'>
                                    <h1 className='text-center font-bold'>B2</h1>
                                </div>
                                <div class="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div class="bg-blue-300 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                                </div>
                                <p className='font-semibold'>25%</p>
                            </div>
                        </div>
                   
                    <div className='my-3 flex'>
                            <div className='ml-5 flex justify-between items-center w-72'>
                                <div className='bg-lime-200 rounded-full p-3 flex items-center justify-center h-7 w-7'>
                                    <h1 className='text-center font-bold'>A3</h1>
                                </div>
                                <div class="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div class="bg-lime-300 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                                </div>
                                <p className='font-semibold'>70%</p>
                            </div>

                            <div className='flex justify-evenly items-center w-72'>
                                <div className='bg-orange-200 rounded-full p-3 flex items-center justify-center h-7 w-7'>
                                    <h1 className='text-center font-bold'>B3</h1>
                                </div>
                                <div class="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div class="bg-orange-300 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                                </div>
                                <p className='font-semibold'>95%</p>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className='bg-lime-100 shadow-md'>
                    <h1 className='my-2 ml-2 font-bold text-2xl  '>Account Summary</h1>
                    <hr />
                      {/* ---------------------------------------- */}
                   <div className=' flex flex-col justify-between h-60  w-96  '>
                   <div className=' flex my-2 mx-10 justify-between   ' >
                        <h1>Account Cash</h1>
                        <p className='text-lime-700'>₹2,34,000</p>
                    </div>
                    <div className=' flex my-4 mx-10 justify-between   ' >
                        <h1>Pending</h1>
                        <p className='text-lime-700'>₹33,000</p>
                    </div>
                    <div className=' flex my-4 mx-10 justify-between  ' >
                        <h1>Invested</h1>
                        <p className='text-lime-700'>₹70,000</p>
                    </div>
                    <div className=' flex my-4 mx-10 justify-between  ' >
                        <h1>Account Value</h1>
                        <p className='text-lime-700'>₹12,000</p>
                    </div>
                   </div>
                </div>
                
                
            </div>




        </div>
    )
}

export default Dashboard
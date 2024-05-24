import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="mt-20 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:max-w-md">
                <div className='flex gap-5 justify-center items-center'>
                <img className="mx-auto h-10 " src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                <h2 className="  text-center text-3xl leading-9 font-bold text-gray-900">
                    {/* Sign Up {type == "investor" ? "Investor" : ""} */}
                    Log In Investor
                </h2>
                </div>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                    Or &nbsp;
                    <Link to="/signin/:investor"
                        className="font-medium text-lime-600 hover:text-lime-700 focus:outline-none focus:underline transition ease-in-out duration-150">
                        Sign Up to your account
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-lime-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required 
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    placeholder="Ram Kumar"
                                />
                            </div>
                        </div>

                        

                        <div className="mt-6">
                            <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required 
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        
 

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-300 hover:bg-lime-500 focus:outline-none focus:border-lime-700 focus:shadow-outline-indigo active:bg-lime-400 transition duration-150 ease-in-out"
                                >
                                    Login
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login
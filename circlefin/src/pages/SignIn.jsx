import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../context/context';
import OtpBox from "../components/OtpBox"
const SignIn = () => {
    const {investorRegistered,setInvestorRegistered} = useContext(MyContext);
    const params = useParams();
    const {type} = params;
    const navigate = useNavigate();
    const [showEmailOptBox,setShowEmailOtpBox] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        occupation: 'investor'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInvestorRegistered(true)
        setFormData((prev)=>{
            if(type == "investor") prev.occupation = "investor";
            else prev.occupation = "borrower"
            return prev;
        })
        // Save form data to session storage
        sessionStorage.setItem('formData', JSON.stringify(formData));
        // Navigate to the next page
        navigate("/investorApplication");
    };

    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl leading-9 font-bold text-gray-900">
                    Sign Up {type == "investor" ? "Investor" : ""}
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                    Or &nbsp;
                    <Link to="/login"
                        className="font-medium text-lime-600 hover:text-lime-700 focus:outline-none focus:underline transition ease-in-out duration-150">
                        login to your account
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-lime-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    placeholder="Ram Kumar"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                            <div className="mt-1 mb-5 relative rounded-md shadow-sm flex gap-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    placeholder="ramKumar@gmail.com"
                                />
                                <button type='button' onClick={()=>setShowEmailOtpBox(prev=>!prev)} className='bg-lime-300 px-2 hover:bg-lime-400 rounded-md ' >Verify</button>
                            </div>
                            { showEmailOptBox && <OtpBox type={"Email"}/> }
                        </div>

                        <div className="mt-6">
                            <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="passwordConfirmation" className="block text-sm font-medium leading-5 text-gray-700">Confirm Password</label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    id="passwordConfirmation"
                                    name="passwordConfirmation"
                                    type="password"
                                    required
                                    value={formData.passwordConfirmation}
                                    onChange={handleChange}
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
                                    Create account
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

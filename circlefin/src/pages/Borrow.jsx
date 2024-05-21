import React, { useState } from 'react';
import FarmerApplicationForm from '../Forms/FarmerApplicationForm';
import MerchantApplicationForm from '../Forms/MerchantApplicationForm';

const Borrow = () => {
    const [selectedForm, setSelectedForm] = useState("farmer");

    const selectForm = (formType) => {
        setSelectedForm(formType);
    }

    return (
        <>
            <div className='mt-24 text-center'>
                <h1 className='font-bold text-3xl mb-6'>Loan Application For</h1>
                <div className='flex justify-around'>
                    <button
                        className={`font-bold text-lg px-28 py-2 rounded-full focus:outline-none transition duration-300 ${selectedForm === "farmer" ? 'bg-lime-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                        onClick={() => selectForm("farmer")}
                    >
                        Farmer
                    </button>
                    <button
                        className={`font-bold text-lg px-28 py-2 rounded-full focus:outline-none transition duration-300 ${selectedForm === "merchant" ? 'bg-lime-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                        onClick={() => selectForm("merchant")}
                    >
                        Merchant
                    </button>
                </div>
                <hr className='border-b border-black mt-6' />
            </div>
            <div className="mt-10">
                {selectedForm === "farmer" && <FarmerApplicationForm />}
                {selectedForm === "merchant" && <MerchantApplicationForm />}
            </div>
        </>
    );
}

export default Borrow;

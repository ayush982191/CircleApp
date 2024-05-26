import React, { useState } from 'react';
import FarmerApplicationForm from '../Forms/FarmerApplicationForm';
import MerchantApplicationForm from '../Forms/MerchantApplicationForm';

const Borrow = () => {
    const [selectedForm, setSelectedForm] = useState("farmer");

    const selectForm = (formType) => {
        setSelectedForm(formType);
    }
// rounded-s-none ${selectedForm?"bg-lime-200":""} w-[40vw] text-2xl bg-gray-300   p-3 rounded-md   font-bold border-black
    // rounded-s-none ${!selectedForm?"bg-lime-200":""} w-[40vw] text-2xl bg-gray-300   p-3 rounded-md   font-bold border-black
   
    return (
        <>
            <div className='mt-32 text-center'>
                <h1 className='font-bold text-3xl mb-6'>Loan Application For</h1>
                <div className='flex justify-center'>
                    <button
                        className={`w-[40vw] text-2xl bg-gray-300   p-3 rounded-md rounded-e-none   font-bold border-blackduration-300 ${selectedForm === "farmer" ? 'bg-lime-500 ' : 'bg-gray-300 text-gray-700'}`}
                        onClick={() => selectForm("farmer")}
                    >
                        Farmer
                    </button>
                    <button
                        className={`w-[40vw] text-2xl bg-gray-300   p-3 rounded-md rounded-s-none   font-bold border-black duration-300 ${selectedForm === "merchant" ? 'bg-lime-500 ' : 'bg-gray-300 text-gray-700'}`}
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

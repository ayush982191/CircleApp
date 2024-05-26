import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ENashForm = () => {
    const [losId, setLosId] = useState('');
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);
    const [showMandateSettings, setShowMandateSettings] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowMandateSettings(true);
        }, 3000);
    };

    return (
        <div className="flex justify-center items-center h-[20]">
            {loading && (
                <div className="relative inset-0 flex items-center justify-center">
                    <div className="ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
                </div>
            )}
            
            {!loading && !showMandateSettings && (
                <div className="bg-sky-100 p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-6 text-center">eNACH Registration</h2>
                    <div onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="los_id" className="block text-gray-700 mb-2">
                                LOS ID <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="los_id"
                                value={losId}
                                onChange={(e) => setLosId(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="LOS ID"
                                // required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobile" className="block text-gray-700 mb-2">
                                Mobile <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Customer Mobile"
                                // required
                            />
                        </div>
                        <button type="button" onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                            Send OTP
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="#" className="text-blue-500 hover:underline">
                            NPCI Live Bank List For eNACH
                        </Link>
                    </div>
                </div>
            )}
            
            {!loading && showMandateSettings && (
                <div className="bg-sky-50 p-8 rounded-lg shadow-md w-96 mt-4">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Mandate Settings</h2>
                    <div className="mb-4 flex justify-between gap-5">
                        <label className=" text-gray-700 mb-2">Amount</label>
                        <input type="text" value="6000" className=" px-4 py-2 border rounded-lg" readOnly />
                    </div>
                    <div className="mb-4  flex justify-between gap-5">
                        <label className=" text-gray-700 mb-2">Debit</label>
                        <input type="text" value="Automatic" className=" px-4 py-2 border rounded-lg" readOnly />
                    </div>
                    <div className="mb-4 flex justify-between gap-5">
                        <label className=" text-gray-700 mb-2">Frequency</label>
                        <input type="text" value="Monthly" className=" px-4 py-2 border rounded-lg" readOnly />
                    </div>
                    <div className="mb-4 flex justify-between gap-5">
                        <label className=" text-gray-700 mb-2">Start Date</label>
                        <input type="text" value="2024-06-01" className=" px-4 py-2 border rounded-lg" readOnly />
                    </div>
                    <div className="mb-4 flex justify-between gap-5">
                        <label className=" text-gray-700 mb-2">End Date</label>
                        <input type="text" value="2025-06-01" className=" px-4 py-2 border rounded-lg" readOnly />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ENashForm;

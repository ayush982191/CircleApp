import React from 'react';
import { Link } from 'react-router-dom';
import { farmerFundImages } from '../utils/data';

const FarmerFundCard = ({ data }) => {
    const { id, "Fund Name": fundName, "Target Return": targetReturn, "Risk Level": riskLevel, "Minimum Investment": minInvestment, "Investment Period": investmentPeriod } = data;

    return (
        <div className='flex justify-center items-center mt-10'>
            <div className='w-72 border border-gray-200 rounded-lg shadow-md bg-white'>
                <img src={farmerFundImages[id]} className='w-full h-40 object-cover rounded-t-lg' alt={fundName} />
                <div className='p-4'>
                    <h1 className='text-lg font-semibold mb-2'>{fundName}</h1>
                    <p className='text-sm mb-2'>Target Return: {targetReturn}</p>
                    <p className='text-sm mb-2'>Risk Level: {riskLevel}</p>
                    <p className='text-sm mb-2'>Minimum Investment: {minInvestment}</p>
                    <p className='text-sm mb-2'>Investment Period: {investmentPeriod}</p>
                    <Link to={`/farmerfund/${id}`}>
                        <button className='block w-full py-2 px-4 bg-lime-500 text-white rounded-md hover:bg-lime-600 transition-colors duration-300'>
                            DETAILS
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FarmerFundCard;

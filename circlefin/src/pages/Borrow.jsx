import React, { useState } from 'react';
import OtpBox from '../components/OtpBox';
import FarmerApplicationForm from '../Forms/FarmerApplicationForm';
import MerchantApplicationForm from '../Forms/MerchantApplicationForm';
 
 
const Borrow = () => {
    const [user, setUser] = useState("");

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
                    // <ShowMerchantApplicationForm merchantFormData={merchantFormData} setMerchantFormData={setMerchantFormData}  /> 
                        //  : <ShowFarmerApplicationForm farmerFormData={farmerFormData} setfarmerFormData={setfarmerFormData} />
                       
                        <MerchantApplicationForm/>:
                         <FarmerApplicationForm/> 
                        
                }
            </div>
        </>
    );
}

export default Borrow;

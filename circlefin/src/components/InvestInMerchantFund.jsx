import React from 'react'
import { merchantFundData } from '../utils/data'
import MerchantFundCard from './MerchantFundCard'

const InvestInMerchantFund = () => {
  return (
    <div className='flex flex-wrap justify-around'>
        {
          merchantFundData.map((fund,idx)=><MerchantFundCard key={idx} data={fund} />)
        }
    </div>
  )
}

export default InvestInMerchantFund
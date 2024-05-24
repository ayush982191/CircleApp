import React from 'react'
import { merchantFundData } from '../utils/data'
import MerchantFundCard from './MerchantFundCard'

const InvestInMerchantFund = () => {
  return (
    <div>
        {
          merchantFundData.map((fund,idx)=><MerchantFundCard key={idx} data={fund} />)
        }
    </div>
  )
}

export default InvestInMerchantFund
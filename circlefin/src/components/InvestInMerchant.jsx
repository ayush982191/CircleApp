import React from 'react'
// import { farmerFilter } from '../utils/data'
import ShowCarousel from './ShowCarousel'
import { merchantFilter } from '../utils/data'


const InvestInMerchant = () => {
  return (
    <div>
     <ShowCarousel filters={merchantFilter}/>
     
    </div>
  )
}

export default InvestInMerchant
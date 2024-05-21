import React from 'react'
import { farmerFilter } from '../utils/data'
import ShowCarousel from './ShowCarousel'

const InvestInFarmers = () => {
  return (
    <div>
      <ShowCarousel filters={farmerFilter} />
      
      <h1>Farming</h1>
    </div>
  )
}

export default InvestInFarmers
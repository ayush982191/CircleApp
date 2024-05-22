// import React from 'react' 
import { merchantFilter } from '../utils/data'
import React, { useEffect, useState } from 'react'
import { farmerFilter } from '../utils/data'
import ShowCarousel from './ShowCarousel'
import { farmerProfiles } from '../utils/data'
import FarmerCard from './FarmerCard'
import { merchantProfiles } from '../utils/data'
import MerchantCard from './MerchantCard'
import { tempMerchantProfile } from '../utils/data'

const InvestInMerchant = () => {

  const [data,setData] = useState(tempMerchantProfile);
  const [filteredData,setFilteredData] = useState(tempMerchantProfile);
  const [criteria,setCriteria] = useState("");






 
  const showFilterData = (criteria) => {
    // console.log(criteria)

    let newData = [];  
    if(criteria){
      newData = data.filter((prop)=>{
        return prop[criteria]
      })
      setFilteredData(newData)
    } 
    
  };
  
  
  







  useEffect(()=>{
    showFilterData(criteria);
    
  },[criteria])




  return (
    <div>
    <div className='h-64'  >
    <ShowCarousel filters={merchantFilter} setCriteria={setCriteria} type={"merchant"}  />
    </div>
    
    {/* <h1>Farming</h1> */}
    <div className='flex gap-10 flex-wrap justify-around mx-5'>
    {filteredData.map((merchant, index) => (
      <MerchantCard merchant={merchant} key={index} />
    ))}
    
    </div>
  </div>
  )
}

export default InvestInMerchant
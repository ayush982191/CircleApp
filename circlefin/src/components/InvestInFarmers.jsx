import React, { useEffect, useState } from 'react'
import { farmerFilter } from '../utils/data'
import ShowCarousel from './ShowCarousel'
import { farmerProfiles } from '../utils/data'
import FarmerCard from './FarmerCard'
const InvestInFarmers = () => {
  const [data,setData] = useState(farmerProfiles);
  const [filteredData,setFilteredData] = useState(farmerProfiles);
  const [criteria,setCriteria] = useState("");









  // const showFilterData = (criteria) => {
  //   const tempData= [];
  //   if(criteria){
  //     if(criteria==="North India"){
  //       tempData = data.filter((item)=>{
  //         Object.values(item)
  //       })
        
  //     }

  //   }
  // };
  
  const showFilterData = (criteria) => {
    console.log(criteria)

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
      <ShowCarousel filters={farmerFilter} setCriteria={setCriteria} type={"farmer"}  />
      </div>
      
      {/* <h1>Farming</h1> */}
      <div className='flex gap-10 flex-wrap justify-aroundfy mx-5'>
      {filteredData.map((farmer, index) => (
        <FarmerCard farmer={farmer} key={index} />
      ))}
      
      </div>
    </div>
  )
}

export default InvestInFarmers
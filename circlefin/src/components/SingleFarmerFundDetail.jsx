import React from 'react'
import { useParams } from 'react-router-dom'
import { farmerFundData } from '../utils/data';
import { farmerImageArray } from '../utils/data';
import { Link } from 'react-router-dom';

const SingleFarmerFundDetail = () => {
  const {id} = useParams();


  // console.log("id="+id);
  const farmerFund = farmerFundData.find((fund)=>fund.id == id);
  const { "Fund Name":fundName,"Target Return":targetReturns,image,"Risk Level":riskLevel,"Minimum Investment":minimumInvestment, "Investment Period":investmentPeriod,"Detailed Description":detailedDesc, "Fund Size":fundSize,"Why Invest":whyInvest } = farmerFund;   
  const { "Initial Labor Costs":initialLabourCost,Fertilizers,Seeds} = detailedDesc;                                                                                   
  return (
    <div>
       <div>
  <div className=' mt-32 '>
        <div className=' p-8 flex justify-around ' >
           
           <div >
            <div>
              <img src={image} className='w-[30rem] h-[20rem]' alt="" />

            </div>
            {/* <div> */}
               <div className='mt-10'>
            <div action="" className='flex gap-4' >
              <input type="text"   placeholder='&nbsp; Enter Amount' className='w-[20rem] h-[2.5rem] rounded-md' />
              <Link to="/investorApplication"><button type='submit' className='bg-lime-200 p-2 rounded-md w-[8rem] hover:bg-lime-400'>Invest Now</button></Link>
            </div>
            <div className='mt-10 flex justify-start gap-20'>
              <button className='bg-lime-200 p-1 rounded-md w-[7rem] hover:bg-lime-300'>10000</button>
              <button className='bg-lime-200 p-1 rounded-md w-[7rem] hover:bg-lime-300'>15000</button>
              <button className='bg-lime-200 p-1 rounded-md w-[7rem] hover:bg-lime-300'>20000</button>
            </div>
          </div>

            {/* </div> */}
           </div>
                <div className='w-[30rem]'>
                    {/* <h1 className='font-bold text-lg'>FUND NAME</h1> */}
                  
                
                <ul className='  flex flex-col gap-2'>
                <h1 className='  text-xl font-bold'>Fund Details  </h1>
                    <li><span className='mr-3  font-semibold text-lime-700' >Fund Name</span>: <span className=' font-semibold '>Sowing Prosperity Fund </span></li>
                    <li><span className='mr-3  font-semibold text-lime-700' >Target Return</span>: <span className=' font-semibold '>7-8% annually </span></li>
                    <li><span className='mr-3  font-semibold text-lime-700' >Fund Name</span>: <span className=' font-semibold '>Sowing Prosperity Fund</span> </li>
                    <li><span className='mr-3  font-semibold text-lime-700' >Risk Level</span>: <span className=' font-semibold '>Medium</span></li>
                    <li><span className='mr-3  font-semibold text-lime-700' >Minimum Investment</span>: <span className=' font-semibold '> ₹50,000</span></li>
                    <li><span className='mr-3  font-semibold text-lime-700' >Investment Period</span>: <span className=' font-semibold '>2-3 years</span> </li>
                  
                </ul>
                
                <div class="mt-5">
  <h1 class="text-xl font-bold mt-10">Investment Focus</h1>
  <div class="flex mb-4">
    <span class="mr-3 font-semibold text-lime-700 min-w-[150px]">Seeds:</span>
    <span class="font-semibold">Ensuring availability of high-yield and resilient seed varieties.</span>
  </div>
  <div class="flex mb-4">
    <span class="mr-3 font-semibold text-lime-700 min-w-[150px]">Fertilizers:</span>
    <span class="font-semibold">Providing essential nutrients for crop growth.</span>
  </div>
  <div class="flex mb-4">
    <span class="mr-3 font-semibold text-lime-700 min-w-[150px]">Initial Labor Costs:</span>
    <span class="font-semibold">Supporting workforce requirements for sowing.</span>
  </div>
</div>

                <h1 className='text-xl font-bold  mt-10'>
                Detailed Description
                </h1 >
                <p className=' '>
               <span className='mr-3 font-semibold text-lime-700'> Objective:</span><span className='font-semibold'> The Pre-Harvest Growth Fund is designed to assist farmers during the growth phase of their crops. This phase is critical for ensuring healthy crop development and maximizing yields.</span>
                </p>
                 </div>
                </div>
            
         </div>
    </div>

  </div>
    
  )
}

export default SingleFarmerFundDetail
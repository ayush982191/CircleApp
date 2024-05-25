import React from 'react'
// import logo from "../assets/logo.svg"
import Navbar from '../components/Navbar'
import farmImage from "../assets/farmImage1.png"
import JoinUs from '../components/JoinUs'
import droneGirl from "../assets/dronegirl.jpg"
import farmer3 from "../assets/farmer3.jpg"
import Cfarmer1 from "../assets/Cfarmer1.jpg"
import Cfarmer2 from "../assets/Cfarmer2.jpg"
import Cfarmer3 from "../assets/Cfarmer3.jpg"
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FcAcceptDatabase } from "react-icons/fc";
import { FaHandsHelping } from "react-icons/fa";
import objectiveImg from "../assets/objectiveImage.svg"
import HeroImage from "../assets/HeroSectionImage.jpeg"
import farmer4 from "../assets/farmer4.jpg"
import farmer from "../assets/farmer.png"
import chartPie from "../assets/logos/chartPie.svg"
import earthLeaf from  "../assets/logos/earthLeaf.svg"
import bankNotes from  "../assets/logos/bankNotes.svg"
import { FiMapPin } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import video from "../assets/videos/heroVideo.mp4"



const Home = () => {

 


  return (
    <div className='  text-xs sm:text-base '>
        
        
    <div className='relative bg-lime-50'>
  <img src={HeroImage} className='h-full w-full object-cover' alt="Drone and girl in field" />

  <div className='absolute inset-0 ml-[5vw] mt-[30vw] text-white z-10'>
    <h1 className='text-5xl font-semibold  '>Cultivating Financial Growth</h1>
    <p className='mt-5 mb-5  max-w-2xl'>Empowering India's Agri-Sectors with Smart Finance, Driving Prosperity for Farmers and Agri-SMEs through Technology-Enabled Solutions</p>
  </div>
  
  <div className='absolute inset-0 bg-black opacity-20'></div>
</div>


 

 

<div className='mt-20 sm:flex sm:justify-evenly items-center'>
  <div className='w-[45vw] h-[50vh] flex justify-evenly'> {/* Increased height to 50vh */}
    <div>
    <video autoPlay loop muted playsInline style={{ height: '100%' }}> {/* Set height to 100% */}
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p className='text-sm'>Video Credit : GEOSPATIAL WORLD</p>
    </div>
  </div>
  <div className='w-[40vw] flex items-center'>
    <p className='tracking-wide text-justify text-xl font-semibold'>
      <span className='text-lime-600 font-bold'>CircleFin</span> harnesses advanced data analytics and embedded finance solutions to enhance financial access for farmers and Agri-SMEs, offering a truly digital experience through our robust partner ecosystem. Our platform delivers precisely tailored financial products that elevate agricultural stakeholders, ensuring market success and operational efficiency.For investors, CircleFin offers a unique P2P lending opportunity, providing access to a carefully curated agricultural portfolio that yields returns while contributing to significant sectoral transformation
    </p> 
  </div>
</div>




 


      <div className='mx-10'>
        <h1 className='font-extrabold text-5xl mt-10 mb-10 text-center' >Join Us In The <span className='text-lime-600' >Revolution</span></h1>
      </div>

{/* <h1>---------------------------------------</h1> */}
<div className='flex justify-center'>
  <img src={objectiveImg} alt="" />
</div>
 




{/* ----------------------------------------------------------------------------------------------------------------- */}
<div>


<div className="flex flex-col items-center justify-start  pt-16">
    <div className="text-center mb-8">
      <h1 className="text-3xl my-2 md:text-5xl lg:text-3xl font-bold">
        Agricultural focused assessment reveal clarity over legacy accounting appraisal
      </h1>
    </div>
    <div className=" flex gap-5 items-center">
      <div>
      <img src={farmer} alt="farmer page" className="w-[30rem]" />
      </div>

      <div className='w-[30rem]'>
       
      <div className='my-2 flex gap-4 items-start'>
        <img src={earthLeaf} alt="" />
        <div className=''>
          <h3 className='text-2xl font-semibold'>Environmental Factors</h3>
          <p><i>Operational Environment: </i>Examining geographic and weather conditions, we assess their impact on agricultural operations.</p>
        </div>
      </div>

      <div className='my-2 flex gap-4 items-start'>
        <img src={bankNotes} alt="" />
        <div className=''>
          <h3 className='text-2xl font-semibold'>Financial Aspects</h3>
          {/* <p>Operational Environment: Examining geographic and weather conditions, we assess their impact on agricultural operations.</p> */}
        <p><i>Market Trends and Price Forecasts:</i> Examining trends and forecasts to provide a better understanding of the financial environments facing agri-SMEs.</p>
        Product Demand: To improve economic viability, match support with market dynamics.
        </div>
      </div>
      <div className='my-2 flex gap-4 items-start'>
        <img src={chartPie} alt="" />
        <div className=''>
          <h3 className='text-2xl font-semibold'>Measures of Business Viability</h3>
          {/* <p>Operational Environment: Examining geographic and weather conditions, we assess their impact on agricultural operations.</p> */}
       <p><i>Agri-SME Experience:</i> Assessing their background in the sector to provide specialized assistance.</p>
        <p><i>Size:</i> Modifying aid in accordance with the scope of the undertaking</p>
        <p><i>Team:</i> Evaluating collective skills to make sure they are in line with strategic objectives.</p>
        <p><i>Market Opportunity:</i> Examining growth prospects in order to make well-informed decisions.</p>
        </div>
      </div>
      </div>
     
    </div>
  </div>
  



</div>




 



 
 

<div className=' '>
    <div className=''>
        <div>
          <h1 className='pt-5 font-semibold text-center text-3xl mt-20  '>Get In Touch!</h1>
        </div>
        <div >

           <form className='flex justify-center mt-5 '>
            <div className=''>         
             <p className='text-blue-900 font-semibold text-xl'>Name</p>
             <input type='text' className="w-96 mt-6 border-b-4" placeholder="Please Enter Your Name" name='username'>                    
             </input>
             <br></br>

              <p className='text-blue-900 font-semibold text-xl mt-14'>E-Mail</p>  <br></br>
             <input type='e-mail ' className='w-96  border-b-4' placeholder='web@xxxx.com' name='username'>                    
             </input><br></br>
             </div>
              
             <div className='ml-40'> 
             <p className='text-blue-900 font-semibold text-xl'>
             What Investment's are you interested in? </p> <br></br>
             <textarea placeholder='Let us know how we can help you!' className='w-96  border-b-4' name='username'>                    
             </textarea><br></br>

              <input type='checkbox' className='mt-14'></input>
              <label className='text-blue-900 font-semibold text-xl'> I agree to CircleFin's privacy policy</label><br></br>
              
              
              <button type='button' className='p-2 text-blue-900 font-semibold text-xl mt-10 bottom-2  rounded-lg  hover:border-blue-300 hover:border-2 '>SEND</button>
              </div>
        </form>
        </div>
    </div>
   
    <div className='mt-5 flex flex-col justify-center items-center'> 
        <h1 className='text-4xl font-semibold'>Stay In Touch!</h1>
        <form className='flex flex-col items-start mt-10 p-2'>
          <h1 className='text-xl'>Subscribe to our Newsletter to get the latest updates and info!</h1>
          <div className='mt-4'>
            <input type="email" className='border-b-4 w-[25rem] h-[2rem] px-2' placeholder='Enter your email address' />
            <button type='button' className='ml-4 p-2 border font-semibold rounded-lg bg-lime-500'>Subscribe</button>
          </div>
        </form> 
      </div>



    </div>
    


    </div>

  )
}

export default Home
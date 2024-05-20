import React from 'react'
import logo from "../assets/logo.svg"
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

const Home = () => {


  // const CustomDot = ({ onMove, index, onClick, active }) => {
  //   return (
  //     <li
  //       className={active ? "active" : "inactive"}
  //       onClick={() => onClick()}
  //     >
  //       <MaximizeIcon />
  //     </li>
  //   );
  // };

  // const arrowStyle = {
  //   background: "transparent",
  //   border: 0,
  //   color: "#fff",
  //   fontSize: "80px"
  // };
  // const CustomRight = ({ onClick }) => (
  //   <button className="arrow right" onClick={onClick} style={arrowStyle}>
  //     {/* <ArrowForwardIcon style={{ fontSize: "50px" }} /> */}
  //     <FaArrowRight/>
  //   </button>
  // );

  // const CustomLeft = ({ onClick }) => (
  //   <button className="arrow left" onClick={onClick} style={arrowStyle}>
  //     {/* <ArrowBackIcon style={{ fontSize: "50px" }} /> */}
  //     <FaArrowLeft/>
  //   </button>
  // );



  return (
    <div className=' mb-20 text-xs sm:text-base '>
        
        
         {/* <div className='relative bg-green-50'>
      <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted playsInline>
        <source src="https://rangde-p2p-gen.s3.ap-south-1.amazonaws.com/videos/Video-Final-Homepage-Desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='relative z-10 flex flex-col justify-center items-center min-h-screen text-white'>
        <h1 className='text-5xl font-bold text-center'>Cultivating Financial Growth</h1>
        <p className='mt-5 mb-5 text-center max-w-2xl'>Empowering India's Agri-Sectors with Smart Finance, Driving Prosperity for Farmers and Agri-SMEs through Technology-Enabled Solutions</p>
      </div>
      <div className='absolute inset-0 bg-black opacity-50'></div>
    </div> */}
    <div className='relative bg-green-50'>
  <img src={HeroImage} className='h-full w-full object-cover' alt="Drone and girl in field" />

  <div className='absolute inset-0 ml-[5vw] mt-[30vw] text-white z-10'>
    <h1 className='text-5xl font-semibold  '>Cultivating Financial Growth</h1>
    <p className='mt-5 mb-5  max-w-2xl'>Empowering India's Agri-Sectors with Smart Finance, Driving Prosperity for Farmers and Agri-SMEs through Technology-Enabled Solutions</p>
  </div>
  
  <div className='absolute inset-0 bg-black opacity-20'></div>
</div>




{/* <div class="mx-10 mt-10 flex flex-col md:flex-row">
    <div class=" mb-4 md:mb-0">
        <video class="w-[50vw]" autoplay loop muted playsinline>
            <source src="https://rangde-p2p-gen.s3.ap-south-1.amazonaws.com/videos/Video-Final-Homepage-Desktop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
    <div class=" flex justify-center items-center">
        <div class="md:ml-4">
            <p>CircleFin revolutionizes agricultural finance in India by integrating cutting-edge data analytics and embedded finance within the ONDC framework. Our platform empowers farmers and Agri-SMEs with tailored financial solutions, driving economic,</p>
        </div>
    </div>
</div> */}

{/* <div className='mx-10 mt-20 md:flex md:justify-evenly  '>
        
        <div className='mx-5 w-[40vw] flex flex-col justify-center'>
          
            <h1 className='font-extrabold mt-10 text-4xl' >Cultivating Financial Growth</h1>
            <h1 className='my-5 text-2xl text-gray-600' >Empowering India’s Agri-Sectors with Smart Finance, Driving Prosperity for Farmers and Agri-SMEs through Technology-Enabled Solutions</h1>
           
        </div>
        <div className='mx-5 w-[35vw]'>
          <img src={droneGirl} className=' rounded-md h-96 ' alt="" />
        </div>
  </div> */}


  <div className='mt-20 sm:flex sm:justify-evenly'>
  <div className='w-[30vw] flex justify-evenly'>
    <video className="" autoPlay loop muted playsInline>
      <source src="https://rangde-p2p-gen.s3.ap-south-1.amazonaws.com/videos/Video-Final-Homepage-Desktop.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div className='w-[40vw] flex items-center'>
    <p class='tracking-wide text-xl font-semibold'>
      <span class='text-lime-600 font-bold'>CircleFin</span> revolutionizes agricultural finance in India by integrating cutting-edge data analytics and embedded finance within the ONDC framework. Our platform empowers farmers and Agri-SMEs with tailored financial solutions, driving economic, social, and environmental prosperity. Committed to innovation and sustainability, CircleFin transforms the agri-sector into a landscape of opportunity for all stakeholders.
    </p> 
  </div>
</div>



 


      <div className='mx-10'>
        <h1 className='font-extrabold text-5xl mt-10 mb-10' >Join Us In The <span className='text-lime-600' >Revolution</span></h1>
      </div>

{/* <h1>---------------------------------------</h1> */}
<div className='flex justify-center'>
  <img src={objectiveImg} alt="" />
</div>
{/* <h1>---------------------------------------</h1> */}
      <div className='mx-10 mt-10 sm:flex sm:justify-between'>
        <JoinUs about={"Why"} detail={"Access to formal credit is unavailable for 86% of India's eligible population. You have the power to make a difference"} />
        <JoinUs about={"Who"} detail={"Provide accessible loans to farmers, artisans, and entrepreneurs at affordable rates. Empower advancement while earning returns"} />
        <JoinUs about={"How"} detail={"Select the recipients you wish to support from our pool of verified beneficiaries. Monitor your investment and receive repayments"} />
      </div>


      <div className='mx-10 mt-10 md:flex md:justify-evenly  '>
        <div>
          <img src={farmer3} className=' rounded-md h-96 ' alt="" />
        </div>
        <div className=' flex justify-center'>
          <div>
            <h1 className='font-extrabold mt-10 text-6xl' >Invest.</h1>
            <h1 className='font-extrabold text-6xl my-5 text-yellow-500' >Impact.</h1>
            <h1 className='font-extrabold text-6xl text-lime-600 ' >Earn Returns.</h1>
            <button className='bg-lime-500 text-white w-96 rounded-md h-10 mt-10 hover:bglime-700 font-bold '>Start Inversting</button>
          </div>
        </div>
      </div>




      <div className='bg-yellow-400 mt-20 h-20 flex items-center justify-center' >

        <h1 className='text-4xl font-bold text-center' >Stories of <span className=' text-white' >Change</span> </h1>



      </div>
      <div>
        <div className='mt-5'>
          <h1 className='font-bold text-4xl my-5 text-lime-600 text-center'>Grow Your business</h1>
          <p className='mx-[10vh] '>Get the money you need to handle tough times or grow your business with our different types of loans. Whether you need money for your team, day-to-day operations, equipment, or to buy property, we've got you covered</p>
        </div>
        <div className='mt-10'>
          <div className='flex justify-around  '>
            <div className='' >
              <div className='flex justify-center'>

                <FaHandHoldingUsd className='text-4xl text-lime-600' />
              </div>
              <h4 className="text-center" >AG TERM LOANS</h4>
            </div>
            <div className='' >
              <div className='flex justify-center'>

                <FaLock className='text-4xl text-lime-600 ' />
              </div>
              <h4 className="text-center" >AGRI-REAL ESTATE LOANS</h4>
            </div>

            <div className='' >
              <div className='flex justify-center'>

                <FaHandsHelping className='text-4xl text-lime-600' />
              </div>
              <h4 className="text-center" >FARM EQUIPMENT LOANS</h4>
            </div>
            <div className=''>

              <div className='flex justify-center'>
                <FcAcceptDatabase className='text-4xl text-lime-600' />
              </div>          <h4 className="text-center" > SPECIALIZED LOAN PROGRAMS</h4>
            </div  >


          </div>
        </div>
      </div>







    </div>

  )
}

export default Home
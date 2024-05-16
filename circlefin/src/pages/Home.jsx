import React from 'react'
import logo from "../assets/logo.svg"
import Navbar from '../components/Navbar'
import farmImage from "../assets/farmImage1.png"
import JoinUs from '../components/JoinUs'
import farmer3 from "../assets/farmer3.jpg"
import Cfarmer1 from "../assets/Cfarmer1.jpg"
import Cfarmer2 from "../assets/Cfarmer2.jpg"
import Cfarmer3 from "../assets/Cfarmer3.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import MaximizeIcon from "@material-ui/icons/Maximize";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";




const Home = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
  };

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
      <div className='bg-green-50 sm:flex sm:justify-around ' >
        <div className='ml-5 mt-5 flex flex-col justify-center' >
          <h1 className='text-5xl font-bold text-center' >A way to back and uplift individuals</h1>
          <p className='mt-5 mb-5' >Back reliable Indians</p>
          <p className='' >Create impact and earn returns seamlessly with just a few clicks</p>
        </div>
        <div>
          <img src={farmImage} alt="" className=' h-50' />
        </div>

      </div>
      <div className='mx-10'>
        <h1 className='font-extrabold text-5xl mt-10 mb-10' >Join Us In The <span className='text-blue-500' >Revolution</span></h1>
      </div>
      <div className='mx-10 sm:flex sm:justify-between'>
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
            <h1 className='font-extrabold text-6xl text-blue-500 ' >Earn Returns.</h1>
            <button className='bg-blue-500 text-white w-96 rounded-md h-10 mt-10 hover:bg-blue-700 font-bold '>Start Inversting</button>
          </div>
        </div>
      </div> 
      <div className='bg-yellow-400 mt-20 h-20 flex items-center justify-center' >
    
          <h1 className='text-4xl font-bold text-center' >Stories of <span className=' text-white' >Change</span> </h1>
           
       

      </div>
      <div>
      <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          showDots={true}
        >
          
          <div>
            <div className="carousel-item-content">
              <img
                src={Cfarmer1}
                alt="image 1"
                className="w-[100vw] h-[100vh]"
              />
              <div className="carousel-text-overlay">
                <h2>Image 1 Text</h2>
                <p>Description of Image 1</p>
              </div>
            </div>
          </div>
 
          <div>
            <div className="carousel-item-content">
              <img
                src={Cfarmer2}
                alt="image 2"
                className="w-[100vw] h-[100vh]"
              />
              <div className="carousel-text-overlay">
                <h2>Image 2 Text</h2>
                <p>Description of Image 2</p>
              </div>
            </div>
          </div>
 
          <div>
            <div className="carousel-item-content">
              <img
                src={Cfarmer3}
                alt="image 3"
                className="w-[100vw] h-[100vh]"
              />
              <div className="carousel-text-overlay">
                <h2>Image 3 Text</h2>
                <p>Description of Image 3</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>



    


    </div>

  )
}

export default Home
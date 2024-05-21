import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./ShowCarousel.css";
import { GrRestroomWomen } from "react-icons/gr";
import { farmerCarouselIconArray } from '../utils/data';

import { IoIosArrowDropdownCircle } from "react-icons/io";

const ShowCarousel = ({ filters , setCriteria,type }) => {
  const [caroselLogo,setCarouselLogo] = useState([]);

  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(()=>{
    if(type == "farmer"){
      setCarouselLogo(farmerCarouselIconArray);
    }

  },[])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  };
  
  const sliderRef = useRef(null);

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId === activeFilter ? null : filterId);
  };
 

  return (
    <section className="mt-10 ml-10 mr-10 filter-section pt-1">
      <div className="icon-filter-wrapper relative">
        <Slider ref={sliderRef} {...settings}>
          {filters.map((filter,idx) => (
            <div key={filter.id} className="slick-slide">
              <div className='flex flex-col items-center'>
               <div>
                {/* ----------------------------------------- */}
                <img src={caroselLogo[0]} className='w-[5rem]' alt="" />
                {/* ------------------------------------------ */}
               </div>
                <div
                  className={` h-10 flex justify-center items-center gap-2 cursor-pointer`}
                  id={filter.id}
                  onClick={() => handleFilterClick(filter.id)}
                >
                  
                  <p>{filter.label}</p>
                  <IoIosArrowDropdownCircle
                    className={`transition-transform duration-300 ${activeFilter === filter.id ? 'transform rotate-180' : ''}`}
                  />
                </div>
                {activeFilter === filter.id && (
                  <div className="dropdown flex flex-col items-center mt-2">
                    {filter.subOptions.map((subOption, idx) => (
                      <div key={idx} onClick={()=>setCriteria(subOption)} className="dropdown-item m-1 hover:text-lime-400 cursor-pointer" >
                        {subOption}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

export default ShowCarousel;

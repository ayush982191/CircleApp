import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./invest.css"
import { statesArray } from '../utils/data';
import StateCard from '../components/StateCard';

const Invest = () => {

  const filters = [
    { id: 'all', filter: 'all', iconClass: 'icon-all', label: 'All' },
    { id: 'women', filter: 'women', iconClass: 'icon-women', label: 'Women' },
    { id: 'first-time-borrowers', filter: 'first-time-borrowers', iconClass: 'icon-first-time-borrowers', label: 'First Time Borrowers' },
    { id: 'almost-fulfilled', filter: 'almost-fulfilled', iconClass: 'icon-almost-fullfilled', label: 'Almost Fulfilled' },
    { id: 'farmers', filter: 'farmers', iconClass: 'icon-farmers', label: 'Farmers' },
    { id: 'north-india', filter: 'north-india', iconClass: 'icon-north-india', label: 'North India' },
    { id: 'south-india', filter: 'south-india', iconClass: 'icon-south-india', label: 'South India' },
    { id: 'central-and-east-india', filter: 'central-and-east-india', iconClass: 'icon-central-east-india', label: 'Central & East India' },
    { id: 'north-east-india', filter: 'north-east-india', iconClass: 'icon-north-east-india', label: 'North East India' },
    { id: 'west-india', filter: 'west-india', iconClass: 'icon-west-india', label: 'West India' },
    { id: 'short-term', filter: 'short-term', iconClass: 'icon-short-term', label: 'Short Term' },
    { id: 'high-returns', filter: 'high-returns', iconClass: 'icon-high-returns', label: 'High Returns' },
    { id: 'artisans', filter: 'artisans', iconClass: 'icon-artisans', label: 'Artisans' },
    { id: 'shop-keepers', filter: 'shop-keepers', iconClass: 'icon-shopkeepers', label: 'Shopkeepers' },
    { id: 'animal-husbandry', filter: 'animal-husbandry', iconClass: 'icon-animal-husbandary', label: 'Animal Husbandry' },
    { id: 'services', filter: 'services', iconClass: 'icon-service-entrepreneurs', label: 'Services' },
    { id: 'diverse', filter: 'diverse', iconClass: 'icon-diverse', label: 'Diverse' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderRef = useRef(null);

  return (
    <section className="mt-40 filter-section pt-1">
      <div className="icon-skeleton-wrapper d-none">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="d-md-block d-none"></div>
        <div className="d-md-block d-none"></div>
        <div className="d-md-block d-none"></div>
        <div className="d-md-block d-none"></div>
      </div>
      <div className="icon-filter-wrapper slick-initialized slick-slider relative">
        <Slider ref={sliderRef} {...settings}>
          {filters.map((filter, index) => (
            <div key={filter.id} className={`slick-slide ${index === 0 ? 'slick-current slick-active' : 'slick-active'}`} aria-hidden={index !== 0} style={{ width: '64px' }}>
              <div>
                <div className={`ocupation-icon ui-action ${index === 0 ? 'active' : ''}`} data-ui-action-name="CLICKED_FILTERS" data-ui-action-field="Filter Name" data-ui-action-field-value={filter.label} id={filter.id} data-filter={filter.filter} style={{ width: '100%', display: 'inline-block' }}>
                  <div className={filter.iconClass}></div>
                  <p>{filter.label}</p>
                  <p className="filter-key d-none">{filter.filter}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div >
      

      <div className='mt-20 flex flex-wrap gap-5 justify-center' >
      {
        statesArray.map((card,idx)=><StateCard key={idx} card={card}/>)
      }

      </div>
    </section>
  );
}

export default Invest;

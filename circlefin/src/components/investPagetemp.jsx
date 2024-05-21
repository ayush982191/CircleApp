import React,{useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Invest = () => {
  const [investerFormDate, setInvesterFormDate] = useState({
    name: '',
    mobile: '',
    pan: '',
    age: '',
    gender: 'male',
    annualIncome: '',
    politicallyExposed: 'no',
    accountNumber: '',
    iifcNumber: '',
    returnsPreference: 'monthly'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvesterFormDate({
      ...investerFormDate,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // console.log(investerFormDate);
  };
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

  
  return (
    // <div className='mt-28'>
    //    <div className='flex justify-center mt-5     '>
    //       <form action="" className='border-2 p-5 border-gray-200 rounded-md'>
    //         <h1 className='font-bold text-4xl p-5 rounded-md text-white bg-lime-600'>P2P Investor Application Form</h1>
    //       <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
    //       <label htmlFor="name" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Name:</label>
    //       <input type="text" id="name" name="name" value={investerFormDate.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
    //     </div>

    //     <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
    //       <label htmlFor="mobile" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Mobile Number:</label>
    //       <input type="number" id="mobile" name="mobile" value={investerFormDate.mobile} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile" required />
    //     </div>

    //     <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
    //       <label htmlFor="panNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">PAN Number:</label>
    //       <input type="text" id="panNumber" name="panNumber" value={investerFormDate.panNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PAN Number" required />
    //     </div>

    //     <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
    //       <label htmlFor="age" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Age:</label>
    //       <input type="number" id="age" name="age" value={investerFormDate.age} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age" required />
    //     </div>

    //     <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
    //       <label htmlFor="gender" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Gender:</label>
    //       <select id="gender" name="gender" value={investerFormDate.gender} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    //         <option value="">Select Gender</option>
    //         <option value="male">Male</option>
    //         <option value="female">Female</option>
    //         <option value="other">Other</option>
    //       </select>
    //     </div>

    //     <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
    //       <label htmlFor="annualIncome" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Annual Income:</label>
    //       <input type="number" id="annualIncome" name="annualIncome" value={investerFormDate.annualIncome} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Annual Income" required />
    //     </div>

       
 

         
    //     <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
    //       <label className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Politically Exposed:</label>
    //       <div className="flex items-center">
    //         <label className="inline-flex items-center mr-4">
    //           <input type="radio" name="politicallyExposed" value="yes" checked={investerFormDate.politicallyExposed === 'yes'} onChange={handleChange} className="form-radio text-blue-500 border-gray-300" />
    //           <span className="ml-2 text-gray-700 dark:text-white">Yes</span>
    //         </label>
    //         <label className="inline-flex items-center">
    //           <input type="radio" name="politicallyExposed" value="no" checked={investerFormDate.politicallyExposed === 'no'} onChange={handleChange} className="form-radio text-blue-500 border-gray-300" />
    //           <span className="ml-2 text-gray-700 dark:text-white">No</span>
    //         </label>
    //       </div>
    //     </div>

    //     <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
    //       <label htmlFor="accountNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Account Number:</label>
    //       <input type="text" id="accountNumber" name="accountNumber" value={investerFormDate.accountNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Account Number" required />
    //     </div>

    //     <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
    //       <label htmlFor="iifcNumber" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">IIFC Number:</label>
    //       <input type="text" id="iifcNumber" name="iifcNumber" value={investerFormDate.iifcNumber} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="IIFC Number" required />
    //     </div>

    //     <div className="mb-5 p-2 sm:flex sm:justify-between sm:w-96 sm:items-center">
    //       <label htmlFor="returnsPreference" className="block mb-2 font-bold text-gray-900 dark:text-white sm:mb-0">Returns Preference:</label>
    //       <select id="returnsPreference" name="returnsPreference" value={investerFormDate.returnsPreference} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    //         <option value="">Select Returns Preference</option>
    //         <option value="monthly">Monthly</option>
    //         <option value="lumpsum">Lumpsum</option>
    //       </select>
    //     </div>
    //     <div className='flex justify-center' >
    //     <button type="button" onSubmit={handleSubmit} className="text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

    //     </div>
    //       </form>
    //     </div>
    // </div>
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
          <div className="icon-filter-wrapper slick-initialized slick-slider">
            <Slider {...settings}>
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
          </div>
        </section>
     
  )
}

export default Invest
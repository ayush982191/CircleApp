import farmerImg1 from "../assets/farmerImages/farmerImg1.jpg"
import farmerImg2 from "../assets/farmerImages/farmerImg2.jpg"
import farmerImg3 from "../assets/farmerImages/farmerImg3.jpg"
import farmerImg4 from "../assets/farmerImages/farmerImg4.jpg"
import farmerImg5 from "../assets/farmerImages/farmerImg5.jpg"
import farmerImg6 from "../assets/farmerImages/farmerImg6.jpg"

import { GrRestroomWomen } from "react-icons/gr";



export const farmerLoanTypes = [
    {
      "Product": "Short-term Crop Advances",
      "Interest Rate": "16-18% per annum",
      "Eligibility Criteria": [
        "Minimum 1 year in farming",
        "Positive net income in the last financial year",
        "Expected yield performance"
      ],
      "Collateral": "Typically unsecured may require personal guarantees",
      "Repayment Term": "3-6 months",
      "Other Terms": [
        "Bullet payment post-harvest",
        "Early repayment without penalties"
      ]
    },
    {
      "Product": "Equipment Financing",
      "Interest Rate": "12-14% per annum",
      "Eligibility Criteria": [
        "Minimum 3 years in farming",
        "Proof of purchase for equipment",
        "Positive cash flow"
      ],
      "Collateral": "Equipment purchased serves as collateral",
      "Repayment Term": "1-5 years",
      "Other Terms": [
        "Flexible repayment plans",
        "Possible down payment requirement (10-20%)"
      ]
    },
    {
      "Product": "Seasonal Overdraft Facility",
      "Interest Rate": "15-17% per annum",
      "Eligibility Criteria": [
        "Minimum 1 year in farming",
        "Demonstrated seasonal income"
      ],
      "Collateral": "Typically unsecured may require personal guarantees",
      "Repayment Term": "6-9 months",
      "Other Terms": [
        "Flexible credit line",
        "Repayment after the harvest"
      ]
    },
    {
      "Product": "Livestock Financing",
      "Interest Rate": "14-16% per annum",
      "Eligibility Criteria": [
        "Minimum 2 years in farming",
        "Positive cash flow",
        "Livestock management plan"
      ],
      "Collateral": "Livestock purchased serves as collateral",
      "Repayment Term": "1-3 years",
      "Other Terms": [
        "Repayment aligned with production cycles",
        "Possible down payment"
      ]
    },
    {
      "Product": "Green Loan for Sustainable Practices",
      "Interest Rate": "12-14% per annum",
      "Eligibility Criteria": [
        "Minimum 2 years in farming",
        "Positive cash flow",
        "Plan for sustainable practices"
      ],
      "Collateral": "Typically unsecured may require personal guarantees",
      "Repayment Term": "1-7 years",
      "Other Terms": [
        "Favorable terms to encourage sustainable practices"
      ]
    }
  ]
  
 export const merchantLoanTypes = [
    {
      "Product": "Invoice Financing",
      "Interest Rate": "16-18% per annum",
      "Eligibility Criteria": [
        "Minimum 1 year in business",
        "Positive net income",
        "Verified outstanding invoices"
      ],
      "Collateral": "Typically unsecured invoices as collateral",
      "Repayment Term": "1-3 months",
      "Other Terms": [
        "Immediate cash against invoices",
        "Repaid as buyers settle invoices"
      ]
    },
    {
      "Product": "Anchor Financing",
      "Interest Rate": "15-17% per annum",
      "Eligibility Criteria": [
        "Minimum 1 year in business",
        "Supplying goods to large reputable buyers on ONDC",
        "Positive cash flow"
      ],
      "Collateral": "Typically unsecured may require personal guarantees",
      "Repayment Term": "3-12 months",
      "Other Terms": [
        "Based on buyer's creditworthiness",
        "Repayment aligned with buyer's payment cycle"
      ]
    },
    {
      "Product": "Order Fulfillment Financing",
      "Interest Rate": "14-16% per annum",
      "Eligibility Criteria": [
        "Minimum 1 year in business",
        "Confirmed orders",
        "Positive cash flow"
      ],
      "Collateral": "Typically unsecured may require personal guarantees",
      "Repayment Term": "1-6 months",
      "Other Terms": [
        "Funds for inventory procurement",
        "Repayment after sales completion"
      ]
    },
    {
      "Product": "Vendor Financing",
      "Interest Rate": "15-17% per annum",
      "Eligibility Criteria": [
        "Minimum 1 year in business",
        "Positive net income",
        "Verified buyers"
      ],
      "Collateral": "Typically unsecured may require personal guarantees",
      "Repayment Term": "1-3 months",
      "Other Terms": [
        "Short-term credit to buyers",
        "Boosts sales and manages cash flow"
      ]
    }
  ]
  
 export const statesArray = [
    { state: "Andhra Pradesh", nameLocal: "ఆంధ్ర ప్రదేశ్", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Arunachal Pradesh", nameLocal: "अरुणाचल प्रदेश", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Assam", nameLocal: "অসম", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Bihar", nameLocal: "बिहार", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Chhattisgarh", nameLocal: "छत्तीसगढ़", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Goa", nameLocal: "गोवा", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Gujarat", nameLocal: "ગુજરાત", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Haryana", nameLocal: "हरियाणा", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Himachal Pradesh", nameLocal: "हिमाचल प्रदेश", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Jharkhand", nameLocal: "झारखंड", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Karnataka", nameLocal: "ಕರ್ನಾಟಕ", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Kerala", nameLocal: "കേരളം", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Madhya Pradesh", nameLocal: "मध्य प्रदेश", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Maharashtra", nameLocal: "महाराष्ट्र", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Manipur", nameLocal: "মণিপুর", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Meghalaya", nameLocal: "मेघालय", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Mizoram", nameLocal: "मिजोरम", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Nagaland", nameLocal: "नागालैण्ड", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Odisha", nameLocal: "ଓଡ଼ିଶା", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Punjab", nameLocal: "ਪੰਜਾਬ", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Rajasthan", nameLocal: "राजस्थान", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Sikkim", nameLocal: "सिक्किम", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Tamil Nadu", nameLocal: "தமிழ் நாடு", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Telangana", nameLocal: "తెలంగాణ", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Tripura", nameLocal: "ত্রিপুরা", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Uttar Pradesh", nameLocal: "उत्तर प्रदेश", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Uttarakhand", nameLocal: "उत्तराखण्ड", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "West Bengal", nameLocal: "পশ্চিমবঙ্গ", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Andaman and Nicobar Islands", nameLocal: "আন্দামান ও নিকোবর দ্বীপপুঞ্জ", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Chandigarh", nameLocal: "ਚੰਡੀਗੜ੍ਹ", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Dadra and Nagar Haveli and Daman and Diu", nameLocal: "दादरा और नगर हवेली और दमन और दीव", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Lakshadweep", nameLocal: "ലക്ഷദ്വീപ്", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Delhi", nameLocal: "दिल्ली", randomNo: Math.floor(Math.random() * 20) + 1 },
    { state: "Puducherry", nameLocal: "புதுச்சேரி", randomNo: Math.floor(Math.random() * 20) + 1 }
];

export const farmerFilter =  [
  { id: 'geography',icon: "", label: 'Geography', subOptions: ['North-India', 'South-India', 'East-India', 'West-India'] },
  { id: 'type-of-farming',icon: "", label: 'Farming Type', subOptions: ['Crop-Farming', 'Livestock-Farming'] },
  { id: 'farm-size',icon: "", label: 'Farm Size', subOptions: ['less than 10 acres', 'more than 10 acres'] },
  { id: 'primary-crops-grown',icon: "", label: 'Primary Crops', subOptions: ['Food-Crops', 'Cash-Crops'] },
  { id: 'use-of-farming-technology',icon: "", label: 'Farming Technology', subOptions: ['Modern', 'Traditional'] },
  { id: 'annual-income-from-farming',icon: "", label: 'Annual Income', subOptions: ['Less than 5,00,000', 'More than 5,00,000'] },
  { id: 'loan-amount-required',icon: "", label: 'Loan Amount', subOptions: ['Less than 50,000', 'More than 50,000'] },
];

export const merchantFilter = [
  { id: 'geography', label: 'Geography', subOptions: ['North India', 'South India', 'East India', 'West India'] },
  { id: 'type-of-merchant', label: 'Merchant Type', subOptions: ['Cash Crop Trader', 'Food Grains & Lentils Trader'] },
  { id: 'business-size', label: 'Business Size', subOptions: ['Small/Medium (annual revenue less than ₹1 crore)', 'Large (annual revenue more than ₹1 crore)'] },
  { id: 'primary-goods-traded', label: 'Primary Goods Traded', subOptions: ['Non-Perishable Goods (Grains, Lentils, Dry Fruits)', 'Perishable Goods (Fruits, Vegetables, Spices)'] },
  { id: 'use-of-technology', label: 'Use of Technology', subOptions: ['Modern (E-commerce, ONDC Platform, Digital Payments)', 'Traditional (None)'] },
  { id: 'annual-revenue', label: 'Annual Revenue', subOptions: ['Less than ₹50,00,000', 'More than ₹50,00,000'] },
  { id: 'loan-amount-required', label: 'Loan Amount Required', subOptions: ['Less than ₹1,00,000', 'More than ₹1,00,000'] },
];

export const farmerImageArray  = [
  farmerImg1,farmerImg2,farmerImg3,farmerImg4,farmerImg5,farmerImg6
];

export const farmerProfiles = [
  {
    "Name":"Ravi Kumar",
    "state": "Assam",
    "North India": false,
    "South India": false,
    "East India": true,
    "West India": false,
    "Cash Crop Trader": true,
    "Food Grains & Lentils Trader": false,
    "Small/Medium (annual revenue less than ₹1 crore)": 7000000,
    "Large (annual revenue more than ₹1 crore)": 140000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Lentils",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Vegetables",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "ONDC Platform",
    "Traditional (None)": "Yes",
    "Less than ₹50,00,000": true,
    "More than ₹50,00,000": false,
    "Less than ₹1,00,000": 800,
    "More than ₹1,00,000": 15000000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
    "Name":"Anand Saruke",
    "state": "Gujarat",
    "North India": false,
    "South India": false,
    "East India": false,
    "West India": true,
    "Cash Crop Trader": true,
    "Food Grains & Lentils Trader": false,
    "Small/Medium (annual revenue less than ₹1 crore)": 8000000,
    "Large (annual revenue more than ₹1 crore)": 160000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Grains",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Vegetables",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "E-commerce",
    "Traditional (None)": "Yes",
    "Less than ₹50,00,000": true,
    "More than ₹50,00,000": false,
    "Less than ₹1,00,000": 350,
    "More than ₹1,00,000": 17000000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },  {
    "Name":"Ravi Kumar",
    "state": "Uttar Pradesh",
    "North India": true,
    "South India": false,
    "East India": false,
    "West India": false,
    "Cash Crop Trader": true,
    "Food Grains & Lentils Trader": false,
    "Small/Medium (annual revenue less than ₹1 crore)": 9000000,
    "Large (annual revenue more than ₹1 crore)": 180000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Grains",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Vegetables",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "Digital Payments",
    "Traditional (None)": "None",
    "Less than ₹50,00,000": 400000,
    "More than ₹50,00,000": 95000000,
    "Less than ₹1,00,000": 900,
    "More than ₹1,00,000": 18000000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
    "Name":"Anand Sahu",
    "state": "Rajasthan",
    "North India": false,
    "South India": false,
    "East India": false,
    "West India": true,
    "Cash Crop Trader": true,
    "Food Grains & Lentils Trader": false,
    "Small/Medium (annual revenue less than ₹1 crore)": 6000000,
    "Large (annual revenue more than ₹1 crore)": 130000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Grains",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Vegetables",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "E-commerce",
    "Traditional (None)": "Yes",
    "Less than ₹50,00,000": 300000,
    "More than ₹50,00,000": 75000000,
    "Less than ₹1,00,000": 750,
    "More than ₹1,00,000": 15000000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },{
    "Name":"Harsh Golccha",
    "state": "Maharashtra",
    "North India": false,
    "South India": false,
    "East India": false,
    "West India": true,
    "Cash Crop Trader": true,
    "Food Grains & Lentils Trader": false,
    "Small/Medium (annual revenue less than ₹1 crore)": 8000000,
    "Large (annual revenue more than ₹1 crore)": 160000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Grains",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Vegetables",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "E-commerce",
    "Traditional (None)": "Yes",
    "Less than ₹50,00,000": 350000,
    "More than ₹50,00,000": 85000000,
    "Less than ₹1,00,000": 350,
    "More than ₹1,00,000": 17000000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
    "Name":"Ayush Kumar",
    "state": "Haryana",
    "North India": false,
    "South India": false,
    "East India": false,
    "West India": true,
    "Cash Crop Trader": true,
    "Food Grains & Lentils Trader": false,
    "Small/Medium (annual revenue less than ₹1 crore)": 7000000,
    "Large (annual revenue more than ₹1 crore)": 150000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Grains",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Vegetables",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "E-commerce",
    "Traditional (None)": "Yes",
    "Less than ₹50,00,000": 300000,
    "More than ₹50,00,000": 75000000,
    "Less than ₹1,00,000": 300,
    "More than ₹1,00,000": 16000000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  }, {
    "Name":"Ankit Kumar",
    "state": "Bihar",
    "North India": false,
    "South India": false,
    "East India": true,
    "West India": false,
    "Cash Crop Trader": true,
    "Food Grains & Lentils Trader": false,
    "Small/Medium (annual revenue less than ₹1 crore)": 6000000,
    "Large (annual revenue more than ₹1 crore)": 130000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Lentils",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Vegetables",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "E-commerce",
    "Traditional (None)": "None",
    "Less than ₹50,00,000": 400000,
    "More than ₹50,00,000": 95000000,
    "Less than ₹1,00,000": 400,
    "More than ₹1,00,000": 14000000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
    "Name":"Rahul Kumar",
    "state": "Madhya Pradesh",
    "North India": false,
    "South India": false,
    "East India": false,
    "West India": true,
    "Cash Crop Trader": true,
    "Food Grains & Lentils Trader": false,
    "Small/Medium (annual revenue less than ₹1 crore)": 7000000,
    "Large (annual revenue more than ₹1 crore)": 140000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Grains",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Vegetables",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "E-commerce",
    "Traditional (None)": "Yes",
    "Less than ₹50,00,000": 350000,
    "More than ₹50,00,000": 85000000,
    "Less than ₹1,00,000": 350,
    "More than ₹1,00,000": 16000000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },{
    "Name":"ShashiRanjan Prasad",
    "state": "West Bengal",
    "North India": false,
    "South India": false,
    "East India": true,
    "West India": false,
    "Cash Crop Trader": true,
    "Food Grains & Lentils Trader": false,
    "Small/Medium (annual revenue less than ₹1 crore)": 8000000,
    "Large (annual revenue more than ₹1 crore)": 170000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Grains",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Vegetables",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "Digital Payments",
    "Traditional (None)": "None",
    "Less than ₹50,00,000": 450000,
    "More than ₹50,00,000": 90000000,
    "Less than ₹1,00,000": 450,
    "More than ₹1,00,000": 18000000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
    "Name":"Lokesh Kumar",
    "state": "Odisha",
    "North India": false,
    "South India": false,
    "East India": true,
    "West India": false,

    "Cash Crop Trader": true,
    "Food Grains & Lentils Trader": false,
    "Small/Medium (annual revenue less than ₹1 crore)": 6500000,
    "Large (annual revenue more than ₹1 crore)": 140000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Grains",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Vegetables",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "E-commerce",
    "Traditional (None)": "Yes",
    "Less than ₹50,00,000": 300000,
    "More than ₹50,00,000": 75000000,
    "Less than ₹1,00,000": 300,
    "More than ₹1,00,000": 15000000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },{
    "Name":"Hritik Kumar",
    "state": "Tamil Nadu",
    "North India": false,
    "South India": true,
    "East India": false,
    "West India": false,
    "Cash Crop Trader": false,
    "Food Grains & Lentils Trader": true,
    "Small/Medium (annual revenue less than ₹1 crore)": 7500000,
    "Large (annual revenue more than ₹1 crore)": 155000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Rice",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Fruits",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "E-commerce",
    "Traditional (None)": "Yes",
    "Less than ₹50,00,000": 400000,
    "More than ₹50,00,000": 90000000,
    "Less than ₹1,00,000": 400,
    "More than ₹1,00,000": 16000000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
    "Name":"Shubham Kumar",
    "state": "Karnataka",
    "North India": false,
    "South India": true,
    "East India": false,
    "West India": false,
    "Crop Farming" : true,

    // "Cash Crop Trader": false,
    // "Food Grains & Lentils Trader": true,
    // "Small/Medium (annual revenue less than ₹1 crore)": 7200000,
    // "Large (annual revenue more than ₹1 crore)": 148000000,
    // "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Rice",
    // "Perishable Goods (Fruits, Vegetables, Spices)": "Fruits",
    // "Modern (E-commerce, ONDC Platform, Digital Payments)": "E-commerce",
    // "Traditional (None)": "Yes",
    // "Less than ₹50,00,000": 380000,
    // "More than ₹50,00,000": 85000000,
    // "Less than ₹1,00,000": 380,
    // "More than ₹1,00,000": 15500000,
    "image" : farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  }
]

const tempFarmerProfiles = [
   {
    "name": "Ravi Kumar",
    "Tenure": 6,
    "State": "Bihar",
    "Amount-Required": 12000,
    "North-India": false,
    "South-India": false,
    "East-India": true,
    "West-India": false,
    "Crop-Farming": false,
    "Livestock-Farming": true,
    "less than 10 acres": false,
    "more Than 10 acres": true,
    "Food-crops": true,
    "Cash crops": false,

    "Modern": true,
    "precision": false,
    "Traditional": false,

    "less than ₹5,00,000": true,
    "More than ₹5,00,000": false,
    "less than 50,000": false,
    "more than 50,000": true
   },{
    "name": "Amit Sharma",
    "Tenure": 4,
    "State": "Uttar Pradesh",
    "Amount-Required": 15000,
    "North-India": true,
    "South-India": false,
    "East-India": false,
    "West-India": false,
    "Crop-Farming": true,
    "Livestock-Farming": false,
    "less than 10 acres": true,
    "more Than 10 acres": false,
    "Food-crops": false,
    "Cash crops": true,

    "Modern": false,
    "precision": true,
    "Traditional": false,

    "less than ₹5,00,000": false,
    "More than ₹5,00,000": true,
    "less than 50,000": false,
    "more than 50,000": true
},{
  "name": "Sunita Reddy",
  "Tenure": 3,
  "State": "Tamil Nadu",
  "Amount-Required": 20000,
  "North-India": false,
  "South-India": true,
  "East-India": false,
  "West-India": false,
  "Crop-Farming": false,
  "Livestock-Farming": true,
  "less than 10 acres": true,
  "more Than 10 acres": false,
  "Food-crops": true,
  "Cash crops": false,

  "Modern": true,
  "precision": false,
  "Traditional": true,

  "less than ₹5,00,000": true,
  "More than ₹5,00,000": false,
  "less than 50,000": true,
  "more than 50,000": false
},{
  "name": "Ravi Patel",
  "Tenure": 7,
  "State": "Gujarat",
  "Amount-Required": 25000,
  "North-India": false,
  "South-India": false,
  "East-India": false,
  "West-India": true,
  "Crop-Farming": true,
  "Livestock-Farming": false,
  "less than 10 acres": false,
  "more Than 10 acres": true,
  "Food-crops": false,
  "Cash crops": true,

  "Modern": false,
  "precision": false,
  "Traditional": true,

  "less than ₹5,00,000": false,
  "More than ₹5,00,000": true,
  "less than 50,000": false,
  "more than 50,000": true
}
,{
  "name": "Meera Das",
  "Tenure": 5,
  "State": "Odisha",
  "Amount-Required": 18000,
  "North-India": false,
  "South-India": false,
  "East-India": true,
  "West-India": false,
  "Crop-Farming": false,
  "Livestock-Farming": true,
  "less than 10 acres": true,
  "more Than 10 acres": false,
  "Food-crops": true,
  "Cash crops": false,

  "Modern": true,
  "precision": false,
  "Traditional": false,

  "less than ₹5,00,000": true,
  "More than ₹5,00,000": false,
  "less than 50,000": false,
  "more than 50,000": true
},{
  "name": "Sanjay Kumar",
  "Tenure": 8,
  "State": "Maharashtra",
  "Amount-Required": 22000,
  "North-India": false,
  "South-India": false,
  "East-India": false,
  "West-India": true,
  "Crop-Farming": true,
  "Livestock-Farming": false,
  "less than 10 acres": false,
  "more Than 10 acres": true,
  "Food-crops": true,
  "Cash crops": true,

  "Modern": true,
  "precision": true,
  "Traditional": false,

  "less than ₹5,00,000": false,
  "More than ₹5,00,000": true,
  "less than 50,000": false,
  "more than 50,000": true
}
,{
  "name": "Anjali Singh",
  "Tenure": 9,
  "State": "Punjab",
  "Amount-Required": 16000,
  "North-India": true,
  "South-India": false,
  "East-India": false,
  "West-India": false,
  "Crop-Farming": false,
  "Livestock-Farming": true,
  "less than 10 acres": true,
  "more Than 10 acres": false,
  "Food-crops": true,
  "Cash crops": false,

  "Modern": true,
  "precision": false,
  "Traditional": true,

  "less than ₹5,00,000": true,
  "More than ₹5,00,000": false,
  "less than 50,000": false,
  "more than 50,000": true
},
{
  "name": "Rajesh Nair",
  "Tenure": 2,
  "State": "Kerala",
  "Amount-Required": 14000,
  "North-India": false,
  "South-India": true,
  "East-India": false,
  "West-India": false,
  "Crop-Farming": true,
  "Livestock-Farming": false,
  "less than 10 acres": true,
  "more Than 10 acres": false,
  "Food-crops": false,
  "Cash crops": true,

  "Modern": false,
  "precision": true,
  "Traditional": false,

  "less than ₹5,00,000": true,
  "More than ₹5,00,000": false,
  "less than 50,000": true,
  "more than 50,000": false
},{
  "name": "Vijay Rao",
  "Tenure": 10,
  "State": "Karnataka",
  "Amount-Required": 30000,
  "North-India": false,
  "South-India": true,
  "East-India": false,
  "West-India": false,
  "Crop-Farming": false,
  "Livestock-Farming": true,
  "less than 10 acres": false,
  "more Than 10 acres": true,
  "Food-crops": true,
  "Cash crops": false,

  "Modern": true,
  "precision": true,
  "Traditional": false,

  "less than ₹5,00,000": false,
  "More than ₹5,00,000": true,
  "less than 50,000": false,
  "more than 50,000": true
},{
  "name": "Priya Thakur",
  "Tenure": 1,
  "State": "Madhya Pradesh",
  "Amount-Required": 25000,
  "North-India": false,
  "South-India": false,
  "East-India": false,
  "West-India": true,
  "Crop-Farming": true,
  "Livestock-Farming": false,
  "less than 10 acres": true,
  "more Than 10 acres": false,
  "Food-crops": false,
  "Cash crops": true,

  "Modern": false,
  "precision": false,
  "Traditional": true,

  "less than ₹5,00,000": true,
  "More than ₹5,00,000": false,
  "less than 50,000": true,
  "more than 50,000": false
}






  
]


















const fdata = [
  {
    "state" : "Punjab",
    "North India": false,
    "South India": false,
    "East India": false,
    "West India": false,
    "Cash Crop Trader": true,
    "Food Grains & Lentils Trader": false,
    "Small/Medium (annual revenue less than ₹1 crore)": 7000000,
    "Large (annual revenue more than ₹1 crore)": 150000000,
    "Non-Perishable Goods (Grains, Lentils, Dry Fruits)": "Grains",
    "Perishable Goods (Fruits, Vegetables, Spices)": "Vegetables",
    "Modern (E-commerce, ONDC Platform, Digital Payments)": "E-commerce",
    "Traditional (None)": "Yes",
    "Less than ₹50,00,000": 350000,
    "More than ₹50,00,000": 85000000,
    "Less than ₹1,00,000": 1000,
    "More than ₹1,00,000": 20000000
  }
    
  
]

export const agriCompanies = ["Greenfield Agro", "AgroFresh Ventures", "Bharat Agro", "EcoFarms", 
"AgriBoost Solutions", "Krishi Services", "Harvest Growers", "AgroWave", 
"FarmGate Products", "Nature's Best", "Organic Fields", "AgriCo India", 
"FarmFresh Produce", "PureHarvest", "Kisan Connect", "Rural Roots", 
"Green Harvest", "AgriTech Innovations", "FarmRise", "CropCare", 
"FreshFarms", "GreenAgri", "PureAgri", "HarvestHub"];
 
 export const farmerFilter =  [
  { id: 'geography',icon: "", label: 'Geography', subOptions: ['North-India', 'South-India', 'East-India', 'West-India'] },
  { id: 'type-of-farming',icon: "", label: 'Farming Type', subOptions: ['Arable Farming', 'Mixed Farming','Horticulture','Aquaculture'] },
  { id: 'farm-size',icon: "", label: 'Farm Size', subOptions: ['<10 acres', '<10 acres'] },
  { id: 'primary-crops-grown',icon: "", label: 'Primary Crops', subOptions: ['Food', 'Cash'] },
  { id: 'use-of-farming-technology',icon: "", label: 'Farming Technology', subOptions: ['High-Tech Farming ', 'Traditional Farming','Conventional Farming'] },
  // { id: 'annual-income-from-farming',icon: "", label: 'Annual Income', subOptions: ['>5 lakhs', '>5 lakhs'] },
  { id: 'loan-amount-required',icon: "", label: 'Loan Amount', subOptions: ['less than 50,000', 'more than 50,000'] },
];


// GeographFilters for Farmers : 
// Geography:
// North, East, West, South
// Farming Type:
// Arable Farming (growing crops only)
// Mixed Farming (combining crop cultivation with livestock rearing)
// ------------------------->Horticulture (focused on growing fruits, vegetables, and ornamental plants)
// ------------------------->Aquaculture (farming of aquatic organisms under controlled conditions)
// Note : dont mention the descriptions , its for us 
// Farm Size:
// <10 acres, >10 acres
// Primary Crops::
// Food (e.g., grains, vegetables), Cash (e.g., cotton, tobacco)
// Technology:
// High-Tech Farming (uses advanced technologies like IoT, robotics, precision farming)
//-----------------------> Conventional Farming (uses High-Tech Farming  but standard technology, such as tractors and basic machinery)
//  Traditional Farming Farming (relies on manual labor and age-old farming practices)
// Annual Income:
// <5 lakhs, >5 lakhs












export const farmerProfiles = [
  {
    "id": 1,
    "name": "Vijay Rao",
    "Tenure": 10,
    "State": "Karnataka",
    "Amount-Required": 300000,
    "amountRecived" : 10000,
    "farmSize": Math.floor(Math.random() * 150),
    "crops": ["corn", "maize"],
    "Experience": Math.floor(Math.random() * 20),
    "creditScore": Math.floor(Math.random() * 800),
    "OverallRating": "A",
    "financialHealth": "Stable with diversified income sources (A-)",
    "Risk Factor": "Moderate climate risk due to occasional droughts (C+)",
    
    // --------------------------------------
    "name": "Ramesh Singh",
        "location": {
            "region": "Punjab, North India",
            "landParcelVerification": true,
            "farmSize": "25 acres"
        },
        "primaryCrops": ["Wheat", "Rice"],
        "farmingExperience": "10 years",
        "dataSets": {
            "bankingData": {
                "accountActivity": "High",
                "transactionHistory": "Consistent",
                "loanRepaymentRecords": "Timely"
            },
            "bureauData": {
                "creditScore": 720,
                "creditHistory": "Extensive",
                "outstandingDebts": "Low",
                "repaymentBehavior": "Excellent"
            },
            "utilityAndTelecomData": {
                "mobileUsage": "High",
                "paymentPatterns": "Consistently Timely"
            }
        },
        "farmPractices": {
            "modernTechniques": "Adopted",
            "sustainabilityPractices": {
                "cropRotation": "Regular",
                "organicFarming": "Fully Implemented"
            }
        },
        "validations": {
            "landParcel": "Verified ownership and location of 25 acres in Punjab",
            "borrower": "Verified identity through Aadhar and PAN"
        },
        "stageOfFarming": "Sowing/Tillering",
        "cropHealthReport": "Healthy",
        "technicalAssessment": {
            "soilMoistureLevels": "Optimal",
            "nutrientLevels": "Balanced",
            "pestDiseaseActivity": "Low"
        },
        "assessmentSummary": {
            "creditScore": {
                "value": 720,
                "rating": "A"
            },
            "marketAccess": {
                "description": "Good; established relationships with local buyers",
                "rating": "B"
            },
            "technologyUse": {
                "description": "Moderate; uses basic precision agriculture tools",
                "rating": "B"
            },
            "sustainabilityPractices": {
                "description": "Strong; employs crop rotation and organic farming methods",
                "rating": "A"
            },
            "financialHealth": {
                "description": "Stable with diversified income sources",
                "rating": "A"
            },
            "riskFactors": {
                "description": "Moderate climate risk due to occasional droughts",
                "rating": "C"
            }
        },
        "overallRating": "B",
        "recommendation": "Ramesh Singh is eligible for a loan. Suggested investments in drought-resistant crops and improved irrigation systems.",

    // -------------------------------------

    "North-India": false,
    "South-India": true,
    "East-India": false,
    "West-India": false,
    "Arable Farming": false,
    "Mixed Farming": true,
    'Horticulture' : true,

    "<10 acres": false,
    "<10 acres": true,
    "Food": true,
    "Cash": false,
    "High-Tech Farming ": false,
    "precision": true,
    "Traditional Farming": true,
    ">5 lakhs": false,
    ">5 lakhs": true,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
    "id": 2,
    "name": "Arjun Singh",
    "Tenure": 15,
    "State": "Punjab",
    "Amount-Required": 450000,
    "amountRecived" : 15000,
    "farmSize": Math.floor(Math.random() * 150),
    "crops": ["wheat", "barley"],
    "Experience": Math.floor(Math.random() * 20),
    "creditScore": Math.floor(Math.random() * 800),
    "OverallRating": "B+",
    "financialHealth": "Moderate with stable income (B)",
    "Risk Factor": "Low risk with good irrigation (B+)",
    // ----------------------------------------
    "name": "Anil Kumar",
    "location": {
        "region": "Bihar, East India",
        "landParcelVerification": true,
        "farmSize": "10 acres"
    },
    "primaryCrops": ["Maize", "Vegetables"],
    "farmingExperience": "8 years",
    "dataSets": {
        "bankingData": {
            "accountActivity": "High",
            "transactionHistory": "Consistent",
            "loanRepaymentRecords": "Timely"
        },
        "bureauData": {
            "creditScore": 710,
            "creditHistory": "Extensive",
            "outstandingDebts": "Moderate",
            "repaymentBehavior": "Good"
        },
        "utilityAndTelecomData": {
            "mobileUsage": "High",
            "paymentPatterns": "Consistently Timely"
        }
    },
    "farmPractices": {
        "precisionTechniques": "Fully Adopted"
    },
    "validations": {
        "landParcel": "Verified ownership and location of 20 acres in Bihar",
        "borrower": "Verified identity through Aadhar and PAN"
    },
    "stageOfFarming": "Flowering",
    "cropHealthReport": "Healthy",
    "technicalAssessment": {
        "soilMoistureLevels": "Optimal",
        "nutrientLevels": "Balanced",
        "pestDiseaseActivity": "Low"
    },
    "assessmentSummary": {
        "creditScore": {
            "value": 710,
            "rating": "A"
        },
        "marketAccess": {
            "description": "Good; established relationships with local vegetable markets",
            "rating": "A+"
        },
        "technologyUse": {
            "description": "High; uses precision farming tools",
            "rating": "A"
        },
        "sustainabilityPractices": {
            "description": "Strong; employs crop rotation and organic farming methods",
            "rating": "A"
        },
        "financialHealth": {
            "description": "High with diversified income sources",
            "rating": "A+"
        },
        "riskFactors": {
            "description": "Low climate risk",
            "rating": "A"
        }
    },
    "overallRating": "A+",
    "recommendation": "Anil Kumar is eligible for a loan. Suggested investments in flood-resistant crop varieties and improved drainage systems.",


    // ------------------------------------------
    
    "North-India": true,
    "South-India": false,
    "East-India": false,
    "West-India": false,
    "Arable Farming": true,
    "Mixed Farming": false,
    'Horticulture' : false,

    "<10 acres": true,
    "<10 acres": false,
    "Food": true,
    "Cash": false,
    "High-Tech Farming ": false,
    "precision": true,
    "Traditional Farming": true,
    ">5 lakhs": true,
    ">5 lakhs": false,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
    "id": 3,
    "name": "Neha Patel",
    "Tenure": 8,
    "State": "Gujarat",
    "Amount-Required": 600000,
    "amountRecived" : 50000,
    "farmSize": Math.floor(Math.random() * 150),
    "crops": ["cotton", "peanuts"],
    "Experience": Math.floor(Math.random() * 20),
    "creditScore": Math.floor(Math.random() * 800),
    "OverallRating": "A-",
    "financialHealth": "Good with diversified crops (B+)",
    "Risk Factor": "Moderate due to monsoon dependence (B-)",
// --------------------------------------------
"name": "Kavita Yadav",
"location": {
    "region": "Maharashtra, West India",
    "landParcelVerification": true,
    "farmSize": "20 acres"
},
"primaryCrops": ["Cotton", "Sugarcane"],
"farmingExperience": "12 years",
"dataSets": {
    "bankingData": {
        "accountActivity": "High",
        "transactionHistory": "Consistent",
        "loanRepaymentRecords": "Timely"
    },
    "bureauData": {
        "creditScore": 730,
        "creditHistory": "Extensive",
        "outstandingDebts": "Moderate",
        "repaymentBehavior": "Excellent"
    },
    "utilityAndTelecomData": {
        "mobileUsage": "High",
        "paymentPatterns": "Consistently Timely"
    }
},
"farmPractices": {
    "IoTBasedTechniques": "Fully Implemented"
},
"validations": {
    "landParcel": "Verified ownership and location of 100 acres in Maharashtra",
    "borrower": "Verified identity through Aadhar and PAN"
},
"stageOfFarming": "Harvesting",
"cropHealthReport": "Healthy",
"technicalAssessment": {
    "soilMoistureLevels": "Optimal",
    "nutrientLevels": "Balanced",
    "pestDiseaseActivity": "Low"
},
"assessmentSummary": {
    "creditScore": {
        "value": 730,
        "rating": "A"
    },
    "marketAccess": {
        "description": "Excellent; established relationships with textile mills and sugar factories",
        "rating": "A"
    },
    "technologyUse": {
        "description": "High; uses IoT devices for monitoring and automation",
        "rating": "A"
    },
    "sustainabilityPractices": {
        "description": "Strong; employs sustainable irrigation and crop rotation",
        "rating": "A"
    },
    "financialHealth": {
        "description": "Strong with diversified income sources",
        "rating": "A"
    },
    "riskFactors": {
        "description": "Moderate market risk due to fluctuating crop prices",
        "rating": "B"
    }
},
"overallRating": "A",
"recommendation": "Kavita Yadav is eligible for a loan. Suggested investments in advanced IoT devices and market price hedging strategies to manage risks.",



// ----------------------------------------------
    "North-India": false,
    "South-India": false,
    "East-India": false,
    "West-India": true,
    "Arable Farming": true,
    "Mixed Farming": false,
    'Horticulture' : true,

    "<10 acres": false,
    "<10 acres": true,
    "Food": true,
    "Cash": true,
    "High-Tech Farming ": true,
    "precision": true,
    "Traditional Farming": false,
    ">5 lakhs": false,
    ">5 lakhs": true,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
    "id": 4,
    "name": "Rajesh Kumar",
    "Tenure": 12,
    "State": "Maharashtra",
    "Amount-Required": 350000,
    "amountRecived" : 170000,
    "farmSize": Math.floor(Math.random() * 150),
    "crops": ["sugarcane", "soybeans"],
    "Experience": Math.floor(Math.random() * 20),
    "creditScore": Math.floor(Math.random() * 800),
    "OverallRating": "B",
    "financialHealth": "Stable with regular income (B-)",
    "Risk Factor": "High due to unpredictable monsoon (C)",
    // --------------------------------------
    "name": "Mahesh Patel",
    "location": {
        "region": "Haryana, North India",
        "landParcelVerification": true,
        "farmSize": "5 acres"
    },
    "primaryCrops": [],
    "livestockIncluded": true,
    "farmingExperience": "10 years",
    "dataSets": {
        "bankingData": {
            "accountActivity": "High",
            "transactionHistory": "Consistent",
            "loanRepaymentRecords": "Timely"
        },
        "bureauData": {
            "creditScore": 720,
            "creditHistory": "Extensive",
            "outstandingDebts": "Low",
            "repaymentBehavior": "Excellent"
        },
        "utilityAndTelecomData": {
            "mobileUsage": "High",
            "paymentPatterns": "Consistently Timely"
        }
    },
    "farmPractices": {
        "droneTechnology": "Fully Adopted for Livestock Monitoring"
    },
    "validations": {
        "landParcel": "Verified ownership and location of 30 acres in Haryana",
        "borrower": "Verified identity through Aadhar and PAN"
    },
    "stageOfFarming": "Sowing",
    "livestockHealthReport": "Healthy",
    "technicalAssessment": {
        "feedQuality": "High",
        "waterSupply": "Adequate",
        "diseaseActivity": "Low"
    },
    "assessmentSummary": {
        "creditScore": {
            "value": 720,
            "rating": "A"
        },
        "marketAccess": {
            "description": "Good; established relationships with local meat and dairy markets",
            "rating": "B"
        },
        "technologyUse": {
            "description": "High; uses drones for livestock monitoring",
            "rating": "A"
        },
        "sustainabilityPractices": {
            "description": "Moderate; employs some sustainable practices",
            "rating": "B"
        },
        "financialHealth": {
            "description": "Stable with diversified income sources",
            "rating": "A"
        },
        "riskFactors": {
            "description": "Low disease risk due to good animal husbandry practices",
            "rating": "B"
        }
    },
    "overallRating": "A",
    "recommendation": "Mahesh Patel is eligible for a loan. Suggested investments in advanced drone technology and improved feed quality for enhanced livestock productivity.",



    // ------------------------------------------
    
    "North-India": false,
    "South-India": false,
    "East-India": false,
    "West-India": true,
    "Arable Farming": true,
    "Mixed Farming": true,
    'Horticulture' : true,

    "<10 acres": true,
    "<10 acres": false,
    "Food": false,
    "Cash": true,
    "High-Tech Farming ": true,
    "precision": true,
    "Traditional Farming": false,
    ">5 lakhs": true,
    ">5 lakhs": false,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
    "id": 5,
    "name": "Suman Das",
    "Tenure": 9,
    "State": "West Bengal",
    "Amount-Required": 500000,
    "amountRecived" : 6000,
    "farmSize": Math.floor(Math.random() * 150),
    "crops": ["rice", "jute"],
    "Experience": Math.floor(Math.random() * 20),
    "creditScore": Math.floor(Math.random() * 800),
    "OverallRating": "A",
    "financialHealth": "Strong with consistent yields (A-)",
    "Risk Factor": "Moderate due to flood risk (B+)",
// ---------------------------------------------
"id": 6,
"name": "Radha Sharma",
"location": {
    "region": "Karnataka, South India",
    "landParcelVerification": true,
    "farmSize": "4 acres"
},
"primaryCrops": ["Pulses", "Fruits"],
"farmingExperience": "9 years",
"dataSets": {
    "bankingData": {
        "accountActivity": "High",
        "transactionHistory": "Consistent",
        "loanRepaymentRecords": "Timely"
    },
    "bureauData": {
        "creditScore": 715,
        "creditHistory": "Extensive",
        "outstandingDebts": "Moderate",
        "repaymentBehavior": "Good"
    },
    "utilityAndTelecomData": {
        "mobileUsage": "High",
        "paymentPatterns": "Consistently Timely"
    }
},
"farmPractices": {
    "traditionalMethods": "Fully Adopted"
},
"validations": {
    "landParcel": "Verified ownership and location of 40 acres in Karnataka",
    "borrower": "Verified identity through Aadhar and PAN"
},
"stageOfFarming": "Flowering",
"cropHealthReport": "Healthy",
"technicalAssessment": {
    "soilMoistureLevels": "Optimal",
    "nutrientLevels": "Balanced",
    "pestDiseaseActivity": "Low"
},
"assessmentSummary": {
    "creditScore": {
        "value": 715,
        "rating": "A"
    },
    "marketAccess": {
        "description": "Good; established relationships with local fruit markets",
        "rating": "B"
    },
    "technologyUse": {
        "description": "Low; uses traditional methods",
        "rating": "C"
    },
    "sustainabilityPractices": {
        "description": "Strong; employs organic farming methods",
        "rating": "A"
    },
    "financialHealth": {
        "description": "Stable with diversified income sources",
        "rating": "A"
    },
    "riskFactors": {
        "description": "Moderate climate risk due to seasonal variability",
        "rating": "C"
    }
},
"overallRating": "B",
"recommendation": "Radha Sharma is eligible for a loan. Suggested investments in improved irrigation systems and climate-resilient crop varieties.",

// --------------------------------------------


    "North-India": false,
    "South-India": false,
    "East-India": true,
    "West-India": false,
    "Arable Farming": true,
    "Mixed Farming": true,
    'Horticulture' : false,

    "<10 acres": false,
    "<10 acres": true,
    "Food": true,
    "Cash": true,
    "High-Tech Farming ": true,
    "precision": true,
    "Traditional Farming": false,
    ">5 lakhs": false,
    ">5 lakhs": true,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  }, 
  // {
  //   "id": 6,
  //   "name": "Anita Sharma",
  //   "Tenure": 7,
  //   "State": "Rajasthan",
  //   "Amount-Required": 250000,
  //   "amountRecived" : 10000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["millets", "legumes"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "B",
  //   "financialHealth": "Stable with some seasonal fluctuations (B-)",
  //   "Risk Factor": "High due to arid conditions (C)",
  //   "North-India": true,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": true,
  //   "Arable Farming": true,
  //   "Mixed Farming": false,
  //   'Horticulture' : true,

  //   "<10 acres": true,
  //   "<10 acres": false,
  //   "Food": true,
  //   "Cash": false,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": true,
  //   ">5 lakhs": false,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 7,
  //   "name": "Balaji Naidu",
  //   "Tenure": 20,
  //   "State": "Tamil Nadu",
  //   "Amount-Required": 500000,
  //   "amountRecived" : 100080,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["rice", "bananas"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A+",
  //   "financialHealth": "Very strong with diversified income (A+)",
  //   "Risk Factor": "Low risk with consistent rainfall (A)",
  //   "North-India": false,
  //   "South-India": true,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   'Horticulture' : false,

  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": false,
  //   "High-Tech Farming ": false,
  //   "precision": true,
  //   "Traditional Farming": true,
  //   ">5 lakhs": true,
  //   ">5 lakhs": false,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 8,
  //   "name": "Chitra Iyer",
  //   "Tenure": 5,
  //   "State": "Kerala",
  //   "Amount-Required": 400000,
  //   "amountRecived" : 50000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["tea", "spices"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A-",
  //   "financialHealth": "Strong with export quality produce (A-)",
  //   "Risk Factor": "Moderate due to fluctuating market prices (B)",
  //   "North-India": false,
  //   "South-India": true,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": false,
  //   'Horticulture' : false,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": true,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": true,
  //   ">5 lakhs": false,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 9,
  //   "name": "Dinesh Thakur",
  //   "Tenure": 13,
  //   "State": "Madhya Pradesh",
  //   "Amount-Required": 600000,
  //   "amountRecived" : 40000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["soybean", "wheat"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "B+",
  //   "financialHealth": "Moderate with some debt (B)",
  //   "Risk Factor": "High due to fluctuating monsoon (C)",
  //   "North-India": false,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": true,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   'Horticulture' : true,

  //   "<10 acres": true,
  //   "<10 acres": false,
  //   "Food": true,
  //   "Cash": true,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": false,
  //   ">5 lakhs": true,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 10,
  //   "name": "Farhan Ali",
  //   "Tenure": 11,
  //   "State": "Uttar Pradesh",
  //   "Amount-Required": 350000,
  //   "amountRecived" : 130000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["sugarcane", "wheat"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A",
  //   "financialHealth": "Strong with steady revenue (A-)",
  //   "Risk Factor": "Low due to good irrigation (B+)",
  //   "North-India": true,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": false,
  //   'Horticulture' : true,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": true,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": true,
  //   ">5 lakhs": false,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 11,
  //   "name": "Geeta Yadav",
  //   "Tenure": 9,
  //   "State": "Haryana",
  //   "Amount-Required": 300000,
  //   "amountRecived" : 20000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["mustard", "wheat"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A",
  //   "financialHealth": "Stable with good market access (A-)",
  //   "Risk Factor": "Moderate due to variable weather (B)",
  //   "North-India": true,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": false,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": false,
  //   ">5 lakhs": true,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 12,
  //   "name": "Ravi Verma",
  //   "Tenure": 14,
  //   "State": "Andhra Pradesh",
  //   "Amount-Required": 450000,
  //   "amountRecived" : 180000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["chilli", "cotton"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "B+",
  //   "financialHealth": "Moderate with diversified crops (B+)",
  //   "Risk Factor": "Low due to stable climate (B+)",
  //   "North-India": false,
  //   "South-India": true,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": false,
  //   "<10 acres": true,
  //   "<10 acres": false,
  //   "Food": false,
  //   "Cash": true,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": true,
  //   ">5 lakhs": false,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 13,
  //   "name": "Lakshmi Menon",
  //   "Tenure": 6,
  //   "State": "Kerala",
  //   "Amount-Required": 550000,
  //   "amountRecived" : 100000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["rubber", "coconut"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A-",
  //   "financialHealth": "Good with steady export revenue (A-)",
  //   "Risk Factor": "Moderate due to market fluctuations (B)",
  //   "North-India": false,
  //   "South-India": true,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": false,
  //   "Cash": true,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": false,
  //   ">5 lakhs": true,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 14,
  //   "name": "Pooja Reddy",
  //   "Tenure": 18,
  //   "State": "Telangana",
  //   "Amount-Required": 700000,
  //   "amountRecived" : 90000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["cotton", "paddy"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A+",
  //   "financialHealth": "Very strong with diversified income (A+)",
  //   "Risk Factor": "Low risk due to good irrigation (A)",
  //   "North-India": false,
  //   "South-India": true,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": false,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": true,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": false,
  //   ">5 lakhs": true,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 15,
  //   "name": "Suresh Patil",
  //   "Tenure": 12,
  //   "State": "Maharashtra",
  //   "Amount-Required": 350000,
  //   "amountRecived" : 210000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["grapes", "onions"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "B",
  //   "financialHealth": "Moderate with high seasonal variation (B-)",
  //   "Risk Factor": "High due to market dependency (C)",
  //   "North-India": false,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": true,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   "<10 acres": true,
  //   "<10 acres": false,
  //   "Food": false,
  //   "Cash": true,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": true,
  //   ">5 lakhs": false,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // } ,{
  //   "id": 16,
  //   "name": "Kiran Joshi",
  //   "Tenure": 8,
  //   "State": "Uttarakhand",
  //   "Amount-Required": 400000,
  //   "amountRecived" : 450000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["tea", "fruits"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "B+",
  //   "financialHealth": "Moderate with potential for growth (B+)",
  //   "Risk Factor": "Moderate due to hilly terrain (B)",
  //   "North-India": true,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": false,
  //   "<10 acres": true,
  //   "<10 acres": false,
  //   "Food": true,
  //   "Cash": false,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": true,
  //   ">5 lakhs": false,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 17,
  //   "name": "Manoj Gupta",
  //   "Tenure": 17,
  //   "State": "Bihar",
  //   "Amount-Required": 300000,
  //   "amountRecived" : 80000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["rice", "wheat"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A",
  //   "financialHealth": "Stable with reliable yields (A-)",
  //   "Risk Factor": "Low risk with good soil fertility (B+)",
  //   "North-India": true,
  //   "South-India": false,
  //   "East-India": true,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": false,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": false,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": false,
  //   ">5 lakhs": true,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 18,
  //   "name": "Pankaj Thakur",
  //   "Tenure": 10,
  //   "State": "Himachal Pradesh",
  //   "Amount-Required": 450000,
  //   "amountRecived" : 40000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["apples", "potatoes"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A-",
  //   "financialHealth": "Good with seasonal high demand (A-)",
  //   "Risk Factor": "Moderate due to cold climate (B)",
  //   "North-India": true,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": true,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": false,
  //   ">5 lakhs": true,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 19,
  //   "name": "Ritu Sharma",
  //   "Tenure": 6,
  //   "State": "Chhattisgarh",
  //   "Amount-Required": 350000,
  //   "amountRecived" : 160000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["paddy", "lentils"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "B",
  //   "financialHealth": "Stable with seasonal fluctuations (B-)",
  //   "Risk Factor": "Moderate due to monsoon dependency (B)",
  //   "North-India": false,
  //   "South-India": false,
  //   "East-India": true,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   "<10 acres": true,
  //   "<10 acres": false,
  //   "Food": true,
  //   "Cash": false,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": false,
  //   ">5 lakhs": true,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 20,
  //   "name": "Anil Jadhav",
  //   "Tenure": 12,
  //   "State": "Maharashtra",
  //   "Amount-Required": 500000,
  //   "amountRecived" : 400000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["sugarcane", "turmeric"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A",
  //   "financialHealth": "Strong with diverse income (A-)",
  //   "Risk Factor": "High due to market dependency (C+)",
  //   "North-India": false,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": true,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": true,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": true,
  //   ">5 lakhs": false,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // }, {
  //   "id": 21,
  //   "name": "Arjun Mehta",
  //   "Tenure": 11,
  //   "State": "Punjab",
  //   "Amount-Required": 350000,
  //   "amountRecived" : 200000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["wheat", "barley"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A",
  //   "financialHealth": "Strong with good crop yield (A-)",
  //   "Risk Factor": "Low risk with good irrigation (B+)",
  //   "North-India": true,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": false,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": true,
  //   ">5 lakhs": false,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 22,
  //   "name": "Rajesh Singh",
  //   "Tenure": 15,
  //   "State": "Uttar Pradesh",
  //   "Amount-Required": 500000,
  //   "amountRecived" : 350000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["sugarcane", "wheat"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "B+",
  //   "financialHealth": "Moderate with steady income (B+)",
  //   "Risk Factor": "Low risk with consistent yield (B)",
  //   "North-India": true,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": false,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": false,
  //   ">5 lakhs": true,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 23,
  //   "name": "Vikram Rao",
  //   "Tenure": 12,
  //   "State": "Karnataka",
  //   "Amount-Required": 400000,
  //   "amountRecived" : 450000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["millets", "maize"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A-",
  //   "financialHealth": "Good with diversified crops (A-)",
  //   "Risk Factor": "Moderate due to variable weather (B)",
  //   "North-India": false,
  //   "South-India": true,
  //   "East-India": false,
  //   "West-India": false,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": false,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": false,
  //   ">5 lakhs": true,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 24,
  //   "name": "Amit Deshmukh",
  //   "Tenure": 10,
  //   "State": "Maharashtra",
  //   "Amount-Required": 600000,
  //   "amountRecived" : 10000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["grapes", "onions"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "A+",
  //   "financialHealth": "Very strong with export quality (A+)",
  //   "Risk Factor": "Low risk with market stability (A)",
  //   "North-India": false,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": true,
  //   "Arable Farming": true,
  //   "Mixed Farming": true,
  //   "<10 acres": false,
  //   "<10 acres": true,
  //   "Food": true,
  //   "Cash": true,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": false,
  //   ">5 lakhs": true,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // },
  // {
  //   "id": 25,
  //   "name": "Sanjay Kulkarni",
  //   "Tenure": 14,
  //   "State": "Gujarat",
  //   "Amount-Required": 450000,
  //   "amountRecived" : 230000,
  //   "farmSize": Math.floor(Math.random() * 150),
  //   "crops": ["cotton", "groundnuts"],
  //   "Experience": Math.floor(Math.random() * 20),
  //   "creditScore": Math.floor(Math.random() * 800),
  //   "OverallRating": "B",
  //   "financialHealth": "Stable with moderate growth (B)",
  //   "Risk Factor": "Moderate due to arid conditions (C+)",
  //   "North-India": false,
  //   "South-India": false,
  //   "East-India": false,
  //   "West-India": true,
  //   "Arable Farming": true,
  //   "Mixed Farming": false,
  //   "<10 acres": true,
  //   "<10 acres": false,
  //   "Food": true,
  //   "Cash": true,
  //   "High-Tech Farming ": true,
  //   "precision": true,
  //   "Traditional Farming": false,
  //   ">5 lakhs": false,
  //   ">5 lakhs": true,
  //   "less than 50,000": false,
  //   "more than 50,000": true,
  //   "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  // }


]
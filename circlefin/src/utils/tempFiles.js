export const farmerProfiles = [
  {
    "id": 1,      
    "Tenure": 10,      
    "Amount-Required": 50000,
    "amountRecived" : 7000,      
    // --------------------------------------
    "name": "Ramesh Singh",
        "location": {
            "region": "Punjab, North",
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

    "North-India": true,
    "South-India": false,
    "East-India": false,
    "West-India": false,
    "Arable Farming": false,
    "Mixed Farming": true,
    'Horticulture' : true,
    "<10 acres": true,
    ">10 acres": false,
    "Food": true,
    "Cash": false,
    "High-Tech Farming ": false,
    "precision": true,
    "Traditionally Operated Farming": true,
    ">5 lakhs": false,
    ">5 lakhs": true,
    "less than 50,000": true,
    "more than 50,000": false,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
      
      "id": 2,
      "Tenure": 15,
      "Amount-Required": 120000,
      "amountRecived": 95000,
    // ----------------------------------------
    "name": "Anil Kumar",
    "location": {
        "region": "Bihar, East",
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
    
    "North-India": false,
    "South-India": false,
    "East-India": true,
    "West-India": false,
    "Arable Farming": true,
    "Mixed Farming": false,
    'Horticulture' : false,
    'Aquaculture' : true,
    "<10 acres": true,
    ">10 acres": false,
    "Food": true,
    "Cash": false,
    "High-Tech Farming ": false,
    "precision": true,
    "Traditionally Operated Farming": true,
    ">5 lakhs": true,
    "<5 lakhs": false,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
      "id": 3,
      "Tenure": 8,
      "Amount-Required": 120000,
      "amountRecived": 50000,
// --------------------------------------------
"name": "Kavita Yadav",
"location": {
    "region": "Maharashtra, West",
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
    "<10 acres": true,
    ">10 acres": false,
    "Food": true,
    "Cash": true,
    "High-Tech Farming ": true,
    "precision": true,
    "Traditionally Operated Farming": false,
    ">5 lakhs": false,
    "<5 lakhs": true,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
      "id": 4,
      "Tenure": 12,
      "Amount-Required": 50000,
      "amountRecived": 20000,
    // --------------------------------------
    "name": "Mahesh Patel",
    "location": {
        "region": "Haryana, North",
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
    
    "North-India": true,
    "South-India": false,
    "East-India": false,
    "West-India": false,
    "Arable Farming": true,
    "Mixed Farming": true,
    'Horticulture' : true,
    // 'Aquaculture' : true,
    "<10 acres": false,
    ">10 acres": true,
    "Food": false,
    "Cash": true,
    "High-Tech Farming ": true,
    "precision": true,
    "Traditionally Operated Farming": false,
    ">5 lakhs": true,
    ">5 lakhs": false,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  },
  {
  
"id": 5,
"Tenure": 9,
"Amount-Required": 500000,
"amountRecived": 6000,
// ---------------------------------------------
// "id": 6,
"name": "Radha Sharma",
"location": {
    "region": "Karnataka, South",
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
    "Traditionally Operated Methods": "Fully Adopted"
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
        "description": "Low; uses Traditionally methods",
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
    "South-India": true,
    "East-India": false,
    "West-India": false,
    "Arable Farming": true,
    "Mixed Farming": true,
    'Horticulture' : false,
    "<10 acres": false,
    ">10 acres": true,
    "Food": true,
    "Cash": true,
    "High-Tech Farming ": true,
    "precision": true,
    "Traditionally Operated Farming": false,
    ">5 lakhs": false,
    "<5 lakhs": true,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  }, 
  {
    "id": 6,
    "Tenure": 7,
    "Amount-Required": 250000,
    "amountRecived": 10000,
    "name": "Anita Sharma",
    "location": {
      "region": "Rajasthan, West India",
      "landParcelVerification": true,
      "farmSize": "12 acres"
    },
    "primaryCrops": ["Millets", "Legumes"],
    "farmingExperience": "9 years",
    "dataSets": {
      "bankingData": {
        "accountActivity": "Account activity and transaction history",
        "loanRepaymentRecords": "Loan repayment records"
      },
      "bureauData": {
        "creditScore": 715,
        "creditHistory": "Credit score and credit history",
        "debtsAndRepayment": "Outstanding debts and repayment behavior"
      },
      "utilityAndTelecomData": {
        "mobileUsage": "Mobile phone usage and payment patterns",
        "utilityPayments": "Timeliness and consistency of utility bill payments"
      }
    },
    "farmPractices": {
      "traditionalTechniques": "Adoption of traditional farming techniques"
    },
    "validations": {
      "landParcel": "Verified ownership and location of 12 acres in Rajasthan",
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
        "description": "Good; established relationships with local markets",
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
        "description": "High due to arid conditions",
        "rating": "C"
      }
    },
    "overallRating": "B",
    "recommendation": "Anita Sharma is eligible for a loan. Suggested investments in improved irrigation systems and climate-resilient crop varieties to enhance farm productivity.",
    
    "North-India": false,
    "South-India": false,
    "East-India": false,
    "West-India": true,
    "Arable Farming": true,
    "Mixed Farming": false,
    "Horticulture": true,
    "<10 acres": true,
    ">10 acres": false,
    "Food": true,
    "Cash": false,
    "High-Tech Farming": true,
    "precision": true,
    "Traditionally Operated Farming": false,
    ">5 lakhs": true,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  }
  ,
  {
    "id": 7,
    "Tenure": 10,
    "Amount-Required": 400000,
    "amountRecived": 10000,
    "name": "Rajesh Gupta",
    "location": {
      "region": "West Bengal, East India",
      "landParcelVerification": true,
      "farmSize": "15 acres"
    },
    "primaryCrops": [],
    "farmingExperience": "10 years",
    "dataSets": {
      "bankingData": {
        "accountActivity": "Account activity and transaction history",
        "loanRepaymentRecords": "Loan repayment records"
      },
      "bureauData": {
        "creditScore": 740,
        "creditHistory": "Credit score and credit history",
        "debtsAndRepayment": "Outstanding debts and repayment behavior"
      },
      "utilityAndTelecomData": {
        "mobileUsage": "Mobile phone usage and payment patterns",
        "utilityPayments": "Timeliness and consistency of utility bill payments"
      }
    },
    "farmPractices": {
      "droneTechnology": "Adoption of drone technology for livestock monitoring"
    },
    "validations": {
      "landParcel": "Verified ownership and location of 15 acres in West Bengal",
      "borrower": "Verified identity through Aadhar and PAN"
    },
    "stageOfFarming": "Pre-Harvesting",
    "livestockHealthReport": "Healthy",
    "technicalAssessment": {
      "feedQuality": "High",
      "waterSupply": "Adequate",
      "diseaseActivity": "Low"
    },
    "assessmentSummary": {
      "creditScore": {
        "value": 740,
        "rating": "A"
      },
      "marketAccess": {
        "description": "Excellent; established relationships with local meat and dairy buyers",
        "rating": "A"
      },
      "technologyUse": {
        "description": "High; uses drones for livestock monitoring",
        "rating": "A"
      },
      "sustainabilityPractices": {
        "description": "Strong; employs sustainable livestock farming practices",
        "rating": "A"
      },
      "financialHealth": {
        "description": "Strong with diversified income sources",
        "rating": "A"
      },
      "riskFactors": {
        "description": "Low disease risk due to good animal husbandry practices",
        "rating": "B"
      }
    },
    "overallRating": "A",
    "recommendation": "Rajesh Gupta is eligible for a loan. Suggested investments in advanced drone technology and improved feed quality for enhanced livestock productivity.",
    
    "North-India": false,
    "South-India": false,
    "East-India": false,
    "West-India": true,
    "Arable Farming": true,
    "Mixed Farming": true,
    "Horticulture": false,
    "<10 acres": true,
    ">10 acres": false,
    "Food": true,
    "Cash": false,
    "High-Tech Farming": false,
    "precision": true,
    "Traditionally Operated Farming": true,
    ">5 lakhs": true,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  }
  ,
  {
    "id": 8,
    "Tenure": 6,
    "Amount-Required": 200000,
    "amountRecived": 10000,
    "name": "Chitra Iyer",
    "location": {
      "region": "Gujarat, West India",
      "landParcelVerification": true,
      "farmSize": "2 acres"
    },
    "primaryCrops": ["Vegetables", "Fruits"],
    "farmingExperience": "6 years",
    "dataSets": {
      "bankingData": {
        "accountActivity": "Account activity and transaction history",
        "loanRepaymentRecords": "Loan repayment records"
      },
      "bureauData": {
        "creditScore": 705,
        "creditHistory": "Credit score and credit history",
        "debtsAndRepayment": "Outstanding debts and repayment behavior"
      },
      "utilityAndTelecomData": {
        "mobileUsage": "Mobile phone usage and payment patterns",
        "utilityPayments": "Timeliness and consistency of utility bill payments"
      }
    },
    "farmPractices": {
      "dripIrrigation": "Adoption of drip irrigation systems"
    },
    "validations": {
      "landParcel": "Verified ownership and location of 2 acres in Gujarat",
      "borrower": "Verified identity through Aadhar and PAN"
    },
    "stageOfFarming": "Tillering",
    "cropHealthReport": "Healthy",
    "technicalAssessment": {
      "soilMoistureLevels": "Optimal",
      "nutrientLevels": "Balanced",
      "pestDiseaseActivity": "Low"
    },
    "assessmentSummary": {
      "creditScore": {
        "value": 705,
        "rating": "A"
      },
      "marketAccess": {
        "description": "Good; established relationships with local markets",
        "rating": "B"
      },
      "technologyUse": {
        "description": "High; uses drip irrigation systems",
        "rating": "A"
      },
      "sustainabilityPractices": {
        "description": "Strong; employs sustainable irrigation practices",
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
    "recommendation": "Chitra Iyer is eligible for a loan. Suggested investments in advanced drip irrigation systems and drought-resistant crop varieties to enhance farm productivity.",
    
    "North-India": false,
    "South-India": false,
    "East-India": false,
    "West-India": true,
    "Arable Farming": true,
    "Mixed Farming": false,
    "Horticulture": false,
    "<10 acres": false,
    ">10 acres": true,
    "Food": true,
    "Cash": true,
    "High-Tech Farming": true,
    "precision": true,
    "Traditionally Operated Farming": false,
    ">5 lakhs": true,
    "less than 50,000": false,
    "more than 50,000": true,
    "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
  }
  ,
 {
  "id": 9,
  "Tenure": 14,
  "Amount-Required": 50000,
  "amountRecived": 10000,
  "name": "Dinesh Thakur",
  "location": {
    "region": "Uttar Pradesh, North India",
    "landParcelVerification": true,
    "farmSize": "13 acres"
  },
  "primaryCrops": ["Wheat", "Maize"],
  "farmingExperience": "14 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 720,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "traditionalTechniques": "Adoption of traditional farming techniques"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 13 acres in Uttar Pradesh",
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
      "value": 720,
      "rating": "A"
    },
    "marketAccess": {
      "description": "Good; established relationships with local grain markets",
      "rating": "B"
    },
    "technologyUse": {
      "description": "Low; uses traditional methods",
      "rating": "C"
    },
    "sustainabilityPractices": {
      "description": "Moderate; employs crop rotation practices",
      "rating": "B"
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
  "recommendation": "Dinesh Thakur is eligible for a loan. Suggested investments in improved irrigation systems and climate-resilient crop varieties to enhance farm productivity.",
  
  "North-India": true,
  "South-India": false,
  "East-India": false,
  "West-India": false,
  "Arable Farming": true,
  "Mixed Farming": true,
  "Horticulture": true,
  "<10 acres": true,
  ">10 acres": false,
  "Food": true,
  "Cash": true,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": true,
  "less than 50,000": true,
  "more than 50,000": false,
  "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
},
{
  id : 10,
  "Tenure": 11,
  "Amount-Required": 40000,
  "amountRecived": 19000,
  "name": "Farhan Ali",
  "location": {
    "region": "Kerala, South India",
    "landParcelVerification": true,
    "farmSize": "3 acres"
  },
  "primaryCrops": [],
  "livestockIncluded": true,
  "farmingExperience": "7 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 730,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "precisionFarming": "Adoption of precision farming techniques"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 3 acres in Kerala",
    "borrower": "Verified identity through Aadhar and PAN"
  },
  "stageOfFarming": "Pre-Harvesting",
  "livestockHealthReport": "Healthy",
  "technicalAssessment": {
    "feedQuality": "High",
    "waterSupply": "Adequate",
    "diseaseActivity": "Low"
  },
  "assessmentSummary": {
    "creditScore": {
      "value": 730,
      "rating": "A"
    },
    "marketAccess": {
      "description": "Excellent; established relationships with local meat and dairy markets",
      "rating": "A"
    },
    "technologyUse": {
      "description": "High; uses precision farming techniques",
      "rating": "A"
    },
    "sustainabilityPractices": {
      "description": "Strong; employs sustainable livestock farming practices",
      "rating": "A"
    },
    "financialHealth": {
      "description": "Strong with diversified income sources",
      "rating": "A"
    },
    "riskFactors": {
      "description": "Low disease risk due to good animal husbandry practices",
      "rating": "B"
    }
  },
  "overallRating": "A",
  "recommendation": "Farhan Ali is eligible for a loan. Suggested investments in advanced livestock monitoring equipment and improved feed quality for enhanced livestock productivity.",
  
  "North-India": false,
  "South-India": true,
  "East-India": false,
  "West-India": false,
  "Arable Farming": true,
  "Mixed Farming": false,
  "Horticulture": true,
  "<10 acres": true,
  ">10 acres": false,
  "Food": true,
  "Cash": true,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": true,
  "less than 50,000": false,
  "more than 50,000": true,
  "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
}
,
{
  "id": 11,
  "Tenure": 9,
  "Amount-Required": 500000,
  "amountRecived": 20000,
  "name": "Geeta Yadav",
  "location": {
    "region": "Odisha, East India",
    "landParcelVerification": true,
    "farmSize": "5 acres"
  },
  "primaryCrops": ["Cotton", "Oilseeds"],
  "farmingExperience": "11 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 720,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "droneTechnology": "Adoption of drone technology for crop monitoring"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 5 acres in Odisha",
    "borrower": "Verified identity through Aadhar and PAN"
  },
  "stageOfFarming": "Sowing",
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
      "description": "Good; established relationships with local textile and oilseed markets",
      "rating": "B"
    },
    "technologyUse": {
      "description": "High; uses drone technology for crop monitoring",
      "rating": "A"
    },
    "sustainabilityPractices": {
      "description": "Strong; employs sustainable farming practices",
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
  "recommendation": "Geeta Yadav is eligible for a loan. Suggested investments in advanced drone technology and drought-resistant crop varieties to enhance farm productivity.",
  
  "North-India": true,
  "South-India": false,
  "East-India": false,
  "West-India": false,
  "Arable Farming": true,
  "Mixed Farming": true,
  "Horticulture": false,
  "<10 acres": true,
  ">10 acres": false,
  "Food": true,
  "Cash": false,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": false,
  "less than 50,000": false,
  "more than 50,000": true,
  "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
}
,
{
  "id": 12,
  "Tenure": 14,
  "Amount-Required": 500000,
  "amountRecived": 200000,
  "name": "Ravi Verma",
  "location": {
    "region": "Rajasthan, West India",
    "landParcelVerification": true,
    "farmSize": "100 acres"
  },
  "primaryCrops": [],
  "livestockIncluded": true,
  "farmingExperience": "13 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 710,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "traditionalTechniques": "Adoption of traditional farming techniques"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 100 acres in Rajasthan",
    "borrower": "Verified identity through Aadhar and PAN"
  },
  "stageOfFarming": "Pre-Harvesting",
  "livestockHealthReport": "Healthy",
  "technicalAssessment": {
    "feedQuality": "High",
    "waterSupply": "Adequate",
    "diseaseActivity": "Low"
  },
  "assessmentSummary": {
    "creditScore": {
      "value": 710,
      "rating": "A"
    },
    "marketAccess": {
      "description": "Good; established relationships with local meat and dairy markets",
      "rating": "B"
    },
    "technologyUse": {
      "description": "Low; uses traditional methods",
      "rating": "C"
    },
    "sustainabilityPractices": {
      "description": "Moderate; traditional methods with some sustainable practices",
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
  "overallRating": "B",
  "recommendation": "Ravi Verma is eligible for a loan. Suggested investments in improved livestock feed and water supply systems to enhance productivity.",
  
  "North-India": false,
  "South-India": false,
  "East-India": false,
  "West-India": true,
  "Arable Farming": true,
  "Mixed Farming": false,
  "Horticulture": false,
  "<10 acres": true,
  ">10 acres": false,
  "Food": false,
  "Cash": true,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": true,
  "less than 50,000": false,
  "more than 50,000": true,
  "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
},

{
  "id": 13,
  "name": "Deepak Sharma",
  "Tenure": 6,
  "Amount-Required": 500000,
  "amountRecived": 20000,
  "location": {
    "region": "Himachal Pradesh, North India",
    "landParcelVerification": true,
    "farmSize": "2 acres"
  },
  "primaryCrops": ["Pulses", "Vegetables"],
  "farmingExperience": "7 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 715,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "IoTDevices": "Adoption of IoT devices for crop monitoring"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 2 acres in Himachal Pradesh",
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
      "description": "Good; established relationships with local vegetable markets",
      "rating": "B"
    },
    "technologyUse": {
      "description": "High; uses IoT devices for crop monitoring",
      "rating": "A"
    },
    "sustainabilityPractices": {
      "description": "Strong; employs sustainable farming practices",
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
  "recommendation": "Deepak Sharma is eligible for a loan. Suggested investments in advanced IoT devices and climate-resilient crop varieties to enhance farm productivity.",
  
  "North-India": false,
  "South-India": true,
  "East-India": false,
  "West-India": false,
  "Arable Farming": true,
  "Mixed Farming": true,
  "Horticulture": false,
  "<10 acres": true,
  ">10 acres": false,
  "Food": false,
  "Cash": true,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": false,
  "less than 50,000": false,
  "more than 50,000": true,
  "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
}
,
{
  "id": 14,
  "name": "Priya Menon",
  "Tenure": 18,
  "State": "Telangana",
  "Amount-Required": 100000,
  "amountRecived": 90000,
  "location": {
    "region": "Andhra Pradesh, South India",
    "landParcelVerification": true,
    "farmSize": "12 acres"
  },
  "primaryCrops": ["Jute", "Sugarcane"],
  "farmingExperience": "12 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 730,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "dripIrrigation": "Adoption of drip irrigation systems"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 12 acres in Andhra Pradesh",
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
      "description": "Excellent; established relationships with local textile and sugar mills",
      "rating": "A"
    },
    "technologyUse": {
      "description": "High; uses drip irrigation systems",
      "rating": "A"
    },
    "sustainabilityPractices": {
      "description": "Strong; employs sustainable irrigation practices",
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
  "recommendation": "Priya Menon is eligible for a loan. Suggested investments in advanced drip irrigation systems and market price hedging strategies to manage risks.",
  
  "North-India": false,
  "South-India": true,
  "East-India": false,
  "West-India": false,
  "Arable Farming": true,
  "Mixed Farming": false,
  "Horticulture": false,
  "<10 acres": true,
  ">10 acres": false,
  "Food": true,
  "Cash": true,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": true,
  "less than 50,000": false,
  "more than 50,000": true,
  "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
}
,
{
  "id": 15,
  "name": "Ajay Patel",
  "Tenure": 12,
  "State": "Maharashtra",
  "Amount-Required": 350000,
  "amountRecived": 210000,
  "location": {
    "region": "Assam, East India",
    "landParcelVerification": true,
    "farmSize": "5 acres"
  },
  "primaryCrops": [],
  "livestockIncluded": true,
  "farmingExperience": "9 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 710,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "traditionalTechniques": "Adoption of traditional farming techniques"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 5 acres in Assam",
    "borrower": "Verified identity through Aadhar and PAN"
  },
  "stageOfFarming": "Pre-Harvesting",
  "livestockHealthReport": "Healthy",
  "technicalAssessment": {
    "feedQuality": "High",
    "waterSupply": "Adequate",
    "diseaseActivity": "Low"
  },
  "assessmentSummary": {
    "creditScore": {
      "value": 710,
      "rating": "A"
    },
    "marketAccess": {
      "description": "Good; established relationships with local meat and dairy markets",
      "rating": "B"
    },
    "technologyUse": {
      "description": "Low; uses traditional methods",
      "rating": "C"
    },
    "sustainabilityPractices": {
      "description": "Moderate; traditional methods with some sustainable practices",
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
  "overallRating": "B",
  "recommendation": "Ajay Patel is eligible for a loan. Suggested investments in improved livestock feed and water supply systems to enhance productivity.",
  
  "North-India": false,
  "South-India": false,
  "East-India": false,
  "West-India": true,
  "Arable Farming": true,
  "Mixed Farming": true,
  "<10 acres": false,
  ">10 acres": true,
  "Food": false,
  "Cash": true,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": true,
  "less than 50,000": false,
  "more than 50,000": true,
  "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
}
,
{
  "id": 16,
  "name": "Savita Singh",
  "Tenure": 8,
  "State": "Uttarakhand",
  "Amount-Required": 400000,
  "amountRecived": 40000,
  "location": {
    "region": "Madhya Pradesh, Central India",
    "landParcelVerification": true,
    "farmSize": "3 acres"
  },
  "primaryCrops": ["Wheat", "Fruits"],
  "farmingExperience": "10 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 720,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "precisionFarming": "Adoption of precision farming techniques"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 3 acres in Madhya Pradesh",
    "borrower": "Verified identity through Aadhar and PAN"
  },
  "stageOfFarming": "Tillering",
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
      "description": "Good; established relationships with local markets",
      "rating": "B"
    },
    "technologyUse": {
      "description": "High; uses precision farming techniques",
      "rating": "A"
    },
    "sustainabilityPractices": {
      "description": "Strong; employs sustainable farming practices",
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
  "overallRating": "B+",
  "recommendation": "Savita Singh is eligible for a loan. Suggested investments in advanced precision farming equipment and climate-resilient crop varieties to enhance farm productivity.",
  "North-India": false,
  "South-India": false,
  "East-India": true,
  "West-India": false,
  "Arable Farming": true,
  "Mixed Farming": false,
  "<10 acres": true,
  ">10 acres": false,
  "Food": true,
  "Cash": false,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": true,
  "less than 50,000": false,
  "more than 50,000": true,
  "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)]
},
{
  "id": 17,
  "name": "Pankaj Verma",
  "Amount-Required": 50000,
  "amountRecived": 44000,
  "Tenure": 17,
   // "Amount-Required": 300000,
  "North-India": true,
  "South-India": false,
  "East-India": true,
  "West-India": false,
  "Arable Farming": true,
  "Mixed Farming": false,
  "<10 acres": false,
  ">10 acres": true,
  "Food": true,
  "Cash": false,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": true,
  "less than 50,000": true,
  "more than 50,000": false,
  "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)],
  "location": {
    "region": "Uttarakhand, North India",
    "landParcelVerification": true,
    "farmSize": "11 acres"
  },
  "primaryCrops": [],
  "livestockIncluded": true,
  "farmingExperience": "11 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 730,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "droneTechnology": "Adoption of drone technology for livestock monitoring"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 11 acres in Uttarakhand",
    "borrower": "Verified identity through Aadhar and PAN"
  },
  "stageOfFarming": "Pre-Harvesting",
  "livestockHealthReport": "Healthy",
  "technicalAssessment": {
    "feedQuality": "High",
    "waterSupply": "Adequate",
    "diseaseActivity": "Low"
  },
  "assessmentSummary": {
    "creditScore": {
      "value": 730,
      "rating": "A"
    },
    "marketAccess": {
      "description": "Excellent; established relationships with local meat and dairy markets",
      "rating": "A"
    },
    "technologyUse": {
      "description": "High; uses drone technology for livestock monitoring",
      "rating": "A"
    },
    "sustainabilityPractices": {
      "description": "Strong; employs sustainable livestock farming practices",
      "rating": "A"
    },
    "financialHealth": {
      "description": "Strong with diversified income sources",
      "rating": "A"
    },
    "riskFactors": {
      "description": "Low disease risk due to good animal husbandry practices",
      "rating": "B"
    }
  },
  "overallRating": "A",
  "recommendation": "Pankaj Verma is eligible for a loan. Suggested investments in advanced drone technology and improved feed quality for enhanced livestock productivity."
}
,
{
  "id": 18,
  "name": "Lata Mishra",
  "Tenure": 10,
  "State": "Himachal Pradesh",
  "Amount-Required": 450000,
  "amountRecived": 40000,
  "North-India": true,
  "South-India": false,
  "East-India": false,
  "West-India": false,
  "Arable Farming": true,
  "Mixed Farming": true,
  "<10 acres": false,
  ">10 acres": true,
  "Food": true,
  "Cash": true,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": true,
  "less than 50,000": true,
  "more than 50,000": false,
  "image": farmerImageArray[Math.floor(Math.random() * farmerImageArray.length)],
  "location": {
    "region": "Telangana, South India",
    "landParcelVerification": true,
    "farmSize": "2 acres"
  },
  "primaryCrops": ["Cotton", "Oilseeds"],
  "farmingExperience": "8 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 715,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "traditionalTechniques": "Adoption of traditional farming techniques"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 2 acres in Telangana",
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
      "description": "Good; established relationships with local markets",
      "rating": "B"
    },
    "technologyUse": {
      "description": "Low; uses traditional methods",
      "rating": "C"
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
      "description": "Moderate climate risk due to seasonal variability",
      "rating": "C"
    }
  },
  "overallRating": "B",
  "recommendation": "Lata Mishra is eligible for a loan. Suggested investments in improved irrigation systems and climate-resilient crop varieties to enhance farm productivity."
}
,
{
  "id": 19,
  "name": "Naveen Joshi",
  "Tenure": 10,
  "State": "Himachal Pradesh",
  "Amount-Required": 450000,
  "amountRecived": 40000,
  "North-India": false,
  "South-India": false,
  "East-India": true,
  "West-India": false,
  "Arable Farming": true,
  "Mixed Farming": true,
  "<10 acres": true,
  ">10 acres": false,
  "Food": true,
  "Cash": true,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": true,
  "less than 50,000": false,
  "more than 50,000": true,
  "location": {
    "region": "Jharkhand, East India",
    "landParcelVerification": true,
    "farmSize": "3 acres"
  },
  "primaryCrops": [],
  "livestockIncluded": true,
  "farmingExperience": "9 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 720,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "IoTDevices": "Adoption of IoT devices for livestock monitoring"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 3 acres in Jharkhand",
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
      "description": "High; uses IoT devices for livestock monitoring",
      "rating": "A"
    },
    "sustainabilityPractices": {
      "description": "Strong; employs sustainable livestock farming practices",
      "rating": "A"
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
  "overallRating": "A-",
  "recommendation": "Naveen Joshi is eligible for a loan. Suggested investments in advanced IoT devices and improved feed quality for enhanced livestock productivity."
}
,
{
  "id": 20,
  "name": "Kiran Rao",
  "Tenure": 10, 
  "Amount-Required": 450000,
  "amountRecived": 40000,
  "North-India": false,
  "South-India": false,
  "East-India": false,
  "West-India": true,
  "Arable Farming": true,
  "Mixed Farming": true,
  "<10 acres": true,
  ">10 acres": false,
  "Food": true,
  "Cash": true,
  "High-Tech Farming": true,
  "precision": true,
  "Traditionally Operated Farming": false,
  ">5 lakhs": true,
  "less than 50,000": true,
  "more than 50,000": true,

  "location": {
    "region": "Maharashtra, West India",
    "landParcelVerification": true,
    "farmSize": "12 acres"
  },
  "primaryCrops": ["Vegetables", "Pulses"],
  "farmingExperience": "15 years",
  "dataSets": {
    "bankingData": {
      "accountActivity": "Account activity and transaction history",
      "loanRepaymentRecords": "Loan repayment records"
    },
    "bureauData": {
      "creditScore": 730,
      "creditHistory": "Credit score and credit history",
      "debtsAndRepayment": "Outstanding debts and repayment behavior"
    },
    "utilityAndTelecomData": {
      "mobileUsage": "Mobile phone usage and payment patterns",
      "utilityPayments": "Timeliness and consistency of utility bill payments"
    }
  },
  "farmPractices": {
    "dripIrrigation": "Adoption of drip irrigation systems"
  },
  "validations": {
    "landParcel": "Verified ownership and location of 12 acres in Maharashtra",
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
      "description": "Excellent; established relationships with local markets",
      "rating": "A"
    },
    "technologyUse": {
      "description": "High; uses drip irrigation systems",
      "rating": "A"
    },
    "sustainabilityPractices": {
      "description": "Strong; employs sustainable irrigation practices",
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
  "recommendation": "Kiran Rao is eligible for a loan. Suggested investments in advanced drip irrigation systems and market price hedging strategies to manage risks."
}

   


]
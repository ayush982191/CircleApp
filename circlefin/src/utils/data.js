const farmerLoanTypes = [
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
  
const merchantLoanTypes = [
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
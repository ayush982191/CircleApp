import { useState } from 'react' 
import './App.css'
import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Aboutus from './pages/Aboutus'
import Invest from './pages/Invest'
import Loans from './pages/Loans'
// import Borrow from './components/Borrow'
import Borrow from './pages/Borrow'
import Footer from './components/Footer'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Statistics from './pages/Statistics'
import ContactUs from "./pages/ContactUs"
import SingleFarmerDetails from './components/SingleFarmerDetails'
import SingleMerchantDetails from './components/SingleMerchantDetails'
import InvestorApplicationForm from './Forms/InvestorApplicationForm'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import { MyContext } from './context/context'


function App() {
  const [investorRegistered,setInvestorRegistered] = useState(false);
  

  return (
   <>
   <MyContext.Provider value={{investorRegistered,setInvestorRegistered}}>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/signin/:type' element={<SignIn/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/invest' element={<Invest/>} />
    <Route path='/borrow' element={<Borrow/>} />
    <Route path='/aboutus' element={<Aboutus/>} />
    <Route path='/statistics' element={<Statistics/>} />
    <Route path='/contactus' element={<ContactUs/>}  />
    <Route path='/farmer/:id' element={<SingleFarmerDetails/>} />
    < Route path='/merchant/:id' element={<SingleMerchantDetails/>} />
     <Route path='/investorApplication' element={<InvestorApplicationForm/>} />
     < Route path='/dashboard' element={<Dashboard/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>

   </MyContext.Provider>

   </>
  )
}

export default App

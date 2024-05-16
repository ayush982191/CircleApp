import { useState } from 'react' 
import './App.css'
import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Aboutus from './pages/Aboutus'
import Invest from './pages/Invest'
import Loans from './pages/Loans'


function App() {
  

  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/invest' element={<Invest/>} />
    <Route path='/loan' element={<Loans/>} />
    <Route path='/aboutus' element={<Aboutus/>} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App

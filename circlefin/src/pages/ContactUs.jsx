import React from 'react'
import ContactUsForm from '../Forms/ContactUsForm'
import image from "../assets/contactusImage.jpg"


const ContactUs = () => {
  return (
    <div className='mt-36'>
<div>
 
</div>
<div className=' flex justify-evenly items-center'>
      <div>
        <img src={image} className='w-[40rem] bg-cover' alt="" />
      </div>
      <div className='p-4 border-2 border-lime-400 rounded-2xl'>
      <h1 className='text-5xl font-bold text-center'>Contact Us</h1>
      <ContactUsForm/>
      </div>
    </div>
    </div>
   
    
  )
}

export default ContactUs
import React from 'react'

const JoinUs = ({about,detail}) => {
  return (
    <>
      <div className='sm:w-52' >
        <h1 className='font-bold text-3xl' >{about}</h1>
        <p>{detail}</p>
        </div>  
    </>
  )
}

export default JoinUs
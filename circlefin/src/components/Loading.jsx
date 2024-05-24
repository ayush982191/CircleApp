import React from 'react'
import Logo from "../assets/images/loading.gif"
const Loading = () => {
  return (
    <div>
        <img src={Logo} width={100} alt="" />
        <p>Please Wait while we check your eligiblity</p>
    </div>
  )
}

export default Loading
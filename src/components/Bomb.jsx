import React from 'react'
import Bomdgif from "../assets/bomb.gif"

const Bomb = () => {
  return (
    <div className='bombgif-design wow animate__animated animate__fadeInLeft'>
        <img src={Bomdgif} alt="My GIF" />
    </div>
  )
}

export default Bomb
import React from 'react'
import hero from '../assets/img/about/about-us.jpg'
import Image from 'next/image'
const Hero = () => {
  return (
    <div style={{minHeight:'100vh',overflow:'hidden',display:'flex',justifyContent:'center',alignItems:'center',backgroundSize:'cover'}}>
        <Image src={hero} alt='pisa' layout='fill' />
    </div>
  )
}

export default Hero
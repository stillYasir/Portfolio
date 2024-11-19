import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/banner.png)] bg-left lg:bg-[20%]  bg-cover'
    style={{backgroundSize: "35%"}}>
     <Navbar />
     <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[80px] sm:text-[100px]  leading-tight flex justify-center items-center'>
        <div>
          <p ><strong>I AM.</strong></p>
          <p data-aos="fade-left"><em>YASIR</em></p>
          <p ><strong>KASHIF</strong></p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Hero
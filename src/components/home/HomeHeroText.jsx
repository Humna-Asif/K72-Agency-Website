import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-3  text-center'>
        {/* HomePage Hero Text */}
        <div className='text-[9.5vw] leading-[8vw] uppercase flex items-center justify-center'>The spark for</div>
        <div className='text-[9.5vw] leading-[8vw] uppercase flex items-start justify-center'>all<div className='h-[7vw] w-[16vw] '><Video /> </div>  things</div>
        <div className='text-[9.5vw] leading-[8vw] uppercase flex items-center justify-center'>creative</div>
    </div>
  )
}

export default HomeHeroText
import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4 font-bold'>
        {/* HomePage Bottom Buttons */}
      <div className='border-3 h-22 flex items-center px-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase'>
       <Link className='text-[5vw]' to='/projects'  >Projects</Link>
       </div>
       <div className='border-3 h-22 flex items-center px-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase'>
       <Link className='text-[5vw]' to='/agence' >Agence</Link>
       </div>
    </div>
  )
}

export default HomeBottomText
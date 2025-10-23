import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className='bg-black h-[60vh] w-full p-2 text-white flex flex-col justify-between'>

      {/*Footer top links*/}
      <div className='footer-top flex justify-between'>
        <div className='text-white border-2 h-16 pb-2 flex items-center px-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase'>
          <Link className='text-[5vw]' to='/agence' >contact</Link>
        </div>

        <div className='flex gap-2'>
          <div className='text-white border-2 pb-2 h-14 flex items-center px-4 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase'>
            <Link className='text-[5vw]' to='/agence' >fb</Link>
          </div>
          <div className='text-white border-2 pb-2 h-14 flex items-center px-4 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase'>
            <Link className='text-[5vw]' to='/agence' >ig</Link>
          </div>

          <div className='text-white border-2 pb-2 h-14 flex items-center px-4 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase'>
            <Link className='text-[5vw]' to='/agence' >in</Link>
          </div>

          <div className='text-white border-2 pb-2 h-14 flex items-center px-4 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full uppercase'>
            <Link className='text-[5vw]' to='/agence' >be</Link>
          </div>
        </div>

      </div>

     {/*Footer bottom links*/}

      <div className='footer-bottom flex justify-between uppercase'>
        <a className='cursor-pointer hover:text-[#D3FD50]' >monteral</a>
        <div className='flex gap-6'>
          <a className='cursor-pointer hover:text-[#D3FD50]'>Privacy Policy</a>
          <a className='cursor-pointer hover:text-[#D3FD50]'>Privacy Notice</a>
          <a className='cursor-pointer hover:text-[#D3FD50]'>Ethics Report</a>
          <a className='cursor-pointer hover:text-[#D3FD50]'>consent choices</a>
        </div>
        <a className='cursor-pointer hover:text-[#D3FD50]'>back to top</a>
      </div>
    </footer>
  )
}

export default Footer
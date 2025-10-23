import React from 'react'

const ScrollingText = () => {
  return (
    <div className="relative  h-screen flex flex-col justify-between overflow-hidden">

      {/* Top Moving Text */}

      <div className="text-div w-full h-1/2 relative text-[#D3FD50] flex overflow-hidden">
        <div className="scrolling-top flex items-center justify-between gap-[40vw]">

          <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8]">
            Joel letarte
          </h2>
          <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8]">
            Joel letarte
          </h2>

        </div>
      </div>



      {/* centre fix image */}

      <div className='image-div h-[95vh] absolute w-1/3 self-center rounded-3xl overflow-hidden'>
        <img className='h-full object-cover' src='/team/7.jpg'></img>
      </div>

      {/* Bottom Moving Text */}

      <div className="text-div w-full h-1/2 relative flex overflow-hidden">
        <div className="scrolling-bottom flex gap-[40vw] items-start">
          {/* Duplicate content for seamless looping */}
          <div className='flex gap-20 items-center whitespace-nowrap'>
            <h2 className=" font-[font2] text-[#D3FD50] text-[8vw] uppercase leading-[0.8] pt-3">
              Joel
            </h2>


            <h2 className="whitespace-nowrap font-[font2] text-[2vw] uppercase leading-[0.8] pt-3">
              Asociate Creative Director
            </h2>
          </div>
          <div className='flex gap-20 items-center whitespace-nowrap'>
            <h2 className="whitespace-nowrap font-[font2] text-[#D3FD50] text-[8vw] uppercase leading-[0.8] pt-3">
              Joel
            </h2>


            <h2 className="whitespace-nowrap font-[font2] text-[2vw] uppercase leading-[0.8] pt-3">
              Asociate Creative Director
            </h2>
          </div>
          <div className='flex gap-20 items-center whitespace-nowrap'>
            <h2 className="whitespace-nowrap font-[font2] text-[#D3FD50] text-[8vw] uppercase leading-[0.8] pt-3">
              Joel
            </h2>


            <h2 className="whitespace-nowrap font-[font2] text-[2vw] uppercase leading-[0.8] pt-3">
              Asociate Creative Director
            </h2>
          </div>



        </div>
      </div>


    </div>
  )
}

export default ScrollingText
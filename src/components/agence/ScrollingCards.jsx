// import React from 'react'

// const ScrollingCards = () => {
//   return (
//     <div className='h-screen w-full flex flex-col justify-between  items-center'>

//        {/*Heading*/}
//       <div>
//         <h1 className='font-[font1] text-2xl hover:text-[#D3FD50] cursor-pointer'>VIEW ALL PROJECTS</h1>
//       </div>

//         {/*3 Cards Container div*/}
//       <div className='w-full h-[80%]'>

//          {/* Project Card-1*/}
//         <div className='h-full w-full group relative  rounded-t-4xl overflow-hidden'>
//           <div className='h-full w-full   '><img className='h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105' src='pc-1.jpg'></img></div>
//           <div className='group-hover:opacity-100 transition-all cursor-pointer absolute opacity-0 top-0 left-0 flex items-center justify-center h-full w-full bg-black/12'>
//             <h2 className='uppercase font-[font1] text-5xl border-2 px-4 pt-1 text-white border-white rounded-full'>
//               see project
//             </h2>
//           </div>
//         </div>

//         {/* Project Card-2*/}
//         <div className='h-full w-full group relative  rounded-t-4xl overflow-hidden'>
//           <div className='h-full w-full  '><img className='h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105' src='pc-2.jpg'></img></div>
//           <div className='group-hover:opacity-100 transition-all cursor-pointer absolute opacity-0 top-0 left-0 flex items-center justify-center h-full w-full bg-black/12'>
//             <h2 className='uppercase font-[font1] text-5xl border-2 px-4 pt-1 text-white border-white rounded-full'>
//               see project
//             </h2>
//           </div>
//         </div>

//          {/* Project Card-3*/}
//         <div className='h-full w-full group relative rounded-t-4xl overflow-hidden'>
//           <div className='h-full w-full   '><img className='h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105 object-cover object-center' src='pc-3.jpg'></img></div>
//           <div className='group-hover:opacity-100 scale transition-all cursor-pointer absolute opacity-0 top-0 left-0 flex items-center justify-center h-full w-full bg-black/12'>
//             <h2 className='uppercase font-[font1] text-5xl border-2 px-4 pt-1 text-white border-white rounded-full'>
//               see project
//             </h2>
//           </div>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default ScrollingCards

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Footer from '../footer/Footer'


gsap.registerPlugin(ScrollTrigger)

const ScrollingCards = () => {
  const containerRef = useRef(null)
  useGSAP(() => {
    const cards = gsap.utils.toArray('.card')

    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: false,
        markers: false, // set to true for debugging
      })
    })
  }, { scope: containerRef })

  return (
    <div  className='w-full  relative'>
     
      {/* Cards */}
      <div ref={containerRef} className='w-full'>
        {/* Card 1 */}
        <div className='card h-[90vh] w-full relative group overflow-hidden '>
          <img className='h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105' src='pc-1.jpg' />
          <div className='group-hover:opacity-100 transition-all cursor-pointer absolute opacity-0 top-0 left-0 flex items-center justify-center h-full w-full bg-black/12'>
            <h2 className='uppercase font-[font1] text-5xl border-2 px-4 pt-1 text-white border-white rounded-full'>see project</h2>
          </div>
        </div>

        {/* Card 2 */}
        <div className='card h-[90vh] w-full relative group overflow-hidden '>
          <img className='h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105' src='pc-2.jpg' />
          <div className='group-hover:opacity-100 transition-all cursor-pointer absolute opacity-0 top-0 left-0 flex items-center justify-center h-full w-full bg-black/12'>
            <h2 className='uppercase font-[font1] text-5xl border-2 px-4 pt-1 text-white border-white rounded-full'>see project</h2>
          </div>
        </div>

        {/* Card 3 */}
        <div className='card h-[90vh] w-full relative group overflow-hidden '>
          <img className='h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105' src='pc-3.jpg' />
          <div className='group-hover:opacity-100 transition-all cursor-pointer absolute opacity-0 top-0 left-0 flex items-center justify-center h-full w-full bg-black/12'>
            <h2 className='uppercase font-[font1] text-5xl border-2 px-4 pt-1 text-white border-white rounded-full'>see project</h2>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default ScrollingCards
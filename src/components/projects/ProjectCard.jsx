import React from 'react'

const ProjectCard = (props) => {
  return (
    <>

      {/* Projects Cards Image1*/}
      <div className='card group w-1/2 transition-all relative h-full hover:rounded-4xl overflow-hidden'>
        <div className='image-wrapper h-[55vh] overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.image1} alt='' />
        </div>
         {/*Show on Hover*/}
        <div className='group-hover:opacity-100 transition-all absolute opacity-0 top-0 left-0 flex items-center justify-center h-full w-full bg-black/12'>
          <h2 className='uppercase font-[font1] text-5xl border-2 px-4 pt-1 text-white border-white rounded-full'>
            see project
          </h2>
        </div>
      </div>

       {/* Projects Cards Image2*/}
      <div className='card group w-1/2 transition-all relative  hover:rounded-4xl overflow-hidden'>
        <div className='image-wrapper h-[55vh] overflow-hidden'>
          <img className='object-cover h-full w-full' src={props.image2} alt='' />
        </div>
        {/* Show on Hover*/}
        <div className='group-hover:opacity-100 transition-all absolute opacity-0 top-0 left-0 flex items-center justify-center h-full w-full bg-black/12'>
          <h2 className='uppercase font-[font1] text-5xl border-2 px-4 pt-1 text-white border-white rounded-full'>
            see project
          </h2>
        </div>
      </div>
    </>
  )
}

export default ProjectCard

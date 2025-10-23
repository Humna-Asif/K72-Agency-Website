import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { useNavigate } from 'react-router-dom'



const FullScreenNav = () => {

  const navigate = useNavigate()
  const fullScreenRef = useRef(null)
  const fullNavLinksRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  const tlRef = useRef(null)

  {/* GSAP Animations */}
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true })

    tl.from('.stairing', {
      height: 0,
      stagger: { amount: -0.3 },
      duration: 0.4,
      ease: 'power2.out'
    })
      .from(fullNavLinksRef.current, {
        opacity: 0,
        duration: 0.2,
      })
      .from('.link', {
        rotateX: 90,
        opacity: 0,
        stagger: { amount: -0.3 },
        duration: 0.5,
      })

    tlRef.current = tl
  }, [])


  useEffect(() => {
    const tl = tlRef.current
    if (!tl) return

    if (navOpen) {
      document.body.style.overflow = 'hidden'
      fullScreenRef.current.style.display = 'block'
      tl.play()
    } else {
      document.body.style.overflow = 'auto'
      tl.reverse()
      tl.eventCallback('onReverseComplete', () => {
        if (fullScreenRef.current) fullScreenRef.current.style.display = 'none'
      })
    }
  }, [navOpen])


  //Function to handle link clicks

  const handleNavigation = (path) => {
    setNavOpen(false)
    navigate(path)
  }

  return (
    <div ref={fullScreenRef} id='fullScreenNav' className='fixed text-white h-screen w-full hidden z-[9999] '>
      

        {/*FUllScreenNav open with Stairs*/}
      <div className='absolute h-screen w-full flex'>
        {[...Array(5)].map((_, i) => (
          <div key={i} className='stairing h-full w-1/5 bg-black' />
        ))}
      </div>
          
            {/* NavBar + Links */}
      <div ref={fullNavLinksRef} className='relative'>
       
         {/* Nav Bar */}
        <div className='Nav flex justify-between w-full items-start'>
          {/* Logo */}
          <div className='p-2 cursor-pointer' onClick={() => handleNavigation('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="44" viewBox="0 0 103 44">
              <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </div>
         {/* Cross Icon */}
          <div onClick={() => {
            setNavOpen(false)
          }} className='text-5xl cursor-pointer px-1 hover:text-[#D3FD50]'>
            <i class="ri-close-large-line"></i>
          </div>

        </div>

        {/* Links On FullScreenNav */}
        <div id='all-links' className='pt-30'>
           
           {/* Projects */}
          <div className='link origin-top cursor-pointer relative border-t-1 border-white' onClick={() => handleNavigation('/projects')}>
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>projects</h1>
               
               {/* Hidden Green Div */}
            <div className='moveLink absolute text-black bg-[#D3FD50]  flex top-0'>

              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>See all see all</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99'></img>

                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>See all see all</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b'></img>
              </div>

              <div className='moveX flex   items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>See all see all</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99'></img>

                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>See all see all</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b'></img>
              </div>

            </div>

          </div>


             {/* Agence */}
          <div className='link origin-top cursor-pointer relative border-t-1 border-white' onClick={() => handleNavigation('/agence')}>
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>agency</h1>

               {/* Hidden Green Div */}
            <div className='moveLink absolute text-black bg-[#D3FD50]  flex top-0'>

              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>to know everything</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99'></img>

                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>to know everything</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b'></img>
              </div>

              <div className='moveX flex   items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>to know everything</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99'></img>

                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>to know everything</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b'></img>
              </div>

            </div>

          </div>
             
              
               {/* Contactt */}
          <div className='link origin-top cursor-pointer relative border-t-1 border-white'>
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>contact</h1>

              {/* Hidden Green Div */}
            <div className='moveLink absolute text-black bg-[#D3FD50]  flex top-0'>

              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>to send a faxl</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99'></img>

                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>to send a fax</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b'></img>
              </div>

              <div className='moveX flex   items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>to send a fax</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99'></img>

                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>to send a fax</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b'></img>
              </div>

            </div>

          </div>


              {/* Blog */}
          <div className='link origin-top cursor-pointer relative border-y-1 border-white'>
            <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>blog</h1>

              {/* Hidden Green Div */}
            <div className='moveLink absolute text-black bg-[#D3FD50]  flex top-0'>

              <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>read the articles</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99'></img>

                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>read the articlesl</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b'></img>
              </div>

              <div className='moveX flex   items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>read the articles</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99'></img>

                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-3'>read the articles</h2>
                <img className='h-16 w-44 rounded-full shrink-0 object-cover' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b'></img>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default FullScreenNav
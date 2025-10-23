import React, { useContext, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const StairsNav = () => {
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  const navigate = useNavigate()

  // Refs
  const projectsRef = useRef(null)
  const agencyRef = useRef(null)
  const menuRef = useRef(null)
  const iconRef = useRef(null)

  const projectsBg = useRef(null)
  const agencyBg = useRef(null)
  const menuBg = useRef(null)

  const projectsText = useRef(null)
  const agencyText = useRef(null)
  const menuText = useRef(null)

  // Hover animation logic
  const handleMouseEnter = (bgRef, textRef, icon = false) => {
    bgRef.current.style.height = '100%'
    textRef.current.style.color = 'black'
    if (icon && iconRef.current) {
      iconRef.current.querySelectorAll('span').forEach((line) => {
        line.style.backgroundColor = 'black'
      })
    }
  }

  const handleMouseLeave = (bgRef, textRef, icon = false) => {
    bgRef.current.style.height = '0%'
    textRef.current.style.color = 'white'
    if (icon && iconRef.current) {
      iconRef.current.querySelectorAll('span').forEach((line) => {
        line.style.backgroundColor = 'white'
      })
    }
  }

  //  GSAP Scroll Animation
  useEffect(() => {
    const tlHide = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top -20% ',
        end: ' bottom 50% ',
        scrub: 1,
        onUpdate: (self) => {

          // Detect scroll direction
          if (self.direction === 1) {
            // Scrolling down → hide stairs
            gsap.to([projectsRef.current, agencyRef.current, menuText.current], {
              y: -150,
              opacity: 0,
              stagger: -0.2,
              ease: 'power2.out',
              duration: 0.8,
            })
            gsap.to(menuRef.current, {
              height: '40px', // smaller menu height
              duration: 0.6,
              ease: 'power2.out',
            })
          } else {
            // Scrolling up → show stairs 
            gsap.to([projectsRef.current, agencyRef.current, menuText.current], {
              y: 0,
              opacity: 1,
              stagger: -0.2,
              ease: 'power2.out',
              duration: 1,
            })
            gsap.to(menuRef.current, {
              height: '88px', // back to original height
              duration: 0.8,
              ease: 'power2.out',
            })
          }
        },
      },
    })
    return () => tlHide.kill()
  }, [])

  return (
    <div className='z-50 w-full top-0 fixed flex items-start justify-between'>

      {/* Logo */}
      <div
        className='p-2 cursor-pointer'
        onClick={() => navigate('/')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="44" viewBox="0 0 103 44">
          <path
            fill='black'
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </div>

      {/* Right stairs */}
      <div className='flex'>

        {/* Projects */}
        <div
          ref={projectsRef}
          onMouseEnter={() => handleMouseEnter(projectsBg, projectsText)}
          onMouseLeave={() => handleMouseLeave(projectsBg, projectsText)}
          onClick={() => navigate('/projects')}
          className='relative bg-black h-10 w-46 py-2'
        >
          <div ref={projectsBg} className='bg-[#D3FD50] transition-all duration-300 h-0 w-full absolute top-0'></div>
          <div className='relative h-full flex text-white items-end justify-start px-4 cursor-pointer'>
            <h1 ref={projectsText}>Projects</h1>
          </div>
        </div>

        {/* Agency */}
        <div
          ref={agencyRef}
          onMouseEnter={() => handleMouseEnter(agencyBg, agencyText)}
          onMouseLeave={() => handleMouseLeave(agencyBg, agencyText)}
          onClick={() => navigate('/agence')}
          className='relative bg-black h-16 w-54 py-2'
        >
          <div ref={agencyBg} className='bg-[#D3FD50] transition-all duration-300 h-0 w-full absolute top-0'></div>
          <div className='relative h-full flex items-end justify-start px-4 cursor-pointer text-white'>
            <h1 ref={agencyText}>Agency</h1>
          </div>
        </div>

        {/* Menu */}
        <div
          ref={menuRef}
          onMouseEnter={() => handleMouseEnter(menuBg, menuText, true)}
          onMouseLeave={() => handleMouseLeave(menuBg, menuText, true)}
          onClick={() => setNavOpen(true)}
          className='relative bg-black h-22 w-54 py-2'
        >
          <div ref={menuBg} className='bg-[#D3FD50] transition-all duration-300 h-0 w-full absolute top-0'></div>
          <div className='relative h-full flex flex-col items-end justify-between px-4 cursor-pointer text-white'>
           {/* Menu Icon */}
            <div ref={iconRef} className='flex flex-col gap-1.5 items-end cursor-pointer'>
              <span className='block w-8 h-[1px] bg-white'></span>
              <span className='block w-14 h-[1px] bg-white'></span>
            </div>
            {/* hide "Menu" text, only show icon */}
            <h1 ref={menuText} className='self-start'>Menu</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StairsNav

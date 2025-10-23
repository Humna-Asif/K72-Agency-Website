import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import Footer from '../components/footer/Footer'
import ScrollingText from '../components/agence/ScrollingText'
import ScrollingCards from '../components/agence/ScrollingCards'


const Agence = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  // Image Array (14 images)

  const imageArray = [
    '/team/1.jpg',
    '/team/2.jpg',
    '/team/3.jpg',
    '/team/4.jpg',
    '/team/5.jpg',
    '/team/6.jpg',
    '/team/7.jpg',
    '/team/8.jpg',
    '/team/9.jpg',
    '/team/10.jpg',
    '/team/11.jpg',
    '/team/12.jpg',
    '/team/13.jpg',
    '/team/14.jpg',
  ]

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 28%',
        end: 'bottom -70%',
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress
          const index = Math.floor(progress * (imageArray.length - 1))
          imageRef.current.src = imageArray[index]
        }
      }
    })

    // color change for section-3//

    gsap.to('.background', {
      backgroundColor: 'black',
      color: '#fff',
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-2',
        start: 'top top',
        end: 'top 10%',
        scrub: true,
      },
    })


  })



  return (
    <div className='background h-auto'>

      {/* Section-1  changing image div  */}

      <div className='section-1'>

        {/* changing image div  */}
        <div ref={imageDivRef} className='absolute h-[20vw] w-[15vw] rounded-2xl overflow-hidden top-40 left-[30vw]'>
          <img
            ref={imageRef}
            className='h-full w-full object-cover'
            src={imageArray[0]}
            alt='team member'
          />
        </div>

        {/* Heading and Paragraph */}
        <div className='relative font-[font2] text-black'>

          <div className='pt-[55vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>
              SEVEN7Y<br />TWO
            </h1>
          </div>

          <div className='pl-[40%] mt-4'>
            <p className='text-3xl w-2xl' >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
            </p>
          </div>

        </div>

      </div>

      {/* Section-2 ul and paragraphs   */}
      <div className='section-2 h-screen mt-50 pt-50 '>
        <div className='  font-[font2] flex justify-between w-1/2 text-2xl pl-35 '>
          <h2>Expertise</h2>
          <ul className='text-[17px]'>
            <li>Strategy</li>
            <li>Advertising</li>
            <li>Branding</li>
            <li>Design</li>
            <li>Content</li>

          </ul>
        </div>
        <div className=' my-4 font-[font2] text-[17px] py-32 px-35 flex justify-between'>
          <p className=' w-72' >
            Our projets_ are born in humility, grow in curiosity and live thanks to creativity in all its forms.
          </p>

          <p className=' w-64' >
            Our création_ is bubbling in an environment where talent has the taste to explode. Where you feel free to be the best version of yourself.            </p>

          <p className=' w-64' >
            Our culture_ is openness to others. Point. The whole crew participates in building an agency of which we are proud.            </p>
        </div>
      </div>

     {/* Section-3 Image and Scrolling Text  */}
      <div className='section-3 h-screen'> <ScrollingText /></div>

       {/* Section-4 Projects changing Cards   */}
      <div className='section-4 '>  <ScrollingCards /></div>
      
      <div className='h-[30vh] z-[999] relative'>  <Footer /></div>





    </div>
  )
}

export default Agence

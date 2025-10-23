import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/footer/Footer'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  //Image Array//
  const Projects = [
    {
      image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
      image2: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
      image2: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
      image2: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124',
      image2: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14',
      image2: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
    },
  ]


  //GSAP Animations//
  useGSAP(() => {
    gsap.utils.toArray('.card').forEach((card) => {
      gsap.fromTo(
        card,
        { height: '15vh', scaleY: 0.1, transformOrigin: 'center center' },
        {
          height: '55vh',
          scaleY: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 20%',
            scrub: true,
          },
        }
      )
    })
  }, [])


  return (
    <div >

      {/* Projects Heading */}

      <div className='pt-[46vh]'>
        <h2 className='font-[font2] text-[11vw] uppercase'>Projects</h2>
      </div>

      {/* Projects Cards */}
      <div className='-mt-14 card-container p-2'>

        {Projects.map((elem, idx) => (

          <div key={idx} className='w-full h-[370px] gap-2 flex mb-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
          
        ))}

      </div>

      <Footer />


    </div>
  )
}

export default Projects

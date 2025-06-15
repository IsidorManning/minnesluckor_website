import React from 'react'
import CTAButton from '../CTAButton'
import Image from 'next/image'

const SecondaryLandingPage = () => {
  const images = [
    {
      src: '/1.png',
      alt: '',
    },
    {
      src: '/2.png',
      alt: '',
    },
    {
      src: '/3.png',
      alt: '',
    },
    {
      src: '/4.png',
      alt: '',
    },
    {
      src: '/5.png',
      alt: '',
    }
  ]

  return (
    <section className="relative w-full h-screen bg-[#004279] flex flex-col items-center justify-center p-5">
      <div className="mb-10 flex flex-col items-center justify-between h-full text-center">
        <h1 className='font text-[48px] md:text-[64px] lg:text-[100px] text-white font-bold text-center leading-tighter'>
          40 ÅR AV GALENSKAP
        </h1>
        <CTAButton 
          className="bg-[#ffd800] text-black hover:text-[#004279]"
        />
        <div className='flex flex-row items-center justify-center mt-6'>
          {
            images.map((image, index) => {
              const rotation = index % 2 === 0 ? 'hover:rotate-[3deg]' : 'hover:rotate-[-3deg]';
              
              return (
                <Image
                  key={index}
                  src={image.src}
                  alt={"bild" + index + 1}
                  width={384}
                  height={1080}
                  className={`
                    shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]
                    rounded-xl w-[60px] sm:w-[110px] md:w-[160px] lg:w-[220px] ${index === 0 ? 'ml-0' : 'ml-4 sm:ml-15'} transition-transform duration-300 ${rotation}`}

                />
            )
            })
          }
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#000000] opacity-[0.4] to-transparent pointer-events-none z-10"></div>

    </section>
  )
}

export default SecondaryLandingPage


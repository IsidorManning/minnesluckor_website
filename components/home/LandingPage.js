import React from 'react';
import CTAButton from '../CTAButton';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <section className="relative w-full h-screen bg-[#ffd800] overflow-hidden items-center justify-center flex flex-col">
      {/* Rippe: Left side */}
      <div className="absolute z-[2] left-0 bottom-0 w-[40vw] sm:w-[35vw] md:w-[30vw] lg:w-[700px] lg:h-screen">
        <Image
          src="/Rippe-01helrev24.png"
          alt="Rippe profilbild"
          width={1913}
          height={3000}
          className="object-contain"
          priority
        />
      </div>

      {/* Fritzell: Right side */}
      <div className="absolute z-[1] right-0 bottom-0 w-[40vw] sm:w-[35vw] md:w-[30vw] lg:w-[700px] lg:h-screen">
        <Image
          src="/Fritzell-01helrev3.png"
          alt="Fritzell profilbild"
          width={1913}
          height={3000}
          className="object-contain"
          priority
        />
      </div>

      <div className='flex flex-col items-center justify-center h-[92vh] text-center'>
        <Image
          src="/ShowLoggaliggande.png"
          width={5228}
          height={1076}
          alt='Minneluckor'
          className='w-[75vw] sm:w-[60vw] md:w-[55vw] pt-15 custom-bounce'
        />
        <div className='flex flex-col items-center justify-center w-full'>
          <p className='z-[50] mb-8 font tracking-wide text-[19px] text-[#004279] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto'>
            40 år av galenskap i en helt ny föreställning med Jan Rippe och Per Fritzell som blickar tillbaka på fyra decennier av ikonisk humor – men med ny musik och oväntade vändningar.
          </p>
          <CTAButton 
            className="bg-[#004279] text-white hover:text-[#ffd800]"
          />

        </div>


        <Image 
          src="/paturne_logga_bla.png"
          width={804}
          height={758}
          alt='På turné'
          className='w-[140px] mt-10 pt-5'
        />
      </div>
    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#000000] opacity-[0.4] to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default LandingPage;

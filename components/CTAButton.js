import React from 'react'

const CTAButton = ({className}) => {
  return (
    <div>
      <a
        href="https://evenemangsbiljetter.se/krogshow/minnesluckor-40-ar-av-galenskap"
        className={`font font-bold py-5 px-[100px] hover rounded-full  duration-200 text-[20px] text-center hover:shadow-lg hover:shadow-black/20`
          + (className ? ` ${className}` : '')
        }
      >
        Köp Biljetter
      </a>
    </div>
  )
}

export default CTAButton
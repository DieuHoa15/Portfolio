import React from 'react'
import prof from '../assets/images/profile.png'

const About = ({
  title = "An Vu"
}) => {
  return (
    <div className="flex flex-row flex-wrap-reverse items-center justify-center gap-8 md:gap-12 px-10">
      <div className="text-center space-y-3 text-stone-50 drop-shadow-md">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{title}</h1>              
        <p className="text-l sm:text-xl lg:text-2xl max-w-lg bottom-1">
          Computer science student with a passion for cybersecurity, computer
          networking, and data. Welcome to my personal portfolio!
        </p>
      </div>
      <img
        className="rounded-full h-60 sm:h-72 lg:h-auto lg:w-1/3 drop-shadow-md"
        src={prof}
        alt="My Profile Picture"
      />
    </div>
  )
}

export default About
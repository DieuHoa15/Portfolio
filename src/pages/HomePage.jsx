import React from 'react'
import About from '../components/About'
import Next from '../components/Next'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <section className="bg-cover bg-center bg-home-bg">
      <div className="h-screen backdrop-blur-sm flex items-center justify-center">  
        <div className="animate-fade flex flex-col items-center">
          <div className="animate-slide">
            <About/>
          </div>
          <Link
            to="/projects" 
            className="absolute bottom-0 hover:scale-125 transition ease-in-out duration-300">
            <Next/>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomePage
import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

const ProjectPage = () => {
  return (
    <div className="bg-stone-200 min-h-screen">
      <Navbar/>
      <main className="animate-fade">
        <Projects/>
      </main>
    </div>
  )
}

export default ProjectPage
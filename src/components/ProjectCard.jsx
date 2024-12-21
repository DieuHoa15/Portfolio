import React from 'react'
import defaultPhoto from '../assets/images/personal_website_cover.png'

const ProjectCard = ({
    image = defaultPhoto,
    title, description,
    techStack = []
  }) => {
  return (
    <div className='rounded-md bg-stone-300 p-3'>
      {/* <img
        src={image}
        alt="Cover Photo of Project"
      /> */}
      <div className='text-stone-800'>
        <h2 className='font-semibold text-lg mt-3 mb-2'>{title}</h2>
        <p>{description}</p>
        <h3 className='font-medium mt-2 text-orange-600'>{techStack.join(", ")}</h3>
      </div>
    </div>
  )
}

export default ProjectCard
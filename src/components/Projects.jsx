import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='mx-5 md:mx-7 my-3 md:my-0 flex flex-col items-center'>
      <h1 className='font-bold text-3xl md:text-4xl text-rose-600'>
        My Projects
      </h1>
      <main className='mt-6 mb-10 grid grid-cols-1 gap-5 max-w-lg animate-slide'>
        <ProjectCard
          title="Automated Crash Diagram (In Progress)"
          techStack={["Tkinter"]}
          description="Research project completed in Georgia Tech's Vertically Integrated
            Project (VIP) program as part of Smart City Infrastructure team. Develop application
            to automate roadway intersection diagraming process for Georgia Department of
            Transportation (GDOT). Generated diagram visualizes crash history of chosen intersection,
            summarizing crash locations, frequencies, and severities."
        />
        <ProjectCard
          title="YouTube Virality Predictor"
          techStack={["PyTorch", "scikit-learn"]}
          description="Group project completed for Georgia Tech Machine Learning course.
            Preprocessed text of YouTube video tags using Bag-of-Words vectorization then
            reduced dataset dimensionality using principal component analysis. Trained sparse-tensor
            neural network, support vector machine, and random forest to classify YouTube videos
            into view count ranges based on video tags."
        />
        <ProjectCard
          title="(This) Personal Website"
          techStack={["React", "TailwindCSS"]}
          description="My first major personal project. Wrote front end website
            as a place to host and showcase my personal development projects."
        />
        <ProjectCard
          title="Dungeon Crawler Game"
          techStack={["Java", "Android Studio"]}
          description="Group project completed for Georgia Tech Objects & Design course.
            Player advances through three dungeon maps of increasing difficulty by defeating
            enemies and acquiring power-ups and keys to gates. Implemented key game features
            like player-enemy interactions and leaderboard."
        />
      </main>
    </div>
  )
}

export default Projects
import React from 'react'
import './Projects.css'

const Projects = () => {

    const projects = [
        {
            projectName : "Not A TODO",
            link : "https://github.com/RochakSiwach/Not-a-Todo-"
        }, 
        {
           
        },
        {

        }
    ]

  return (

    
<div className="projects">

    <div>

        <h5 className='project-heading'>Projects</h5>
    </div>

  <div className="projects-grid">
    {projects.map((value, idx) => (
      <div key={idx} className="projects-data">
        <a
          href={value.link}
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          {value.projectName}
        </a>
      </div>
    ))}
  </div>
</div>

  )
}

export default Projects
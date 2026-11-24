// import React from "react";
// import "./Projects.css";

// const Projects = () => {
//   const projects = [
//     {
//       projectName: "Not A TODO",
//       link: "https://github.com/RochakSiwach/Not-a-Todo-",
//     },
//     {
//       projectName: "Not A TODO",
//       link: "https://github.com/RochakSiwach/Not-a-Todo-",
//     },
//     {
//       projectName: "Not A TODO",
//       link: "https://github.com/RochakSiwach/Not-a-Todo-",
//     },
//     {
//       projectName: "Not A TODO",
//       link: "https://github.com/RochakSiwach/Not-a-Todo-",
//     },
//     {
//       projectName: "Not A TODO",
//       link: "https://github.com/RochakSiwach/Not-a-Todo-",
//     },
//   ];

//   return (
//     <div className="projects">

//       <div className="heading">
//         <h5 className="project-heading">Projects</h5>
//       </div>

//       <div className="projects-grid">
//         {projects.map((value, idx) => (
//           <div key={idx} className="projects-data">
//             <a
//               href={value.link}
//               className="project-link"
//               target="_blank"
//               rel="noreferrer"
//             >
//               {value.projectName}
//             </a>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      projectName: "Not A TODO",
      link: "https://github.com/RochakSiwach/Not-a-Todo-",
      image: "/projects/project1.png",
    },

    {
      projectName: "CodeSphere",
      link: "#",
      image: "/projects/project2.png",
    },

    {
      projectName: "Project Three",
      link: "#",
      image: "/projects/project3.jpg",
    },

    {
      projectName: "Project Four",
      link: "#",
      image: "/projects/project4.jpg",
    },
    {
      projectName: "Project Five",
      link: "#",
      image: "/projects/project5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="projects">
      <div className="heading">
        <h5 className="project-heading">Projects</h5>
      </div>

      <div className="projects-grid">
        <div className="projects-stack">
          {projects.map((project, idx) => {
            // Current project ke according card ki position calculate karna
            const position =
              (idx - currentIndex + projects.length) % projects.length;

            return (
              <div
                key={idx}
                className="projects-data"
                // CSS ko card ki current position provide karna
                style={{
                  "--position": position,
                }}
              >
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={position === 0 ? 0 : -1}
                >
                  <img src={project.image} alt={project.projectName} />

                  <span>{project.projectName}</span>
                </a>
              </div>
            );
          })}
        </div>

        <div className="project-controls">
          <button onClick={previousProject}>←</button>

          <span>
            {currentIndex + 1} / {projects.length}
          </span>

          <button onClick={nextProject}>→</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

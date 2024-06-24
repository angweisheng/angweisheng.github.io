import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-20 flex flex-wrap text-center lg:text-left md:justify-center">
            <div className="w-full lg:w-1/4 flex justify-center">
            <img
              src={project.image}
              width={220}
              height={150}
              alt={project.title}
              className="pb-4"
            />
            </div>
            <div className="pl-2 w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="flex flex-wrap mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((technology, index) => (
                    <span
                        key={index}
                        className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-900"
                    >
                        {technology}
                    </span>
                    
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;



import Link from 'next/link';
import React from 'react';



const ProjectItem: React.FC<ProjectProps> = ({ project }) => {

    return (

        <Link href={`/projects/${project.id}`}>
            <>
                <div className="bg-slate-800 p-4 rounded-lg shadow-lg hover:bg-slate-700 transition-transform transform hover:scale-105">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-contain rounded-md mb-4 cursor-pointer"

                    />
                    <h3 className="text-xl font-semibold text-green-400">{project.title}</h3>
                    <p className="text-gray-300 text-sm my-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="text-xs bg-green-700 px-2 py-1 rounded-md text-white">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </>
        </Link>



    );
};

export default ProjectItem

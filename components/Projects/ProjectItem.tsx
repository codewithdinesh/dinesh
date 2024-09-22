import Link from 'next/link';
import React from 'react';

interface ProjectItemProps {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, technologies, link, image }) => {
    return (

        <Link href={link}>
            <div className="bg-slate-800 p-4 rounded-lg shadow-lg hover:bg-slate-700 transition-transform transform hover:scale-105">
                <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-green-400">{title}</h3>
                <p className="text-gray-300 text-sm my-2">{description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                    {technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-green-700 px-2 py-1 rounded-md text-white">
                            {tech}
                        </span>
                    ))}
                </div>
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-green-500 underline hover:text-green-300"
                >
                    View Project
                </Link>
            </div>
        </Link>
    );
};

export default ProjectItem;

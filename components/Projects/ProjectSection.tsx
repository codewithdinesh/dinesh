import React from 'react';
import ProjectItem from './ProjectItem';
import Link from 'next/link';
import { projectsData } from '@/config/projects';
import { AiOutlineArrowRight } from 'react-icons/ai'

const ProjectSection: React.FC = () => {
    const limitedProjects = projectsData.slice(0, 6);

    return (
        <section className="flex-1 py-12" id='projects'>
            <h2 className="text-3xl font-semibold  mb-6 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {limitedProjects.map((project, index) => (
                    <ProjectItem project={project} key={index} />
                ))}
            </div>

            {/* More Projects */}
            <div className="mt-8 text-center">
                <Link href="/projects">
                    <div className="flex items-center justify-center  border border-green-500 rounded-full py-2 px-4 transition-transform transform hover:scale-105 cursor-pointer">
                        <p className="text-green-500 font-semibold mr-2 transition-colors duration-300 hover:text-green-300">
                            View More Projects
                        </p>
                        <AiOutlineArrowRight className="text-green-500 animate-blink transition-transform duration-300 transform hover:translate-x-1" size={20} />
                        <span className="animate-blink text-white">_</span>
                    </div>
                </Link>
            </div>

        </section>
    );
};

export default ProjectSection;

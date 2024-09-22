import React from 'react';
import ProjectItem from './ProjectItem';
import Link from 'next/link';
import { projectsData } from '@/config/projects';

const ProjectSection: React.FC = () => {
    const limitedProjects = projectsData.slice(0, 6);

    return (
        <section className="flex-1 py-12">
            <h2 className="text-3xl font-semibold text-green-400 mb-6 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {limitedProjects.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link href="/projects">
                    <p className="text-green-500 underline hover:text-green-300">View More Projects</p>
                </Link>
            </div>
        </section>
    );
};

export default ProjectSection;

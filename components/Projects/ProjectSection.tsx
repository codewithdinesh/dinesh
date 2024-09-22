import React from 'react';
import ProjectItem from './ProjectItem';
import Link from 'next/link';

const ProjectSection: React.FC = () => {
    const projects = [
        {
            title: 'Healthcare App',
            description: 'Appointment management, telemedicine, health education, and data security.',
            technologies: ['Flutter', 'Node.js', 'Firebase'],
            link: '/projects/health_app',
            image: '/images/projects/health_care.png',
        },
        {
            title: 'LegalSathi',
            description: 'AI-driven chatbot platform with legal document understanding.',
            technologies: ['Next.js', 'Tailwind', 'AI'],
            link: '/projects/legalsathi',
            image: '/images/projects/legalsathi.png',
        },
        {
            title: 'SpaceVentures',
            description: 'Platform for space tourism designed during a hackathon.',
            technologies: ['Next.js', 'Three.js', 'Tailwind'],
            link: '/projects/spaceventures',
            image: '/images/projects/space_venture.gif',
        },
    ];

    return (
        <section className="flex-1py-12">
            <h2 className="text-3xl font-semibold text-green-400 mb-6 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
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

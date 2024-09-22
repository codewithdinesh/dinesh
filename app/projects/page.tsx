import { projectsData } from '@/config/projects';
import Link from 'next/link';

const ProjectsPage = () => {
    return (
        <div className="container mx-auto py-8 px-4 md:px-12">
            <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gradient-to-tl from-slate-500 to-slate-700 glassmorphic-bg rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-t-lg w-full h-48 object-cover"
                        />

                        {/* Project Info */}
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{project.description.slice(0, 100)}...</p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 3).map((tech, index) => (
                                    <span
                                        key={index}
                                        className="inline-block bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* View More Button */}
                            <Link href={`/projects/${project.id}`}>
                                <p className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition">
                                    View Project
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;

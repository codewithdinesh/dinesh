
import { projectsData } from '@/config/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';



const ProjectPage = ({ params: { id } }: ProjectPageProps) => {

    // Find the project by its id
    const project = projectsData.find((project) => project.id === id);

    // If project not found, return 404
    if (!project) {
        return notFound();
    }

    return (
        <div className="container mx-auto py-8 px-4 md:px-12 ">


            {/* Project Details */}

            <h1 className="text-3xl  md:text-4xl font-bold text-white mb-4">
                {project.title}

            </h1>




            <div className="flex justify-center items-center ">

                {/* Project Image */}
                <div className="rounded-lg  overflow-hidden flex-1 justify-center">
                    <img
                        src={project.image}
                        alt={project.title}
                        className=" h-full min-w-full object-contain rounded-md "
                    />

                </div>

                {/* Project Details */}
                <div className=" w-2/6  mx-3 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {project.title}
                    </h1>
                    <p className="text-lg text-gray-300 mb-6">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <h3 className="text-xl text-indigo-400 font-semibold mb-2">
                        Technologies Used:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 mb-6">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>

                    {/* Category */}
                    <div className="mb-6">
                        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {project.category.toUpperCase()}
                        </span>
                    </div>

                    {/* Links */}
                    <div className="space-x-4">
                        {project.github_link && (
                            <Link
                                href={project.github_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                            >
                                GitHub
                            </Link>
                        )}
                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
                            >
                                Live Demo
                            </Link>
                        )}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ProjectPage;

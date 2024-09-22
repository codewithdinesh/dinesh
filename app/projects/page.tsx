import ProjectItem from '@/components/Projects/ProjectItem';
import { projectsData } from '@/config/projects';
import Link from 'next/link';

const ProjectsPage = () => {
    return (
        <div className="container mx-auto py-8 px-4 md:px-12">


            <h1 className="text-3xl md:text-4xl font-bold text-lime-400 mb-4 font-mono  p-4 rounded-md ">
                <span className="text-gray-300">
                    <Link href={"/"} >
                        $ ~/dinesh/
                    </Link>

                    <span className="text-green-400">
                        <Link href={"/projects"} >
                            projects/
                        </Link>
                    </span>

                    <span className="animate-blink text-white">_</span>
                </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (

                    <ProjectItem key={project.id} project={project} />

                ))}
            </div>
        </div >
    );
};

export default ProjectsPage;

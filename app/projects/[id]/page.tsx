
import Project from '@/components/Projects/Project';
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

        <Project project={project} />

    );
};

export default ProjectPage;

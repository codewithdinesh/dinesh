interface ProjectItemProps {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string[];
    github_link: string;
    link: string;
    image: string;

}


interface ProjectProps {
    project: {
        id: string;
        title: string;
        image: string;
        description: string;
        technologies: string[];
        category: string[];
        github_link?: string;
        link?: string;
    };
}

interface ProjectsProps {
    projects: ProjectItemProps[];
}


interface ProjectPageProps {
    params: {
        id: string;
    };
}

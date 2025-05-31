export interface ProjectItemProps {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string[];
    github_link: string;
    link: string;
    image: string;
}

export interface ProjectProps {
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

export interface ProjectsProps {
    projects: ProjectItemProps[];
}

export interface ProjectPageProps {
    params: {
        id: string;
    };
}

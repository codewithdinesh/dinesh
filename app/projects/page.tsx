"use client";

import React, { useState } from 'react';
import ProjectItem from '@/components/Projects/ProjectItem';
import { projectsData } from '@/config/projects';
import Link from 'next/link';


const ProjectsPage: React.FC = () => {

    const [selectedCategory, setSelectedCategory] = useState<string>('All');


    const categories: string[] = ['All'];
    const uniqueCategories: { [key: string]: boolean } = {};

    // Collect unique categories from projectsData
    projectsData.forEach((project: ProjectItemProps) => {
        project.category.forEach(cat => {
            if (!uniqueCategories[cat]) {
                uniqueCategories[cat] = true; // Mark category as seen
                categories.push(cat); // Add to categories array
            }
        });
    });

    // Filter projects based on the selected category
    const filteredProjects: ProjectItemProps[] = selectedCategory === 'All'
        ? projectsData
        : projectsData.filter((project: ProjectItemProps) => project.category.includes(selectedCategory));

    return (
        <div className="container mx-auto py-8 px-4 md:px-12">
            <h1 className="text-3xl md:text-4xl font-bold text-lime-400 mb-4 font-mono p-4 rounded-md">
                <span className="text-gray-300">
                    <Link href={"/"}>
                        $ ~/dinesh/
                    </Link>
                    <span className="text-green-400">
                        <Link href={"/projects"}>
                            projects/
                        </Link>
                    </span>
                    <span className="animate-blink text-white">_</span>
                </span>
            </h1>

            {/* Category Filter Buttons */}
            <div className="mb-8 flex flex-wrap justify-center">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`mr-4 mb-2 px-4 py-2 rounded-md font-semibold transition-colors ${selectedCategory === category
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-800 text-green-400 hover:bg-green-600'
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project: ProjectItemProps) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;

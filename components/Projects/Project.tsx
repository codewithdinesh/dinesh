"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Importing icons from react-icons

const Project: React.FC<ProjectProps> = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto py-8 px-4 md:px-12">
            {/* Project Details */}
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-lime-400 mb-4 font-mono p-4 rounded-md">
                <span className="text-gray-300">
                    <Link href={"/"}> $ ~/dinesh/ </Link>
                </span>
                <span className="text-green-400">
                    <Link href={"/projects"}> projects/ </Link>
                </span>
                <span>{project.title}</span>
                <span className="animate-blink text-white">_</span>
            </h1>

            <div className="flex flex-col xl:flex-row justify-center items-center">
                {/* Project Image */}
                <div className="rounded-lg overflow-hidden flex-1 justify-center">
                    <button onClick={handleImageClick} className="h-full min-w-full max-h-screen flex items-center justify-center rounded-md focus:outline-none">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-contain rounded-md hover:cursor-zoom-in"
                        />
                    </button>
                </div>

                {/* Project Details */}
                <div className="w-full xl:w-2/6 m-1 mx-3 flex flex-col justify-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        {project.title}
                    </h1>
                    <p className="text-lg text-gray-300 mb-6">{project.description}</p>
                    {/* Technologies */}
                    <h3 className="text-xl text-indigo-400 font-semibold mb-2">Technologies Used:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 mb-6">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>

                    {/* Categories */}
                    <div className="mb-6">
                        {project.category.map((cat, index) => (
                            <span key={index} className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">
                                {cat.toUpperCase()}
                            </span>
                        ))}
                    </div>

                    <div>
                        {/* Links */}
                        <div className="space-x-4 flex ">
                            {project.github_link && (
                                <Link
                                    href={project.github_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                                >
                                    <FaGithub className="mr-2" /> GitHub
                                </Link>
                            )}
                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
                                >
                                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Image Viewing */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-opacity-75 p-10 m-10 rounded-md flex items-center justify-center z-50">
                    <div className="relative">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="max-w-full max-h-screen rounded-lg"
                        />
                        <button
                            id="toggleSidebar"
                            className="absolute right-2 top-2 text-green-500 bg-slate-900 border border-green-500 rounded-full p-2 px-3 transition-transform duration-300"
                            onClick={closeModal}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;

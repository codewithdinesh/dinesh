// Component for Project Page

"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const Project = ({ project }: ProjectProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <div className="container mx-auto py-8 px-4 md:px-12 ">

            {/* Project Details */}

            <h1 className="text-3xl md:text-4xl font-bold text-lime-400 mb-4 font-mono  p-4 rounded-md ">
                <span className="text-gray-300">
                    <Link href={"/"} >
                        $ ~/dinesh/
                    </Link>
                </span>


                <span className="text-green-400">
                    <Link href={"/projects"} >
                        projects/
                    </Link>
                </span>
                <span>{project.title}</span>
                <span className="animate-blink text-white">_</span>
            </h1>




            <div className="flex justify-center items-center ">

                {/* Project Image */}
                <div className="rounded-lg  overflow-hidden flex-1 justify-center">
                    <img
                        src={project.image}
                        alt={project.title}
                        className=" h-full min-w-full  max-h-screen object-contain rounded-md hover:cursor-zoom-in"
                        onClick={handleImageClick}
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
                        {project.technologies.map((tech: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
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

            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-opacity-75 p-10 m-10 rounded-md flex items-center justify-center z-50">
                        <div className="relative">
                            <img src={project.image}
                                alt={project.title} className="max-w-full max-h-screen rounded-lg"
                            />


                            <button
                                id="toggleSidebar"
                                className=" absolute right-2 top-2 text-green-500 bg-slate-900 border border-green-500 rounded-full p-2 px-3 transition-transform duration-300"
                                onClick={closeModal}
                            >

                                ✖
                            </button>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Project
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

import { ScrollAnimation } from "../ScrollAnimation";

import ProjectItem from "./ProjectItem";

import { projectsData } from "@/config/projects";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectSection: React.FC = () => {
  const [displayCount, setDisplayCount] = useState(6);
  const limitedProjects = projectsData.slice(0, displayCount);

  const loadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 3, projectsData.length));
  };

  return (
    <section className="py-16 relative" id="projects">
      <div className="absolute inset-0 bg-gradient-radial from-green-900/10 to-transparent opacity-20 pointer-events-none" />

      <ScrollAnimation delay={0.1} direction="up">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
          Explore my selected projects showcasing my skills and creativity in
          software development
        </p>
      </ScrollAnimation>

      <div className="hidden md:block">
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {projectsData.slice(0, 6).map((project, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 p-2"
              >
                <ProjectItem project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {limitedProjects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>

      {/* More Projects */}
      <ScrollAnimation delay={0.3} direction="up">
        <div className="mt-12 flex flex-col items-center justify-center space-y-4">
          {displayCount < projectsData.length && (
            <Button
              className="border-green-500 text-green-400 hover:bg-green-500/10 px-6 py-2"
              variant="outline"
              onClick={loadMore}
            >
              Load More Projects
            </Button>
          )}

          <Link href="/projects">
            <Button
              className="group flex items-center gap-2 border border-green-500 rounded-full py-2 px-6 transition-all hover:bg-green-500/10"
              variant="outline"
            >
              <span className="text-green-500 font-semibold transition-colors duration-300">
                View All Projects
              </span>
              <AiOutlineArrowRight
                className="text-green-500 group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </Button>
          </Link>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ProjectSection;

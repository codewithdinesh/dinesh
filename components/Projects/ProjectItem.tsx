"use client";

import type { ProjectProps } from "@/types/projects";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const ProjectItem: React.FC<ProjectProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Link className="block h-full" href={`/projects/${project?.id}`}>
        <Card className="bg-slate-800/80 border-slate-700 h-full overflow-hidden hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 group">
          <CardHeader className="p-0 overflow-hidden relative h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800/80 z-10" />

            <Image
              priority
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              height={200}
              src={project?.image}
              width={400}
            />

            <div className="absolute bottom-4 right-4 z-20">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Badge
                    className="bg-green-600/70 hover:bg-green-500/80 border-green-500 text-white cursor-pointer px-3 py-1"
                    variant="outline"
                  >
                    View Details
                  </Badge>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-slate-800 border-slate-700">
                  <p className="text-sm text-slate-300">
                    {project.description}
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardHeader>

          <CardContent className="p-4">
            <h3 className="text-xl font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm line-clamp-2">
              {project.description}
            </p>
          </CardContent>

          <CardFooter className="p-4 pt-0 flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                className="bg-slate-700/70 text-xs text-slate-300 hover:bg-slate-600 transition-colors"
                variant="secondary"
              >
                {tech}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProjectItem;

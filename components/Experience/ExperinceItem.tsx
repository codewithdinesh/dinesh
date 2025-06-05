"use client";

import { Card } from "@nextui-org/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const ExperinceItem = ({ experience, index }: ExperienceItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determine the type of job experience for color coding
  const getExperienceTypeColors = () => {
    if (experience.type === "internship") {
      return "border-blue-500 shadow-blue-500/20";
    } else if (experience.type === "freelance") {
      return "border-purple-500 shadow-purple-500/20";
    } else {
      return "border-green-500 shadow-green-500/20"; // full time (default)
    }
  };

  // Skills badges (mock data - in a real app would come from the experience object)
  const skills = experience.skills || [
    "Problem Solving",
    "Team Collaboration",
    experience.title.includes("Web")
      ? "Web Development"
      : experience.title.includes("Flutter")
        ? "Mobile Development"
        : experience.title.includes("Backend")
          ? "Backend Development"
          : "Software Development",
  ];

  return (
    <ScrollAnimation
      delay={index * 0.1}
      direction={index % 2 === 0 ? "right" : "left"}
    >
      <motion.div
        className={`mb-16 flex justify-between items-center w-full ${
          index % 2 === 0 ? "flex-row-reverse" : ""
        }`}
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        onHoverEnd={() => setIsHovered(false)}
        onHoverStart={() => setIsHovered(true)}
      >
        <div className="w-5/12 hidden md:block" />{" "}
        {/* Hidden on mobile, visible on medium+ */}
        {/* Timeline node */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <motion.div
              animate={
                isHovered
                  ? {
                      scale: [1, 1.2, 1],
                      boxShadow: "0 0 25px 5px rgba(34, 197, 94, 0.5)",
                    }
                  : {}
              }
              className={`z-20 md:z-0 flex items-center justify-center order-1 bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/30 w-12 h-12 rounded-full m-1`}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img
                alt={experience.title}
                animate={isHovered ? { rotate: 360 } : {}}
                className="w-8 h-8"
                src={"/ic_code.svg"}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.div>
          </HoverCardTrigger>
          <HoverCardContent
            align="center"
            className="w-64 bg-slate-900 text-slate-200 border-green-500"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-slate-400">
                Experience Duration
              </span>
              <span className="text-lg font-semibold text-green-400">
                {experience.experienceMonth >= 12
                  ? `${Math.floor(experience.experienceMonth / 12)} year${
                      Math.floor(experience.experienceMonth / 12) > 1 ? "s" : ""
                    } ${
                      experience.experienceMonth % 12
                        ? `${experience.experienceMonth % 12} month${
                            experience.experienceMonth % 12 > 1 ? "s" : ""
                          }`
                        : ""
                    }`
                  : `${experience.experienceMonth} month${
                      experience.experienceMonth > 1 ? "s" : ""
                    }`}
              </span>
              <span>
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
          </HoverCardContent>
        </HoverCard>
        {/* Experience card */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={`order-1 w-full md:w-5/12 overflow-hidden`}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className={`px-6 py-8 border ${getExperienceTypeColors()} shadow-xl bg-gradient-to-tl from-slate-800/95 to-slate-900/95 rounded-lg backdrop-blur-sm`}
          >
            <motion.div
              animate={isHovered ? { y: 0 } : {}}
              className="relative overflow-hidden"
              transition={{ duration: 0.5 }}
            >
              {/* Subtle background animation on hover */}
              {isHovered && (
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  className="absolute inset-0 z-0 bg-gradient-to-tr from-green-900/10 to-blue-900/10"
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                  transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              )}

              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <h3 className="mb-2 font-bold text-green-400 text-2xl glow-effect">
                    {experience.title}
                  </h3>

                  <Badge
                    className={`
                    ${
                      experience.type === "internship"
                        ? "bg-blue-600"
                        : experience.type === "freelance"
                          ? "bg-purple-600"
                          : "bg-green-600"
                    } 
                    hover:${
                      experience.type === "internship"
                        ? "bg-blue-500"
                        : experience.type === "freelance"
                          ? "bg-purple-500"
                          : "bg-green-500"
                    }`}
                  >
                    {experience.type || "Full Time"}
                  </Badge>
                </div>

                <h4 className="mb-3 font-semibold text-indigo-300 text-lg">
                  {experience.company}
                </h4>
                <p className="text-sm leading-relaxed text-gray-300">
                  {experience.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-slate-800/50 text-slate-300 border-slate-700"
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between mt-4 text-sm font-medium text-gray-400">
                  <div className="flex space-x-2">
                    <span>{experience.startDate}</span>
                    <span>-</span>
                    <span>{experience.endDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </motion.div>
    </ScrollAnimation>
  );
};

export default ExperinceItem;

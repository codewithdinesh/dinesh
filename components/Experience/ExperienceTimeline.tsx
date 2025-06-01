"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import ExperinceItem from "./ExperinceItem";

import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  const [filter, setFilter] = useState<string>("all");

  // Filter experiences based on selected type
  const filteredExperiences =
    filter === "all"
      ? experiences
      : experiences.filter(
          (exp) => exp.type?.toLowerCase() === filter.toLowerCase(),
        );

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <ScrollAnimation direction="up">
        <h2 className="text-3xl font-bold text-center mb-6">Work Experience</h2>
        <p className="text-gray-300 text-center mb-10 max-w-xl mx-auto">
          My professional journey, skills developed, and the impact I&apos;ve
          made.
        </p>
      </ScrollAnimation>

      {/* Filter buttons */}
      <ScrollAnimation
        className="flex justify-center mb-10 gap-3"
        delay={0.2}
        direction="up"
      >
        <Button
          className={filter === "all" ? "bg-green-600 hover:bg-green-700" : ""}
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          className={
            filter === "fulltime" ? "bg-green-600 hover:bg-green-700" : ""
          }
          variant={filter === "fulltime" ? "default" : "outline"}
          onClick={() => setFilter("fulltime")}
        >
          Full Time
        </Button>
        <Button
          className={
            filter === "freelance" ? "bg-green-600 hover:bg-green-700" : ""
          }
          variant={filter === "freelance" ? "default" : "outline"}
          onClick={() => setFilter("freelance")}
        >
          Freelance
        </Button>
        <Button
          className={
            filter === "internship" ? "bg-green-600 hover:bg-green-700" : ""
          }
          variant={filter === "internship" ? "default" : "outline"}
          onClick={() => setFilter("internship")}
        >
          Internship
        </Button>
      </ScrollAnimation>

      <div className="relative">
        {/* Animated vertical line */}
        <motion.div
          animate={{ height: "100%" }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 via-green-400 to-green-600"
          initial={{ height: "0%" }}
          style={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Glowing dot that moves along the timeline */}
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full z-10 shadow-lg shadow-green-500/50"
          initial={{ top: "0%" }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {filteredExperiences.map((experience, index) => (
          <ExperinceItem key={index} experience={experience} index={index} />
        ))}

        {filteredExperiences.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No matching experiences found
          </div>
        )}
      </div>
    </div>
  );
}

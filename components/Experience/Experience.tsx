"use client";

import React from "react";
import { motion } from "framer-motion";

import ExperienceTimeline from "./ExperienceTimeline";

import { ExperiencesData } from "@/config/experience";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const Experience = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="min-h-screen mt-1 rounded-md experience py-12"
      id="experience"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollAnimation direction="up">
        <ExperienceTimeline experiences={ExperiencesData} />
      </ScrollAnimation>

      {/* Animated background elements */}
      <div className="absolute -z-10 top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default Experience;

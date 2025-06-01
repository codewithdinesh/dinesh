"use client";

import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface SkillItemProps {
  skill: string;
  level?: string;
  index: number;
}

const levelColors = {
  Beginner: "bg-gradient-to-r from-slate-500/80 to-slate-600/80",
  Intermediate: "bg-gradient-to-r from-blue-500/80 to-blue-600/80",
  Advanced: "bg-gradient-to-r from-green-500/80 to-green-600/80",
  Expert: "bg-gradient-to-r from-purple-500/80 to-purple-600/80",
};

const SkillItem = ({ skill, level, index }: SkillItemProps) => {
  const levelColor = level
    ? levelColors[level as keyof typeof levelColors] ||
      "bg-gradient-to-r from-blue-500/80 to-blue-600/80"
    : "";

  return (
    <motion.div
      className={cn(
        "relative p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300",
        levelColor,
      )}
      initial={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -inset-1 bg-grid-white/10" />
      </div>

      <div className="relative z-10">
        <h3 className="text-white font-bold text-xl mb-2">{skill}</h3>

        {level && (
          <div className="flex items-center justify-between mt-2">
            <p className="text-white/80 font-medium">{level}</p>

            <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                whileInView={{ width: getWidthByLevel(level) }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

function getWidthByLevel(level: string): string {
  switch (level) {
    case "Beginner":
      return "25%";
    case "Intermediate":
      return "50%";
    case "Advanced":
      return "75%";
    case "Expert":
      return "100%";
    default:
      return "50%";
  }
}

export default SkillItem;

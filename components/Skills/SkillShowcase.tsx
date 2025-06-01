"use client";

import React, { useState } from "react";

import EnhancedSkillItem from "./EnhancedSkillItem";
import Skill3DCard from "./Skill3DCard";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skill } from "@/types/skills";

interface SkillShowcaseProps {
  skills: Skill[];
}

const SkillShowcase = ({ skills }: SkillShowcaseProps) => {
  const [displayMode, setDisplayMode] = useState<"standard" | "3d">("standard");

  // Take first 6 skills for showcase
  const showcaseSkills = skills.slice(0, 6);

  return (
    <div className="my-12 w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">Interactive Skill Cards</h3>
        <p className="text-muted-foreground mb-6">
          Explore different ways to display your skills and expertise
        </p>

        <div className="flex justify-center mb-10">
          <Tabs
            className="w-full max-w-xs"
            value={displayMode}
            onValueChange={(value) =>
              setDisplayMode(value as "standard" | "3d")
            }
          >
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="3d">3D Effect</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayMode === "standard" ? (
          <>
            {showcaseSkills.map((skill, index) => (
              <EnhancedSkillItem
                key={skill.skill}
                index={index}
                skill={skill}
              />
            ))}
          </>
        ) : (
          <>
            {showcaseSkills.map((skill, index) => (
              <Skill3DCard
                key={skill.skill}
                description={skill.description}
                icon={skill.icon}
                index={index}
                level={skill.level}
                skill={skill.skill}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SkillShowcase;

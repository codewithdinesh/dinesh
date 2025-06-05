import React from "react";

export interface Skill {
    skill: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    description?: string;
    icon?: React.ReactNode;
    years?: number;
    projects?: number;
    relatedProjects?: string[];
}

export interface SkillCategory {
    category: string;
    icon: React.ReactNode;
    description?: string;
    skills: Skill[];
}

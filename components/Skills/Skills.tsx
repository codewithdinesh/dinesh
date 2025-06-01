"use client";

import React from "react";

import EnhancedSkillsList from "./EnhancedSkillsList";

import { enhancedSkillCategories } from "@/config/skills";

const SkillsList = () => {
  return (
    <>
      {/* Using the new enhanced skills list with interactive features */}
      <EnhancedSkillsList skillCategories={enhancedSkillCategories} />
    </>
  );
};

export default SkillsList;

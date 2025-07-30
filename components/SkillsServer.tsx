import { client } from "@/sanity/lib/client";
import React from "react";
import Skills from "./skills";
import { SkillCategory } from "@/lib/types";
import { getSkillCategoriesWithSkills } from "@/sanity/lib/queries";

const SkillsServer = async () => {
  const skillCategories: SkillCategory[] = await client.fetch(
    getSkillCategoriesWithSkills
  );
  return (
    <div>
      <Skills skillCategories={skillCategories} />
    </div>
  );
};

export default SkillsServer;

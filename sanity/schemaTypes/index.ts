import { type SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { projectLink } from "./projectLink";
import { skill } from "./skill";
import { skillCategory } from "./skillCategory";
import { service } from "./service";
import { experience } from "./experience";
import { processStep } from "./processStep";
import { testimonial } from "./testimonial";
import { pricingPlan } from "./pricingPlan";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    project,
    projectLink,
    skill,
    skillCategory,
    service,
    experience,
    processStep,
    testimonial,
    pricingPlan,
    siteSettings,
  ],
};

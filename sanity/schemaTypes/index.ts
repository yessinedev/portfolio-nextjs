import { type SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { projectLink } from "./projectLink";
import { skill } from "./skill";
import { skillCategory } from "./skillCategory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, projectLink, skill, skillCategory],
};

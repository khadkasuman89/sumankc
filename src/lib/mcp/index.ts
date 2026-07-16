import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import getExperience from "./tools/get-experience";
import getEducation from "./tools/get-education";
import getSkills from "./tools/get-skills";
import getResearch from "./tools/get-research";

export default defineMcp({
  name: "suman-khadka-portfolio",
  title: "Er. Suman Khadka — Portfolio",
  version: "0.1.0",
  instructions:
    "Public portfolio of Er. Suman Khadka, a Civil Engineer with the Government of Nepal (DWSSM). Use these tools to look up his profile, contact details, work experience, education, technical skills, and published research.",
  tools: [getProfile, getExperience, getEducation, getSkills, getResearch],
});

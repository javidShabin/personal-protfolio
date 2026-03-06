import { createElement } from "react";
import AboutApp from "./AboutApp";
import ContactApp from "./ContactApp";
import FilesApp from "./FilesApp";
import ProjectDetailApp from "./ProjectDetailApp";
import ProjectsApp from "./ProjectsApp";
import ResumeApp from "./ResumeApp";
import SkillsApp from "./SkillsApp";
import { portfolioProjects } from "./projectsData";

const projectWindows = Object.fromEntries(
  portfolioProjects.map((project) => [
    project.windowId,
    () => createElement(ProjectDetailApp, { project }),
  ]),
) as Record<string, React.FC>;

export const appRegistry: Record<string, React.FC> = {
  files: FilesApp,
  about: AboutApp,
  contact: ContactApp,
  projects: ProjectsApp,
  resume: ResumeApp,
  skills: SkillsApp,
  ...projectWindows,
};

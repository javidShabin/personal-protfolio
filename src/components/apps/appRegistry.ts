import AboutApp from "./AboutApp";
import ProjectsApp from "./ProjectsApp";
import SkillsApp from "./SkillsApp";

export const appRegistry: Record<string, React.FC> = {
  about: AboutApp,
  projects: ProjectsApp,
  skills: SkillsApp,
};

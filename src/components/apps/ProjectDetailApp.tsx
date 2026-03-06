import type { PortfolioProject } from "./projectsData";

interface Props {
  project: PortfolioProject;
}

export default function ProjectDetailApp({ project }: Props) {
  return (
    <div className="space-y-4">
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        className="h-44 w-full rounded-xl border border-zinc-700 object-cover"
      />

      <div className="space-y-1">
        <h1 className="text-xl font-semibold">{project.name}</h1>
        <p className="text-sm text-zinc-300">{project.subtitle}</p>
      </div>

      <p className="text-sm leading-6 text-zinc-200">{project.description}</p>

      <div className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-300">
          Highlights
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-200">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


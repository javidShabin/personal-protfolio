import { useWindowStore } from "../../store/windowStore";
import { portfolioProjects } from "./projectsData";

export default function ProjectsApp() {
  const openWindow = useWindowStore((state) => state.openWindow);

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">Projects</h1>

      <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/55 p-3">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {portfolioProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() =>
                openWindow({ id: project.windowId, title: project.name })
              }
              className="group relative overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-800/50 text-left transition duration-200 hover:border-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="h-28 w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              <span className="pointer-events-none absolute inset-x-2 bottom-2 translate-y-2 text-sm font-medium text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                {project.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

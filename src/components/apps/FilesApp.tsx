import { FileText, UserRound } from "lucide-react";
import { useWindowStore } from "../../store/windowStore";
import safariIcon from "/icons/safari.png";

type WindowTarget = {
  id: string;
  title: string;
};

type FileItem = {
  label: string;
  icon: "doc" | "safari" | "image";
  target: WindowTarget;
};

const files: FileItem[] = [
  { label: "Nike Project.txt", icon: "doc", target: { id: "about", title: "About Me" } },
  { label: "nike.com", icon: "safari", target: { id: "projects", title: "Projects" } },
  { label: "nike.png", icon: "image", target: { id: "resume", title: "Resume" } },
  { label: "Design.fig", icon: "doc", target: { id: "contact", title: "Contact Me" } },
];

function FileIcon({ kind }: { kind: FileItem["icon"] }) {
  if (kind === "safari") {
    return <img src={safariIcon} alt="" className="h-16 w-16 object-contain" />;
  }

  if (kind === "image") {
    return (
      <div className="relative">
        <FileText size={66} className="text-zinc-200" strokeWidth={1.2} />
        <UserRound size={22} className="absolute left-5 top-6 text-zinc-400" />
      </div>
    );
  }

  return <FileText size={66} className="text-zinc-200" strokeWidth={1.2} />;
}

export default function FilesApp() {
  const openWindow = useWindowStore((state) => state.openWindow);

  return (
    <div className="h-full rounded-sm bg-zinc-900/70 p-8">
      <div className="grid h-full grid-cols-[repeat(auto-fit,minmax(160px,1fr))] content-start gap-x-14 gap-y-10 overflow-auto pr-2">
        {files.map((file) => (
          <button
            key={file.label}
            type="button"
            onClick={() => openWindow(file.target)}
            className="flex w-full max-w-[170px] flex-col items-center justify-start gap-3 rounded-lg p-2 text-center transition hover:bg-white/6"
          >
            <FileIcon kind={file.icon} />
            <span className="text-base leading-tight font-semibold text-zinc-100">
              {file.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

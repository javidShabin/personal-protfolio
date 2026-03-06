import { Rnd } from "react-rnd";
import {
  FileText,
  FolderOpen,
  Info,
  Minus,
  Plus,
  Search,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import type { ComponentType } from "react";
import { useWindowStore } from "../../store/windowStore";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  zIndex: number;
  children: React.ReactNode;
}

type SidebarTarget = {
  id: string;
  title: string;
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

const favorites: SidebarTarget[] = [
  { id: "files", title: "Files", label: "Work", icon: FolderOpen },
  { id: "about", title: "About Me", label: "About me", icon: Info },
  { id: "resume", title: "Resume", label: "Resume", icon: FileText },
];

const workspace: SidebarTarget[] = [
  { id: "projects", title: "Projects", label: "Projects", icon: FolderOpen },
  { id: "skills", title: "Skills", label: "Skills", icon: Sparkles },
  { id: "contact", title: "Contact Me", label: "Contact", icon: UserRound },
];

export default function Window({ id, title, zIndex, children }: Props) {
  const windows = useWindowStore((state) => state.windows);
  const currentWindow = windows.find((w) => w.id === id);
  const isMaximized = Boolean(currentWindow?.isMaximized);

  const openWindow = useWindowStore((state) => state.openWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);
  const minimizeWindow = useWindowStore((state) => state.minimizeWindow);
  const toggleMaximize = useWindowStore((state) => state.toggleMaximize);
  const focusWindow = useWindowStore((state) => state.focusWindow);

  return (
    <Rnd
      style={{ zIndex }}
      size={
        currentWindow?.isMaximized
          ? { width: "100%", height: "100%" }
          : undefined
      }
      position={currentWindow?.isMaximized ? { x: 0, y: 0 } : undefined}
      disableDragging={currentWindow?.isMaximized}
      enableResizing={!currentWindow?.isMaximized}
      default={{
        x: 160,
        y: 90,
        width: 760,
        height: 480,
      }}
      bounds="window"
      dragHandleClassName="window-drag"
      onMouseDown={() => focusWindow(id)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8, y: 40 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={`relative h-full flex flex-col overflow-hidden border text-white backdrop-blur-xl ${
          isMaximized
            ? "rounded-none border-zinc-700/60"
            : "rounded-[12px] border-zinc-600/65"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(52,56,65,0.94) 0%, rgba(25,27,33,0.97) 44px, rgba(22,24,30,0.98) 100%)",
          boxShadow: isMaximized
            ? "none"
            : "0 24px 44px rgba(0,0,0,0.58), 0 8px 18px rgba(0,0,0,0.36), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.08), transparent 120px)",
          }}
        />

        <div className="window-drag relative z-10 flex items-center justify-between px-3 h-10 border-b border-zinc-500/45 cursor-grab active:cursor-grabbing select-none">
          <div className="flex items-center gap-2.5 group/controls">
            <button
              onClick={() => closeWindow(id)}
              className="group/button w-3 h-3 rounded-full border border-[#d04a45] bg-[#ff5f57] flex items-center justify-center"
            >
              <X className="text-black/65 opacity-0 group-hover/controls:opacity-100 transition-opacity" size={8} strokeWidth={2.75} />
            </button>

            <button
              onClick={() => minimizeWindow(id)}
              className="group/button w-3 h-3 rounded-full border border-[#d3a127] bg-[#febc2e] flex items-center justify-center"
            >
              <Minus className="text-black/65 opacity-0 group-hover/controls:opacity-100 transition-opacity" size={8} strokeWidth={2.75} />
            </button>

            <button
              onClick={() => toggleMaximize(id)}
              className="group/button w-3 h-3 rounded-full border border-[#1ea83f] bg-[#28c840] flex items-center justify-center"
            >
              <Plus className="text-black/65 opacity-0 group-hover/controls:opacity-100 transition-opacity" size={8} strokeWidth={2.75} />
            </button>
          </div>

          <span className="absolute left-1/2 -translate-x-1/2 text-[13px] font-medium text-zinc-200/95 tracking-[0.01em] pointer-events-none">
            {title}
          </span>

          <div className="flex w-[58px] justify-end">
            <Search size={18} className="text-zinc-400" />
          </div>
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 bg-zinc-900/92">
          <aside className="w-[210px] shrink-0 border-r border-zinc-700/80 bg-zinc-800/60 px-3 py-4">
            <p className="mb-2 px-2 text-sm font-semibold text-zinc-500">Favorites</p>
            <div className="space-y-1">
              {favorites.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openWindow({ id: item.id, title: item.title })}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-semibold transition ${
                    item.id === id
                      ? "bg-white/14 text-zinc-100"
                      : "text-zinc-200 hover:bg-white/8"
                  }`}
                >
                  <item.icon size={17} className="text-sky-400" />
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </div>

            <p className="mb-2 mt-6 px-2 text-sm font-semibold text-zinc-500">Work</p>
            <div className="space-y-1">
              {workspace.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openWindow({ id: item.id, title: item.title })}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-semibold transition ${
                    item.id === id
                      ? "bg-white/14 text-zinc-100"
                      : "text-zinc-200 hover:bg-white/8"
                  }`}
                >
                  <item.icon size={17} className="text-sky-400" />
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="min-h-0 min-w-0 flex-1 overflow-auto bg-zinc-900/72 p-4">
            {children}
          </div>
        </div>
      </motion.div>
    </Rnd>
  );
}

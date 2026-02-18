import { Rnd } from "react-rnd";
import { Minus, Square, X } from "lucide-react";
import { useWindowStore } from "../../store/windowStore";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  zIndex: number;
  children: React.ReactNode;
}

export default function Window({ id, title, zIndex, children }: Props) {
  const windows = useWindowStore((state) => state.windows);
  const currentWindow = windows.find((w) => w.id === id);

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
        x: 200,
        y: 120,
        width: 520,
        height: 340,
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
        className="bg-zinc-900 text-white rounded-xl shadow-2xl h-full flex flex-col border border-zinc-700"
      >
        {/* Header */}
        <div className="window-drag flex items-center justify-between px-3 py-2 bg-zinc-800 rounded-t-xl cursor-grab active:cursor-grabbing">
          {/* Left Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => closeWindow(id)}
              className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center hover:brightness-110"
            >
              <X className="text-black" size={10} />
            </button>

            <button
              onClick={() => minimizeWindow(id)}
              className="w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center hover:brightness-110"
            >
              <Minus className="text-black" size={10} />
            </button>

            <button
              onClick={() => toggleMaximize(id)}
              className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center hover:brightness-110"
            >
              <Square className="text-black" size={8} />
            </button>
          </div>
          {/* Title */}
          <span className="text-sm text-zinc-300">{title}</span>
          <div className="w-12" /> {/* spacing */}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 overflow-auto bg-zinc-900">{children}</div>
      </motion.div>
    </Rnd>
  );
}

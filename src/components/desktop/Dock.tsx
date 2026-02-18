import { motion } from "framer-motion";
import { useWindowStore } from "../../store/windowStore";
import { useState } from "react";

interface DockItemProps {
  title: string;
  icon: string;
  id: string;
}

function DockItem({ title, icon, id }: DockItemProps) {
  const openWindow = useWindowStore((state) => state.openWindow);
  const windows = useWindowStore((state) => state.windows);

  const isOpen = windows.some((w) => w.id === id);
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    setIsBouncing(true);

    setTimeout(() => {
      setIsBouncing(false);
      openWindow({ id, title });
    }, 300);
  };

  return (
    <div className="flex flex-col items-center cursor-pointer">
      <motion.img
        src={icon}
        className="w-10 h-10"
        whileHover={{ scale: 1.3 }}
        animate={
          isBouncing
            ? { y: [0, -18, 0, -10, 0] }
            : { y: 0 }
        }
        transition={{ duration: 0.4 }}
        onClick={handleClick}
      />

      {/* Active Indicator */}
      {isOpen && (
        <div className="w-1.5 h-1.5 bg-white rounded-full mt-1"></div>
      )}
    </div>
  );
}


export default function Dock() {
  return (
    <div
      className="absolute bottom-5 left-1/2 -translate-x-1/2 
  bg-black/30 backdrop-blur-xl 
  px-6 py-3 rounded-2xl 
  flex gap-6 shadow-2xl border border-white/10"
    >
      <DockItem id="about" title="About Me" icon="/icons/folder.png" />
      <DockItem id="projects" title="Projects" icon="/icons/folder.png" />
      <DockItem id="skills" title="Skills" icon="/icons/folder.png" />
    </div>
  );
}

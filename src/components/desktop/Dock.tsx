import { motion } from "framer-motion";
import { useWindowStore } from "../../store/windowStore";

interface DockItemProps {
  title: string;
  icon: string;
  id: string;
}

function DockItem({ title, icon, id }: DockItemProps) {
  const openWindow = useWindowStore((state) => state.openWindow);

  return (
    <motion.div
      whileHover={{ scale: 1.4 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() =>
        openWindow({
          id,
          title,
        })
      }
      className="flex flex-col items-center cursor-pointer"
    >
      <img src={icon} className="w-10 h-10" />
    </motion.div>
  );
}

export default function Dock() {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
      bg-white/20 backdrop-blur-md 
      px-6 py-3 rounded-2xl 
      flex gap-6 shadow-xl border border-white/20">

      <DockItem id="about" title="About Me" icon="/icons/folder.png" />
      <DockItem id="projects" title="Projects" icon="/icons/folder.png" />
      <DockItem id="skills" title="Skills" icon="/icons/folder.png" />

    </div>
  );
}

interface DesktopIconProps {
  title: string;
  icon: string;
  onOpen: () => void;
}

export default function DesktopIcon({ title, icon, onOpen }: DesktopIconProps) {
  return (
    <div
      onDoubleClick={onOpen}
      className="flex flex-col items-center w-20 cursor-pointer select-none group"
    >
      <div className="relative p-1 rounded-lg group-hover:bg-blue-500/60 transition-colors duration-200 ease-in-out">
        <img src={icon} className="w-12 h-12" />
      </div>
      <p className="text-white text-sm mt-1 text-center px-1 py-0.5 rounded group-hover:bg-blue-500/60 transition-colors duration-200 ease-in-out group-hover:text-white">
        {title}
      </p>
    </div>
  );
}

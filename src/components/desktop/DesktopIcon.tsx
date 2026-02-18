interface DesktopIconProps {
  title: string;
  icon: string;
  onOpen: () => void;
}

export default function DesktopIcon({ title, icon, onOpen }: DesktopIconProps) {
  return (
    <div
      onDoubleClick={onOpen}
      className="flex flex-col items-center w-20 cursor-pointer select-none"
    >
      <img src={icon} className="w-12 h-12" />
      <p className="text-white text-sm mt-1 text-center">{title}</p>
    </div>
  );
}

import wallpaper from "/wallpaper/wallpaper.jpg";
import DesktopIcon from "./DesktopIcon";
import WindowManager from "../window/WindowManager";
import { useWindowStore } from "../../store/windowStore";
import Dock from "./Dock";
import imageIc from "/icons/folderIcon.png";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
import TextPressure from "../ui/TextPressure";

export default function Desktop() {
  const openWindow = useWindowStore((state) => state.openWindow);

  const items = [
    {
      icon: imageIc,
      label: "About",
      onClick: () => openWindow({ id: "about", title: "About Me" }),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Projects",
      onClick: () => openWindow({ id: "projects", title: "Projects" }),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Skills",
      onClick: () => openWindow({ id: "skills", title: "Skills" }),
    },
  ];

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      
      {/* Center Intro */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="text-white text-4xl font-light text-center mb-2">Hello I am Javid! Welcom to my</h1>
        <div style={{ width: "600px", height: "160px" }}>
          <TextPressure
            text="Portfolio"
            flex
            width
            weight
            italic
            textColor="#ffffff"
            minFontSize={24}
          />
        </div>
        
      </div>
      
      {/* Desktop Icons */}
      <div className="p-6 flex gap-6 relative z-10">
        <DesktopIcon
          title="About Me"
          icon="/icons/folderIcon.png"
          onOpen={() => openWindow({ id: "about", title: "About Me" })}
        />
      </div>

      <WindowManager />

      {/* Dock */}
      <Dock items={items} />
    </div>
  );
}

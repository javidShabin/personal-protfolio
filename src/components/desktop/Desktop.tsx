import wallpaper from "/wallpaper/wallpaper.jpg";
import DesktopIcon from "./DesktopIcon";
import WindowManager from "../window/WindowManager";
import { useWindowStore } from "../../store/windowStore";
import Dock from "./Dock";
import finderIcon from "/icons/finder.png";
import safariIcon from "/icons/safari.png";
import photosIcon from "/icons/photos.png";
import contactsIcon from "/icons/contact.png";
import terminalIcon from "/icons/terminal.png";
import trashIcon from "/icons/trash.png";
import TextPressure from "../ui/TextPressure";
import MenuBar from "./MenuBar";

export default function Desktop() {
  const openWindow = useWindowStore((state) => state.openWindow);

  const items = [
    {
      icon: finderIcon,
      label: "Finder",
      onClick: () => openWindow({ id: "files", title: "Files" }),
    },
    {
      icon: safariIcon,
      label: "Safari",
      onClick: () => openWindow({ id: "projects", title: "Projects" }),
    },
    {
      icon: photosIcon,
      label: "Photos",
      onClick: () => openWindow({ id: "photos", title: "Photos" }),
    },
    {
      icon: contactsIcon,
      label: "Contacts",
      onClick: () => openWindow({ id: "contact", title: "Contact Me" }),
    },
    {
      icon: terminalIcon,
      label: "Terminal",
      onClick: () => openWindow({ id: "terminal", title: "Terminal" }),
    },
    {
      icon: trashIcon,
      label: "Trash",
      onClick: () => {},
    },
  ];

  return (
    <>
      <MenuBar />
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
          <h1 className="text-white text-4xl font-light text-center mb-2">
            Hello I am Javid! Welcom to my
          </h1>
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
        <div className="absolute top-16 left-6 flex flex-col gap-6 z-0">
          <DesktopIcon
            title="About Me"
            icon="/icons/folderIcon.png"
            onOpen={() => openWindow({ id: "about", title: "About Me" })}
          />

          <DesktopIcon
            title="Projects"
            icon="/icons/folderIcon.png"
            onOpen={() => openWindow({ id: "projects", title: "Projects" })}
          />

          <DesktopIcon
            title="Skills"
            icon="/icons/folderIcon.png"
            onOpen={() => openWindow({ id: "skills", title: "Skills" })}
          />
        </div>

        <WindowManager />

        {/* Dock */}
        <Dock items={items} />
      </div>
    </>
  );
}

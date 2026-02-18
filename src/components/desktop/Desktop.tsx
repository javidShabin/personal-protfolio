import wallpaper from "/wallpaper/wallpaper.jpg";
import DesktopIcon from "./DesktopIcon";
import WindowManager from "../window/WindowManager";
import { useWindowStore } from "../../store/windowStore";

export default function Desktop() {
  const openWindow = useWindowStore((state) => state.openWindow);

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      {/* Desktop Icons */}
      <div className="p-6 flex gap-6">
        <DesktopIcon
          title="About Me"
          icon="/icons/folderIcon.png"
          onOpen={() =>
            openWindow({
              id: "about",
              title: "About Me",
            })
          }
        />
      </div>

      {/* Windows Layer */}
      <WindowManager />
    </div>
  );
}
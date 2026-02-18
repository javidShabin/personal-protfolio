import { useWindowStore } from "../../store/windowStore";
import Window from "./Window";
import { appRegistry } from "../apps/appRegistry";
import { AnimatePresence } from "framer-motion";

export default function WindowManager() {
  const windows = useWindowStore((state) => state.windows);

  return (
    <AnimatePresence>
      {windows
        .filter((win) => !win.isMinimized) // 🔥 THIS LINE FIXES IT
        .map((win) => {
          const AppComponent = appRegistry[win.id];

          return (
            <Window
              key={win.id}
              id={win.id}
              title={win.title}
              zIndex={win.zIndex}
            >
              {AppComponent ? <AppComponent /> : "App not found"}
            </Window>
          );
        })}
    </AnimatePresence>
  );
}

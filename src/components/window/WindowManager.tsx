import { useWindowStore } from "../../store/windowStore";
import Window from "./Window";

export default function WindowManager() {
  const windows = useWindowStore((state) => state.windows);

  return (
    <>
      {windows.map((win) => (
        <Window
          key={win.id}
          id={win.id}
          title={win.title}
          zIndex={win.zIndex}
        >
          {win.title} Content
        </Window>
      ))}
    </>
  );
}

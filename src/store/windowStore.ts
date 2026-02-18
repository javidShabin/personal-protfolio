import { create } from "zustand";

export interface AppWindow {
  id: string;
  title: string;
  zIndex: number;
  isMinimized?: boolean;
  isMaximized?: boolean; 
}

interface WindowStore {
  windows: AppWindow[];
  openWindow: (window: Omit<AppWindow, "zIndex">) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  toggleMaximize: (id: string) => void;
  
}

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],

  openWindow: (window) =>
    set((state) => {
      const exists = state.windows.find((w) => w.id === window.id);

      // If already exists → restore if minimized
      if (exists) {
        return {
          windows: state.windows.map((w) =>
            w.id === window.id
              ? { ...w, isMinimized: false }
              : w
          ),
        };
      }

      const topZ = state.windows.length + 1;

      return {
        windows: [
          ...state.windows,
          { ...window, zIndex: topZ, isMinimized: false },
        ],
      };
    }),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),

  focusWindow: (id) =>
    set((state) => {
      const topZ =
        Math.max(0, ...state.windows.map((w) => w.zIndex)) + 1;

      return {
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, zIndex: topZ } : w
        ),
      };
    }),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: true } : w
      ),
    })),

    toggleMaximize: (id) =>
  set((state) => ({
    windows: state.windows.map((w) =>
      w.id === id
        ? { ...w, isMaximized: !w.isMaximized }
        : w
    ),
  })),


    
}));

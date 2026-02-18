import { create } from "zustand";

export interface AppWindow {
  id: string;
  title: string;
  zIndex: number;
}

interface WindowStore {
  windows: AppWindow[];
  openWindow: (window: Omit<AppWindow, "zIndex">) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],

  openWindow: (window) =>
    set((state) => {
      // prevent duplicate windows
      const exists = state.windows.find((w) => w.id === window.id);
      if (exists) return state;

      const topZ = state.windows.length + 1;

      return {
        windows: [...state.windows, { ...window, zIndex: topZ }],
      };
    }),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),

  focusWindow: (id) =>
    set((state) => {
      const topZ = Math.max(0, ...state.windows.map((w) => w.zIndex)) + 1;

      return {
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, zIndex: topZ } : w
        ),
      };
    }),
}));

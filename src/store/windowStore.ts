import { create } from "zustand";

interface WindowType {
  id: string;
  title: string;
  isOpen: boolean;
}

interface WindowStore {
  windows: WindowType[];
  openWindow: (id: string, title: string) => void;
  closeWindow: (id: string) => void;
}

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],

  openWindow: (id, title) =>
    set((state) => ({
      windows: [...state.windows, { id, title, isOpen: true }]
    })),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id)
    }))
}));

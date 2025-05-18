import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("zenith-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("zenith-theme", theme);
    set({ theme });
  },
}));

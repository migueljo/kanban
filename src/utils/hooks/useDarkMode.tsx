import { useDarkMode } from "@/providers/DarkModeProvider";

export function useIsDarkMode() {
  const darkMode = useDarkMode();
  return darkMode.mode === "dark";
}

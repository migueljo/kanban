import { useTheme } from "@mui/material";

export function useDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === "dark";
}

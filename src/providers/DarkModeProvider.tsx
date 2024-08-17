import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import { typography } from "@/utils/typographyTheme";
import { components } from "@/utils/componentsTheme";

type Mode = "light" | "dark";

const DarkModeContext = React.createContext({
  mode: "light" as Mode,
  toggleDarkMode: () => {},
});

type DarkModeProviderProps = {
  children: React.ReactNode;
};

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [mode, setMode] = React.useState<Mode>("light");
  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography,
        components,
      }),
    [mode]
  );

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = React.useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};

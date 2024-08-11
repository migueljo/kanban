import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import { typography } from "@/utils/typographyTheme";
import { components } from "@/utils/componentsTheme";

type Mode = "light" | "dark";

const ColorModeContext = React.createContext({
  mode: "light" as Mode,
  toggleColorMode: () => {},
});

type ColorModeProviderProps = {
  children: React.ReactNode;
};

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [mode, setMode] = React.useState<Mode>("light");
  const toggleColorMode = () => {
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
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  const context = React.useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};

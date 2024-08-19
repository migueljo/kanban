import React from "react";
import Box from "@mui/material/Box";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { colors } from "@/utils/colors";
import { useIsDarkMode } from "@/utils/hooks/useDarkMode";
import { Switch } from "@/components/Switch/Switch";
import { useDarkMode } from "@/providers/DarkModeProvider";

type DarkModeSwitchProps = {};
export function DarkModeSwitch(props: DarkModeSwitchProps) {
  const isDarkMode = useIsDarkMode();
  const darkMode = useDarkMode();
  const handleSwitchClick = () => {
    darkMode.toggleDarkMode();
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: isDarkMode ? colors.veryDarkGrey : colors.lightGrey,
        borderRadius: "6px",
        p: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LightModeIcon sx={{ color: colors.mediumGrey }} />
      <Box sx={{ margin: "0 16px", display: "flex" }}>
        <Switch
          sx={{ color: colors.mainPurple }}
          checked={isDarkMode}
          onClick={handleSwitchClick}
        />
      </Box>
      <DarkModeIcon sx={{ color: colors.mediumGrey }} />
    </Box>
  );
}

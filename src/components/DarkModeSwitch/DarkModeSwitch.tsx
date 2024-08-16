import React from "react";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

type DarkModeSwitchProps = {};
export function DarkModeSwitch(props: DarkModeSwitchProps) {
  return (
    <Box>
      <LightModeIcon />
      <Switch />
      <DarkModeIcon />
    </Box>
  );
}

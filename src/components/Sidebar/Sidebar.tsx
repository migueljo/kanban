import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";

import { Button } from "@/components/Button/Button";
import { useColorMode } from "@/providers/ColorModeProvider";
import { Typography } from "@/components/Text/Typography";
import { DarkModeSwitch } from "@/components//DarkModeSwitch/DarkModeSwitch";

export function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const colorMode = useColorMode();
  const theme = useTheme();

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box>
            <Box component="header" sx={{ height: "97px" }}>
              <Typography>Logo</Typography>
            </Box>
            <Typography variant="headingS">All boards (3)</Typography>
            <Box sx={{ width: "300px" }}>
              <Stack gap={1}>
                <Button>Platform Launch</Button>
                <Button>Marketing Plan</Button>
                <Button>Roadmap</Button>
                <Button>Create New Board</Button>
              </Stack>
            </Box>
          </Box>
          <Box>
            <DarkModeSwitch />
            <p>{theme.palette.mode} mode</p>
            <Button onClick={colorMode.toggleColorMode}>
              Toggle dark mode
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Box
        sx={{
          position: "fixed",
          left: 0,
          bottom: "32px",
          display: open ? "none" : "block",
        }}
      >
        <Button onClick={() => setOpen(true)}>Open sidebar</Button>
      </Box>
    </>
  );
}

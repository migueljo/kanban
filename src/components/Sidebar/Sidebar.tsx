import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ButtonMui from "@mui/material/Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Text/Typography";
import { DarkModeSwitch } from "@/components//DarkModeSwitch/DarkModeSwitch";

export function Sidebar() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            pb: "47px",
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
          <Box sx={{ width: "85%", margin: "0 auto" }}>
            <DarkModeSwitch />
            <ButtonMui
              variant="text"
              startIcon={<VisibilityOffIcon />}
              fullWidth
              sx={{ mt: 1, textTransform: "none" }}
              onClick={() => setOpen(false)}
            >
              Hide Sidebar
            </ButtonMui>
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

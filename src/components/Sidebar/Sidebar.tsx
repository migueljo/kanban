import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ButtonMui from "@mui/material/Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Text/Typography";
import { DarkModeSwitch } from "@/components//DarkModeSwitch/DarkModeSwitch";
import Image from "next/image";

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
            <Box
              component="header"
              sx={{
                height: "97px",
                paddingLeft: "32px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image src="/logo-dark.svg" alt="Logo" width={150} height={24} />
            </Box>
            <Box sx={{ width: "300px", paddingRight: "24px" }}>
              <Box sx={{ paddingLeft: "32px", marginBottom: "20px" }}>
                <Typography variant="headingS">All boards (3)</Typography>
              </Box>
              <Stack gap={1}>
                <Button kind="edge" startIcon={<SpaceDashboardIcon />}>
                  Platform Launch
                </Button>
                <Button kind="edge" startIcon={<SpaceDashboardIcon />}>
                  Marketing Plan
                </Button>
                <Button kind="edge" startIcon={<SpaceDashboardIcon />}>
                  Roadmap
                </Button>
                <Button
                  kind="edge"
                  startIcon={
                    <>
                      <SpaceDashboardIcon />
                      <AddRoundedIcon />
                    </>
                  }
                >
                  Create New Board
                </Button>
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
        <Button kind="edge" onClick={() => setOpen(true)}>
          <VisibilityRoundedIcon />
        </Button>
      </Box>
    </>
  );
}

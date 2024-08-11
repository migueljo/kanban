import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useTheme } from "@mui/material";

import { Button } from "@/components/Button/Button";
import { useColorMode } from "@/providers/ColorModeProvider";
import { Typography } from "@/components/Text/Typography";

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const colorMode = useColorMode();
  const theme = useTheme();

  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box component="header" sx={{ height: "97px" }}>
            <Typography>Logo</Typography>
          </Box>
          <Box component="nav" sx={{ width: "300px" }}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </Box>
          <Box>
            <p>{theme.palette.mode} mode</p>
            <Button onClick={colorMode.toggleColorMode}>
              Toggle dark mode
            </Button>
          </Box>
        </Box>
      </Drawer>
      <main>
        <header>
          <Typography variant="xl">Platform launch</Typography>
          <Button>Add new task</Button>
        </header>
      </main>
      <Typography variant="xl">Dashboard</Typography>
      <div>
        <Button onClick={() => setOpen(true)}>Toggle drawer</Button>
      </div>
    </div>
  );
}

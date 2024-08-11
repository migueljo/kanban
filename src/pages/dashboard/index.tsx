import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useTheme } from "@mui/material";

import { Button } from "@/components/Button/Button";
import { useColorMode } from "@/providers/ColorModeProvider";

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
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
            <p>Logo</p>
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
          <h1>Platform Launch</h1>
          <Button>Add new task</Button>
        </header>
      </main>
      <h1>Dashboard</h1>
      <div>
        <Button onClick={() => setOpen(true)}>Toggle drawer</Button>
      </div>
    </div>
  );
}

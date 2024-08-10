import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import { Button } from "@/components/Button/Button";

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box>
          <Box component="header" sx={{ height: "97px" }}>
            <p>Logo</p>
          </Box>
          <Box component="nav" sx={{ width: "300px" }}>
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/settings">Settings</a>
              </li>
            </ul>
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

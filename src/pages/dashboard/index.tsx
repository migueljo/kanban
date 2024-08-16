import React from "react";

import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Text/Typography";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <main>
        <header>
          <Typography variant="headingXL">Platform launch</Typography>
          <Button>Add new task</Button>
        </header>
      </main>
      <Typography variant="headingXL">Dashboard</Typography>
    </div>
  );
}

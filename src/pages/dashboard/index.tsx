import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Text/Typography";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { colors } from "@/utils/colors";

function EmptyView() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography variant="bodyM" color={colors.mediumGrey}>
        This board is empty. Create a new column to get started.
      </Typography>
      <Button startIcon={<AddRoundedIcon />}>Add New Column</Button>
    </Box>
  );
}

export default function Dashboard() {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box
          component="header"
          sx={{
            height: "96px",
            backgroundColor: colors.white,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 32px",
          }}
        >
          <Typography variant="headingXL">Platform launch</Typography>
          <Box>
            <Button startIcon={<AddRoundedIcon />}>Add new task</Button>
            <IconButton onClick={console.log} sx={{ marginLeft: "24px" }}>
              <MoreVertRoundedIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: colors.linesLight,
            display: "flex",
            flex: 1,
          }}
        >
          <EmptyView />
        </Box>
      </Box>
    </Box>
  );
}

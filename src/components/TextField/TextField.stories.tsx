import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useDarkMode } from "@/providers/DarkModeProvider";
import { TextField } from "./TextField";

const meta = {
  title: "Inputs/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default text field",
  },
};

export const AllLightVariants = () => {
  return (
    <Box>
      <Stack gap={2}>
        <TextField
          label="TextField(Idle)"
          inputProps={{ onChange: console.log, placeholder: "Placeholder" }}
        />
        <TextField
          label="TextField(Active)"
          inputProps={{ onChange: console.log, value: "With value" }}
        />
        <TextField
          label="TextField(Error)"
          inputProps={{ onChange: console.log }}
          error
          helperText="Error message"
        />
        <TextField
          label="Uncontrolled"
          inputProps={{ onChange: console.log }}
        />
      </Stack>
    </Box>
  );
};

export const AllDarkVariants = () => {
  const colorMode = useDarkMode();

  useEffect(() => {
    colorMode.toggleDarkMode();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Stack gap={2}>
        <TextField
          label="TextField(Idle)"
          inputProps={{ onChange: console.log, placeholder: "Placeholder" }}
        />
        <TextField
          label="TextField(Active)"
          inputProps={{ onChange: console.log, value: "With value" }}
        />
        <TextField
          label="TextField(Error)"
          inputProps={{ onChange: console.log }}
          error
          helperText="Error message"
        />
        <TextField
          label="Uncontrolled"
          inputProps={{ onChange: console.log }}
        />
      </Stack>
    </Box>
  );
};

AllDarkVariants.parameters = {
  backgrounds: { default: "dark" },
};

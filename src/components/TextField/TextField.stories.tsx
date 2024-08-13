import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useColorMode } from "@/providers/ColorModeProvider";
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
        <TextField label="Label" inputProps={{ onChange: console.log }} />
      </Stack>
    </Box>
  );
};

export const AllDarkVariants = () => {
  const colorMode = useColorMode();

  useEffect(() => {
    colorMode.toggleColorMode();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Stack gap={2}></Stack>
    </Box>
  );
};

AllDarkVariants.parameters = {
  backgrounds: { default: "dark" },
};

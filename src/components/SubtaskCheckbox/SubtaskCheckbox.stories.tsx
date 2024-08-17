import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useDarkMode } from "@/providers/DarkModeProvider";
import { SubtaskCheckbox } from "./SubtaskCheckbox";

const meta = {
  title: "Inputs/SubtaskCheckbox",
  component: SubtaskCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof SubtaskCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked",
  },
};

export const NotChecked: Story = {
  args: {
    checked: false,
    label: "Not checked",
  },
};

export const AllLightVariants = () => {
  return (
    <Box>
      <Stack gap={2}>
        <SubtaskCheckbox checked={true} label="Checked (hardcoded)" />
        <SubtaskCheckbox checked={false} label="Not checked (hardcoded)" />
        <SubtaskCheckbox label="Required" required />
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
        <SubtaskCheckbox checked={true} label="Checked (hardcoded)" />
        <SubtaskCheckbox checked={false} label="Not checked (hardcoded)" />
        <SubtaskCheckbox label="Required" required />
      </Stack>
    </Box>
  );
};

AllDarkVariants.parameters = {
  backgrounds: { default: "dark" },
};

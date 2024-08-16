import { useEffect } from "react";
import type { Meta } from "@storybook/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useColorMode } from "@/providers/ColorModeProvider";
import { DarkModeSwitch } from "./DarkModeSwitch";

const meta = {
  title: "Inputs/DarkModeSwitch",
  component: DarkModeSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DarkModeSwitch>;

export default meta;

export const Light = () => {
  return (
    <Box>
      <Stack gap={2}>
        <DarkModeSwitch />
      </Stack>
    </Box>
  );
};

export const Dark = () => {
  const colorMode = useColorMode();

  useEffect(() => {
    colorMode.toggleColorMode();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Stack gap={2}>
        <DarkModeSwitch />
      </Stack>
    </Box>
  );
};

Dark.parameters = {
  backgrounds: { default: "dark" },
};

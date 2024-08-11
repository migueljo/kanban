import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useColorMode } from "@/providers/ColorModeProvider";
import { Typography } from "./Typography";

const meta = {
  title: "Example/Text",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Typography>;

export default meta;

export const AllLightVariants = () => {
  return (
    <Box>
      <Stack gap={2}>
        <Typography variant="xl">Heading XL</Typography>
        <Typography variant="l">Heading L</Typography>
        <Typography variant="m">Heading M</Typography>
        <Typography variant="s">Heading S</Typography>
        <Typography variant="bodyL">Body L</Typography>
        <Typography variant="bodyM">Body M</Typography>
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
      <Stack gap={2}>
        <Typography variant="xl">Heading XL</Typography>
        <Typography variant="l">Heading L</Typography>
        <Typography variant="m">Heading M</Typography>
        <Typography variant="s">Heading S</Typography>
        <Typography variant="bodyL">Body L</Typography>
        <Typography variant="bodyM">Body M</Typography>
      </Stack>
    </Box>
  );
};

AllDarkVariants.parameters = {
  backgrounds: { default: "dark" },
};

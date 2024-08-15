import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useColorMode } from "@/providers/ColorModeProvider";
import { Typography } from "./Typography";

const meta = {
  title: "Typography",
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
        <Typography variant="headingXL">Heading XL</Typography>
        <Typography variant="headingL">Heading L</Typography>
        <Typography variant="headingM">Heading M</Typography>
        <Typography variant="headingS">Heading S</Typography>
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
        <Typography variant="headingXL">Heading XL</Typography>
        <Typography variant="headingL">Heading L</Typography>
        <Typography variant="headingM">Heading M</Typography>
        <Typography variant="headingS">Heading S</Typography>
        <Typography variant="bodyL">Body L</Typography>
        <Typography variant="bodyM">Body M</Typography>
      </Stack>
    </Box>
  );
};

AllDarkVariants.parameters = {
  backgrounds: { default: "dark" },
};

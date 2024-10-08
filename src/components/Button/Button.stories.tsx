import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { useDarkMode } from "@/providers/DarkModeProvider";
import { Button } from "./Button";

const meta = {
  title: "Inputs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLarge: Story = {
  args: {
    children: "Button",
  },
};

export const PrimarySmall: Story = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const SecondaryLarge: Story = {
  args: {
    children: "Button",
    kind: "secondary",
  },
};

export const SecondarySmall: Story = {
  args: {
    children: "Button",
    kind: "secondary",
    size: "small",
  },
};

export const DestructiveLarge: Story = {
  args: {
    children: "Button",
    kind: "destructive",
  },
};

export const DestructiveSmall: Story = {
  args: {
    children: "Button",
    kind: "destructive",
    size: "small",
  },
};

export const AllButtonLightVariants = () => {
  return (
    <Box>
      <Stack gap={2}>
        <Button>Primary Large</Button>
        <Button size="small">Primary Small</Button>
        <Button kind="secondary">Secondary Large</Button>
        <Button kind="secondary" size="small">
          Secondary Small
        </Button>
        <Button kind="destructive">Destructive Large</Button>
        <Button kind="destructive" size="small">
          Destructive Small
        </Button>
        <Button
          kind="edge"
          startIcon={
            <>
              <SpaceDashboardIcon />
              <AddRoundedIcon />
            </>
          }
        >
          Edge Button Large
        </Button>
        <Button
          kind="edge"
          startIcon={
            <>
              <SpaceDashboardIcon />
              <AddRoundedIcon />
            </>
          }
          size="small"
        >
          Edge Button Small
        </Button>
      </Stack>
    </Box>
  );
};

export const AllButtonDarkVariants = () => {
  const colorMode = useDarkMode();

  useEffect(() => {
    colorMode.toggleDarkMode();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Stack gap={2}>
        <Button>Primary Large</Button>
        <Button size="small">Primary Small</Button>
        <Button kind="secondary">Secondary Large</Button>
        <Button kind="secondary" size="small">
          Secondary Small
        </Button>
        <Button kind="destructive">Destructive Large</Button>
        <Button kind="destructive" size="small">
          Destructive Small
        </Button>
        <Button kind="edge">Edge Button Large</Button>
        <Button kind="edge" size="small">
          Edge Button Small
        </Button>
      </Stack>
    </Box>
  );
};

AllButtonDarkVariants.parameters = {
  backgrounds: { default: "dark" },
};

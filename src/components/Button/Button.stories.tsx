import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
  console.log("All variants");
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
      </Stack>
    </Box>
  );
};

export const AllButtonDarkVariants = () => {
  console.log("All dark variants");
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
      </Stack>
    </Box>
  );
};

AllButtonDarkVariants.parameters = {
  backgrounds: { default: "dark" },
};

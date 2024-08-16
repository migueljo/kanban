import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { useColorMode } from "@/providers/ColorModeProvider";
import { Sidebar } from "./Sidebar";

const meta = {
  title: "Compound/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLight: Story = {
  args: {},
};

export const SidebarDark = () => {
  const colorMode = useColorMode();

  useEffect(() => {
    colorMode.toggleColorMode();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Sidebar />;
};

SidebarDark.parameters = {
  backgrounds: { default: "dark" },
};

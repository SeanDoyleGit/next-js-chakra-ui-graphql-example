import type { Meta, StoryObj } from "@storybook/react";

import { DEFAULT_AVATAR_URL } from "@/constants";
import HeaderUI from "./ui";

const meta: Meta<typeof HeaderUI> = {
  component: HeaderUI,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  args: {
    colorMode: "light",
    toggleColorMode: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    username: "Sean Doyle",
    avatarUrl: DEFAULT_AVATAR_URL,
  },
};

export const Unauthenticated: Story = {
  args: {
    avatarUrl: "",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { DEFAULT_AVATAR_URL } from "@/constants";
import Header from "./index";

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
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

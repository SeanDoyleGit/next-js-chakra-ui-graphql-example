import type { Meta, StoryObj } from "@storybook/react";

import { DEFAULT_AVATAR_URL } from "@/constants";
import { Box, Center } from "@chakra-ui/react";
import { LayoutUI } from "./index";

const meta: Meta<typeof LayoutUI> = {
  component: LayoutUI,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const children = (
  <Box h="50vh">
    <Center>Content</Center>
  </Box>
);

export const Unauthenticated: Story = {
  args: {
    children,
  },
};

export const Authenticated: Story = {
  args: {
    username: "Sean Doyle",
    avatarUrl: DEFAULT_AVATAR_URL,
    children,
  },
};

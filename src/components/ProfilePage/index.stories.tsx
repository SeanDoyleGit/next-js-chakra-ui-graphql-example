import { DEFAULT_AVATAR_URL, DEFAULT_COVER_URL } from "@/constants";
import type { Meta, StoryObj } from "@storybook/react";

import ProfilePage from "./index";

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Unauthenticated: Story = {};

export const Authenticated: Story = {
  args: {
    username: "Sean Doyle",
    jobTitle: "Software Engineer",
    avatarUrl: DEFAULT_AVATAR_URL,
    coverUrl: DEFAULT_COVER_URL,
    onLogout: () => {
      console.log("User logged out");
    },
    onUpdateProfile: () => {
      console.log("User profile updated");
    },
  },
};

import { DEFAULT_AVATAR_URL, DEFAULT_COVER_URL } from "@/constants";
import type { Meta, StoryObj } from "@storybook/react";

import ProfilePage from "./index";
import { withColorModeToggleBar } from "../../../.storybook/preview";

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  decorators: [withColorModeToggleBar],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Unauthenticated: Story = {};

export const Authenticated: Story = {
  args: {
    username: "Sean Doyle",
    jobTitle: "Software Engineer",
    avatarUrl: DEFAULT_AVATAR_URL,
    coverUrl: DEFAULT_COVER_URL,
    isLoggedIn: true,
    isLoading: false,
    onLogout: () => {
      console.log("User logged out");
    },
    onUpdateProfile: () => {
      console.log("User profile updated");
    },
  },
};

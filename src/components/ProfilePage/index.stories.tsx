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
		onLogout: () => {
			console.log("User logged out");
		},
		onUpdateProfile: () => {
			console.log("User profile updated");
		},
	},
};

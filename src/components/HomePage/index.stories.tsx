import type { Meta, StoryObj } from "@storybook/react";

import HomePage from "./index";
const meta: Meta<typeof HomePage> = {
	component: HomePage,
	decorators: [
		(Story) => {
			return <Story />;
		},
	],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

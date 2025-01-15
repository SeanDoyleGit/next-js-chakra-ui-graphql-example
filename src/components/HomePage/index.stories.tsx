import type { Meta, StoryObj } from "@storybook/react";
import { withColorModeToggleBar } from "../../../.storybook/preview";

import HomePage from "./index";
const meta: Meta<typeof HomePage> = {
  component: HomePage,
  decorators: [withColorModeToggleBar],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

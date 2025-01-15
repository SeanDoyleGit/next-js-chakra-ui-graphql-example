import type { Meta, StoryObj } from "@storybook/react";

import { withColorModeToggleBar } from "../../../.storybook/preview";
import { LoginModalUI } from "./index";

const meta: Meta<typeof LoginModalUI> = {
  component: LoginModalUI,
  decorators: [withColorModeToggleBar],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};

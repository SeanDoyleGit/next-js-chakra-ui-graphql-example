import type { Meta, StoryObj } from "@storybook/react";

import { LoginModalUI } from "./index";

const meta: Meta<typeof LoginModalUI> = {
  component: LoginModalUI,
  decorators: [
    (Story) => {
      return <Story isOpen={true} />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};

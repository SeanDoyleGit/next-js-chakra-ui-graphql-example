import type { Meta, StoryObj } from "@storybook/react";

import Footer from "./index";

const meta: Meta<typeof Footer> = {
  component: Footer,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import CharacterModal from ".";
import { withColorModeToggleBar } from "../../../.storybook/preview";
import { character } from "./sample";

const meta: Meta<typeof CharacterModal> = {
  component: CharacterModal,
  decorators: [withColorModeToggleBar],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    character: character,
  },
};

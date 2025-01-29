import type { Meta, StoryObj } from "@storybook/react";
import CharacterList from ".";
import { withColorModeToggleBar } from "../../../.storybook/preview";
import { characters } from "./sample";

const meta: Meta<typeof CharacterList> = {
  component: CharacterList,
  decorators: [withColorModeToggleBar],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    characters: characters,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

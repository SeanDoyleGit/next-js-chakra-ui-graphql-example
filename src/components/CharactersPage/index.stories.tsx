import type { Meta, StoryObj } from "@storybook/react";
import { withColorModeToggleBar } from "../../../.storybook/preview";
import { characters } from "../CharacterList/sample";

import CharactersPageUI from "./ui";
const meta: Meta<typeof CharactersPageUI> = {
  component: CharactersPageUI,
  decorators: [withColorModeToggleBar],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    characters,
    selectedCharacterId: null,
    totalPages: 3,
    currentPage: 1,
    updatePage: () => {},
    selectCharacter: () => {},
  },
};

export const CharacterSelected: Story = {
  args: {
    isLoading: false,
    characters,
    selectedCharacterId: characters[0].id,
    totalPages: 3,
    currentPage: 1,
    updatePage: () => {},
    selectCharacter: () => {},
  },
};

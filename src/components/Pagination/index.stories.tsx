import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { withColorModeToggleBar } from "../../../.storybook/preview";
import Pagination, { type PaginationProps } from "./";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  decorators: [withColorModeToggleBar],
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, args.totalPages));
  };

  return <Pagination {...args} currentPage={currentPage} onPrevPage={handlePrevPage} onNextPage={handleNextPage} />;
};

export const Default: Story = {
  render: Template,
  args: {
    isLoading: false,
    currentPage: 1,
    totalPages: 10,
  },
};

export const Loading: Story = {
  render: Template,
  args: {
    isLoading: true,
    currentPage: 1,
    totalPages: 10,
  },
};

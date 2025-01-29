import { Button, HStack, Text } from "@chakra-ui/react";

export interface PaginationProps {
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const Pagination = ({ isLoading, currentPage, totalPages, onPrevPage, onNextPage }: PaginationProps) => {
  return (
    <HStack spacing={4}>
      <Button isLoading={isLoading} onClick={() => onPrevPage()} isDisabled={currentPage <= 1}>
        Previous
      </Button>
      <Text>{isLoading ? "..." : `Page ${currentPage} of ${totalPages}`}</Text>
      <Button isLoading={isLoading} onClick={() => onNextPage()} isDisabled={currentPage >= totalPages}>
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;

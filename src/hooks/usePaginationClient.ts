import { useState } from "react";

export const usePaginationClient = <T,>(items: T[], itemsPerPage: number = 25) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const start = startIndex + 1; // Adding 1 to make it human-readable (1-based index)
  const end = Math.min(endIndex, items.length); // Ensure `end` doesn't exceed the total number of items

  return {
    currentPage,
    paginatedItems,
    handlePageChange,
    totalPages: Math.ceil(items.length / itemsPerPage),
    start,
    end,
  };
};

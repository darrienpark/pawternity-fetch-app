// hooks/usePagination.ts
import { useState } from "react";

export const usePaginationServer = (initialPage: number = 1) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return { currentPage, handlePageChange };
};

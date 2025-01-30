import { useState, useEffect } from "react";
import { useFetchDogs } from "./useFetchDogs";
import { FilterOptions } from "../models/types";

export const usePaginationServer = (filters: FilterOptions) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { dogs, totalResults, pages, isLoading } = useFetchDogs(filters, currentPage);

  const start = (currentPage - 1) * filters.resultsPerPage + 1;
  const end = Math.min(start + filters.resultsPerPage - 1, totalResults);

  useEffect(() => {
    setCurrentPage(1); // Reset page when filters change
  }, [filters]);

  const handlePageChange = (_event: unknown, value: number) => {
    setCurrentPage(value);
  };

  return { currentPage, start, end, totalResults, pages, dogs, isLoading, handlePageChange };
};

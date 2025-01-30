// hooks/useFilters.ts
import { useState } from "react";
import { FilterOptions } from "../util/types";

const initialOptions: FilterOptions = {
  breeds: [] as string[],
  sort: "breed:asc",
  resultsPerPage: 25,
  ageRange: [0, 20],
};

export const useFilters = () => {
  const [filters, setFilters] = useState<FilterOptions>(initialOptions);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, ...newFilters };
    });
  };

  return { filters, handleFilterChange };
};

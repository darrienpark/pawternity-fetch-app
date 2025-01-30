// useFetchDogs.ts
import { useEffect, useState } from "react";
import { FilterOptions } from "../models/types";
import { Dog } from "../models/dog";

export function useFetchDogs(filters: FilterOptions, currentPage: number) {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [pages, setPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    async function fetchDogs() {
      setIsLoading(true);

      try {
        const { breeds, sort, resultsPerPage, ageRange } = filters;

        // Build query with URLSearchParams
        const params = new URLSearchParams();
        breeds.forEach((breed) => params.append("breeds", breed));
        params.set("sort", sort);
        params.set("from", String((currentPage - 1) * resultsPerPage));
        params.set("size", String(resultsPerPage));
        params.set("ageMin", String(ageRange[0]));
        params.set("ageMax", String(ageRange[1]));

        const searchUrl = `https://frontend-take-home-service.fetch.com/dogs/search?${params.toString()}`;
        const searchResponse = await fetch(searchUrl, { credentials: "include" });
        if (!searchResponse.ok) {
          throw new Error("Failed to fetch dog IDs");
        }

        const { resultIds, total } = await searchResponse.json();
        setTotalResults(total);
        setPages(Math.ceil(total / resultsPerPage));

        // Fetch actual dog data by IDs
        const dogResponse = await fetch("https://frontend-take-home-service.fetch.com/dogs", {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          credentials: "include",
          body: JSON.stringify(resultIds),
        });

        if (!dogResponse.ok) {
          throw new Error("Failed to fetch dog data");
        }

        const dogData = await dogResponse.json();
        setDogs(dogData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDogs();
  }, [filters, currentPage]);

  return { dogs, totalResults, pages, isLoading };
}

// useFetchDogs.ts
import { useEffect, useState } from "react";

export function useFetchDogs(filters, currentPage) {
  const [dogs, setDogs] = useState([]);
  const [pages, setPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchDogs() {
      setIsLoading(true);
      try {
        let url = "https://frontend-take-home-service.fetch.com/dogs/search?";
        filters.breeds.forEach((breed: string) => (url += `&breeds=${breed}`));
        url += `&sort=${filters.sort}`;
        url += `&from=${(currentPage - 1) * filters.resultsPerPage}`;
        url += `&size=${filters.resultsPerPage}`;
        url += `&ageMin=${filters.ageRange[0]}`;
        url += `&ageMax=${filters.ageRange[1]}`;

        const response = await fetch(url, { credentials: "include" });
        if (!response.ok) throw new Error("Failed to fetch dog IDs");
        const resData = await response.json();
        setPages(Math.ceil(resData.total / filters.resultsPerPage));

        const dogIds = resData.resultIds;
        const dogResponse = await fetch("https://frontend-take-home-service.fetch.com/dogs", {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          credentials: "include",
          body: JSON.stringify(dogIds),
        });
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

  return { dogs, pages, isLoading };
}

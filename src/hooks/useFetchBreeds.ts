// useFetchBreeds.ts
import { useEffect, useState } from "react";

export function useFetchBreeds() {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchBreeds() {
      setIsLoading(true);
      try {
        const response = await fetch("/api/dogs/breeds", {
          credentials: "include",
        });
        const data = await response.json();
        setBreeds(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBreeds();
  }, []);

  return { breeds, isLoading };
}

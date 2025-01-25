import { CircularProgress } from "@mui/joy";
import { Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import DogList from "../components/dogs/DogList";
import Filter from "../components/Filter";

function BrowsePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchBreeds() {
      const response = await fetch("https://frontend-take-home-service.fetch.com/dogs/breeds", {
        credentials: "include",
      });
      const resData = await response.json();
      setDogBreeds(resData);
    }
    fetchBreeds();
  }, []);

  useEffect(() => {
    async function fetchDogs() {
      setIsLoading(true);
      try {
        let url = "https://frontend-take-home-service.fetch.com/dogs/search?";
        selectedBreeds.forEach((breed) => (url += `&breeds=${breed}`));
        url += "&sort=breed:asc";
        url += `&from=${(currentPage - 1) * 25}`;
        const response = await fetch(url, { credentials: "include" });
        if (!response.ok) throw new Error("Failed to fetch dog IDs");
        const resData = await response.json();
        setPages(Math.ceil(resData.total / 25));

        const dogIds = resData.resultIds;
        const dogResponse = await fetch("https://frontend-take-home-service.fetch.com/dogs", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          credentials: "include",
          body: JSON.stringify(dogIds),
        });

        const dogData = await dogResponse.json();

        // Test delay to show loading state
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setFilteredDogs(dogData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDogs();
  }, [selectedBreeds, currentPage]);

  useEffect(() => {
    setCurrentPage(1); // Reset page when filters change
  }, [selectedBreeds]);

  function handleSetBreeds(breeds) {
    setSelectedBreeds(breeds);
  }

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    setCurrentPage(value);
  }

  return (
    <div className="px-5 sm:px-10 flex-grow flex flex-col">
      <div className="my-8">
        <p className="text-3xl font-bold text-gray-800 text-left">Meet Your New Best Friend</p>
        <p className="text-lg text-gray-600 mt-2 text-left">
          Explore our collection of dogs looking for their next forever home.
        </p>
      </div>

      <Filter breeds={dogBreeds} onSetBreeds={handleSetBreeds} />

      {isLoading ? (
        <div className="flex items-center justify-center flex-grow ">
          <CircularProgress size="lg" />
        </div>
      ) : filteredDogs.length > 0 ? (
        <>
          <DogList data={filteredDogs} />
          <Pagination
            count={pages}
            page={currentPage}
            onChange={handlePageChange}
            className="flex justify-center pb-10"
          />
        </>
      ) : (
        <p>No dogs found for the selected breeds.</p>
      )}
    </div>
  );
}

export default BrowsePage;

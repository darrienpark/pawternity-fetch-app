import { CircularProgress } from "@mui/joy";
import { Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import DogList from "../components/dogs/DogList";
import Filter from "../components/filter/Filter";
import NoResults from "../components/NoResults";
import Layout from "../components/Layout";

const BrowsePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dogBreeds, setDogBreeds] = useState([]);

  const initialOptions = {
    breeds: [] as string[],
    sort: "breed:asc",
    resultsPerPage: 25,
    ageRange: [0, 20],
  };
  const [filters, setFilters] = useState(initialOptions);

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
        filters.breeds.forEach((breed) => (url += `&breeds=${breed}`));
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
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          credentials: "include",
          body: JSON.stringify(dogIds),
        });

        const dogData = await dogResponse.json();

        // Test delay to show loading state
        // await new Promise((resolve) => setTimeout(resolve, 1000));

        setFilteredDogs(dogData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDogs();
  }, [filters, currentPage]);

  useEffect(() => {
    setCurrentPage(1); // Reset page when filters change
  }, [filters]);

  function handleFilterChange(filters) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...filters,
    }));
  }

  function handlePageChange(_event: React.ChangeEvent<unknown>, value: number) {
    setCurrentPage(value);
  }

  return (
    <Layout>
      <div className="flex-grow flex flex-col">
        <div className="my-8">
          <p className="text-3xl font-bold text-gray-800 text-left">Meet your new best friend</p>
          <p className="text-lg text-gray-600 mt-2 text-left">
            Explore our collection of dogs looking for their next forever home.
          </p>
        </div>

        <Filter breeds={dogBreeds} onSetOptions={handleFilterChange} initialOptions={initialOptions} />

        {isLoading ? (
          <div className="flex items-center justify-center flex-grow ">
            <CircularProgress size="lg" />
          </div>
        ) : filteredDogs.length > 0 ? (
          <div className="flex flex-col items-center gap-6 pb-8">
            <DogList data={filteredDogs} />
            <Pagination count={pages} page={currentPage} onChange={handlePageChange} />
          </div>
        ) : (
          <NoResults
            title="No Dogs Found"
            description="We couldn’t find any pups matching your search. Try adjusting your filters or check back later for new arrivals!"
          />
        )}
      </div>
    </Layout>
  );
};

export default BrowsePage;

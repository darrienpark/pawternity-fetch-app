import { CircularProgress } from "@mui/joy";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import DogList from "../components/dogs/DogList";
import Filter from "../components/filter/Filter";
import Layout from "../components/Layout";
import NoResults from "../components/NoResults";
import { useFetchBreeds } from "../hooks/useFetchBreeds";
import { useFetchDogs } from "../hooks/useFetchDogs";
import { useFilters } from "../hooks/useFilters";

const BrowsePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { filters, handleFilterChange } = useFilters();

  const { breeds, isLoading: breedsLoading } = useFetchBreeds();
  const { dogs: filteredDogs, pages, isLoading: dogsLoading } = useFetchDogs(filters, currentPage);

  const isLoading = breedsLoading || dogsLoading;

  useEffect(() => {
    setCurrentPage(1); // Reset page when filters change
  }, [filters]);

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

        <Filter breeds={breeds} filters={filters} onChange={handleFilterChange} />

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

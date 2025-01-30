import { CircularProgress } from "@mui/joy";
import { Pagination } from "@mui/material";
import DogList from "../components/dogs/DogList";
import PaginationControls from "../components/dogs/PaginationControls";
import Filter from "../components/filter/Filter";
import Layout from "../components/Layout";
import NoResults from "../components/NoResults";
import { useFetchBreeds } from "../hooks/useFetchBreeds";
import { useFilters } from "../hooks/useFilters";
import { usePaginationServer } from "../hooks/usePaginationServer";

const BrowsePage = () => {
  const { filters, handleFilterChange, updatePageSize } = useFilters();
  const { breeds, isLoading: isBreedsLoading } = useFetchBreeds();
  const {
    currentPage,
    start,
    end,
    totalResults,
    pages,
    dogs: filteredDogs,
    isLoading: isDogsLoading,
    handlePageChange,
  } = usePaginationServer(filters);

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

        {isBreedsLoading || isDogsLoading ? (
          <div className="flex items-center justify-center flex-grow ">
            <CircularProgress size="lg" />
          </div>
        ) : filteredDogs.length > 0 ? (
          <div className="flex flex-col items-center gap-4 pb-8">
            <PaginationControls
              start={start}
              end={end}
              totalItems={totalResults}
              pageSize={filters.resultsPerPage}
              onPageSizeChange={updatePageSize}
            />
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

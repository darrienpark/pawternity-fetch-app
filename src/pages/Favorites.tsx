import { Button } from "@mui/joy";
import { Pagination } from "@mui/material";
import { useState } from "react";
import DogList from "../components/dogs/DogList";
import MatchModal from "../components/dogs/MatchModal";
import PaginationControls from "../components/dogs/PaginationControls";
import Layout from "../components/Layout";
import NoResults from "../components/NoResults";
import NotificationSnackbar from "../components/NotificationSnackbar";
import { useAppSelector } from "../hooks/useStoreHooks";
import { useFetchMatch } from "../hooks/useFetchMatch";
import { usePaginationClient } from "../hooks/usePaginationClient";

function Favorites() {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const [pageSize, setPageSize] = useState(25);
  const { paginatedItems, currentPage, handlePageChange, totalPages, start, end } = usePaginationClient(
    favorites,
    pageSize
  );
  const { match, modalOpen, isLoading, error, setError, findBestMatch, setModalOpen } = useFetchMatch(favorites);

  return (
    <Layout>
      <div className="flex-grow flex flex-col">
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-800">Your favorite pals</h1>
          <p className="text-lg text-gray-600 my-2">
            Some fur-iends that stuck out to you, ready to be the next addition to your family.
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="flex flex-col items-start gap-4 pb-8">
            <Button
              size="lg"
              variant="solid"
              onClick={findBestMatch}
              loading={isLoading}
              className="w-full sm:w-auto"
              color="primary"
            >
              Find your perfect companion!
            </Button>
            <MatchModal open={modalOpen} onClose={() => setModalOpen(false)} match={match} />

            <PaginationControls
              start={start}
              end={end}
              totalItems={favorites.length}
              pageSize={pageSize}
              onPageSizeChange={setPageSize} // Handle page size change
            />

            <DogList data={paginatedItems} />

            {favorites.length > pageSize && (
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                className="mt-4"
              />
            )}
          </div>
        ) : (
          <NoResults
            title="No Favorites Yet"
            description="Browse through our selection of pups and add them to your favorites to get started!"
          />
        )}
      </div>

      <NotificationSnackbar message={error} open={!!error} onClose={() => setError(null)} variant="danger" />
    </Layout>
  );
}

export default Favorites;

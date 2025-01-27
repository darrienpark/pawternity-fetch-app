import { Pagination } from "@mui/material";
import DogList from "../components/dogs/DogList";
import NoResults from "../components/NoResults";
import { useAppSelector } from "../hooks/hooks";
import { useState } from "react";

function Favorites() {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const hasFavorites = favorites.length > 0;

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  // Paginate Favorites
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFavorites = favorites.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className="flex-grow flex flex-col">
      <div className="my-8">
        <p className="text-3xl font-bold text-gray-800">Your Favorite Pals</p>
        <p className="text-lg text-gray-600 mt-2">
          Some fur-iends that stuck out to you, ready to be the next addition to your family.
        </p>
      </div>

      {hasFavorites ? (
        <div className="flex flex-col items-center gap-6 pb-8">
          <DogList data={paginatedFavorites} />
          {favorites.length > itemsPerPage && (
            <Pagination
              count={Math.ceil(favorites.length / itemsPerPage)}
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
          description="Start exploring and find the perfect companion to add to your favorites!"
        />
      )}
    </div>
  );
}

export default Favorites;

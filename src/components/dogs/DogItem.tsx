import { Dog } from "../../models/types";
import { useFavorites } from "../../hooks/useFavorites";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function DogItem({ dog }: { dog: Dog }) {
  const { isFavorited, toggleFavorite } = useFavorites(dog);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFavorite();
    }
  };

  return (
    <div
      className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 aspect-square"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={toggleFavorite}
    >
      <img src={dog.img} alt={dog.name} className="w-full h-full object-cover" />

      {isFavorited && (
        <FavoriteIcon fontSize="large" className="absolute top-3 right-3 text-red-500 w-6 h-6" aria-label="Favorited" />
      )}

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white text-lg font-semibold">{dog.name}</h3>
      </div>

      <div className="absolute -bottom-28 left-0 w-full bg-gray-900 text-white text-sm p-4 transform opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
        <p>{`Age: ${dog.age}`}</p>
        <p>{`Breed: ${dog.breed}`}</p>
        <p>{`Zip Code: ${dog.zip_code}`}</p>
      </div>
    </div>
  );
}

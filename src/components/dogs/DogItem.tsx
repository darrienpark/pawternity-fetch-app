import { FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Dog } from "../../models/dog";
import { favoritesActions } from "../../store/store";

export default function DogItem({ dog }: { dog: Dog }) {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const isFavorited = favorites.some((favorite) => favorite.id === dog.id);
  const dispatch = useAppDispatch();

  const toggleFavorite = () => {
    if (!isFavorited) {
      console.log(`Added ${dog.name} to favorites!`);
      dispatch(favoritesActions.add(dog));
    } else {
      dispatch(favoritesActions.remove(dog.id));
    }
  };

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
      {/* Image container with full card coverage */}
      <img src={dog.img} alt={dog.name} className="w-full h-full object-cover" />

      {/* Favorite Heart Icon */}
      {isFavorited && <FaHeart className="absolute top-3 right-3 text-red-500 w-6 h-6" aria-label="Favorited" />}

      {/* Title Section */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white text-lg font-semibold">{dog.name}</h3>
      </div>

      {/* Hover Details */}
      <div className="absolute -bottom-28 left-0 w-full bg-gray-900 text-white text-sm p-4 transform opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
        <p>{`Age: ${dog.age}`}</p>
        <p>{`Breed: ${dog.breed}`}</p>
        <p>{`Zip Code: ${dog.zip_code}`}</p>
      </div>
    </div>
  );
}

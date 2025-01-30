import { useCallback } from "react";
import { Dog } from "../models/dog";
import { favoritesActions } from "../store/store";
import { useAppDispatch, useAppSelector } from "./useStoreHooks";

export function useFavorites(dog: Dog) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const isFavorited = favorites.some((favorite) => favorite.id === dog.id);

  const toggleFavorite = useCallback(() => {
    if (!isFavorited) {
      console.log(`Added ${dog.name} to favorites!`);
      dispatch(favoritesActions.add(dog));
    } else {
      dispatch(favoritesActions.remove(dog.id));
    }
  }, [dispatch, isFavorited, dog]);

  return { isFavorited, toggleFavorite };
}

import { useCallback } from "react";
import { favoritesActions } from "../store/store";
import { useAppDispatch, useAppSelector } from "./useStoreHooks";
import { Dog } from "../models/types";

export function useFavorites(dog: Dog) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const isFavorited = favorites.some((favorite) => favorite.id === dog.id);

  const toggleFavorite = useCallback(() => {
    if (!isFavorited) {
      dispatch(favoritesActions.add(dog));
    } else {
      dispatch(favoritesActions.remove(dog.id));
    }
  }, [dispatch, isFavorited, dog]);

  return { isFavorited, toggleFavorite };
}

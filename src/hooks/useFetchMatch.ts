import { useState } from "react";
import { Dog } from "../models/types";
import { notificationActions } from "../store/store";
import { useAppDispatch } from "./useStoreHooks";

export const useFetchMatch = (favorites: Dog[]) => {
  const [match, setMatch] = useState<Dog | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const fetchMatch = async (ids: string[]) => {
    const response = await fetch("/api/dogs/match", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      credentials: "include",
      body: JSON.stringify(ids),
    });

    if (!response.ok) throw new Error("Failed to fetch match");

    return response.json();
  };

  const findBestMatch = async () => {
    if (favorites.length === 0) return;

    setIsLoading(true);

    try {
      const ids = favorites.map((dog) => dog.id);
      const matchData = await fetchMatch(ids);

      const matchedDog = favorites.find((dog) => dog.id === matchData.match) || null;

      setMatch(matchedDog);
      setModalOpen(true);
    } catch (error) {
      dispatch(
        notificationActions.setNotification({
          icon: "danger",
          color: "danger",
          message: error instanceof Error ? error.message : "Unknown error occurred",
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { match, modalOpen, isLoading, findBestMatch, setModalOpen };
};

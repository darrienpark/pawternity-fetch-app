import { useState } from "react";
import { Dog } from "../models/types";

export const useFetchMatch = (favorites: Dog[]) => {
  const [match, setMatch] = useState<Dog | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    setError(null);

    try {
      const ids = favorites.map((dog) => dog.id);
      const matchData = await fetchMatch(ids);

      const matchedDog = favorites.find((dog) => dog.id === matchData.match) || null;

      setMatch(matchedDog);
      setModalOpen(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { match, modalOpen, isLoading, error, setError, findBestMatch, setModalOpen };
};

import { useState, useCallback } from "react";

export function useNavbarState() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return { isMenuOpen, toggleMenu };
}

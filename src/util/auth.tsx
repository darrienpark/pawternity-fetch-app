import { redirect } from "react-router-dom";

export function getTokenDuration() {
  let duration;
  const storedExpirationDate = localStorage.getItem("expiration");
  if (storedExpirationDate) {
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    duration = expirationDate.getTime() - now.getTime();
  }
  return duration;
}

export function isAuthenticated() {
  const duration = getTokenDuration();
  return duration && duration > 0 ? true : false;
}

export function checkAuthLoader() {
  if (!isAuthenticated()) {
    return redirect("/login");
  }

  return null;
}

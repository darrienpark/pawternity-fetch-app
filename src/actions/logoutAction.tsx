import { redirect } from "react-router-dom";
import { isSessionValid } from "../util/auth";
import store, { authActions, notificationActions } from "../store/store";

export async function action() {
  try {
    if (isSessionValid()) {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("An unexpected error occurred!");
      }

      store.dispatch(
        notificationActions.setNotification({
          icon: "success",
          color: "success",
          message: "You have logged out successfully",
        })
      );
    } else {
      store.dispatch(
        notificationActions.setNotification({
          icon: "warning",
          color: "warning",
          message: "Session timed out. Please sign in again to continue",
        })
      );
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

    store.dispatch(
      notificationActions.setNotification({
        icon: "danger",
        color: "danger",
        message: errorMessage,
      })
    );
  }

  // Regardless token invalidation success, present to user with logged out state
  localStorage.removeItem("expiration");
  store.dispatch(authActions.logout());
  return redirect("/");
}

import { redirect } from "react-router-dom";
import { isSessionValid } from "../util/auth";
import store, { authActions } from "../store/store";

// Define return type explicitly
export async function action() {
  try {
    if (isSessionValid()) {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Something went wrong while logging you out. Please try again.");
      }

      store.dispatch(authActions.setSnackbar({ type: "success", message: "You have logged out successfully" }));
    } else {
      store.dispatch(
        authActions.setSnackbar({ type: "warning", message: "Session timed out. Please sign in again to continue" })
      );
    }

    localStorage.removeItem("expiration");
    store.dispatch(authActions.logout());
    return redirect("/");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

    store.dispatch(authActions.setSnackbar({ type: "danger", message: errorMessage }));

    return redirect("/");
  }
}

import { redirect } from "react-router-dom";
import { isSessionValid } from "../util/auth";
import store, { authActions } from "../store/store";

export async function action() {
  if (isSessionValid()) {
    const response = await fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Response(JSON.stringify({ message: "Could not logout user" }), {
        status: 500,
      });
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
}

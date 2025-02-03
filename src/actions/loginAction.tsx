import { redirect } from "react-router-dom";
import store from "../store/store"; // Import the Redux store
import { authActions } from "../store/store";
import { notificationActions } from "../store/store";

export async function action({ request }: { request: Request }) {
  try {
    const data = await request.formData();
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
    };

    const response = await fetch("/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Response(JSON.stringify({ message: "Could not login user" }), {
        status: 500,
      });
    }

    // Store token expiration in local storage to prevent loss on refresh
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());

    store.dispatch(authActions.login());

    return redirect("/browse");
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
  return redirect("/login");
}

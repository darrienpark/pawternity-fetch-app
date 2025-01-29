import { redirect } from "react-router-dom";
import store from "../store/store"; // Import the Redux store
import { authActions } from "../store/store";

export async function action({ request }: { request: Request }) {
  const data = await request.formData();
  const payload = {
    name: data.get("name"),
    email: data.get("email"),
  };

  const response = await fetch("https://frontend-take-home-service.fetch.com/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // Handle any specific error codes here to send back to UI for visualization
  // Example:
  // if (response.status === 422 || response.status === 401) {
  //   return response;
  // }

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
}

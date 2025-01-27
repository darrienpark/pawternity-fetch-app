import { redirect } from "react-router-dom";
import { isAuthenticated } from "../util/auth";

export async function action() {
  if (isAuthenticated()) {
    const response = await fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Response(JSON.stringify({ message: "Could not logout user" }), {
        status: 500,
      });
    }
  }

  localStorage.removeItem("expiration");

  return redirect("/login");
}

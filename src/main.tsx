import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

const router = createBrowserRouter([
  {
    path: "",
    element: <App page={<Home />} />,
    errorElement: <App page={<Error />} />,
  },
  {
    path: "recipes/:id",
    element: <App page={<Recipe />} />,
  },
  {
    path: "profile",
    element: <App page={<Profile />} />,
  },
  {
    path: "notifications",
    element: <App page={<Notifications />} />,
  }
]);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={new QueryClient()}>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </QueryClientProvider>,
);

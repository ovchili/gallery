import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/Layouts/App/App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/assets/styles/base.scss";

const root = document.querySelector("#root") as HTMLElement;
const queryClient = new QueryClient();
createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

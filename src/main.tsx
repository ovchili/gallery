import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/Layouts/App/App";

import "@/assets/styles/base.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = document.querySelector("#root") as HTMLElement;
const queryClient = new QueryClient();
createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

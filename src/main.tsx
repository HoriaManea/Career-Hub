import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { SettingsProvider } from "./contexts/SettingsContext";
import { ShowModalProvider } from "./contexts/ShowModalContext";

import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <ShowModalProvider>
          <App />
        </ShowModalProvider>
      </SettingsProvider>
    </QueryClientProvider>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { SettingsProvider } from "./contexts/SettingsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ShowModalProvider } from "./contexts/ShowModalContext";

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

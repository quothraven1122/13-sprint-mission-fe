import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import "./index.css";
import "./reset.css";
import App from "./App.jsx";
import { ScrollToTop } from "@/components";

const queryClient = new QueryClient();
Sentry.init({
  dsn: "https://71c3cc681066276698b3235819fd78a1@o4511393100398592.ingest.de.sentry.io/4511393104199760",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);

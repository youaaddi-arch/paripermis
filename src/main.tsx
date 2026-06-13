import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FormationsProvider } from "@/lib/formations";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormationsProvider>
        <App />
      </FormationsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

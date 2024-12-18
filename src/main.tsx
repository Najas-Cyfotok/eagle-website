import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Container from "./components/container.tsx";
import Header from "./components/header.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </Container>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Container from "./components/container.tsx";
import Header from "./components/header.tsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <BrowserRouter>
        <Header />
        <App />
        <Footer/>
      </BrowserRouter>
    </Container>
  </StrictMode>
);

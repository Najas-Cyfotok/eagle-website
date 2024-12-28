import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ManufactorProcess from "./pages/ManufactorProcess";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Defining routes for the application */}
        <Route path="/" element={<Home />} /> {/* Route for the Home page */}
        <Route path="/products" element={<Products />} />
        {/* Route for the Products page */}
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* Route for the ProductDetails page with a dynamic id parameter */}
        <Route path="/manufacturing-process" element={<ManufactorProcess />} />
        {/* Route for the ManufactorProcess page */}
        <Route path="/contact" element={<Contact />} />
        {/* Route for the Contact page */}
      </Routes>
    </>
  );
}

export default App;

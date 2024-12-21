import { Route, Routes } from "react-router-dom" 
import Home from "./pages/Home" 
import Products from "./pages/Products" 
import ProductDetails from "./pages/ProductDetails" 

function App() {
  return (
    <Routes> {/* Defining routes for the application */}
      <Route path="/" element={<Home/>}/>  {/* Route for the Home page */}
      <Route path="/products" element={<Products/>}/> {/* Route for the Products page */}
      <Route path="/product/:id" element={<ProductDetails/>}/> {/* Route for the ProductDetails page with a dynamic id parameter */}
    </Routes>
  )
}

export default App 


import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import RootLayout from './Pages/RootLayout';
import AboutPage from './Pages/AboutPage';
import ManufacturingProcessPage from './Pages/ManufacturingProcessPage';
import ProductsPage from './Pages/ProductsPage';
import ContactPage from './Pages/ContactPage';
import ProductDescriptionPage from './Pages/ProductDescriptionPage';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ErrorPage from './Pages/ErrorPage';
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <AboutPage />, 
      },
      {
        path: "products",
        element: <ProductsPage />, 
      },
      {
        path: "product-description/:productId",
        element: <ProductDescriptionPage />, 
      },
      {
        path: "manufacturing-process",
        element: <ManufacturingProcessPage/>, 
      },
      {
        path: "contact-us",
        element: <ContactPage />, 
      },
    ],
  },
]);

function App() {
 return (
     <RouterProvider router={router} />
 )
}

export default App

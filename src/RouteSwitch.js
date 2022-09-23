import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Products from "./components/Products";

const products = [];
fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>json.forEach(product=>products.push(product)));

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products products={products}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch

import React, { useEffect, useState } from "react";
import CardBoard from "./CardBoard";

const toggleFetch = false


const handleCard = (title) => console.log(title)

const Products = () => {
  const fetchProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products?limit=10');
    const items = await data.json();
    setProducts(items);
  };

  const [products, setProducts] = useState([
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ]);

  useEffect(() => { fetchProducts() }, [toggleFetch]);

  return (
    <div className="products">
      <CardBoard cards={products} handleCard={handleCard} />
    </div>
  );
};

export default Products;

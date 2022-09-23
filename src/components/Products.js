import React from "react";
import CardBoard from "./CardBoard";

const products = [];
fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>json.forEach(product=>products.push(product)));

const handleCard = (title) => console.log(title)

const Products = () => {
  return (
    <div>
      <CardBoard cards={products} handleCard={handleCard}/>
    </div>
  );
};

export default Products;

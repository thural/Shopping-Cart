import React from "react";
import CardBoard from "./CardBoard";

const handleCard = (title) => console.log(title)

const Products = ({products:cards}) => {
  return (
    <div>
      <CardBoard cards={cards} handleCard={handleCard}/>
    </div>
  );
};

export default Products;

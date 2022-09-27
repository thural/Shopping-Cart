import React, { useEffect, useState } from "react";
import CardBoard from "./CardBoard";

const Products = ({products, handleCart}) => {

  return (
    <div className="products">
      <CardBoard cards={products} handleCart={handleCart} />
    </div>
  );
};

export {Products};

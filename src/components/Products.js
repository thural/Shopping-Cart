import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import CardBoard from "./CardBoard";

const useStyle = createUseStyles({
  products: {
    margin: 'auto',
    padding: '10vw',
  }
})
const Products = ({ handleCart }) => {

  const classes = useStyle();

  return (
    <div className={classes.products}>
      <CardBoard handleCart={handleCart} />
    </div>
  );
};

export { Products };

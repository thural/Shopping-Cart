import React, { useState, useReducer, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { createUseStyles } from "react-jss"

import { Products } from "./Products";
import Copyright from "./Copyright";
import Contact from "./Contact";
import NavBar from "./Navbar";
import StoreContext from "./Store"
import Home from "./Home";
import Cart from "./Cart";

const useStyles = createUseStyles(
  {
    app: {
      margin: '0',
      padding: '0',
      minWidth: '100%',
      minHeight: '100vh',
      position: 'relative',
      backgroundColor: 'whitesmoke',
    }
  }
);

function cartReducer(state, { id, type, item, count }) {
  const matchesID = (element) => element.id === id;
  const hasInCart = state.findIndex(matchesID) !== -1;

  switch (type) {
    case 'increment':
      if (hasInCart) return state.map(product => {
        if (product.id == id) return { ...product, count: product.count + 1 }
        return product
      })
      else return [...state, { ...item, count: 1 }];
    case 'decrement':
      if (hasInCart && count > 1) return state.map(product => {
        if (product.id == id) return { ...product, count: product.count - 1 }
        return product
      });
      return state.filter(product => product.id !== id);
    case 'remove':
      return state.filter(product => product.id !== id);
    default: return state
  };

};

const App = () => {

  const fetchProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products?limit=10');
    const items = await data.json();
    setProducts(items);
  };

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useReducer(cartReducer, []);

  useEffect(() => { fetchProducts() }, []);

  const handleCart = (action) => { setCart(action) };

  const classes = useStyles();

  return (
    <div className={classes.app}>
      <StoreContext.Provider value={products}>
        <NavBar>
          <Cart cart={cart} handleCart={handleCart} />
        </NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products handleCart={handleCart} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </StoreContext.Provider>
      <Copyright />
    </div>
  );
};

export default App;
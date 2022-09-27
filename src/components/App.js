import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss"
import { Route, Routes } from "react-router-dom";
import { Products } from "./Products";
import NavBar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import Contact from "./Contact";

const useStyles = createUseStyles(
  {
    app: {
      fontSize: '16px',
      padding: '0px',
      width: '100%',
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
      gap: '3rem',
      backgroundColor: 'whitesmoke'
    }
  }
);

const App = () => {

  const fetchProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products?limit=10');
    const items = await data.json();
    console.log(items);
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

  const [cart, setCart] = useState([]);

  const handleCart = (id, action) => {
    console.log(id)
  };

  useEffect(() => { fetchProducts() }, []);
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <NavBar>
        <Cart products={cart} handleCart={handleCart}/>
      </NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
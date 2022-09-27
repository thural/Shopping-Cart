import React from "react";
import cartImg from './cart.svg';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    cartBtn: {
      width: '50px',
      height: '50px',
    },
    cart: {
      position: 'fixed',
      boxSizing: "border-box",
      backgroundColor: 'white',
      top: '0',
      right: '0',
      bottom: '0',
      color: "black",
      padding: '2rem',
      fontSize: '16px',
      margin: '0px',
      padding: '1rem',
      width: '30%',
      display: 'none',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      '& a, a:hover, a:focus, a:active': {
        textDecoration: 'none',
        color: 'inherit',
      },
      '& li': {
        listStyle: "none",
      },
      items: {
        width: '100%',
        display: "grid",
        padding: '1rem',
        gridTemplateColumns: '1fr',
        gridAutoRows: '150px',
        justifyContent: 'space-around',
      },
      item: {
        margin: '0',
        diplay: 'grid',
        gridTemplateColumns: '1fr, 2fr',
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap'
      },
      counter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }
    }
  }
);

const Cart = ({ products, handleCart }) => {

  const classes = useStyles();

  const total = () => {
    let sum = 0;
    products.forEach(({ price, count }) => sum += price * count);
    return sum
  };

  return (
    <>
      <div className={classes.cartBtn}>
        <img src={cartImg} ></img>
      </div>
      <div className={classes.cart}>
        <header>shopping Cart</header>
        <div className={classes.items}>

          {products.map(product => (
            <div key={product.id}className={classes.item}>
              <img src={product.image}></img>
              <div className={classes.details}>
                <h3>{product.title}</h3>
                <p>{/*(product.price * product.count)*/}</p>
                <div className={classes.counter}>
                  <button onClick={handleCart(product.id, 'decrement')}>-</button>
                  <p>{product.count}</p>
                  <button onClick={handleCart(product.id, 'increment')}>+</button>
                </div>
              </div>
            </div>
          ))}

        </div>
        <p>total:</p>
        <div className={classes.buttons}>
          <button>checkout</button>
          <button>close</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
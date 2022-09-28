import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import cartImg from './cart.svg';

const useStyles = createUseStyles(
  {
    cartBtn: {
      width: '2rem',
      height: '2rem',
      zIndex: '1',
      backgroundColor: 'blanchedalmond',
      padding: '10px',
      borderRadius: '50px',
    },
    cartBckg: {
      position: "fixed",
      top:'0',
      right:'0',
      bottom:'0',
      left:'0',
      zIndex: '0',
      display: 'none',
    },
    cart: {
      top: '0',
      right: '0',
      bottom: '0',
      zIndex: '1',
      margin: '0px',
      color: 'black',
      width: '36vmax',
      padding: '1rem',
      display: 'none',
      fontSize: '16px',
      position: 'fixed',
      flexWrap: 'nowrap',
      justifyItems: 'center',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      gridTemplateRows: '1fr 7fr 1fr 1fr',
      boxShadow: 'rgba(136, 136, 136, 0.5) -16px 0px 32px 16px',
      '& a, a:hover, a:focus, a:active': {
        textDecoration: 'none',
        color: 'inherit',
      },
      '& li': {
        listStyle: "none",
      },
      '& .items': {
        gap: '1rem',
        width: '100%',
        display: 'grid',
        overflow: 'auto',
        borderRadius: '1rem',
        gridAutoRows: '150px',
        minHeight: '50%',
        maxHeight: '100%',
        margin: 'auto',
        justifyContent: 'space-around',
        backgroundColor: 'whitesmoke',
        gridTemplateColumns: '100%',
        boxShadow: 'inset 0px 0px 16px -8px black',
      },
      '& .item': {
        margin: '0',
        display: 'grid',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        gridTemplateColumns: '1fr 2fr'
      },
      '& .image': {
        minWidth: '64px',
        minHeight: '64px',
        display: 'flex',
      },
      '& img': {
        maxHeight: '64px',
        maxWidth: '64px',
        margin: 'auto',
      },
      '& .details': {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      '& .counter': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '1rem'
      },
      '& p': {
        alignSelf: 'center',
        fontWeight: '600',
      },
      '& h3': {
        fontSize: '2rem'
      },
      '& .buttons button': {
        position: 'relative',
        margin: '1rem',
        padding: '1rem',
        fontSize: '1rem',
        fontWeight: '600',
        backgroundColor: 'khaki',
        borderRadius: '0.5rem',
        border: '0px',
        boxShadow: '0px 2px 16px -4px #888888'
      },

    }
  }
);

const Cart = ({ products, handleCart }) => {

  const classes = useStyles();

  const [display, setDisplay] = useState('none');

  useEffect(() => {

    const toggleDisplayOnClick = () => {
      if (display === "none") setDisplay("grid")
      else setDisplay("none");
    };

    document.getElementById('cartBtn')
      .addEventListener("click", toggleDisplayOnClick);
    document.getElementById('close')
      .addEventListener("click", toggleDisplayOnClick);
    document.getElementById('cartBckg')
      .addEventListener('click', toggleDisplayOnClick)

    return () => {
      document.getElementById('cartBtn')
        .removeEventListener("click", toggleDisplayOnClick);
      document.getElementById('close')
        .removeEventListener("click", toggleDisplayOnClick);
      document.getElementById('cartBckg')
        .removeEventListener('click', toggleDisplayOnClick)
    };
  }, [display]);

  const total = () => {
    let sum = 0;
    products.forEach(({ price, count }) => sum += price * count);
    return sum
  };

  return (
    <>
      <div id="cartBtn" className={classes.cartBtn}>
        <img src={cartImg} ></img>
      </div>
      <div id="cartBckg" className={classes.cartBckg} style={{ display: display }}></div>
      <div className={classes.cart} style={{ display: display }}>
        <h3>Shopping Cart</h3>

        <div className='items'>
          {products.map(({ id, image, title, count, price }) => (
            <div key={id} className='item'>
              <div className="image"><img src={image} /></div>
              <div className='details'>
                <h5>{title}</h5>
                <p>${(price * count)}</p>
                <div className='counter'>
                  <button onClick={() => handleCart({ id, type: 'decrement' })}>-</button>
                  <p>{count}</p>
                  <button onClick={() => handleCart({ id, type: 'increment' })}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3>total:</h3>
        <div className='buttons'>
          <button>checkout</button>
          <button id="close">close</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
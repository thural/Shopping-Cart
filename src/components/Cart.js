import React, { useState, useEffect } from "react";
import cartImg from './cart.svg';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    cartBtn: {
      width: '2rem',
      height: '2rem',
      backgroundColor: 'blanchedalmond',
      padding: '10px',
      borderRadius: '50px',
    },
    cart: {
      top: '0',
      color: 'black',
      right: '0',
      width: '36%',
      bottom: '0',
      margin: '0px',
      display: 'flex',
      padding: '1rem',
      position: 'fixed',
      flexWrap: 'nowrap',
      fontSize: '16px',
      boxSizing: 'border-box',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: 'white',
      '& a, a:hover, a:focus, a:active': {
        textDecoration: 'none',
        color: 'inherit',
      },
      '& li': {
        listStyle: "none",
      },
      '& .items': {
        gap: '1rem',
        display: 'grid',
        overflow: 'auto',
        gridAutoRows: '150px',
        justifyContent: 'space-around',
        gridTemplateColumns: '100%'
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
        borderRadius: '16px',
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
      },
    }
  }
);

const Cart = ({ products, handleCart }) => {

  const classes = useStyles();

  const [display, setDisplay] = useState('none');

  useEffect(() => {

    const toggleDisplayOnClick = () => {
      if (display === "none") setDisplay("flex")
      else setDisplay("none");
      console.log(display)
    };

    document.getElementById('cartBtn')
      .addEventListener("click", toggleDisplayOnClick);
    document.getElementById('close')
      .addEventListener("click", toggleDisplayOnClick);

    return () => {
      document.getElementById('cartBtn')
        .removeEventListener("click", toggleDisplayOnClick);
      document.getElementById('close')
        .removeEventListener("click", toggleDisplayOnClick);
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
        <p>total:</p>
        <div className='buttons'>
          <button>checkout</button>
          <button id="close">close</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
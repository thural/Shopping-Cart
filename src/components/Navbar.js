import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles(
  {
    navbar: {
      gap: '1vw',
      top: '0',
      color: 'white',
      width: '100%',
      margin: '0px',
      display: 'flex',
      padding: '0 4vw',
      position: 'sticky',
      flexWrap: 'wrap',
      fontSize: '1.5rem',
      boxSizing: 'border-box',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontWeight: '400',
      backgroundColor: 'black',
      '& nav': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem'
      },
      '& a, a:hover, a:focus, a:active': {
        textDecoration: 'none',
        color: 'inherit',
      },
      '& ul': {
        display: "flex",
        listStyle: "none",
        justifyContent: 'center',
        padding:'0',
        gap: '2rem',
      },
      '& li': {
        listStyle: "none",
      }
    }
  }
);

const NavBar = ({ children }) => {

  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <h1>FakeStore</h1>
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/products"><li>Products</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
        {children}
      </nav>

    </div>
  );
};

export default NavBar;
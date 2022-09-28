import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles(
  {
    navbar: {
      gap: '3rem',
      top: '0',
      color: 'white',
      width: '100%',
      margin: '0px',
      display: 'flex',
      padding: '1rem 2rem',
      position: 'sticky',
      flexWrap: 'nowrap',
      fontSize: '1.3rem',
      boxSizing: 'border-box',
      alignItems: 'center',
      backgroundColor: 'black',
      fontWeight: '500',
      '& a, a:hover, a:focus, a:active': {
        textDecoration: 'none',
        color: 'inherit',
      },
      '& ul': {
        display: "flex",
        marginLeft: "auto",
        listStyle: "none",
        justifyContent: 'space-around',
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
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
      {children}
    </div>
  );
};

export default NavBar;
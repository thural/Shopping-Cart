import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles(
  {
     navbar: {
        position: 'sticky',
        top: '0',
        boxSizing: "border-box",
        color: "white",
        fontSize: '16px',
        margin: '0px',
        padding: '1rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        backgroundColor: 'black',
        '& a, a:hover, a:focus, a:active': {
          textDecoration: 'none',
          color: 'inherit',
        },
        '& ul': {
          display: "flex",
          width: "30%",
          marginLeft: "auto",
          listStyle: "none",
          justifyContent: 'space-around',
        },
        '& li': {
          listStyle: "none",
        }
     }
  }
);

const NavBar = ({children}) => {

  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        {children}
      </ul>
    </div>
  );
};

export default NavBar;
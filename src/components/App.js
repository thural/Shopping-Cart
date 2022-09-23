import React from "react";
import {createUseStyles} from "react-jss"
import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import NavBar from "./Navbar";
import Home from "./Home";
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
  const classes = useStyles();
   return (
     <div className={classes.app}>
       <NavBar />   
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
       </Routes>
     </div>
   );
 };
 
 export default App;
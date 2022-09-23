import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import NavBar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";

const App = () => {
   return (
     <div>
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
import React from "react"; //es por defecto, no es necesario colocar este codigo, pero tampoco esta mal dejarlo.
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import  ItemListContainer  from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
   //creamos una props
  const mensaje= "Bienvenid@ a Amazing"

  return (  //creamos componentes
    <>
      <BrowserRouter> 
      <Navbar />
      <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
      </Routes>
      </BrowserRouter>
    </>    
  );
};
//los componentesBoton y componenteTitulo son Props Childrens

export default App

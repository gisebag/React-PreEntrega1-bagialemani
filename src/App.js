import React from "react"; //es por defecto, no es necesario colocar este codigo, pero tampoco esta mal dejarlo.
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Components/ListContainer/ItemListContainer";

const App = () => {
  
  const nombre ="User1"; //creamos una props
  const mensaje= "Bienvenid@ a Canella Roll Bakery"
  return (  //creamos un componente 
    <>
      <Navbar nameUser={nombre} id="123456@ "> 
      </Navbar>
      <ItemListContainer greeting={mensaje} mensaje="La mejor panadería"/>
    </>
    
  );
};

//los componentesBoton y componenteTitulo son Props Childrens

export default App
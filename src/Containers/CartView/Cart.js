import React, { useContext } from 'react'
import { Context } from "../Context/CartContext";
import { Link as LinkRRD } from "react-router-dom";
import './Cart.css'

export const Cart = ({estilo}) => {
  const { cart } = useContext (Context);
  
  return (
    <>
      {cart.lenght === 0 ? (
        <h1 className={estilo ? 'red' : 'green'}>El carrito está Vacio, puedes comenzar a comprar desde <LinkRRD to="/">aquí</LinkRRD></h1>
      ) : (
        <>
        {cart.map ((product)=> (
          <h1 key={product.id}> {product.title}</h1>
        ))};
        </>
      )};
    </>
  );

};


import React, { createContext } from 'react' //vamos a usar la libreria nativa de react con context
import { useEffect } from 'react';
import { useState } from 'react';

export const Context = createContext();


export const CustomProvider = ({children}) => {//patron provider
     // lo mas importate es el Consumer (Informacion) y Provider (Proveedor de la informacion)
    const [cart,setCart] = useState([]);
    const [qty, setQty] = useState(0); //para mostrar en el cartwight
    const [total, setTotal] = useState(0); //para el total de la venta 


    useEffect(() => {
        const cantidad = 0;
        const totalCant = 0;
        cart.forEach(item =>{
            cantidad += item.cantidad;
            totalCant += (item.price * item.cantidad)
        } );
        setQty(cantidad);
        setTotal (totalCant);
    }, [cart]);


    const addItem = (item, cantidad) =>{
        console.log(item);
        console.log("lo seleccionado se cargara al carrito");
    }

    const deleteItem = (id) =>{
        const filtrado = cart.filter(item => item.id !== id);
        setCart(filtrado)
        console.log("elimina los prod. del carrito");
    }

    

    //el "Is"esta pensada para q traiga un T or F
    const IsInCart = (id)=> cart.some(item => item.id === id);

    const clear = ()=>{
        setCart([]);
        setQty(0);
        setTotal(0);
        console.log("borra lo que esta en el carrito");
    }

    return (<Context.Provider value={{cart, qty, total, addItem, deleteItem, clear}}>{children}</Context.Provider>)
};


/* import React, { useState } from "react";
import './itemCount.css';

export const ItemCount = ({stock, onAdd, inicial}) => {
    const [contar, setContar] = useState(inicial);

    const agregarContador = ()=>{
        if(contar<stock){
            setContar(contar+1);
        }

    }
    const restarContador = ()=>{
        if(contar>1){
            setContar(contar-1);
        }
    }
    const agregarAlCarrito = ()=>{
        if(stock!==0){
            onAdd(contar);
        }
    }
    return (
        <div className='contadorProductos'>
            <div className='contador'>
                <button onClick={restarContador}>-</button>
                <p>{contar}</p>
                <button onClick={agregarContador}>+</button>
            </div>
            <button disabled={stock===0} onClick={agregarAlCarrito}>{
                stock === 0 ? <span>no tenemos productos</span>  : <span>Agregar al Carrito</span> 
            }</button>
        </div>
    )
}

export default ItemCount; */





/* const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const subtract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div>
            <button onClick={subtract}>-</button>
            <h2>{count}</h2>
            <button onClick={add}>+</button>
            <button disabled={stock === 0} onClick={() => onAdd(count)}>
                <span>{stock === 0 ? 'No tenemos stock' : 'Agrega al carrito'}</span>
            </button>
        </div>
    );
};

export default ItemCount; */


//setTimeout(()=>{
            //console.log("pasan los segundos");
        //}, 2000);

        //const intervalo = setInterval(() => {
         //   console.log("ping");
        //}, 1000);

/* return(()=>{
    clearInterval(intervalo);
}); */
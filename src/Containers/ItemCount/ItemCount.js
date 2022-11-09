import React, { useState } from "react";
/* import './itemCount.css'; */

const ItemCount = ({stock, onAdd, inicial}) => {  // estos son los props
    const [count, setCount] = useState(inicial);

    const agregarContador = ()=>{
        if ( count < stock ){
            setCount( count + 1 );
        }

    }
    const restarContador = ()=>{
        if ( count > 1 ){
            setCount( count - 1 );
        }
    }
    /* const agregarAlCarrito = ()=>{
        if(stock!==0){
            onAdd(count);
        }
    } */
    return (
        <div className='contadorProductos'>
            <div className='contador'>
                <button className="btn btn-info" onClick={restarContador}>-</button>
                <p className="contar">{count}</p>
                <button className="btn btn-danger" onClick={agregarContador}>+</button>
            </div>
            <div>
                <button className="btn btn-warning" disabled={stock === 0} onClick = {()=>onAdd(count)} >
                    <span>{stock === 0 ? 'No tenemos stock' : 'Agrega al carrito'}</span>
                </button>
            </div>
            
        </div>
    )
}

export default ItemCount; 





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
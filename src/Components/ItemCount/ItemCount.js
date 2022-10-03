import React, {useState} from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount]= useState(initial);
    
    const restar = ()=>{
        if (count > 1) {
            setCount (count - 1);
        }
    }
    const sumar = ()=>{
        if(count < stock){
            setCount (count + 1);
        }
    }

    const carrito = ()=>{
        onAdd(count)
    }

    const compra = ()=>{
        console.log(`El Usuario compra ${count} productos`);
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={restar}>-</button>
            <h2>{count}</h2>
            <button className='btn btn-success' onClick={sumar}>+</button>
                <button disabled={stock === 0} className='btn btn-outline-danger' onClick={carrito}>
                    <span>{stock === 0 ? "Sin Stock" : "Agregar al Carrito"}</span>
                </button>
            <button disabled={stock === 0} className='btn btn-outline-warning' onClick={compra}>Comprar</button>
        </div>
    );
};

export default ItemCount
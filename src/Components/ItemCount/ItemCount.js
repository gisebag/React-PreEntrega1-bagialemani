import React, {useState} from 'react';
import './ItemCount.css'

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
        <div className='cards'>
            <button className='btn btn-primary btn1' onClick={restar}>-</button>
            <p className='contador'>{count}</p>
            <button className='btn btn-success btn1' onClick={sumar}>+</button>
                
                <button disabled={stock === 0} className='btn btn-outline-danger carrito' onClick={carrito}>
                    <span>{stock === 0 ? "Sin Stock" : "Agregar al Carrito"}</span>
                </button>
                <button disabled={stock === 0} className='btn btn-outline-warning comprar' onClick={compra}>Comprar</button>
        </div>
    );
};

export default ItemCount
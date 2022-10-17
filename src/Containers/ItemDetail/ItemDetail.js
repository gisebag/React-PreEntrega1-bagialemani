import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
    
    const onAdd = (numero)=>{
    console.log(numero);
    
        return (
            <div className='detailContainer'>
            <h1 className='titulo'>{product.title}</h1>
            <img src={product.image} alt={product.title} className='imagen'/>
            <p className='descripcion'>{product.description}</p>
            <div className='precio'>
                <p>{product.price}</p>
                <div></div>
            </div>
            <ItemCount stock={10} onAdd={onAdd} inicial={1} className='contador'/>
            </div>
        );
    };
}

export default ItemDetail;
import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'


export const ItemListContainer = ({ greeting, mensaje}) => {
    
    const onAdd = (count) =>{
        console.log(`El Usuario compra ${count} productos`);
    };
    
    
    return (
        <>
            <div className='oferta'>
                <h3>Ver ofertas del día <button className='btn click'>Click Aquí</button></h3>
                
            </div>
            <h3>{greeting}</h3>
            <h4 className='msj'>{mensaje}</h4>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>

        </>
    
    );
};

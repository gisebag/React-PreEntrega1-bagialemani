import React from 'react'
import ItemCount from './ItemCount/ItemCount';

export const ItemListContainer = ({ greeting, mensaje}) => {
    
    const onAdd = (count) =>{
        console.log(`El Usuario compra ${count} productos`);
    };
    
    
    return (
        <>
            <h2>Ofertas del día</h2>
            <h3>{greeting}</h3>
            <h4>{mensaje}</h4>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>

        </>
    
    );
};

import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link as LinkRRD } from "react-router-dom";
import { Context } from "../Context/CartContext";

const ItemDetail = ({ product }) => {
    const [showItemCount, setShowItemCount] = useState(true);
    const { addItem } = useContext(Context);
    

    const onAdd = (count) => {
        addItem(product, count); //esto agrega cantidad
        console.log("se agrega" + count + "unidades");
        setShowItemCount(false);
    };

        return (
            <div className='detailContainer' key={product.id}>
                <h1 className='titulo'>{product.title}</h1>
                <img src={product.image} alt={product.title} className='imagen'/>
                <p className='descripcion'>{product.description}</p>
                    <div className='precio'>
                        <span>${product.price}</span>
                            
                    </div>
                {showItemCount ? (
                    <ItemCount className="prueba" inicial={1} stock={product.stock} onAdd={onAdd} />
                    ) : (
                        <LinkRRD to={'/cart'}>
                            <button className="btn btn-success">Finalizar Compra</button>
                        </LinkRRD>
                    )}
                
            </div>
        );
    
}

export default ItemDetail;
    /* const onAdd = (count) => {
    addItem(product, count); //esto agrega cantidad
    console.log("se agrega" + count + "unidades");
    setShowItemCount(false);
};

    return (
        <div className='detailContainer' key={product.id}>
            <h1 className='titulo'>{product.title}</h1>
            <img src={product.image} alt={product.title} className='imagen'/>
            <p className='descripcion'>{product.description}</p>
                <div className='precio'>
                    <span>${product.price}</span>                            
                </div>
            {showItemCount ? (
                <ItemCount className="prueba" inicial={1} stock={product.stock} onAdd={onAdd} />
                ) : (
                    <LinkRRD to={'/cart'}>
                        <button className="btn btn-success">Finalizar Compra</button>
                    </LinkRRD>
                )}
            
        </div>
    );
 
}

export default ItemDetail; */

/* const ItemDetail = ({Product}) => {
const [showItemCount, setShowItemCount] = useState(true);

    const onAdd = (count) => {
        console.log("se agregas" + count + "unidades");
        setShowItemCount(false);

        return (
            <div className='detailContainer'>
            <h1 className='titulo'>{product.title}</h1>
            <img src={product.image} alt={product.title} className='imagen'/>
            <p className='descripcion'>{product.description}</p>
                <div className='precio'>
                    <span>{product.price}</span>
                        <div></div>
                </div>
            </div>

            {ShowItemCount ? (
                <ItemCount stock={10} onAdd={onAdd} inicial={1} className='contador'/>
                ) : (
                    <LinkRRD to = {'/cart'}>
                        <button>Finalizar Compra</button>
                    </LinkRRD>
                    )
            }
        );

} */

/* const onAdd = (numero) => {
    console.log(numero);
    
        return (
            <div className='detailContainer'>
            <h1 className='titulo'>{product.title}</h1>
            <img src={product.image} alt={product.title} className='imagen'/>
            <p className='descripcion'>{product.description}</p>
                <div className='precio'>
                    <span>{product.price}</span>
                        <div></div>
                </div>
            <ItemCount stock={10} onAdd={onAdd} inicial={1} className='contador'/>
            </div>
        );
    }; */
import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className='container'>
            {products.map((product) =>{
                return<Item key={product.id} product={product}> </Item>
            })}
        </div>
    )
}



export default ItemList
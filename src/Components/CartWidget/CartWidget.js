import React, { useContext } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { orange } from '@mui/material/colors';
import { Context } from '../../Containers/Context/CartContext';

export const CartWidget = () => {
    const {qty} = useContext (Context)
    return (
        <>
        <p className='numberCart'>{qty}</p>
        <ShoppingBagIcon className='shop' sx={{ color: orange[500],fontSize: 40 }} />
        </>
    )
}

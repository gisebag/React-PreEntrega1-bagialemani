import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { orange } from '@mui/material/colors';

export const CartWidget = () => {
    return (
    <ShoppingBagIcon className='shop' sx={{ color: orange[500],fontSize: 40 }} />
    )
}

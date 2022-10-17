import React from "react";
import { Link as LinkRRD } from "react-router-dom";
import './Item.css'

const Item = ({ product }) => {

    const URL = `/producto/ + ${product.id}`
    return (
        <>
        <div className='producto'>
            
            <img className='fotoProducto' src={product.image} alt={product.title} />            
            <p className='tituloProducto'> {product.title}</p>
            <div className='precio'>
                <p>{product.price}</p>
                <div></div>
            </div> 

            <LinkRRD to={URL}>
                <button className="detalle">
                    <span className="text">Ver detalle</span>
                </button>
            </LinkRRD>
            
        </div>
        </>
    )
};



export default Item;









/* <Card className="cartContainer" >
<CardActionArea className="cardAction">
<CardMedia
    component="img"
    height="140"
    image={product.image}
    alt={product.title}
    className="cardMedia"
/>
<CardContent>
    <Typography
        gutterBottom
        variant="h5"
        component="div"
        className="title"
    >
        {product.title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
        ${product.price}
    </Typography>
</CardContent>
</CardActionArea>
<CardActions>

    <Button size="small" color="info">
        <LinkRRD>
        Ver Detalles
        </LinkRRD>
    </Button>


</CardActions>
</Card> */
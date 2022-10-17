import React from "react";
/* import Card from "@mui/material/Card"; */
import './Item.css'
/* import { Link as LinkRRD } from "react-router-dom";
import {
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActionArea,
    CardActions,
} from "@mui/material"; */

const Item = ({ product }) => {
    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    );
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
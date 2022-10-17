/* import { areArraysEqual } from "@mui/base"; */
import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ClockLoader from "react-spinners/ClockLoader";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css" 

export const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
    /* console.log(id); */

    const URL_BASE = 'https://fakestoreapi.com/products';
    const URL_PRODUCTO = `${URL_BASE}/${id}`

    useEffect(()=>{
        setTimeout(() => {
            fetch(URL_PRODUCTO)
            .then(res=>res.json())
            .then(json=>setProduct(json))
            .catch((error)=>{console.log(error);})
            .finally(setLoading(false))
        }, 2000);
    },[id]);

    return (
        <>
            <h1>{greeting}</h1>
            {<div className="containerItemDetail">{loading ? 
                    <ClockLoader
                    color="#ff8809"
                    cssOverride={{}}
                    loading
                    size={75}
                    speedMultiplier={2} /> : <ItemDetail products={product} />} </div>
                    
                    }
        </>
    );
};

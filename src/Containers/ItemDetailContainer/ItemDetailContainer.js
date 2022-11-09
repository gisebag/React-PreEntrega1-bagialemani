//sirve para ver un producto en forma individual
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import "./ItemDetailContainer.css"

export const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const productCollection = collection(db, 'productos');
        const refDoc = doc(productCollection, id);

        getDoc(refDoc)
        .then((result) =>{
            setProduct({
                id: result.id,
                ...result.data(),
            });
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(setLoading(false));


        /* const getProducts = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`); // o sino poner + id pero con comillas
                const data = await res.json();
                setProduct(data);
            } catch {
                console.log("Tira error");
            } finally {
                setLoading(false);
            }
        };
            getProducts();
         */
    }, [id]);

    return (
        <>
            <h1>{greeting}</h1>
            {<>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
        </>
    );
};


/* const URL_BASE = 'https://fakestoreapi.com/products';
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
     */

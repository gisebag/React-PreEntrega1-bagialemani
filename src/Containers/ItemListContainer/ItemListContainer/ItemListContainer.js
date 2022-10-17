import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import ClockLoader from "react-spinners/ClockLoader";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    

    //armamos las rutas para poder identif. por categorias
    const URL_BASE = 'https://fakestoreapi.com/products';
    const URL_CATEGORIA = `${URL_BASE}/category/${id}`

    useEffect(() => {
            
            setTimeout(() => {
                const getProducts = async () => {
                    try {
                        const res = await fetch(id ? URL_CATEGORIA : URL_BASE)             //id ? URL_CATEGORIA : URL_BASE
                        const data = await res.json();
                        setProducts(data);
                    } catch {
                        console.log("error");
                    } finally {
                        setLoading(false);
                    }
                };
                getProducts();
            }, 1000);
            
    }, [id]);

    /* console.log(useEffect); */

    return (
        <>
            <div className='body'>
            <h3>{greeting}</h3>
            <>
                {<>{loading ? 
                    <ClockLoader
                    color="#ff8809"
                    cssOverride={{}}
                    loading
                    size={75}
                    speedMultiplier={2} /> : <ItemList products={products} />} </>
                    
                    }
            </>
            </div>
        </>

    );
};

export default ItemListContainer




{/* {<> {loading ? <h1>Cargando...</h1> : < ItemList products={products} /> } </>
                } */}
/* /* <h4 className='msj'>{mensaje}</h4> */ 

/* <>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />} </> */

/* {loading ? 
                    <ClockLoader
                    color="#36d7b7"
                    cssOverride={{}}
                    loading
                    size={75}
                    speedMultiplier={2}
                    /> : <ItemList products={products} />} */

/* <div className='oferta'>
                <h3>Ver ofertas del día <button className='btn click'>Click Aquí</button></h3>
            </div> */

//esto estaba debajo del h4
/* <ItemCount stock={10} initial={1} onAdd={onAdd}/>

            {
                productos.map((producto)=>{
                    return <h4 key={producto.id}>{producto.nombre}</h4>
                })
            } 
            */


/* //promesas clase 6 (normalmente las promesas se usan en backend)
const obtenerProductos = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        resolve (productos);
    }, 2000);

}) */

/* const onAdd = (count) =>{
        console.log(`El Usuario compra ${count} productos`);
    }; */


/* fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((json)=>setProducts(json))
        .catch((error)=>{
            console.log(error);
        })
        .finally(setLoading(false)); */
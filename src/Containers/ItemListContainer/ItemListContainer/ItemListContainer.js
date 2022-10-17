import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
/* import ClockLoader from "react-spinners/ClockLoader"; */
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    

    //armamos las rutas para poder identif. por categorias
    const URL_BASE = 'https://fakestoreapi.com/products';
    const URL_CATEGORIA = `${URL_BASE}/category/${id}`

    useEffect(() => {
            
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
            
        
    }, [id]);

    console.log(useEffect);
    return (
        <>
            <h3>{greeting}</h3>
            <>
                {<> {loading ? <h1>Cargando...</h1> : < ItemList products={products} /> } </>
                }
            </>

        </>

    );
};

export default ItemListContainer
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

/*  const productos = [ //array de products
{nombre:"manzana", id:0, categoria:"fruta", stock:10, precioxkilo: 500},
{nombre:"peras", id:1, categoria:"fruta", stock:15, precioxkilo: 1000},
{nombre:"zanahoria", id:2, categoria:"verdura", stock:5, precioxkilo: 1500},
{nombre:"batata", id:3, categoria:"verdura", stock:20, precioxkilo: 750},
]; */

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
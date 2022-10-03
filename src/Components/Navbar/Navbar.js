import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { CartWidget } from '../CartWidget/CartWidget';


const Navbar = (props) => {

    const { nameUser, children } = props;

    const categorias = [
        {nombre: "Panaderia", id:0, ruta:"#"},
        {nombre: "Facturas", id:1, ruta:"#"},
        {nombre: "Catering", id:2, ruta:"#"},
    ];

    return (
        <>
        <header>
            <img src={logo} alt="tienda online" />
            <div className='titulo'><p>Canella Roll</p></div>
            <nav>
                {
                    categorias.map((categoria)=>{
                        return <ul><li><a key={categoria.id} href={categoria.ruta}>{categoria.nombre}</a></li></ul>
                    })
                }
            </nav>
            {children}
            <p>Bienvenid@ {nameUser}</p>
            <CartWidget />
        </header>
    
    </>
    )
}

export default Navbar


//{/* <ul>
  //          <li><a href="#">Panadería</a></li>
   //         <li><a href="#">Facturas</a></li>
   //         <li><a href="#">Catering</a></li>
    // </ul> */}



//desestructuracion de codigo
const array = [1,2,3];
//const uno = array[0]
//const dos = array[1]
//const tres = array[2]
//es lo mismo khacer eso:
const [uno, dos, tres]= array
console.log(uno);//1

//otra opcion...
const objeto ={
    x:1,
    y:2,
}

const {x:x, y:y}= objeto
console.log(x);//1
console.log(y);//2

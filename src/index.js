import React from 'react'; //lo busca desde node_modules porque no indica direccion
import ReactDOM from 'react-dom/client';
import './index.css';//busca dentro de la carpeta SRC, no deja buscar por fuera
import App from './App'; //busca por fuera


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);



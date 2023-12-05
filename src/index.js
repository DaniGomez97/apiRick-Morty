import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './componentes/Inicio'
import Personaje from './componentes/Personaje'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={ <Inicio /> } />

          <Route path='/personaje/:id' element={ <Personaje/> }/>

        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>
);

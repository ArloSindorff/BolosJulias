import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/index.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sobre from './Pages/Sobre/index.jsx'
import Bolo from './Pages/Bolos/index.jsx'

const Rotas = () =>{

  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Sobre />} path='/Sobre' />
        <Route element={<Bolo />} path='/Bolo' />
      </Routes>
    </BrowserRouter>
  )

}


ReactDOM.render(<Rotas/> , document.getElementById('root'));

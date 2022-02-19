import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import {ProductsProvider} from './hooks/products'

import './styles/global.scss';

export default function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />    
    
    </Routes>
    
  );  
}


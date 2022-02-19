import React from 'react';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import {ProductsProvider} from './hooks/products'

import './styles/global.scss';

export default function App() {
  return(
    // <Home />  
    <Products />
  );  
}


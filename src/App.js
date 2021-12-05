import {NavBar} from './components/NavBar/NavBar';
import {Footer} from './components/Footer/Footer';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carrousel } from './components/Carrousel/Carrousel';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { CartView } from './components/CartView/CartView';
import { CartContext, CartProvider } from './context/CartContext';
import { Popover, PopoverTrigger, PopoverContent, PopoverCloseButton } from './components/Popover/Popover';

function App() {  

  
  return (

    <CartProvider>
      <BrowserRouter>
          <NavBar/>
          {/* <Carrousel /> */}

          <Popover>
            <PopoverTrigger>Abrir popover</PopoverTrigger>
            <PopoverContent>Contenido popover usando Compound components</PopoverContent>
            <PopoverCloseButton />
          </Popover>





          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element= { <ItemListContainer/> } />
            <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartView/>}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>   
          <hr/>
          <Footer />
        </BrowserRouter>

    </CartProvider>

    ); 
}

export default App;

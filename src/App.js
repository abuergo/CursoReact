import {NavBar} from './components/NavBar/NavBar';
import {Footer} from './components/Footer/Footer';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carrousel } from './components/Carrousel/Carrousel';
import { ItemCount } from './components/ItemCount/ItemCount';
import { PokeApi } from './ejemplos/PokeApi/PokeApi';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartView } from './components/CartView/CartView';

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <Carrousel />

        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category" element= { <ItemListContainer/> } />
          <Route path="/detail" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartView/>}/>
        </Routes>
                
        <hr/>

        <PokeApi />
        <hr/>
        <ItemCount /> 
        
        <Footer />
      </BrowserRouter>
    ); 
}

export default App;

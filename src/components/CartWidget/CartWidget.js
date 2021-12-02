import React, { useContext } from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartWidget.scss'

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext);

    return (
        <>
        <li class="nav-item">
        <Link to="/cart" class="nav-link active px-3 link-nav-hover"> <BsFillCartPlusFill />  </Link>
        </li>
        <li class="nav-item">
        <Link to="/cart" class="nav-link active px-2 link-nav-hover quantity">{totalCantidad()} </Link>
        </li>
        </>
    )
}   

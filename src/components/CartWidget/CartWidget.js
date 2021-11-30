import React from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';


export const CartWidget = () => {
    return (
        <Link to="/cart" class="nav-link active px-3 link-nav-hover"> <BsFillCartPlusFill />  </Link>
    )
}   

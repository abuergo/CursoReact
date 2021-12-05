import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import {BsFillTrashFill} from 'react-icons/bs'

export const CartView = () => {
    const {cart, vaciarCarrito, totalCompra, removerDelCarrito} = useContext(CartContext);

    // return si no hay elementos en el carrito
    if(cart.length === 0){
        return (
                    <> 
                        <h2>Your cart is empty</h2>
                        <hr/>
                        <Link to="/" className="btn btn-dark">Go back</Link>
                   </>
        )
    }

    // return de la vista normal
    return (
        <div className="container my-5">
                <h2>Cart View</h2>
                <hr/> 

                {
                    cart.map((el) => (
                        <div key={el.id}>
                            <h3>{el.nombre}</h3>
                            <p>Price: ${el.precio}</p>
                            <p>Quantity: {el.cantidad}</p>  
                            <button className="btn btn-danger" onClick={() => removerDelCarrito(el.id)}> <BsFillTrashFill/> </button> 
                        </div>
                    ))
                }

                <hr/>
                <h4> Total: ${totalCompra()} </h4>
                <button onClick={vaciarCarrito} className="btn btn-danger">Empty cart</button>
                <Link to="/checkout" className="btn btn-success mx-3">Go to checkout</Link>            
        </div>
    )
}

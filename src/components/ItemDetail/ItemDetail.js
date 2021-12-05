import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'
import { Form } from '../../ejemplos/Form/Form'
import { useCounter } from '../../hooks/useCounter'
import { CartContext } from '../../context/CartContext'

export const ItemDetail = ({item}) => {
    const {counter, increment, decrement} = useCounter(1, item.stock, 1);

    const navigate = useNavigate()

    const { agregarAlCarrito, isInCart } = useContext(CartContext)


        

    const handleGoBack = () => {
        navigate(-1)
    }
    
    const handleAgregar = () => {

        agregarAlCarrito({
                id:item.id,
                precio:item.precio,
                nombre: item.nombre,
                cantidad: counter
            })
    }


    return (
                <div className="col-3 mx-auto">
                <div className="col text-center">
                <img src = {item.img} alt = {item.nombre}/>
                </div>
                <h3 className ="text-center">{item.nombre}</h3>
                <p className ="text-center">Price: ${item.precio}</p>


                {
                        !isInCart(item.id)
                        ?     <div className="d-flex justify-content-center">
                        <ItemCount 
                        increment={increment} 
                        decrement={decrement}
                        onAdd={handleAgregar} 
                        counter={counter} 
                        min = {1}
                        max = {item.stock}
                        />
                        </div>
                        :      <div className="row my-3">
                        <Link to="/cart" className="btn btn-success">Buy now</Link>
                        </div>
                }

                


                {/* <Form /> */}

                <div className="row">
                <button className="btn btn-danger" onClick={handleGoBack}>Go back</button>
                </div>
                </div>
        )
}

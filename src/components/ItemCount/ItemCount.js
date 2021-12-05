import React, {useState, useEffect} from 'react'
import { useCounter } from '../../hooks/useCounter'

export const ItemCount = ( {increment, decrement, onAdd, counter, min, max} ) => {

    const btnRestarConfig = {
        onClick: decrement,
        className: `btn ${counter === min ? "btn-outline-danger" : "btn-outline-primary"}`
    }

    const btnSumarConfig = {
        onClick: increment, 
        className: `btn ${counter === max ? "btn-outline-danger" : "btn-outline-primary"}`
    }
    
    return (
        <div className="">

            <div className="container d-flex justify-content-center align-items-center">
            <button {...btnRestarConfig}>-</button>
            <span className="mx-2">{counter}</span>
            <button {...btnSumarConfig}>+</button>
            </div>
            <div>

                <div className="container">
                <button className="btn btn-dark my-2" onClick={onAdd}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

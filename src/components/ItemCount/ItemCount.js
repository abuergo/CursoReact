import React, {useState, useEffect} from 'react'
import { useCounter } from '../../hooks/useCounter'

export const ItemCount = ( {increment, decrement, onAdd, counter} ) => {

    // useEffect(() => {
    //     window.addEventListener('click', (e) => {
    //         console.log(e)
    //     })
    // }, [])


    return (
        <div className="">

            <div className="container d-flex justify-content-center align-items-center">
            <button onClick={decrement} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={increment} className="btn btn-primary">+</button>
            </div>
            <div>

                <div className="container">
                <button className="btn btn-dark my-2" onClick={onAdd}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

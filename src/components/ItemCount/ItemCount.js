import React, {useState} from 'react'
import { useCounter } from '../../hooks/useCounter'

export const ItemCount = ( {stock=10, initial=0} ) => {

    const {counter, increment, decrement} = useCounter(initial, stock, 0);

    return (
        <div className="container my-5">
            <div className="row">
            <h1 className ="text-center py-2">Desafio contador</h1>
            </div>
            
            <div className="row">
                <div className="col d-flex justify-content-center">
            <button type="button" class="btn btn-dark mx-2" onClick={increment}>+</button>
            </div>
            
            <div className="col d-flex justify-content-center">
            {counter}
            </div>
            
            <div className="col d-flex justify-content-center">
            <button type="button" class="btn btn-dark mx-2" onClick={decrement}>-</button>
            </div>
            </div>
        </div>
    )
}

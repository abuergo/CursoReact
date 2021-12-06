import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    return (
                <div className="col-3">
                <div className="col text-center">
                <img src = {item.img} alt = {item.nombre}/>
                </div>

                <h3 className ="text-center">{item.nombre}</h3>

                <p className ="text-center">Price: ${item.precio}</p>
                <p className ="text-center">{item.descuento}</p>

                <p className ="text-center">Category: {item.category}</p>

                <div className="col text-center">
                <Link to={`/detail/${item.id}`} className="btn btn-primary">See more</Link>
                </div>
                
                </div>
        )
}

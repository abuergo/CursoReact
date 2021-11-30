import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({items}) => {
    return (
        <div className="container row my-6 mx-auto">
            <h2 className="text-center my-4">Releases</h2>
            <hr/>
            {
                items.map((elemento) => <Item key={elemento.id} item={elemento}/>)
            }
        </div>
    )
}

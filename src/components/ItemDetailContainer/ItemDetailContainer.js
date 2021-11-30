import React, { useState, useEffect } from 'react'
import { pedirItem } from '../helpers/pedirDatos';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    console.log(item);

    useEffect(() => {
        pedirItem(1)
            .then(resp => setItem(resp))
    }, [])

    return (
        <div>
            <h2>Item Detail Container</h2>
        </div>
    )
}

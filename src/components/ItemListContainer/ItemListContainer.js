import React, {useState, useEffect} from 'react'
import { pedirDatos } from '../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = (  ) => {
        
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(items.map((elementoItem) => elementoItem.nombre ));

    useEffect(() => {
    
        setLoading(true);

        pedirDatos()
        .then( (resp) => {
            setItems(resp);
        } )
        .catch((err) => {
            console.log(err);
        } )
        .finally(() => {
            setLoading(false);
        } )
    }, []) 

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={items} />
            }
        </div>  
    )
}

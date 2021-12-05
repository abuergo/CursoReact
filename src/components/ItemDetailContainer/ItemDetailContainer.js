import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { pedirItem } from '../helpers/pedirDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {db} from '../../firebase/config'
import {collection, doc, getDoc} from 'firebase/firestore/lite'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    console.log(itemId)
 
    console.log(typeof(Number(itemId)))

    useEffect(() => {
        setLoading(true)

        // Desde firebase 

        const productosRef = collection(db, 'productos')

        const docRef = doc(productosRef, itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem( {
                    id:doc.id,
                    ...doc.data()
                })
            }) 
            .finally(() => {
                setLoading(false)
            } )



        // pedirItem(Number(itemId))
        //     .then(resp => setItem(resp))
        //     .finally(()=>{
        //         setLoading(false)
        //     })
    }, [])

    return (
        <div className="py-5">
            {loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item = {item} />
            }
        </div>
    )
}

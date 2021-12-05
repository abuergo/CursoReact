import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router';
import { CartContext } from '../../context/CartContext';
import { pedirDatos } from '../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import { Loader } from '../Loader/Loader';
import {collection, getDocs, query, where} from 'firebase/firestore/lite'
import { db } from '../../firebase/config';

export const ItemListContainer = (  ) => {
        
    const {usuario} = useContext(CartContext)
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const {categoryId} = useParams();

    useEffect(() => {
    
        setLoading(true);

        // Importo desde firestone

        const productosRef = collection(db, 'productos')

        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef

        getDocs(q)
            .then(resp => {
                const productos = resp.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems(productos)
            })
            .finally(() => {
                setLoading(false)
            })
        // para importar desde data/stock

        // pedirDatos()
        // .then( (resp) => {
        //     if(categoryId){
        //         setItems(resp.filter((el) => el.category === categoryId))
        //     } else {
        //         setItems( resp)
        //     }
        // } )
        // .catch((err) => {
        //     console.log(err);
        // } )
        // .finally(() => {
        //     setLoading(false);
        // } )
    }, [categoryId]) 


    // early return
    if(loading === true){
        return <Loader />
    } 

    return <ItemList items={items}/>

}

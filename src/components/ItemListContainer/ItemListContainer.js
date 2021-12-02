import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router';
import { CartContext } from '../../context/CartContext';
import { pedirDatos } from '../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = (  ) => {
        
    const {usuario} = useContext(CartContext)
    console.log(usuario) 
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const {categoryId} = useParams();

    console.log(items.map((elementoItem) => elementoItem.nombre ));
    console.log(categoryId);

    useEffect(() => {
    
        setLoading(true);

        pedirDatos()
        .then( (resp) => {
            if(categoryId){
                setItems(resp.filter((el) => el.category === categoryId))
            } else {
                setItems( resp)
            }
        } )
        .catch((err) => {
            console.log(err);
        } )
        .finally(() => {
            setLoading(false);
        } )
    }, [categoryId]) 


    useEffect(() => { 
        const clickear = () => {
            console.log("Click en window")
        }
        window.addEventListener('click', clickear)
        return () => {
            window.removeEventListener('click', clickear);
        }
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

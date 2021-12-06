import React, { useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, collection, addDoc, doc, getDocs, updateDoc, writeBatch, query, where, documentId} from 'firebase/firestore/lite'
import { db } from '../../firebase/config'
import { Link } from 'react-router-dom'



export const Checkout = () => {

    const [orderId, setOrderId] = useState(null)
    const {cart, totalCompra, vaciarCarrito} = useContext(CartContext)


    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '', 
        tel: ''
    })

    const [nombre, setNombre] = useState('')



    const generarOrden = (buyer) => {
        const order = {
            buyer : buyer,
            items: cart,
            total: totalCompra(),
            date: Timestamp.fromDate(new Date())
        }

        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')
        const q = query(productosRef, where(documentId(), 'in', cart.map(el => el.id)))

        const batch = writeBatch(db)

        const outOfStock = []

        getDocs(q)
            .then((res) => {
                res.docs.forEach((doc) => {
                    const itemToUpdate = cart.find((prod) => prod.id === doc.id)

                    if(doc.data().stock >= itemToUpdate.cantidad){
                        batch.update(doc.ref, {
                            stock: doc.data().stock - itemToUpdate.cantidad
                        })
                    } else {
                        outOfStock.push(itemToUpdate)
                    }
                })

                if(outOfStock.length === 0){
                    batch.commit()
                            addDoc(ordersRef, order)
                            .then((res) => {
                                setOrderId(res.id)
                                vaciarCarrito()
                })
                } else {
                    alert("Sorry, one element is out of stock. Try again later")
                }

            })

    }

    const ordersRef = collection(db, 'orders')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(values.nombre.length > 4 && values.email.length > 5){
            generarOrden(values)
        } else {
            alert("Please fill in all of the fields")
        }
    }

    const handleInputChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container my-5">                
                {
                    orderId
                        ? 
                            <>
                                <h2>Thank you for your purchase</h2>
                                <p>Your id of order is : {orderId}</p>

                                <Link to="/" className="btn btn-primary">Go back</Link>
                            </>
                        :
                            <>
                                <h2>Summary</h2>
                                <hr/>


                                <form onSubmit = {handleSubmit}>
                                    <input
                                        value = {values.nombre}
                                        onChange = {handleInputChange}
                                        name = "nombre"
                                        className = "form-control my-2"
                                        placeholder = "First name"
                                        type = "text"  
                                    /> 
                                    <input
                                        value = {values.apellido}
                                        onChange = {handleInputChange}
                                        name = "apellido"
                                        className = "form-control my-2"
                                        placeholder = "Last name"
                                        type = "text" 
                                    />
                                    <input
                                        value = {values.email}
                                        onChange = {handleInputChange}
                                        name = "email"
                                        className = "form-control my-2"
                                        placeholder = "Email"
                                        type = "text" 
                                    />
                                    <input
                                        value = {values.tel}
                                        onChange = {handleInputChange}
                                        name = "tel"
                                        className = "form-control my-2"
                                        placeholder = "Phone"
                                        type = "text" 
                                    />

                                    <button className="btn btn-danger" type="submit">Finish</button>

                                </form>


                            </>
                }       
            <hr/>
        </div>
    )
}

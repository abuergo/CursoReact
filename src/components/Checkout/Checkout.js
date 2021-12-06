import React, { useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, collection, addDoc, doc, getDocs, updateDoc, writeBatch, query, where, documentId} from 'firebase/firestore/lite'
import { db } from '../../firebase/config'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string()
    .required('This field is required')
    .max(30, 'Name is too long'),
    apellido: Yup.string()
    .required('This field is required')
    .min(2, 'Last name should be at least 3 characters long'),
    email: Yup.string()
    .email("Invalid email")
    .required("This field is required")
})

export const Checkout = () => {

    const [orderId, setOrderId] = useState(null)
    const {cart, totalCompra, vaciarCarrito} = useContext(CartContext)
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

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     if(values.nombre.length > 4 && values.email.length > 5){
    //         generarOrden(values)
    //     } else {
    //         alert("Please fill in all of the fields")
    //     }
    // }

    // const handleInputChange = (e) => {
    //     setValues({
    //         ...values, 
    //         [e.target.name]: e.target.value
    //     })
    // }

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
                                <h2>Checkout</h2>

                                <p>Please fill out the required fields (*) to finish purchase </p>
                                <hr/>


                                <Formik 
                                    initialValues = {{
                                        nombre: '',
                                        apellido: '',
                                        email: '', 
                                        tel: ''
                                    }}
                                    validationSchema = {schema}
                                    onSubmit = {(values) => {
                                        console.log(values)

                                        generarOrden(values)
                                    }}
                                >

                                    {(formik) => (
                                        
                                        <form onSubmit = {formik.handleSubmit}>
                                    <input
                                        value = { formik.values.nombre }
                                        onChange = {formik.handleChange}
                                        name = "nombre"
                                        className = "form-control my-2"
                                        placeholder = "First name (*)"
                                        type = "text"  
                                    /> 
                                    { formik.touched.nombre && formik.errors.nombre && <p className="alert alert-danger">{formik.errors.nombre}</p>}
                                    <input
                                        value = {formik.values.apellido}
                                        onChange = {formik.handleChange}
                                        name = "apellido"
                                        className = "form-control my-2"
                                        placeholder = "Last name (*)"
                                        type = "text" 
                                    />
                                    {formik.touched.apellido && formik.errors.apellido && <p className="alert alert-danger">{formik.errors.apellido}</p>}

                                    <input
                                        value = {formik.values.email}
                                        onChange = {formik.handleChange}
                                        name = "email"
                                        className = "form-control my-2"
                                        placeholder = "Email (*)"
                                        type = "text" 
                                    />
                                    {formik.touched.email && formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}

                                    <input
                                        value = {formik.values.tel}
                                        onChange = {formik.handleChange}
                                        name = "tel"
                                        className = "form-control my-2"
                                        placeholder = "Phone"
                                        type = "text" 
                                    />
                                    <button className="btn btn-danger" type="submit">Finish</button>
                                </form>
                                        
                                    )}

                                </Formik>
                            </>
                }       
            <hr/>
        </div>
    )
}

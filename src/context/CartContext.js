import { createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ( {children}) => {
    const [cart, setCart] = useState([])

    const removerDelCarrito = (id) => {
        setCart( cart.filter( (el) => el.id !== id ) )
    }

    const agregarAlCarrito = (item) => {
        setCart([...cart, item]) 
    }
    
    const isInCart = (id) => {
        return cart.some( elemento => elemento.id === id)
    }

    const totalCantidad = () => {
        return cart.reduce( (acc, el) => acc + el.cantidad ,0 )
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const totalCompra = () => {
        return cart.reduce((acc, el) => acc + el.cantidad * el.precio, 0)
    }

    return (
        <CartContext.Provider value = { {
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            vaciarCarrito,
            totalCompra,
            removerDelCarrito
          }}>

          {children}
        </CartContext.Provider>     
    )
}
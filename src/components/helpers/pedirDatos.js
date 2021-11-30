import { stock } from "../data/stock";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(stock);
        }, 2000)
    })
}

export const pedirItem = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(stock.find(elemento => elemento.id === id));
        }, 2000)
    })
}
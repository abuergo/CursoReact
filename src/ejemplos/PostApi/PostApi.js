import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

const url = "https://www.coderhouse.com/search";




// q = "string"
// limit = number
// query params
// const url = "https://www.coderhouse.com/search?q=javascript&limit=20"

//   https://www.coderhouse.com/search/{busqueda}/{limit}
// const url = "https://www.coderhouse.com/search/javascript/25"

// fetch(url, {
//     method: 'POST',
//     headers: {
//         Authentication: 'TOKEN abc123'
//     },
//     body: {
//         user: {
//             name: 'John',
//             lastname: 'Doe'
//         }
//     }
// }) 

// fetch(url, {
//     method: 'POST',
//     header: {
//         Authenticatiion: 'Token abc123'
//     },
//     body: {
//         user: { // Le envio un objeto
//             name: "John",
//             lastname: "Doe"
//         }
//     }
// })

export const PostApi = () => {

    const [id, setId] = useState(1)

    const {data} = useFetch('https://jsonplaceholder.typicode.com/posts/' + id, [id])

    // const valor = useMemo(() => {
    //     return unaFuncionPesada()
    // }, [post])

    // const unaFuncion = useCallback(() => {
    //     console.log("Hola mundo")
    // }, [])   


    return (
        <div className="container">
            <button onClick={() => setId(id + 1)}>+1</button>
            { data 
                ?  
                    <>
                        <h2>{data.title}</h2>
                        <p>{data.body}</p>
                        {/* <UnComponente fn={unaFuncion}/> */}
                    </>
                : <h2>Cargando...</h2>
            }
        </div>
    )
}
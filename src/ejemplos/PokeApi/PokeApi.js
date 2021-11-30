import React,{useState} from 'react'
import { useFetch } from '../../hooks/useFetch'

export const PokeApi = () => {

    const [id, setId] = useState(1);
    const {data: pokemon} = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id]);

    const handleSiguiente = () => {
        setId(id + 1);
    }
    
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col text-center">
                    <h2>Desafio Fetch api-call</h2>
                    <button className="btn btn-danger" onClick={handleSiguiente}> Siguiente nombre pokemon </button>
                </div>
            </div>
            {pokemon &&
                <>
                    <h2 className="text-center"> {pokemon.name} </h2>
                </>
            }
        </div>
    )
}

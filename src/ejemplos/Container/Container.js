import React from 'react'

export const Container = ({children}) => {
    console.log(children);
    console.log(children);
    console.log(children);

    return (
        <section>
            <h2>Componente contenedor</h2>

            {children}

        </section>
    )
}

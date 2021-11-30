import React from 'react'
import imagenPrincipal1 from './ImagenesCarrousel/Principal.jpeg'
// import imagenPrincipal2 from './ImagenesCarrousel/0-principal(2).jpg'
// import imagenPrincipal3 from './ImagenesCarrousel/0-principal(3).jpg'

export const Carrousel = () => {
    return (
        <div id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={imagenPrincipal1}
                class="d-block w-100"
                alt="Imagen 1 con logo"
              />
            </div>
            <div class="carousel-item">
              <img
                src={imagenPrincipal1}
                class="d-block w-100"
                alt="Imagen 2 con logo"
              />
            </div>
            <div class="carousel-item">
              <img src={imagenPrincipal1} class="d-block w-100" alt="Imagen 3 con logo" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    )
}

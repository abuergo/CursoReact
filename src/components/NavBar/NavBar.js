import './NavBar.scss'
import logo from './Logo/logo-zeta-shoe-shop.png'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
      <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img src={logo} alt="logo" class="logo-hambrosio" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <CartWidget />
                </li>
              <li class="nav-item">
                <Link to ="/cart" class="nav-link active px-3 link-nav-hover"> Home </Link>
              </li>
               <li class="nav-item">
                <Link to ="/cart" class="nav-link active px-3 link-nav-hover"> Cart </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active px-3 link-nav-hover" href="./pages/reservas.html"
                  >Find a store</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active px-3 link-nav-hover" href="./pages/contacto.html"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>)
}

import './NavBar.scss'
import logo from './Logo/logo-zeta-shoe-shop.png'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
      <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <Link to = "/">
            <img src={logo} alt="logo" class="logo-hambrosio" />
            </Link>
            
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
                <CartWidget />
                
              <li class="nav-item">
                <Link to ="/" class="nav-link active px-3 link-nav-hover"> Home </Link>
              </li>
               <li class="nav-item">
                <Link to ="/category/shoes" class="nav-link active px-3 link-nav-hover"> Shoes </Link>
              </li>
               <li class="nav-item">
                <Link to ="/category/t-shirts" class="nav-link active px-3 link-nav-hover"> T-shirts </Link>
              </li>
               <li class="nav-item">
                <Link to ="/category/shorts" class="nav-link active px-3 link-nav-hover"> Shorts </Link>
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

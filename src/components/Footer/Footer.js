import './Footer.scss'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

export const Footer = () => {
    return (
        <footer class="footer py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-start">
            Zeta Shoe shop &copy; All Rights Reserved
          </div>
          <div class="col-lg-4 my-3 my-lg-0">
            <a class="btn btn-outline-dark btn-social mx-2" href="#"
              ><i> <BsTwitter /></i
            ></a>
            <a class="btn btn-outline-dark btn-social mx-2" href="#"
              ><i> <FaFacebookF /> </i
            ></a>
            <a class="btn btn-outline-dark btn-social mx-2" href="#"
              ><i> <BsInstagram /> </i
            ></a>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a class="link-dark text-decoration-none me-3" href="#"
              >Designed by Alejandro Buergo</a
            >
          </div>
        </div>
      </div>
    </footer>
    )
}
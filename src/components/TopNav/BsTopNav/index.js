import './style.css';
import { Link, useLocation } from "react-router-dom"

function BsTopNav() {
    const location = useLocation();
  
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link class="navbar-brand" to={'/'} >Navbar</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
  
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  
                <li class="nav-item">
                  <Link 
                    className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                    aria-current="page" 
                    to={'/'}
                  >Accueil</Link>
                </li>
  
                <li class="nav-item">
                  <Link 
                    className={location.pathname === "/about" ? "nav-link active" : "nav-link "}
                    aria-current="page" 
                    to={'/about'}
                  >A propos</Link>
                </li>
  
                <li class="nav-item">
                  <Link 
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link "}
                    aria-current="page" 
                    to={'/contact'}
                  >Contact</Link>
                </li>
  
  
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
    )
  }

export default BsTopNav
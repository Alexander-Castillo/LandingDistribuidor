import { entrega2 } from "../../../assets/img/img_resource";
import './../../../css/Navbar.css'
export const Navbar=()=>{
    const navegar = (event, sectionId)=>{
        event.preventDefault();
        const targetElement = document.getElementById(sectionId);
        if (targetElement){
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    }
    return (
        <div className="container-fluid">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-transparent" id="navbar">
                <a href="#Inicio" className="navbar-brand d-flex align-items-center" data-bs-dismiss="offcanvas">
                    <img src={entrega2} alt="Logo" id="imgNavbar" className="align-text-top" />
                    <span className="span-title">
                        <h1 className="ms-2 fw-bold ">Distribuidor de Agua</h1>
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end offcanvas-transparent" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-uppercase fw-bold" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <hr className="my-2 border-3 border-white"/>
                            <li className="nav-item">
                                <a href="#Welcome" className="nav-link text-uppercase fw-bold text-center" onClick={(e)=>navegar(e,'welcome')} data-bs-dismiss="offcanvas">
                                    Home
                                </a>
                            </li>
                            <hr className="my-2 border-3 border-white"/>
                            <li className="nav-item">
                                <a href="#Ruta" className="nav-link text-uppercase fw-bold text-center" onClick={(e)=>navegar(e,'ruta')} data-bs-dismiss="offcanvas">
                                    Rutas
                                </a>
                            </li>
                            <hr className="my-2 border-3 border-white"/>
                            <li className="nav-item">
                                <a href="#Producto" className="nav-link text-uppercase fw-bold text-center" onClick={(e)=>navegar(e,'producto')} data-bs-dismiss="offcanvas">
                                    Productos
                                </a>
                            </li>
                            <hr className="my-2 border-3 border-white"/>
                            <li className="nav-item">
                                <a href="#Contactanos" className="nav-link text-uppercase fw-bold text-center" onClick={(e)=>navegar(e,'contacto')} data-bs-dismiss="offcanvas">
                                    Contactos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
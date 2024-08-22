import { Logo2 } from "../../../assets/img/img_resource";
import './../../../css/Footer.css'
export const Footer=()=>{
    return(
        <footer className="footer text-center text-start text-white">
                <div className="container pt-4 pb-0">
                    <section className="p-2 pt-0">
                        <div className="row">
    
                            <hr className="w-100 clearfix d-md-none"/>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-2">
                                <h6 className="text-uppercase mb-4 fw-bold">
                                    Distribuidora
                                </h6>
                                <hr className="mb-3"/>
                                <div className="d-flex align-items-center  mx-auto" style={{width: '150px', height: '150px'}}>
                                    <img src={Logo2} alt="" className='img-fluid rounded-5' />
                                </div>
                            </div>
                            <hr className="w-100 clearfix d-md-none"/>
                            <div className="col-md-5 col-lg-4 col-xl-4 mx-auto mt-2 text-md-start">
                                <h6 className="text-uppercase mb-4 fw-bold text-center">Contactos</h6>
                                <hr className="mb-3"/>
                                <p><i className="fas fa-phone mr-3"></i><a href='tel:+50369379287' className="text-decoration-none text-white"> +503 6937-9287</a></p>
                                <p><i className="fa-brands fa-whatsapp"></i><a href='https://wa.me/50369379287?text=Quiero%20solicitar%20informaci%C3%B3n%20de%20los%20productos%20de%20Agua%20Azanca.' className="text-decoration-none text-white"> +503 6937-9287</a></p>
                                <p><i className="fa-brands fa-whatsapp"></i><a href='https://wa.me/50370320769?text=Quiero%20solicitar%20informaci%C3%B3n%20de%20los%20productos%20de%20Agua%20Azanca.' className="text-decoration-none text-white"> +503 7032-0769</a></p>
                                <p><i className="fa-solid fa-envelope"></i> <a href='https://mail.google.com/mail/?view=cm&fs=1&to=castillo.jose071977@gmail.com&su=Solicitud%20de%20información&body=Cordiales%20saludos,%20quisiera%20información%20de%20los%20productos%20en%20Agua%20Azanca.' target="_blank" className="text-decoration-none text-white">castillo.jose071977@gmail.com</a></p>
                            </div>
                            <hr className="w-100 clearfix d-md-none"/>
                            <div className="col-md-3 col-lg-2 col-xl-2 col-xxl-2 mx-auto mt-2 text-start">
                                <h6 className="text-uppercase mb-4 fw-bold text-center">Redes</h6>
                                <hr className="mb-3"/>
                                <div className="row px-5">
                                <a href='https://www.facebook.com/DistribuidoraCastillo2024' className="btn btn-outline-light btn-floating m-1" role="button"><i
                                        className="fab fa-facebook-f"></i></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr className="my-2"/>
                    <section className="p-2 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <div className="p-3">
                                    © 2024 Copyright: Distribuidora Castillo.
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                            Web developer by 
                            <a className="text-white text-decoration-none" href='https://github.com/Alexander-Castillo/Alexander-Castillo'> <i className="fa-brands fa-fort-awesome"></i> Castillo.</a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
    );
};
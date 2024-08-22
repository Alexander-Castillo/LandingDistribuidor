import { ProductoDesign } from "../../assets/img/img_resource"

export const Producto = () => {
    return (
        <section id="producto" className="container-fluid Producto">
            <div className="row">
                <div className="col-xl-2 col-xxl-2 d-none d-xl-block"></div>
                <div className="col-lg-12 col-xl-8 col-xxl-8 align-items-center">
                    <br /><br />
                    <p className="fs-1 fw-bold text-center text-primary text-uppercase pt-5 pb-3">
                        nuestros productos
                    </p>
                    <p className="fs-2 fw-bold text-secondary pb-2">
                        Llevar, vender y distribuir producto de calidad y a un buen precio es parte de mi labor.
                    </p>
                    <br />
                    <div className="d-flex justify-content-center">
                        <div className=" col-md-12 col-lg-10 col-xl-10 col-xxl-10">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5">
                                        <img src={ProductoDesign} className="img-fluid rounded-start" alt="..."  />
                                    </div>
                                    <div className="col-md-6 col-lg-7">
                                        <div className="card-body">
                                            <p className="card-text fs-4">Llevandote el mejor producto hasta tu local, tienda, hogar o negocio:</p>
                                            <p className="card-text fs-4">-Garrafón de agua de 19 Litros.</p>
                                            <p className="card-text fs-4">-Galón de agua Azul.</p>
                                            <p className="card-text fs-4">-Galón de agua Transparente.</p>
                                            <p className="card-text fs-4">-Botella de 1 Litro, 12 y 6 unidades.</p>
                                            <p className="card-text fs-4">-Botella de 600 ml, 12 y 6 unidades.</p>
                                            <p className="card-text fs-4">-Bolsa de agua de 500 ml, fardo de 25 unidades.</p>
                                            <p className="card-text fs-4"><i className="fas fa-phone mr-3"></i><a href='tel:+50369379287' className="text-decoration-none "> +503 6937-9287</a> Llamadas telefonicas.</p>
                                            <p className="card-text fs-4"><i className="fas fab fa-whatsapp mr-3"></i><a href='https://wa.me/50369379287?text=Quiero%20solicitar%20informaci%C3%B3n%20de%20los%20productos%20de%20Agua%20Azanca.' className="text-decoration-none "> +503 6937-9287</a> Whatsapp Business.</p>
                                            <p className="card-text fs-4"><i className="fa-brands fa-whatsapp"></i><a href='https://wa.me/50370320769?text=Quiero%20solicitar%20informaci%C3%B3n%20de%20los%20productos%20de%20Agua%20Azanca.' className="text-decoration-none "> +503 7032-0769</a> Whatsapp personal.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-2 col-xxl-2 d-none d-xl-block"></div>
            </div>
        </section>
    )
}
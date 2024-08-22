import { JAC } from "../../assets/img/img_resource";
import { CarouselComponent } from "../../components/Carousel/CarouselComponent";

export const Home=()=>{

    return (
        <section id="welcome" className="container-fluid Welcome m-0 p-0">
            <div className="col-xl-2 col-xxl-2 header m-0 p-0">
                <br /><br />
                <p className="text-center fs-1 fw-bold text-light text-uppercase mt-5 pt-5">
                    distribuidor jose castillo
                </p>
                <img src={JAC} alt="" className="img-fluid rounded mx-auto d-block" />
            </div>
            <div className="row">
                <div className="col-xl-2 col-xxl-2 d-none d-xl-block"></div>
                <div className="col-lg-12 col-xxl-8 align-items-center">
                    <p className="fs-1 fw-bold text-center text-primary text-uppercase">
                        ¡Bienvenidos a Distribuidora Castillo!
                    </p>
                    <p className="text-center fs-4 text-success">
                    (Repartidor Independiente)
                </p>
                    <p className="fs-2 fw-bold text-secondary pb-5">
                        Es un placer presentarnos como tu proveedor y repartidor independiente, de confianza de agua embotellada de la marca Azanca en el departamento de La Paz, soy José Castillo. Estamos aquí para ofrecerte agua pura y fresca, disponible en una variedad de presentaciones para satisfacer todas tus necesidades, ya sea para tu hogar, negocio, o tienda.
                    </p>
                    <CarouselComponent/>
                </div>
                <div className="col-xl-2 col-xxl-2 d-none d-xl-block"></div>
            </div>
        </section>
    );
};
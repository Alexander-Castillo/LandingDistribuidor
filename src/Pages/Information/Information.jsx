import { Mapa } from "../../components/Mapa/Mapa"

export const Information = () => {

    return (
        <section id="ruta" className="container-fluid Ruta">
            <div className="row">
                <div className="col-xl-2 col-xxl-2 d-none d-xl-block"></div>
                <div className="col-lg-12 col-xl-8 col-xxl-8 align-items-center">
                    <br /><br />
                    <p className="fs-1 fw-bold text-center text-primary text-uppercase pt-5">
                        Mi ruta de trabajo
                    </p>
                    <p className="fs-2 fw-bold text-secondary pb-2">
                        Comprometido a ofrecer un servicio de calidad y puntualidad en diversos puntos del departamento de La Paz, con una visión de seguir creciendo para ofrecerles productos de calidad. Necesitas un servicio de agua ennvasada de calidad contactame, será un gusto atenderte.
                    </p>
                    <p className="fs-2 fw-bold text-secondary">
                        Principales puntos de atención:
                    </p>
                    <p className="fs-4 fw-bold text-secondary">
                        (selecciona las zonas marcadas para visualizar los lugares)
                    </p>
                    <div className="card my-4">
                        <div className="card-body">
                            <div style={{ height: "600px", width: "100%" }}>
                                <Mapa/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-xxl-2 d-none d-xl-block"></div>
            </div>
        </section>
    )
}
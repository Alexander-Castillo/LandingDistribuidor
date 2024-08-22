import { CardContacts } from "../../components/Contactos/CardContact"

export const Contactanos=()=>{
    return(
        <section id="contacto" className="container-fluid Contacto">
            <div className="row">
                <div className="col-xl-2 col-xxl-2 d-none d-xl-block"></div>
                <div className="col-lg-12 col-xl-8 col-xxl-8 align-items-center align-content-center">
                    <br /><br />
                    <p className="fs-1 fw-bold text-center text-primary text-uppercase pt-5 pb-3">
                    Contactanos
                    </p>
                    <div className="d-flex justify-content-center pb-5">
                    <CardContacts/>
                    </div>
                </div>
                <div className="col-xl-2 col-xxl-2 d-none d-xl-block"></div>
            </div>
        </section>
    )
}
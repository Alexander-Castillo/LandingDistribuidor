import { Contactos } from "../../assets/img/img_resource"


export const CardContacts =()=>{
    return(
        <div className="card mb-3">
            <img src={Contactos} className="card-img-top" alt="..." height={'400px'} width={'400px'} />
            <div className="card-body">
            <p className="card-text fs-4 text-center">
            🚚 ¡Te lo llevamos hasta la puerta!</p>
                <p className="card-text fs-4">Si deseas mayor información sobre los productos y precios puedes contactarnos: <br /> 
                    Nos encargamos de la entrega directa a tu domicilio o negocio, asegurando<br /> que siempre tengas agua fresca y de calidad a tu disposición.
                    <br />
                <i className="fa-solid fa-check"></i> Puedes llamarnos al siguiente numero: <i className="fas fa-phone mr-3"></i><a href='tel:+50369379287' className="text-decoration-none "> +503 6937-9287</a>
                <br />
                <i className="fa-solid fa-check"></i> Escribenos también al Whatsapp Business: <i className="fa-brands fa-whatsapp"></i><a href='https://wa.me/50369379287?text=Quiero%20solicitar%20informaci%C3%B3n%20de%20los%20productos%20de%20Agua%20Azanca.' className="text-decoration-none "> +503 6937-9287</a>
                <br />
                <i className="fa-solid fa-check"></i> Escribenos también al Whatsapp personal: <i className="fa-brands fa-whatsapp"></i><a href='https://wa.me/50370320769?text=Quiero%20solicitar%20informaci%C3%B3n%20de%20los%20productos%20de%20Agua%20Azanca.' className="text-decoration-none "> +503 7032-0769</a>
                <br />
                <i className="fa-solid fa-check"></i> Escribenos también al correo: <i className="fa-solid fa-envelope"></i> <a href='https://mail.google.com/mail/?view=cm&fs=1&to=castillo.jose071977@gmail.com&su=Solicitud%20de%20información&body=Cordiales%20saludos,%20quisiera%20información%20de%20los%20productos%20en%20Agua%20Azanca.' target="_blank" className="text-decoration-none ">castillo.jose071977@gmail.com</a>
                </p>
            </div>
        </div>
    )
}
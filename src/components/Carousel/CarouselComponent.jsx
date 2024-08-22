import { imagen } from "../../assets/img/img_resource"

export const CarouselComponent =()=>{
    return(
        <div id="autoPlay" className="carousel slide pb-5" data-bs-ride="carousel">
            <div className="carousel-inner">
            {imagen.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={image.src} className="d-block w-100" height={'600px'} alt={image.alt} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#autoPlay" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#autoPlay" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
import React from 'react'
import Photo from '../../../assets/images/photo.png'

const ImagePost = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide pb-5" data-bs-ride="true">
            <div className="carousel-indicators" style={{position:'absolute', bottom:-10}}>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Photo} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={Photo} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={Photo} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
)
}
export default ImagePost

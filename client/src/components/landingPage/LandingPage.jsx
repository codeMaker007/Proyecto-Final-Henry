import React from 'react';
import Carousel from './Carousel';
import style from './assets/LandingPage.module.css'

const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg', 'imagen4.jpg'];

export default function LandingPage() {
    return (
        <div className={style.body}>
            <Carousel images={images} />
            <div className={style.container}>
                <div className={style.section}>
                    <p>Productos mas vendidos</p>
                    <div className={style.productosVendidos}></div>
                    <p>Nuevos productos</p>
                    <div className={style.productosVendidos}></div>
                    <p>Ofertas</p>
                    <div className={style.productosVendidos}></div>
                </div>
            </div>
        </div>
    )
}

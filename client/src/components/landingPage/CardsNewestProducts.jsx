import React  from 'react';
import { Link } from 'react-router-dom';
import style from './assets/ProductCard.module.css';
import noImage from './assets/no-image.jpg';



function CardsNewestProducts({ name, image, id }) {
    
    return (
        <>
            <div id={id} className={style.card}>
                <Link to={`/detail/${id}`} className={style.linkTo}>
                <img src={image} className={style.cardImg} alt='Imagen producto' onError={({ currentTarget }) => {
                    currentTarget.onerror = null; 
                    currentTarget.src = `${noImage}`;
                }} />
            
                <p >{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                </Link>
            </div >
        </>
    )
}

export default (CardsNewestProducts)
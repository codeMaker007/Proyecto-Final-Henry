import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../productCard/ProductCard';
import style from './assets/Favoritos.module.css';

export default function Favoritos() {
    const productosFavoritos = useSelector((state) => state.favoritos.productosFavoritos);

    return (
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.cardsContainer}>
                    {
                        (productosFavoritos.length === 0) ? <div> <h1 className={style.title}>No has agregado nada a favoritos... </h1> </div>
                            : productosFavoritos.map(e => {
                                return (
                                    <ProductCard
                                        key={e.id}
                                        id={e.id}
                                        name={e.name}
                                        price={e.price}
                                        category={e.category}
                                        image={e.image}
                                        description={e.description}
                                    />
                                )
                            })}
                </div>
            </div>
        </div >
    )
}

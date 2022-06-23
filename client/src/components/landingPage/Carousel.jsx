import React, { useState, useEffect } from 'react';
import style from './assets/Carousel.module.css';


export default function Carousel(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(props.images[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            selectNewImage(selectedIndex, props.images);
        }, 5000);
        return () => clearInterval(interval);
    });

    const selectNewImage = (index, images, next = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500);
    }

    const prev = () => {
        selectNewImage(selectedIndex, props.images, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, props.images)
    }

    return (
        <>
            <div className={style.container}>
                <img src={require(`./assets/${selectedImage}`)} alt='carouselimg' onLoad={() => setLoaded(true)} className={loaded ? style.loaded : ''} />

                <svg onClick={prev} className={style.arrowPrev} width="48px" height="48px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48">
                    <polygon fill="#2196F3" points="30.9,43 34,39.9 18.1,24 34,8.1 30.9,5 12,24" />
                </svg>
                <svg onClick={next} className={style.arrowNext} width="48px" height="48px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48">
                    <polygon fill="#2196F3" points="30.9,43 34,39.9 18.1,24 34,8.1 30.9,5 12,24" />
                </svg>
            </div>
        </>

    )
}

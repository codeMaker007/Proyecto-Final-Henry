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

    // const prev = () => {
    //     selectNewImage(selectedIndex, props.images, false)
    // }

    // const next = () => {
    //     selectNewImage(selectedIndex, props.images)
    // }

    return (
        <>
            <div className={style.container}>
                <img src={require(`${selectedImage}`)} alt='carouselimg' onLoad={() => setLoaded(true)} className={loaded ? style.loaded : ''} width='100%' height='500px' />
            </div>
        </>

    )
}

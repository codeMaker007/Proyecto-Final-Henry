import React from 'react';
// import style from './assets/Paginado.module.css';
// import leftArrow from './assets/left-arrow.svg'
// import rightArrow from './assets/right-arrow.svg'
import style from './assets/Paginado.module.css';

export default function Paginado({ ITEMS_PER_PAGE, products, paginado, number, cantCards }) {
    function goToNextPage() {
        if (number === 1 && cantCards <= 10) return btn.disabled = true;
        paginado((pageNumber) => pageNumber + 1)
    }

    function goToPreviousPage() {
        paginado((pageNumber) => pageNumber - 1)
    }

    const btn = document.querySelector('#btnNext');
    function lastPage() {
        console.log(cantCards)
        if (number >= Math.floor((products / ITEMS_PER_PAGE))) btn.disabled = true;
    }

    function enableButton() {
        btn.disabled = false;
    }

    return (
        <nav className={style.container}>
            <ul>
                <button className={style.previous} onClick={() => goToPreviousPage() & enableButton()}> {'<'}  </button>
                <button className={style.number}>{number}</button>
                <button className={style.next} id='btnNext' onClick={() => goToNextPage() & lastPage()}> {'>'} </button>
            </ul>
        </nav>
    )
}
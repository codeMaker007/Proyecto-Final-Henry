import React from 'react';
import style from './assets/Paginado.module.css';
import Pagination from '@mui/material/Pagination';


export default function Paginado({ length, paginado }) {
    // function goToNextPage() {
    //     // if (number === 1 && cantCards <= 10) return btn.disabled = true;
    //     paginado((pageNumber) => pageNumber + 1)
    // }

    // function goToPreviousPage() {
    //     paginado((pageNumber) => pageNumber - 1)
    // }

    // function handleChange(){

    // }
    // function lastPage() {
    //     console.log(cantCards)
    //     if (number >= Math.floor((products / ITEMS_PER_PAGE))) btn.disabled = true;
    // }

    // function enableButton() {
    //     btn.disabled = false;
    // }

    return (
        <nav className={style.container}>
            <ul>

                <Pagination count={Math.ceil(length)} variant="outlined" shape="rounded" onChange={(e, value) => paginado(value)} />
                {/* <button className={style.previous} onClick={() => goToPreviousPage() & enableButton()}> {'<'}  </button> */}
                {/* <button className={style.number}>{number}</button> */}
                {/* <button className={style.next} id='btnNext' onClick={() => goToNextPage() & lastPage()}> {'>'} </button> */}
            </ul>
        </nav>
    )
}
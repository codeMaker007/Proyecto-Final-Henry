import React, { useEffect, useState } from 'react'
import ProductCard from '../productCard/ProductCard';
import { useSelector, connect } from 'react-redux';
import { getAllProducts } from '../../redux/actions/productsA';
import style from './assets/Products.module.css';
import Filtrado from './Filtrado';
import Paginado from './Paginado';

const ITEMS_PER_PAGE = 9;

function Products({ getAllProducts }) {
    const products = useSelector((state) => state.products.products);
    const [currentPage, setCurrentPage] = useState(1);

    const indexLastCountrie = currentPage * ITEMS_PER_PAGE;
    const indexFirstCountrie = indexLastCountrie - ITEMS_PER_PAGE;
    const currentProducts = products.slice(indexFirstCountrie, indexLastCountrie);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        getAllProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);

    if (currentPage < 1) setCurrentPage(1);
    // if (currentPage >= Math.trunc((products.length / ITEMS_PER_PAGE))) setCurrentPage(1);
    return (
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.containerFilter}><Filtrado /></div>
                <div className={style.containerCards}>
                    {currentProducts.map(e => {
                        return (
                            <ProductCard
                                id={e.id}
                                key={e.id}
                                name={e.name}
                                price={e.price}
                                category={e.categories}
                                image={e.image}
                                description={e.description}
                                stock={e.stock}
                                quantity={e.quantity}
                            />
                        )
                    })}
                </div>
            </div>
            <Paginado ITEMS_PER_PAGE={ITEMS_PER_PAGE} products={products.length} paginado={paginado} number={currentPage} cantCards={products.length} />
        </div >
    )
}


export default connect(null, { getAllProducts })(Products)
import React from 'react';
import { useSelector, connect } from 'react-redux';
import { resetTotal } from '../../redux/actions/carritoA';
import { Link } from 'react-router-dom';
import style from './assets/Carrito.module.css';
import CarritoCards from './CarritoCards';


function Carrito() {
    const products = useSelector((state) => state.carrito);

    return (
        <div className={style.products}>
            {
                (products.productosCarrito.length === 0)
                    ? <div> <br />
                        <h1 className={style.title}>No has agregado productos al carrito... </h1>
                        <Link to="/products" > <button className={style.verProductos}>Ver productos</button> </Link>
                    </div>
                    : products.productosCarrito.map(e =>
                    (< CarritoCards
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        image={e.image}
                        price={e.price}
                        stock={e.stock}
                        quantity={e.quantity}
                    />
                    ))
            }

        </div>
    )
}


export default connect(null, { resetTotal })(Carrito)

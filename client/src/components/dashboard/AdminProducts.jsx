import React from "react";
import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminProducts } from "../../redux/actions/adminProductsA";
import CardAdminProducts from './CardAdminProducts';
import { Link } from "react-router-dom";
// import UpdateProduct from './UpdateProduct';

export default function AdminProd() {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.adminProductsR.products);

    useEffect(() => {
        dispatch(adminProducts())
    }, [dispatch]);



    return (
        <div>
            <div>
                {product.map(e => {

                    return (
                        <Fragment >
                            <CardAdminProducts
                                id={e.id}
                                key={e.id}
                                name={e.name}
                                price={e.price}
                                stock={e.stock}
                                discount={e.discount}
                                amountSold={e.amountSold}
                                categories={e.categories}
                                freeShipping={e.freeShipping}
                                brand={e.brand}
                                description={e.description}
                                disabled={e.disabled}

                            />
                            {/* <UpdateProduct /> */}
                            <Link to={"/up/" + e.id}>Modificar producto</Link>

                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}


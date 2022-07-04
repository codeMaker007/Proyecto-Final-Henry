import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import style from './assets/UpdateProduct.module.css';
import { UpdateProductA } from '../../redux/actions/DashboardUpdateProductA'; //   UpdateProductR.UpdateProduct
import {useLocation} from "react-router-dom";


export default function UpdateProduct() {
 
    const location = useLocation()
    let id = (location.pathname.substring(4,location.pathname.length))
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    // const [input, setInput] = useSelector ((state) => state.DashboardUpdateProductR.productoscreados); 
    const [input, setInput] = useState({
        name: "", image: "", price: "", description: "", stock: "", categories: "", discount: "", brand: "", freeShipping: "",
    })

    // useEffect(() => {
    //     dispatch (UpdateProductA(props.match.params.id));
    // }, [dispatch])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(UpdateProductA(id, input))
        // console.log("componente", )
        // await axios.put(`/ProductDetail/${id}`,({name, image, price, description, categories, }))
        alert("Producto modificado con exito")
        // setInput({
        //     name: "",
        //     image: "",
        //     price: "",
        //     description: "",
        //     categories: "",
        //     stock: "",
        //     brand: "",
        //     freeShipping: "",
        //     discount: "",
        // })
        
        
    }


    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }
    

    function handleCheck(e) {

            setInput({
                ...input,
                categories: e.target.value
            })
    }

    function handlefreeShipping(e) {
      
            setInput({
                ...input,
                freeShipping: e.target.value
            })
        
    }

    return (
        <div>

            <form className={style.contenedor} onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <input
                        // maxlength = "30"
                        className={style.input}
                        placeholder="Nombre del Producto: (*)"
                        autoComplete="off"
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.name && (<p className={style.error}>{errors.name}</p>)}
                </div>
                <div><br />
                    <input 
                        className={style.input}
                        type="text"
                        value={input.image}
                        autoComplete="off"
                        name='image'
                        placeholder="Imagen del producto: (*)"
                        onChange={(e) => handleChange(e)} />
                    {/* {errors.image && (<p className={style.error}>{errors.image}</p>)} */}
                </div>

                <div><br />
                    <input
                        className={style.input}
                        autoComplete="off"
                        type="number"
                        value={input.price}
                        name='price'
                        placeholder="Precio del producto: (*)"
                        onChange={(e) => handleChange(e)}
                    />
                    {/* {errors.price && (<p className={style.error}>{errors.price}</p>)} */}
                </div>

                <div><br />
                    <input
                        className={style.input}
                        autoComplete="off"
                        type="number"
                        value={input.discount}
                        name='discount'
                        placeholder="Descuentos:      %     (*)"
                        onChange={(e) => handleChange(e)}
                    />
                    {/* {errors.discount && (<p className={style.error}>{errors.discount}</p>)} */}
                </div>

                
                <div><br />
                    <input
                        className={style.input}
                        autoComplete="off"
                        type="number"
                        value={input.stock}
                        name='stock'
                        placeholder="Stock del producto: (*)"
                        onChange={(e) => handleChange(e)}
                    />
                    {/* {errors.stock && (<p className={style.error}>{errors.stock}</p>)}<br /> */}
                </div>

                <div><br />
                    <input
                        className={style.input}
                        autoComplete="off"
                        type="text"
                        value={input.brand}
                        name='brand'
                        placeholder="Marca del producto: (*)"
                        onChange={(e) => handleChange(e)}
                    />
                    {/* {errors.brand && (<p className={style.error}>{errors.brand}</p>)}<br /> */}
                </div>
                <div><br />
                    
                        <textarea 
                        className={style.input}
                        placeholder="Descripción: (*)"
                        // autoComplete="off"
                        type="text"
                        value={input.description}
                        name="description"
                        onChange={(e) => handleChange(e)}
                    />
                    {/* {errors.description && (<p className={style.error}>{errors.description}</p>)} */}
                </div>

                <br />
                <select onChange={e => handlefreeShipping(e)} value={input.freeShipping} className={style.envio} >

                <option value="All" hidden>¿Envio gratis?</option>

                <option value="false">No</option>
                <option value="true">Si</option>
                </select> <br /><br />


                <select onChange={e => handleCheck(e)} value={input.categories} className={style.categorias} >

                    <option value="All" hidden>Elige una categoria</option>

                    <option value="Auriculares">Auriculares</option>
                    <option value="Fuente de alimentación">Fuente de alimentación</option>
                    <option value="Gabinete">Gabinete</option>
                    <option value="HDD">HDD</option>
                    <option value="Micro-procesador">Micro-procesador</option>

                    <option value="Micrófono">Micrófono</option>
                    <option value="Monitor">Monitor</option>
                    <option value="MotherBoard">MotherBoard</option>
                    <option value="Mouse">Mouse</option>
                    <option value="Mousepad">Mousepad</option>

                    <option value="M.2NVme">M.2NVme</option>
                    <option value="Parlante">Parlante</option>
                    <option value="Placa de video">Placa de video</option>
                    <option value="RAM">RAM</option>
                    <option value="Refrigeración">Refrigeración</option>

                    <option value="Sillas">Sillas</option>
                    <option value="SSD">SSD</option>
                    <option value="Teclados">Teclados</option>
                    <option value="Webcam">Webcam</option>


                    {/* {errors.categories && (<p className={style.error}><p className="error" >{errors.categories}</p></p>)} */}
                </select> <br /> <br />


                <button className={style.boton1} type='submit'>Modificar Producto</button>
                <br />
              
            </form>
        </div>
    )




}





























// function Producto({ getOneProduct }) {
//     const dispatch = useDispatch();
//     const productsInCarrito = useSelector((state) => state.carrito.productosCarrito);
//     const location = useLocation();
//     const idProduct = location.pathname.substring(8, location.pathname.length);
//     const productDetail = useSelector((state) => state.detailProduct.product);
//     const [modal, setModal] = useState({
//         open: false,
//         type: ''
//     });

//     useEffect(() => {
//         getOneProduct(idProduct)
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])

//     function stockDisponible() {
//         if (productDetail.stock > 0) return (<p className={style.stockDisponible}>Stock disponible</p>)
//         else return (<p className={style.stockNoDisponible}> Stock no disponible </p>)
//     }

//     function tipoEnvio() {
//         if (productDetail.freeShipping) return (<p className={style.envio}>Envio gratis</p>)
//         else return (<p className={style.envio}>Calcule su envio <Link to='/'>aquí</Link></p>)
//     }

//     function descuento() {
//         if (productDetail.discount > 0) {
//             let oferta = (productDetail.discount / 100) * productDetail.price
//             return (
//                 <div>
//                     <p className={style.antes}>ANTES: ${(productDetail.price).toFixed(2)}</p>
//                     <p className={style.despues}>AHORA: ${(productDetail.price - oferta).toFixed(2)} <span className={style.green}>%{productDetail.discount} OFF</span></p>
//                 </div>
//             )
//         }
//         else return (<p className={style.despues}>${productDetail.price}</p>)
//     }

//     function handleCarrito() {
//         const check = productsInCarrito.some(e => e.id === productDetail.id);
//         if (check) return setModal({ ...modal, open: true, type: 'error' })
//         else {
//             dispatch(addProductCarrito([{
//                 id: productDetail.id,
//                 name: productDetail.name,
//                 image: productDetail.image,
//                 price: productDetail.price,
//                 stock: productDetail.stock
//             }]))
//             setModal({ ...modal, open: true, type: 'success' })
//         }
//     }

//     return (
//         <>
//             <div className={style.body}>
//                 <p className={style.categories}><Link to='/products'>Productos</Link> {'>'} <Link to='/products'>{productDetail.categories}</Link> </p>

//                 <div className={style.productCard}>
//                     <img src={productDetail.image} className={style.cardImg} alt='Imagen producto' onError={({ currentTarget }) => {
//                         currentTarget.onerror = null; // prevents looping
//                         currentTarget.src = `${noImage}`;
//                     }} />
//                     <div className={style.container}>
//                         <h1 className={style.nombreProducto}>{productDetail.name}</h1>
//                         <div className={style.subContainer}>
//                             {stockDisponible()}
//                         </div>
//                         <div className={style.subContainer}>
//                             {tipoEnvio()}
//                         </div>
//                         <div className={style.subContainer}>
//                             {descuento()}
//                         </div>
//                         <div>
//                         </div>
//                         <p className={style.descripcion}>{productDetail.description}</p>
//                         <button onClick={handleCarrito} className={style.button}>Agregar al carrito</button>
//                     </div>
//                 </div>
//             </div>
//             {
//                 (modal.open)
//                     ? <Alerta setOpenModal={setModal} type={modal.type} />
//                     : <></>
//             }
//         </>
//     )
// }

// export default connect(null, { getOneProduct })(Producto)
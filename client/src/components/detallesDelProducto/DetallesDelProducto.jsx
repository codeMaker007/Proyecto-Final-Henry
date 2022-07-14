import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux'
import style from './assets/DetallesDelProducto.module.css';
import { getOneProduct } from '../../redux/actions/detailProductA';
import noImage from './assets/no-image.jpg';
import { addProductCarrito } from '../../redux/actions/carritoA';
import { getAllReviews } from '../../redux/actions/productReviewA';
import Alerta from '../alertas/Alerta';
import AddReview from '../addReview/AddReview';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {IconButton, Rating} from "@mui/material";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Container, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {styled} from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import CardReview from "../CardReview/CardReview";

function Producto({ getOneProduct }) {
    const dispatch = useDispatch();
    const productsInCarrito = useSelector((state) => state.carrito.productosCarrito);
    const allReviews = useSelector((state) => state.productReviewR.productReviews);
    console.log(allReviews);
    const location = useLocation();
    const idProduct = location.pathname.substring(8, location.pathname.length);
    const productDetail = useSelector((state) => state.detailProduct.product);
    const [cantidad, setCantidad] = useState(1);
    const [modal, setModal] = useState({
        open: false,
        type: '',
        text: ''
    });
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#FFC400'),
        backgroundColor: '#FFC400',
        '&:hover': {
            backgroundColor: '#FFC400',
        },
    }));
    const ColorButtonCont = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#f7f7f7'),
        backgroundColor: '#f7f7f7',
        borderColor: '#a9a9a9',
        height: 35,
        '&:hover': {
            backgroundColor: '#f7f7f7',
        },
    }));
    useEffect(() => {
        dispatch(getAllReviews(idProduct))
        getOneProduct(idProduct)
    }, [])

    let pro = productDetail.averageScore

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        event.preventDefault();
        // toggle shown state
        setIsShown(current => !current);
    };

    function stockDisponible() {
        if (productDetail.stock > 0) return (<p className={style.stockDisponible}>Stock disponible</p>)
        else return (<p className={style.stockNoDisponible}> Stock no disponible </p>)
    }

    function tipoEnvio() {
        if (productDetail.freeShipping) return (<p className={style.envio}>Envio gratis</p>)
        else return (<p className={style.envio}>Calcule su envio <Link to='/'>aquí</Link></p>)
    }

    let precioConDescuento = productDetail.price;
    function descuento() {
        if (productDetail.discount > 0) {
            let oferta = (productDetail.discount / 100) * productDetail.price
            precioConDescuento = (productDetail.price - oferta);
            return (
                <div>
                    <p className={style.antes}>ANTES: ${(productDetail.price).toFixed(2)}</p>
                    <p className={style.despues}>AHORA: ${(productDetail.price - oferta).toFixed(2)} <span className={style.green}>%{productDetail.discount} OFF</span></p>
                </div>
            )
        }
        else return (<p className={style.despues}>${productDetail.price}</p>)
    }

    function handleCarrito() {
        const check = productsInCarrito.some(e => e.id === productDetail.id);
        if (check) return setModal({ ...modal, open: true, type: 'error', text: 'Producto ya en carrito' })
        else if (productDetail.stock < 1) document.getElementById('btnCarrito').disabled = true;
        else {
            dispatch(addProductCarrito({
                id: productDetail.id,
                name: productDetail.name,
                image: productDetail.image,
                price: precioConDescuento,
                stock: productDetail.stock,
                description: productDetail.description,
                category: productDetail.category,
                quantity: cantidad
            }))
            setModal({ ...modal, open: true, type: 'success', text: 'Producto agregado a carrito' })
        }
    }


    function incrementarCantidad() {
        if (productDetail.stock === cantidad) return setCantidad(productDetail.stock)
        else setCantidad(cantidad + 1);
    }

    function decrementarCantidad() {
        if (cantidad === 1) return setCantidad(1)
        else setCantidad(cantidad - 1);
    }

    return (
        <>
            <Container
                sx={{
                    background: 'whitesmoke',
                    borderRadius: '16px',
                    marginTop: '40px',
                }}
            >
                <Stack sx={{
                    textAlign: 'center',
                    padding: '30px'
                }}>
                    <Typography
                        variant="h4" component="h5"
                    >
                        {productDetail.name}
                    </Typography>
                </Stack>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                width: 'fit-content',
                                borderRadius: 10
                            }}
                            marginLeft={15}
                            marginTop={5}
                        >
                            <CardMedia
                                sx={{
                                    borderRadius: '5px',
                                    height: '460px',
                                }}
                                component="img"
                                image={productDetail.image}
                                height="400"
                                width="100"
                                alt="Imagen producto"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box
                            border={0.5}
                            margin={5}
                            borderRadius={2}
                        >
                            <div style={{
                                position: 'relative',
                                top: '25px',
                                display: 'inline-block'
                            }}>
                                <Typography
                                    marginLeft={5}
                                    fontStyle="italic"
                                >
                                    {stockDisponible()}
                                </Typography>
                            </div>
                            <Box sx={{
                                textAlign:'right',
                                marginRight: '10px',
                                marginBottom: '20px'
                            }}>
                                <Typography>Puntuacion Promedio</Typography>
                                <Rating name="read-only" value={pro ? pro: 0} readOnly precision={0.5} />
                            </Box>
                            <Box sx={{
                                textAlign:'right',
                                marginRight: '10px'
                            }}>
                                <p>{`(${productDetail.numReviews} Reseñas)`}</p>
                                <Rating name="read-only" value={5} readOnly />
                            </Box>
                            <div style={{
                                position: 'relative',
                                display: 'inline-block',
                                bottom: '35px',
                                marginLeft: '40px',
                                marginBottom: '20px'
                            }}
                            >
                                <Typography
                                    fontStyle="italic"
                                >
                                    {tipoEnvio()}
                                </Typography>
                            </div>
                            <Box>
                                <Typography
                                    marginLeft={5}
                                    fontStyle="italic"
                                >
                                    {descuento()}
                                </Typography>
                            </Box>
                            <Box margin={3}>
                                <Typography
                                    fontStyle="italic"
                                >
                                    {
                                        (productDetail.stock === 0) ? <></>
                                            :
                                            <div style={{ display: 'flex', flexDirection: 'column', width: '20%', height: 100, justifyContent: 'center', alignItems: 'center', marginLeft: '27px' }}>
                                                <ButtonGroup variant="outlined" >
                                                    <ColorButtonCont onClick={() => decrementarCantidad()} >-</ColorButtonCont>
                                                    <ColorButtonCont disabled >{cantidad}</ColorButtonCont>
                                                    <ColorButtonCont onClick={() => incrementarCantidad()} >+</ColorButtonCont>
                                                </ButtonGroup>
                                            </div>
                                    }
                                </Typography>
                            </Box>
                            <Box m={5}>
                                <Typography
                                    fontStyle="italic"
                                >
                                    <ColorButton onClick={handleCarrito} variant="contained" endIcon={<ShoppingCartIcon />}
                                    >
                                        Agregar al carrito
                                    </ColorButton>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Box width={550} marginBottom={10}>
                            <Typography
                                marginLeft={5}
                                fontSize={30}
                            >
                                DESCRIPCION:
                            </Typography>
                            <Typography
                                marginLeft={5}
                                fontStyle="italic"
                            >
                                {productDetail.description}
                            </Typography>
                        </Box>
                        <Box sx={{ width: 1, borderBottom: 'solid', borderBottomWidth: 1, borderColor: '#e1e1e1', marginLeft: -0.4, marginTop: 0.5 }}>
                            < Grid container marginLeft={5} >

                                <div style={{ display: 'flex', flexDirection: 'column', width: '25%', height: 20, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 4 }}>
                                    <Typography variant="button" display="block" gutterBottom>Usuario</Typography>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', width: '15%', height: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 4 }}>
                                    <Typography variant="button" display="block" gutterBottom>Puntuacion</Typography>
                                </div>
                                <div style={{ marginLeft: '13px', display: 'flex', flexDirection: 'column', width: '20%', height: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 4 }}>
                                    <Typography variant="button" display="block" gutterBottom>Reseña</Typography>
                                </div>

                            </Grid >
                        </Box >
                        <div sx={{ width: 1, borderBottom: 'solid', borderBottomWidth: 1, borderColor: '#e1e1e1', marginLeft: -0.4, marginTop: 0.5 }}>
                                        {allReviews? allReviews.map((r, index) => {
                                            return(
                                                <Box border={0.5} margin={2} width={530} borderRadius={1}>
                                                    <CardReview
                                                        key={index}
                                                        usuario={r.User.username}
                                                        score={r.score}
                                                        review={r.text}
                                                    />
                                                </Box>

                                            )
                                        }): <p>No hay reseñas</p>}

                        </div >
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box
                            margin={5}
                            paddingLeft={5}
                        >
                            <ColorButton onClick={handleClick}>Agregar una reseña</ColorButton>
                            {
                                isShown &&
                                <Box marginLeft={-30}>
                                    <AddReview productId = {productDetail.id}/>
                                </Box>
                            }
                        </Box>

                    </Grid>

                </Grid>
                {
                    (modal.open)
                        ? <Alerta setOpenModal={setModal} type={modal.type} text={modal.text} />
                        : <></>
                }
            </Container>


        </>
    )
}

export default connect(null, { getOneProduct })(Producto)
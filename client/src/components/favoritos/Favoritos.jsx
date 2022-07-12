import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductsCard from '../products/ProductsCard';
// import Paginado from '../products/Paginado';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { resetTotal } from '../../redux/actions/carritoA';
import style from './assets/Favoritos.module.css'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
}));

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#FFC400'),
    borderRadius: 0,
    backgroundColor: '#FFC400',
    '&:hover': {
        backgroundColor: '#ffa800',
    },
}));

const ITEMS_PER_PAGE = 6;

export default function Favoritos() {

    const productosFavoritos = useSelector((state) => state.favoritos.productosFavoritos);
    const dispatch = useDispatch();
    const [checkout, setCheckout] = useState(false)
   

    const products = useSelector((state) => state.products.products);
    const [currentPage, setCurrentPage] = useState(1);

   
    const indexLastCountrie = currentPage * ITEMS_PER_PAGE;
    const indexFirstCountrie = indexLastCountrie - ITEMS_PER_PAGE;

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        return () => {
            dispatch(resetTotal());
        }

    }, [])
    const [responsive, setResponsive] = useState({
        xs: false,
        sm: false,
        md: false
    });
    const handleResponsive = () => {
        if (window.innerWidth < 440) return setResponsive({ xs: true, sm: false, md: false })
        else if (window.innerWidth < 600) return setResponsive({ xs: false, sm: true, md: false })
        else if (window.innerWidth < 900) return setResponsive({ xs: false, sm: false, md: true })
    }

    // if (currentPage < 1) setCurrentPage(1);
    return (
        <Box sx={{ width: 1, marginTop: 3  }}>

            <Grid container direction='column'>
                <Grid  container justifyContent='center' spacing={2} >
                    <Grid item xs={12} md={7} lg={7} xl={6}>

                        {/* <Item sx={{ bgcolor: "blue"}}> */}
                            {
                               
                                (productosFavoritos.length === 0)
                                    ? <Item sx={{ bgcolor: "#fff",  marginTop: 0, display: 'flex', flexDirection: 'column' }}  elevation={1}> <br />
                                        <h1>No has agregado nada a favoritos... </h1>
                                    </Item>
                                    : (

                                        <>
                                        <Grid container justifyContent='center' item xs={12} width='100%' height={50} mt={2} mb={2}>
                                        {
                                            (responsive.md) ? <div style={{ backgroundColor: '#FFC400', width: '100%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                                <h3  height='155%'>MIS FAVORITOS</h3>  
                                              
                                            </div>
                                                : (responsive.xs)
                                                    ? <div style={{ backgroundColor: '#FFC400', width: '90%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                                        <h3 height='95%'>MIS FAVORITOS</h3>   
                                                       
                                                    </div>
                                                    : <div style={{ backgroundColor: '#FFC400', width: '82%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                                         <h3  height='155%'>MIS FAVORITOS</h3>
                                                        
                                                    </div>
                                        }
                                        </Grid>
                                            <div >

                                            <Item className={style.card} >
                                                <Grid container spacing={0.5}>
                                                    {productosFavoritos.map(e => {
                                                        return (<ProductsCard
                                                            id={e.id}
                                                            key={e.id}
                                                            name={e.name}
                                                            price={e.price}
                                                            category={e.categories}
                                                            image={e.image}
                                                            description={e.description}
                                                            stock={e.stock}
                                                            quantity={e.quantity}
                                                            discount={e.discount}
                                                        />)
                                                    })}

                                                </Grid>
                                            </Item>
                                            {/* <Paginado length={products.length / 12} paginado={paginado} /> */}
                                                                   

                                            </div>
                                        </>)
                            }

                            {
                                (productosFavoritos.length === 0)
                                ? <Item sx={{ bgcolor: "#fff",  marginTop: 0, display: 'flex', flexDirection: 'column' }}  elevation={1}> <br />
                                    <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}><ColorButton sx={{ margin: 1, borderRadius: 1, fontSize: 10 }}>Ver productos</ColorButton></Link>
                                </Item> : ""
                                // (productosFavoritos.length === 0)
                                //     ? <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}><ColorButton sx={{ margin: 1, borderRadius: 1, fontSize: 10 }}>Ver productos</ColorButton></Link>
                                //     : ""
                            }

                        {/* </Item> */}
                    </Grid>

                </Grid>
            </Grid >
        </Box >
    )
}



import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Categorias from './Categorias';
import Envio from './Envio';
import Typography from '@mui/material/Typography';
import Ordenar from './Ordenar';
import ProductsCard from './ProductsCard';
import Precio from './Precio';
import Marcas from './Marcas';
import { Button } from '@mui/material';
import { getAllProducts, getByCategory, byEnvios, getbrand, rangoByPrice, order } from '../../redux/actions/productsA';
import Paginado from './Paginado';

const ITEMS_PER_PAGE = 12;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#FFC400'),
    backgroundColor: '#FFC400',
    '&:hover': {
        backgroundColor: '#FFC400',
    },
}));

export default function BasicGrid() {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        categoria: '',
        envio: '',
        marcas: '',
        minimo: 0,
        maximo: 0,
        orden: '',

    });

    useEffect(() => {
        dispatch(getAllProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (state.categoria.length > 2) dispatch(getByCategory(state.categoria));
        if (state.envio?.length > 2) dispatch(byEnvios(state.envio));
        if (state.marcas?.length > 2) dispatch(getbrand(state.marcas));
        if (state.minimo > 0) dispatch(rangoByPrice(state.minimo, state.maximo));
        if (state.orden?.length > 2) {
            setTimeout(() => {
                dispatch(order(state.orden));
            }, 500);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    const products = useSelector((state) => state.products.products);
    const cantProducts = useSelector((state) => state.products.totalProducts);
    const [currentPage, setCurrentPage] = useState(1);

    const indexLastCountrie = currentPage * ITEMS_PER_PAGE;
    const indexFirstCountrie = indexLastCountrie - ITEMS_PER_PAGE;
    const currentProducts = products.slice(indexFirstCountrie, indexLastCountrie);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);

    function cleanFilters() {
        setState({ categoria: 'null', envio: '', marcas: '', minimo: 0, maximo: 0, orden: '' })
        dispatch(getAllProducts());
    }

    if (currentPage < 1) setCurrentPage(1);
    return (
        <Box sx={{ width: 1, marginTop: 3 }}>
            <Grid container direction='column'>
                <Grid container justifyContent='center' spacing={2} >
                    <Grid item md={3} lg={2.3} xl={2}>
                        <Categorias setState={setState} state={state} total={cantProducts} />
                        <Item sx={{ marginTop: 3, display: 'flex', flexDirection: 'column' }} elevation={1}>
                            <Typography variant='overline'>Envío</Typography>
                            <div>
                                <Envio setState={setState} state={state} />
                            </div>
                        </Item>
                        <Item sx={{ marginTop: 3, display: 'flex', flexDirection: 'column' }} elevation={1}>
                            <Typography variant='overline'>Marcas</Typography>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Marcas products={products} setState={setState} state={state} />
                            </div>
                        </Item>
                        <Item sx={{ marginTop: 3, display: 'flex', flexDirection: 'column' }} elevation={1}>
                            <Typography variant='overline'>Precio</Typography>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Precio setState={setState} state={state} />
                            </div>
                        </Item>
                        <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column' }} elevation={1}>
                            <ColorButton onClick={() => cleanFilters()} variant='contained' disableElevation size='medium'>
                                Resetear filtros
                            </ColorButton>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={10.5} md={6} lg={7} xl={7}>
                        <Grid item>
                            <Img alt="complex" src="https://cdn.shopify.com/s/files/1/0606/6867/4281/collections/cate_1_1080x.jpg?v=1637826003" />
                        </Grid>

                        <Item sx={{ marginTop: 2, textAlign: 'right', borderBottom: '1px solid', borderColor: '#022335' }} elevation={1} >
                            <Ordenar setState={setState} state={state} />
                        </Item>
                        <Item >
                            <Grid container spacing={0.5}>
                                {currentProducts.map(e => {
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
                    </Grid>
                    <Paginado length={products.length / 12} paginado={paginado} />
                </Grid>
            </Grid>
        </Box >
    );
}

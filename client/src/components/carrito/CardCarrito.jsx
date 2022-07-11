import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import CloseIcon from '@mui/icons-material/Close';
import { incrementTotal, decrementTotal, deleteProductCarrito, incrementeQuantity, decrementeQuantity } from '../../redux/actions/carritoA';


const Img = styled('img')({
    width: '80%',
    height: '80%',
    borderRadius: 3
});


// const Div = styled('div')(({ theme }) => ({
//     [theme.breakpoints.down('md')]: {
//         display: 'none'
//     }
// }));

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#f7f7f7'),
    backgroundColor: '#f7f7f7',
    borderColor: '#a9a9a9',
    height: 35,
    '&:hover': {
        backgroundColor: '#f7f7f7',
    },
}));

export default function CardCarrito({ id, name, image, price, stock, quantity, freeShipping, categories, description, discount }) {
    const dispatch = useDispatch();
    const [cantComprar, setCantComprar] = useState(quantity);

    useEffect(() => {
        dispatch(incrementTotal(price * cantComprar));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const incrementar = () => {
        if (cantComprar === stock) setCantComprar(stock)
        else {
            setCantComprar(cantComprar + 1)
            dispatch(incrementTotal(price));
            dispatch(incrementeQuantity(id));
        }
    }

    const decrementar = () => {
        if (cantComprar === 1) setCantComprar(1)
        else {
            setCantComprar(cantComprar - 1)
            dispatch(decrementTotal(price));
            dispatch(decrementeQuantity(id));
        }
    }

    function handleDelete(e) {
        dispatch(decrementTotal(price * cantComprar));
        dispatch(deleteProductCarrito(e));
    }

    return (
        <Box sx={{ width: 1, borderBottom: 'solid', borderBottomWidth: 1, borderColor: '#e1e1e1', marginLeft: -0.4, marginTop: 0.5 }}>
            < Grid container justifyContent='center' >
                {/* < Grid item xs={12} md={12} lg={12} xl={12} sx={{
                    display: 'flex', flexDirection: 'row', flexWrap: 'wrap', overflow: 'hidden'
                }}> */}
                {
                    (window.innerWidth < 480)
                        ? <>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '1%', height: 100, justifyContent: 'center', alignItems: 'center', hover: '#FFC400', marginLeft: -10 }}>
                                <CloseIcon onClick={() => handleDelete(id)} sx={{ cursor: 'pointer' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '25%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <Img alt="complex" src={image} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '35%', height: 100, flexWrap: 'wrap', textAlign: 'left', justifyContent: 'center' }}>
                                <p>{name}</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '20%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <p>${price.toFixed(2)}</p>
                            </div>
                        </>
                        : <>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '10%', height: 100, justifyContent: 'center', alignItems: 'center', hover: '#FFC400' }}>
                                <CloseIcon onClick={() => handleDelete(id)} sx={{ cursor: 'pointer' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '15%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <Img alt="complex" src={image} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '25%', height: 100, flexWrap: 'wrap', textAlign: 'left', justifyContent: 'center' }}>
                                <p>{name}</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '15%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <p>${price.toFixed(2)}</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '20%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <ButtonGroup variant="outlined">
                                    <ColorButton onClick={decrementar} >-</ColorButton>
                                    <ColorButton disabled >{cantComprar}</ColorButton>
                                    <ColorButton onClick={incrementar} >+</ColorButton>
                                </ButtonGroup>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '15%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <p>${(cantComprar * price).toFixed(2)}</p>
                            </div>
                        </>
                }
            </Grid >
            {/* </Grid > */}
        </Box >
    );
}
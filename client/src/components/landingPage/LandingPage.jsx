import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Carousel from './Carousel';
import Content from './Content';
import { getDiscountedProducts, getBestSellers, getNewProducts } from '../../redux/actions/landingPageA';
import Typography from '@mui/material/Typography';
import CardsBestSellers from './CardsBestSellers';
import ContentBestSellers from './ContentBestSellers';
import intel from './assets/intel.svg';
import amd from './assets/amd.svg';
import asus from './assets/asus.svg';
import CardGamer from './CardGamer';
import CardOfice from './CardOfice';
import CardDesign from './CardDesign';
import ContentEnd from './ContentEnd';
import { useAuth0 } from '@auth0/auth0-react';
import { DashboardUsersA } from '../../redux/actions/DashboardUsersA';
import axios from 'axios';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#dee2e6 ',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));


const images = ['./assets/imagen1.jpg', './assets/imagen3.jpg', './assets/imagen4.jpg'];

export default function BasicGrid() {
    const dispatch = useDispatch();
    const [responsive, setResponsive] = useState({
        xs: false,
        sm: false,
        md: false
    });

    console.log(window.innerWidth)
    const handleResponsive = () => {
        if (window.innerWidth < 440) return setResponsive({ xs: true, sm: false, md: false })
        else if (window.innerWidth < 600) return setResponsive({ xs: false, sm: true, md: false })
        else if (window.innerWidth < 900) return setResponsive({ xs: false, sm: false, md: true })
    }

    useEffect(() => {
        dispatch(DashboardUsersA())
        dispatch(getDiscountedProducts());
        dispatch(getBestSellers());
        dispatch(getNewProducts());
        window.addEventListener('resize', handleResponsive())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const discountProducts = useSelector((state) => state.landingPage.discounts);
    const bestSellers = useSelector((state) => state.landingPage.bestSellers);
    const newProducts = useSelector((state) => state.landingPage.newestProducts);
    const users = useSelector((state) => state.DashboardUsersR.allUsers)
    // console.log(newProducts[0])
    // console.log(discountProducts)
    // console.log(bestSellers)
    const { user, isAuthenticated } = useAuth0()

    if (isAuthenticated) {
        let findedUser = users.find(x => x.email === user.email)
        // console.log(findedUser);
        if (!findedUser) {
            let obj = {
                name: user.name,
                username: user.nickname,
                email: user.email
            }
            axios.post('/user', obj)
            /* navigate('/profile') */
        }
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent='center' spacing={2}>
                <Grid item xs={12} sm={11} md={8}>
                    <Carousel images={images} />
                </Grid>
                <Grid container justifyContent='center' spacing={2}>
                    <Grid item xs={9.5} sm={9.7} lg={9} xl={8.5}>
                        <div style={{
                            marginTop: 12,
                            right: 400,
                            textDecoration: 'underline'
                        }}>
                            <Typography variant="h5" gutterBottom component="div">
                                Ofertas
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid item container justifyContent='center' spacing={2} >
                    <Grid item xs={9.5} sm={9.7} lg={9} xl={8.5}>
                        <Content products={discountProducts} />
                    </Grid>
                </Grid>
                <Grid item xs={11} sm={5.5}>
                    <img src='https://www.amd.com/system/files/2020-12/691740-amd-ryzen-radeon-esports-banner-1920x450.jpg' alt='imagen' width='100%' style={{ borderRadius: 7 }} />
                </Grid>
                <Grid item xs={11} sm={5.5}>
                    <img src='https://www.nvidia.com/content/dam/en-zz/Solutions/events/ces-2022/strip-banner/geforce-ampere-rtx-laptops-learn-gf-strip-1024-t@2x-es-mx.jpg' alt='imagen' width='100%' style={{ borderRadius: 7 }} />
                </Grid>
                <Grid container justifyContent='center' spacing={2}>
                    <Grid item xs={10.5} sm={9.7} lg={9} xl={8.5}>
                        <div style={{
                            marginTop: 12,
                            textDecoration: 'underline',
                            // marginBottom: -10
                        }}>
                            <Typography variant="h5" gutterBottom component="div">
                                Mas vendido
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={10} sm={9.5} lg={9} xl={8.5}>
                        {
                            (responsive.md || responsive.xs)
                                ? <ContentBestSellers products={bestSellers} />
                                : <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(12, 1fr)',
                                        gap: 2,
                                        gridRow: '1 / 3'
                                    }}
                                >
                                    <Grid item elevation={0} sx={{ gridRow: '1 / 3', gridColumn: '1 / 6', height: 473 }}><CardsBestSellers booleano={true} key={61} bestSellers={bestSellers[0]} /></Grid>
                                    <Grid item elevation={0} sx={{ gridRow: '1', gridColumn: '6 / 10 ', height: 225 }}><CardsBestSellers booleano={false} key={52} bestSellers={bestSellers[1]} /></Grid>
                                    <Grid item elevation={0} sx={{ gridRow: '1', gridColumn: '10 / 16', height: 225 }}><CardsBestSellers booleano={false} key={763} bestSellers={bestSellers[2]} /></Grid>
                                    <Grid item elevation={0} sx={{ gridRow: '2', gridColumn: '6 / 10', height: 225 }}><CardsBestSellers booleano={false} key={457} bestSellers={bestSellers[3]} /></Grid>
                                    <Grid item elevation={0} sx={{ gridRow: '2', gridColumn: '10 / 16', height: 225 }}><CardsBestSellers booleano={false} key={565} bestSellers={bestSellers[4]} /></Grid>
                                </Box>
                        }
                    </Grid>
                </Grid>
                <Grid item container justifyContent='center' spacing={2}>
                    <Grid container justifyContent='center' item xs={11} width='100%' height={110} mt={5}>
                        {
                            (responsive.md) ? <div style={{ backgroundColor: '#134074', width: '100%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <img src={asus} alt='asus' height='155%' />
                                <img src={intel} alt='intel' height='135%' />
                                {/* <img src={amd} alt='amd' height='160%' /> */}
                            </div>
                                : (responsive.xs)
                                    ? <div style={{ backgroundColor: '#134074', width: '90%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <img src={asus} alt='asus' height='95%' />
                                        {/* <img src={intel} alt='intel' height='75%' /> */}
                                        <img src={amd} alt='amd' height='100%' />
                                    </div>
                                    : <div style={{ backgroundColor: '#134074', width: '82%', display: 'flex', borderRadius: 5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <img src={asus} alt='asus' height='155%' />
                                        <img src={intel} alt='intel' height='135%' />
                                        <img src={amd} alt='amd' height='160%' />
                                    </div>
                        }
                    </Grid>
                </Grid>
                <Grid item container justifyContent='center' spacing={2}>
                    <Grid item xs={11} sm={3.7} md={2.5}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            margin: 2,
                            borderRadius: 4,
                            height: '100%'
                        }}>
                            <CardGamer />
                        </div>
                    </Grid>
                    <Grid item xs={11} sm={3.7} md={2.5}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            margin: 2,
                            borderRadius: 4,
                            height: '100%'
                        }}>
                            <CardOfice />
                        </div>
                    </Grid>
                    <Grid item xs={11} sm={3.7} md={2.5}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            margin: 2,
                            borderRadius: 4,
                            height: '100%'
                        }}>
                            <CardDesign />
                        </div>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' spacing={2}>
                    <Grid item xs={8} sm={11} lg={9} xl={9}>
                        <div style={{
                            borderRadius: 4,
                            padding: 3,
                            paddingLeft: 15,
                            marginTop: 25,
                            right: 400,
                            backgroundColor: '#022335',
                            color: 'white'
                        }}>
                            <Typography variant="h6" component="div">
                                Quizás podría interesarte
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={10.5}>
                        <Box sx={{ width: '100%', height: 300, marginTop: -2, display: 'flex', justifyContent: 'center', padding: 2 }}>
                            {
                                (responsive.xs)
                                    ? <ContentEnd products={newProducts.slice(0, 4)} />
                                    : (window.innerWidth < 800)
                                        ? <ContentEnd products={newProducts.slice(0, 4)} />
                                        : <ContentEnd products={newProducts.slice(0, 6)} />
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
}
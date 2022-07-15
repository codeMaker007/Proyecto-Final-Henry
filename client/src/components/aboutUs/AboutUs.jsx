import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
// import { style } from '@mui/system';
import style from './assets/AboutUs.module.css';
import facebookIcon from './assets/facebookIcon.png';
import twitterIcon from './assets/twitterIcon.png';
import instagramIcon from './assets/instagramIcon.png';
import githubIcon from './assets/githubIcon.png';
import linkedinIcon from './assets/linkedinIcon.png';
import lauta from './assets/lauta.jpg';
import emi from './assets/emi.jpg';
import lauty from './assets/lauty.jpg';
import andy from './assets/andy.jpg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
}));

export default function AboutUs() {
    return (
        <Box sx={{ width: 1, marginTop: 3 }}>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item xs={11} md={11} lg={11} xl={9}>
                    <Item >
                        <Typography variant='h6' sx={{ mb: 5 }}>Conocé a nuestro <span style={{ color: '#FFC400' }}>equipo</span></Typography>
                        <Grid container item xs={12} >
                            <Grid xs={6} md={4} lg={3} >
                                <div style={{ display: 'flex', flexDirection: 'column', height: 450, alignItems: 'center' }}>
                                    <img src='https://ca.slack-edge.com/TPRS7H4PN-U02PW32FN7R-0a5ddf42a88a-512' alt='aboutus' className={style.imagenPerfil} />
                                    <Typography variant='h6' sx={{ mb: 0, mt: 1 }}> <span style={{ color: 'black' }}>Iván Romano</span></Typography>
                                    <Typography variant='subtitle2' sx={{ mb: 3 }}> Frontend dev</Typography>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', height: 40, justifyContent: 'center' }}>
                                        <img src={facebookIcon} alt='facebook' className={style.iconSocialMedia} />
                                        <img src={githubIcon} alt='githubIcon' className={style.iconSocialMedia} />
                                        <img src={instagramIcon} alt='instagramIcon' className={style.iconSocialMedia} />
                                        <img src={linkedinIcon} alt='linkedinIcon' className={style.iconSocialMedia} />
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={6} md={4} lg={3} >
                                <div style={{ display: 'flex', flexDirection: 'column', height: 450, alignItems: 'center' }}>
                                    <img src={lauta} alt='aboutus' className={style.imagenPerfil} />
                                    <Typography variant='h6' sx={{ mb: 0, mt: 1 }}> <span style={{ color: 'black' }}>Lautaro Darretche</span></Typography>
                                    <Typography variant='subtitle2' sx={{ mb: 3 }}> Frontend dev</Typography>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', height: 40, justifyContent: 'center' }}>
                                        <a href='https://www.facebook.com/LautaroDarretche/'><img src={facebookIcon} alt='facebook' className={style.iconSocialMedia} /></a>
                                        <a href='https://github.com/LautaroD'><img src={githubIcon} alt='github' className={style.iconSocialMedia} /></a>
                                        <a href='https://www.instagram.com/lautarodarretche/'><img src={instagramIcon} alt='instagram' className={style.iconSocialMedia} /></a>
                                        <a href='https://www.linkedin.com/in/lautaro-darretche-431233224/'><img src={linkedinIcon} alt='linkedin' className={style.iconSocialMedia} /></a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={6} md={4} lg={3} >
                                <div style={{ display: 'flex', flexDirection: 'column', height: 450, alignItems: 'center' }}>
                                    <img src={emi} alt='aboutus' className={style.imagenPerfil} />
                                    <Typography variant='h6' sx={{ mb: 0, mt: 1 }}> <span style={{ color: 'black' }}>Emiliano Rotta</span></Typography>
                                    <Typography variant='subtitle2' sx={{ mb: 3 }}> Frontend dev</Typography>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', height: 40, justifyContent: 'center' }}>
                                        <img src={facebookIcon} alt='facebook' className={style.iconSocialMedia} />
                                        <a href='https://github.com/Emiliano-Rotta'><img src={githubIcon} alt='githubIcon' className={style.iconSocialMedia} /></a>
                                        <img src={instagramIcon} alt='instagramIcon' className={style.iconSocialMedia} />
                                        <a href='https://www.linkedin.com/in/emiliano-rotta-fernandez/'><img src={linkedinIcon} alt='linkedinIcon' className={style.iconSocialMedia} /></a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={6} md={4} lg={3} >
                                <div style={{ display: 'flex', flexDirection: 'column', height: 450, alignItems: 'center' }}>
                                    <img src='https://ca.slack-edge.com/TPRS7H4PN-U02T3H5SHT4-77372c341950-512' alt='aboutus' className={style.imagenPerfil} />
                                    <Typography variant='h6' sx={{ mb: 0, mt: 1 }}> <span style={{ color: 'black' }}>Andres Vega</span></Typography>
                                    <Typography variant='subtitle2' sx={{ mb: 3 }}> Frontend dev</Typography>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', height: 40, justifyContent: 'center' }}>
                                        <img src={facebookIcon} alt='facebook' className={style.iconSocialMedia} />
                                        <img src={githubIcon} alt='githubIcon' className={style.iconSocialMedia} />
                                        <img src={instagramIcon} alt='instagramIcon' className={style.iconSocialMedia} />
                                        <img src={linkedinIcon} alt='linkedinIcon' className={style.iconSocialMedia} />
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={6} md={4} lg={3} >
                                <div style={{ display: 'flex', flexDirection: 'column', height: 450, alignItems: 'center' }}>
                                    <img src={lauty} alt='aboutus' className={style.imagenPerfil} />
                                    <Typography variant='h6' sx={{ mb: 0, mt: 1 }}> <span style={{ color: 'black' }}>Lautaro Salazar</span></Typography>
                                    <Typography variant='subtitle2' sx={{ mb: 3 }}> Backend dev</Typography>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', height: 40, justifyContent: 'center' }}>
                                        <img src={facebookIcon} alt='facebook' className={style.iconSocialMedia} />
                                        <a href="https://github.com/LautaroZalazar"><img src={githubIcon} alt='githubIcon' className={style.iconSocialMedia} /></a>
                                        <img src={instagramIcon} alt='instagramIcon' className={style.iconSocialMedia} />
                                        <a href=' https://www.linkedin.com/in/lautaro-zalazar-3a0a6820b/'><img src={linkedinIcon} alt='linkedinIcon' className={style.iconSocialMedia} /></a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={6} md={4} lg={3} >
                                <div style={{ display: 'flex', flexDirection: 'column', height: 450, alignItems: 'center' }}>
                                    <img src={andy} alt='aboutus' className={style.imagenPerfil} />
                                    <Typography variant='h6' sx={{ mb: 0, mt: 1 }}> <span style={{ color: 'black' }}>Andrés Castillo</span></Typography>
                                    <Typography variant='subtitle2' sx={{ mb: 3 }}> Backend dev</Typography>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', height: 40, justifyContent: 'center' }}>
                                        <a href='https://www.facebook.com/andres.castillo.397'><img src={facebookIcon} alt='facebook' className={style.iconSocialMedia} /></a>
                                        <a href='https://github.com/pettrovich'><img src={githubIcon} alt='githubIcon' className={style.iconSocialMedia} /></a>
                                        <a href='https://www.instagram.com/andrescastillo6279/'><img src={instagramIcon} alt='instagramIcon' className={style.iconSocialMedia} /></a>
                                        <a href='www.linkedin.com/in/andres-castillo-co-nl'><img src={linkedinIcon} alt='linkedinIcon' className={style.iconSocialMedia} /></a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={6} md={4} lg={3} >
                                <div style={{ display: 'flex', flexDirection: 'column', height: 450, alignItems: 'center' }}>
                                    <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFE54zwfMYiEQ/profile-displayphoto-shrink_800_800/0/1651016567269?e=1663200000&v=beta&t=cI8ZGLXoHsThWJTcBmS8_uygmFCAfvH9BjCk6-iLjx0' alt='aboutus' className={style.imagenPerfil} />
                                    <Typography variant='h6' sx={{ mb: 0, mt: 1 }}> <span style={{ color: 'black' }}>Matias Salazar</span></Typography>
                                    <Typography variant='subtitle2' sx={{ mb: 3 }}> Backend dev</Typography>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', height: 40, justifyContent: 'center' }}>
                                        <img src={facebookIcon} alt='facebook' className={style.iconSocialMedia} />
                                        <a href='https://github.com/MatyZala'><img src={githubIcon} alt='githubIcon' className={style.iconSocialMedia} /></a>
                                        <img src={instagramIcon} alt='instagramIcon' className={style.iconSocialMedia} />
                                        <a href='https://www.linkedin.com/in/matias-zalazar-b84726213/'><img src={linkedinIcon} alt='linkedinIcon' className={style.iconSocialMedia} /></a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={6} md={4} lg={3} >
                                <div style={{ display: 'flex', flexDirection: 'column', height: 450, alignItems: 'center' }}>
                                    <img src='https://media-exp1.licdn.com/dms/image/C5103AQFH-S5S7aV9rw/profile-displayphoto-shrink_800_800/0/1517002450545?e=1663200000&v=beta&t=lITqgIWVT-aUQ8ioFaPLFyH-ws2CBO4qVrEB3MMbuHE' alt='aboutus' className={style.imagenPerfil} />
                                    <Typography variant='h6' sx={{ mb: 0, mt: 1 }}> <span style={{ color: 'black' }}>Martín Di Paola</span></Typography>
                                    <Typography variant='subtitle2' sx={{ mb: 3 }}> Backend dev</Typography>
                                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', height: 40, justifyContent: 'center' }}>
                                        <a href='https://www.facebook.com/tiinchoo.carp.7'><img src={facebookIcon} alt='facebook' className={style.iconSocialMedia} /></a>
                                        <a href='https://github.com/Martin1553'><img src={githubIcon} alt='githubIcon' className={style.iconSocialMedia} /></a>
                                        <img src={instagramIcon} alt='instagramIcon' className={style.iconSocialMedia} />
                                        <a href='https://www.linkedin.com/in/mart%C3%ADn-di-paola-a959b8145/'><img src={linkedinIcon} alt='linkedinIcon' className={style.iconSocialMedia} /></a>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Item>

                    <br />

                </Grid>
            </Grid>
        </Box >
    )
}